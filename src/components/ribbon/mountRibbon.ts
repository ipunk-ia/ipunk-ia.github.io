import * as THREE from "three";
import {
  CARD_VERTEX_SHADER,
  CARD_FRAGMENT_SHADER,
  GROUND_VERTEX_SHADER,
  GROUND_FRAGMENT_SHADER,
} from "@/components/ribbon/shaders";
import { createCardTexture, type CardTexture } from "@/components/ribbon/cardTexture";
import { layoutCards, MOBILE_BREAKPOINT, type TrackLayout } from "@/components/ribbon/layout";

/*
 * Vault set 2: Element - WebGL Curved Ribbon Carousel, ported from the fixed source in
 * ~/Downloads/jesper-landberg. Lives in its own module so three.js (~200 kB gzipped) is only
 * downloaded when the work section comes near, not with the first paint.
 */

export type RibbonItem = { slug: string; src: string; width: number; height: number; title: string };

export type RibbonHooks = {
  /** Mouse position over the stage, in stage pixels (null when it leaves). */
  onPointer: (point: { x: number; y: number } | null) => void;
  /** The card under the mouse changed (null between cards and outside). */
  onHover: (item: RibbonItem | null) => void;
  /** The card nearest the centre changed. */
  onNow: (index: number) => void;
};

interface CardMesh {
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  slug: string;
  tex: CardTexture;
  hover: number;
}

// Per-frame easing bases at 60fps, applied as 1 - base^(dt*60) so feel is identical at any refresh rate.
const SCROLL_EASE = 0.89;
const VELOCITY_EASE = 0.85;
const HOVER_EASE = 0.8;
const VELOCITY_RANGE_PX = 450;
const MAX_DT = 0.06;
const SETTLED = 0.05;
const DPR_CAP_FINE = 2;
/* Phones render at 2x (was 1.5x, which halved the ribbon on 3x screens); render-on-demand keeps it idle. */
const DPR_CAP_COARSE = 2;
/** Depth shading strength (source used 1.0): low enough that side cards keep their colour. */
const CARD_SHADE = 0.45;

const ease = (base: number, dtRatio: number) => 1 - Math.pow(base, dtRatio);

function cardMaterial(texture: THREE.Texture, item: RibbonItem) {
  return new THREE.ShaderMaterial({
    vertexShader: CARD_VERTEX_SHADER,
    fragmentShader: CARD_FRAGMENT_SHADER,
    uniforms: {
      u_texture: { value: texture },
      u_size: { value: new THREE.Vector2(item.width, item.height) },
      u_res: { value: new THREE.Vector2(1, 1) },
      u_alpha: { value: 1.0 },
      u_shade: { value: CARD_SHADE },
      u_shadeS: { value: 1.0 },
      u_corner: { value: 0.012 },
      u_scrim: { value: 0 },
      u_sheetW: { value: 0 },
      u_sheetD: { value: 0 },
      u_sheetT: { value: 1 },
      u_sheetC: { value: 1 },
      u_sheetP: { value: 1 },
      u_sheetV: { value: 0 },
      u_hover: { value: 0 },
      u_dent: { value: 0.1 },
      u_leanA: { value: 0 },
      u_leanW: { value: 0 },
    },
    transparent: true,
    depthTest: false,
    depthWrite: false,
  });
}

/** Builds the ribbon inside `stage`; returns a pick function for clicks and a teardown. */
export function mountRibbon(stage: HTMLElement, section: HTMLElement, items: RibbonItem[], hooks: RibbonHooks) {
  let width = stage.clientWidth;
  let height = stage.clientHeight;
  const coarse = window.matchMedia("(pointer: coarse)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(53.4, width / height, 0.1, 2000);
  camera.position.z = 41.18;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  let layout: TrackLayout = { cards: [], minScroll: 0 };

  const applySize = () => {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, coarse.matches ? DPR_CAP_COARSE : DPR_CAP_FINE));
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    layout = layoutCards(items, width, height);
  };
  applySize();
  renderer.domElement.setAttribute("aria-hidden", "true");
  // Position only: setSize() owns width/height, overwriting cssText would drop them (DPR-sized canvas).
  Object.assign(renderer.domElement.style, { position: "absolute", top: "0", left: "0", display: "block" });
  stage.prepend(renderer.domElement);

  const frustum = () => {
    const h = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    return { w: h * camera.aspect, h };
  };

  const getSheet = (vel: number) => {
    const { w, h } = frustum();
    const W = w / 2;
    const isMobile = width < MOBILE_BREAKPOINT;
    const r = Math.min(1, Math.abs(vel));
    return {
      W,
      H: h / 2,
      D: W * (isMobile ? 0.18 : 0.2) * (1 + 1.1 * r),
      T: isMobile ? 1.0 : 1.15,
      C: isMobile ? 0.0 : 1.0,
      S: isMobile ? 0.6 : 1.0,
      A: W * (isMobile ? 0 : -0.12),
    };
  };

  // ── Render on demand: the loop only runs while something is moving ──
  let animId = 0;
  let running = false;
  let lastTime = 0;
  const wake = () => {
    if (running) return;
    running = true;
    lastTime = performance.now();
    animId = requestAnimationFrame(frame);
  };

  // ── Ground ──
  const groundGeo = new THREE.PlaneGeometry(1, 1, 48, 24);
  groundGeo.rotateX(-Math.PI / 2);
  const groundUniforms = {
    u_c0: { value: new THREE.Color(0x000000) },
    u_c1: { value: new THREE.Color(0x0a0a0c) },
    u_alpha: { value: 0.88 },
    u_grid: { value: 0.12 },
    u_gridF: { value: new THREE.Vector2(1, 1) },
    u_run: { value: 1.0 },
    u_leanK: { value: 1.0 },
    u_leanA: { value: 0.0 },
    u_leanW: { value: 1.0 },
  };
  const groundMat = new THREE.ShaderMaterial({
    vertexShader: GROUND_VERTEX_SHADER,
    fragmentShader: GROUND_FRAGMENT_SHADER,
    uniforms: groundUniforms,
    transparent: true,
    depthTest: false,
    depthWrite: false,
  });
  const groundMesh = new THREE.Mesh(groundGeo, groundMat);
  scene.add(groundMesh);

  // ── Cards ──
  const cardGeometry = new THREE.PlaneGeometry(1, 1, 48, 24);
  const anisotropy = renderer.capabilities.getMaxAnisotropy();
  const cards: CardMesh[] = items.map((item) => {
    const tex = createCardTexture(item.src, item.width, item.height, anisotropy, wake);
    const mesh = new THREE.Mesh(cardGeometry, cardMaterial(tex.texture, item));
    scene.add(mesh);
    return { mesh, slug: item.slug, tex, hover: 0 };
  });

  // ── Picking (stage-relative pixels) ──
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const pickAt = (x: number, y: number): string | null => {
    ndc.set((x / width) * 2 - 1, -(y / height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObjects(cards.map((c) => c.mesh))[0];
    return hit ? (cards.find((c) => c.mesh === hit.object)?.slug ?? null) : null;
  };

  // ── Scroll progress drives the track ──
  let scroll = 0;
  let target = 0;
  const readScroll = () => {
    const rect = section.getBoundingClientRect();
    const span = rect.height - window.innerHeight;
    const progress = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
    target = layout.minScroll * progress;
    wake();
  };
  window.addEventListener("scroll", readScroll, { passive: true });

  // Hover is mouse-only; touch has no hover and must not leave cards dented.
  let mouse: { x: number; y: number } | null = null;
  let hoverDirty = false;
  let hoveredSlug: string | null = null;
  let nowIndex = -1;
  const onPointerMove = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const rect = stage.getBoundingClientRect();
    mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    hooks.onPointer(mouse);
    hoverDirty = true;
    wake();
  };
  const onPointerLeave = () => {
    mouse = null;
    hooks.onPointer(null);
    hoverDirty = true;
    wake();
  };
  stage.addEventListener("pointermove", onPointerMove, { passive: true });
  stage.addEventListener("pointerleave", onPointerLeave);

  let smoothedVelocity = 0;

  function placeGround(sheet: ReturnType<typeof getSheet>, fr: { w: number; h: number }) {
    // Ground follows the first card.
    const first = layout.cards[0];
    const firstH = fr.h * (first.height / height);
    const firstY = fr.h / 2 - firstH / 2 - ((height - first.height) / 2 / height) * fr.h;
    const groundY = firstY - firstH / 2 - sheet.H * 0.06;
    const groundRun = sheet.H * 6.0;
    const camZ = camera.position.z;
    const lip = Math.min(camZ * (1 - Math.abs(groundY) / sheet.H) + sheet.H * 0.2, camZ * 0.8);
    const groundWidth = sheet.W * 8.0;
    groundMesh.scale.set(groundWidth, 1, lip + groundRun);
    groundMesh.position.set(0, groundY, (lip - groundRun) / 2);
    const cell = sheet.H * 0.22;
    groundUniforms.u_gridF.value.set(groundWidth / cell, groundRun / cell);
    groundUniforms.u_run.value = groundRun;
    groundUniforms.u_leanA.value = sheet.A;
    groundUniforms.u_leanW.value = sheet.W;
  }

  function frame(now: number) {
    const dtRatio = Math.min((now - lastTime) / 1000, MAX_DT) * 60;
    lastTime = now;
    const reduce = reducedMotion.matches;

    const diff = target - scroll;
    scroll += diff * ease(SCROLL_EASE, dtRatio);

    const targetVelocity = reduce ? 0 : Math.tanh(diff / VELOCITY_RANGE_PX);
    smoothedVelocity += (targetVelocity - smoothedVelocity) * ease(VELOCITY_EASE, dtRatio);
    const sheet = getSheet(smoothedVelocity);

    if (hoverDirty || Math.abs(diff) > SETTLED) {
      const next = mouse ? pickAt(mouse.x, mouse.y) : null;
      hoverDirty = false;
      if (next !== hoveredSlug) {
        hoveredSlug = next;
        stage.style.cursor = hoveredSlug ? "pointer" : "";
        hooks.onHover(items.find((it) => it.slug === hoveredSlug) ?? null);
      }
    }

    const fr = frustum();
    placeGround(sheet, fr);

    let hoverMoving = false;
    let nearest = 0;
    let nearestDist = Infinity;
    cards.forEach((card, idx) => {
      const cardLayout = layout.cards[idx];
      const screenX = cardLayout.left + scroll;
      const screenY = (height - cardLayout.height) / 2;
      const dist = Math.abs(screenX + cardLayout.width / 2 - width / 2);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = idx;
      }
      const worldW = fr.w * (cardLayout.width / width);
      const worldH = fr.h * (cardLayout.height / height);
      card.mesh.position.set(-fr.w / 2 + worldW / 2 + (screenX / width) * fr.w, fr.h / 2 - worldH / 2 - (screenY / height) * fr.h, 0);
      card.mesh.scale.set(worldW, worldH, 1);

      const hoverTarget = hoveredSlug === card.slug && !reduce ? 1 : 0;
      card.hover += (hoverTarget - card.hover) * ease(HOVER_EASE, dtRatio);
      if (Math.abs(hoverTarget - card.hover) > 0.001) hoverMoving = true;
      else card.hover = hoverTarget;

      const u = card.mesh.material.uniforms;
      u.u_res.value.set(worldW, worldH);
      u.u_sheetW.value = sheet.W;
      u.u_sheetD.value = sheet.D;
      u.u_sheetT.value = sheet.T;
      u.u_sheetC.value = sheet.C;
      u.u_sheetV.value = Math.abs(smoothedVelocity);
      u.u_shadeS.value = sheet.S;
      u.u_leanA.value = sheet.A;
      u.u_leanW.value = sheet.W;
      u.u_hover.value = card.hover;
    });

    if (nearest !== nowIndex) {
      nowIndex = nearest;
      hooks.onNow(nearest);
    }

    renderer.render(scene, camera);

    const stillMoving = hoverMoving || hoverDirty || Math.abs(diff) > SETTLED || Math.abs(smoothedVelocity) > 1e-4;
    if (stillMoving) {
      animId = requestAnimationFrame(frame);
    } else {
      running = false;
    }
  }

  const handleResize = () => {
    width = stage.clientWidth;
    height = stage.clientHeight;
    applySize();
    readScroll();
  };
  window.addEventListener("resize", handleResize);
  reducedMotion.addEventListener("change", wake);

  readScroll();
  scroll = target;

  const teardown = () => {
    cancelAnimationFrame(animId);
    running = false;
    window.removeEventListener("scroll", readScroll);
    window.removeEventListener("resize", handleResize);
    stage.removeEventListener("pointermove", onPointerMove);
    stage.removeEventListener("pointerleave", onPointerLeave);
    reducedMotion.removeEventListener("change", wake);
    cards.forEach((c) => {
      c.mesh.material.dispose();
      c.tex.texture.dispose();
    });
    cardGeometry.dispose();
    groundGeo.dispose();
    groundMat.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };

  return { pickAt, teardown };
}
