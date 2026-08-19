"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type MatterNS from "matter-js";
import { useCopy } from "@/i18n/LanguageProvider";

type Shape = "circle" | "pill" | "square";

type Piece = {
  id: string;
  label: string;
  shape: Shape;
  /** Rendered size in pixels. */
  size: number;
  className: string;
};

const PIECES: Piece[] = [
  { id: "uiux", label: "UI/UX", shape: "circle", size: 150, className: "bg-grass text-ink" },
  { id: "web", label: "Web", shape: "circle", size: 110, className: "bg-sky text-ink" },
  { id: "type", label: "Typography", shape: "pill", size: 190, className: "bg-bubble text-ink" },
  { id: "brand", label: "Brand", shape: "square", size: 130, className: "bg-sun text-ink" },
  { id: "poster", label: "Poster", shape: "circle", size: 128, className: "bg-flame text-paper" },
  { id: "figma", label: "Figma", shape: "pill", size: 160, className: "bg-ink text-paper" },
  {
    id: "ai",
    label: "AI",
    shape: "circle",
    size: 96,
    className: "border border-ink bg-paper text-ink",
  },
  { id: "print", label: "Print", shape: "square", size: 108, className: "bg-ink text-paper" },
  { id: "proto", label: "Prototype", shape: "pill", size: 200, className: "bg-sky text-ink" },
  { id: "grid", label: "Grid", shape: "circle", size: 88, className: "bg-bubble text-ink" },
  { id: "color", label: "Colour", shape: "circle", size: 118, className: "bg-grass text-ink" },
];

const WALL_THICKNESS = 200;

export function PlaySection() {
  const copy = useCopy();
  const sceneRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const bodiesRef = useRef<MatterNS.Body[]>([]);
  const matterRef = useRef<typeof MatterNS | null>(null);
  const [isReady, setIsReady] = useState(false);

  const scatter = useCallback(() => {
    const scene = sceneRef.current;
    const Matter = matterRef.current;
    if (!Matter || !scene || bodiesRef.current.length === 0) return;
    const { width } = scene.getBoundingClientRect();

    for (const body of bodiesRef.current) {
      Matter.Body.setPosition(body, {
        x: width * (0.15 + Math.random() * 0.7),
        y: -120 - Math.random() * 320,
      });
      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 6, y: 0 });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);
    }
  }, []);

  /* Kept in a ref so the physics effect never has to re-run when scatter changes. */
  const scatterRef = useRef(scatter);
  scatterRef.current = scatter;

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReady(true);
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    /* Only pull the physics engine in once the playground is near the viewport. */
    const loader = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        loader.disconnect();
        void import("matter-js").then(({ default: Matter }) => {
          if (cancelled) return;
          matterRef.current = Matter;
          cleanup = start(Matter, scene);
        });
      },
      { rootMargin: "300px" },
    );
    loader.observe(scene);

    function start(Matter: typeof MatterNS, scene: HTMLDivElement) {
    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;

    let width = scene.clientWidth;
    let height = scene.clientHeight;

    const engine = Engine.create({ gravity: { x: 0, y: 1, scale: 0.0011 } });

    /* Bodies are sized from the rendered DOM node so physics matches what is drawn. */
    const bodies: MatterNS.Body[] = PIECES.map((piece, i) => {
      const node = nodesRef.current.get(piece.id);
      const w = node?.offsetWidth ?? piece.size;
      const h = node?.offsetHeight ?? piece.size;
      const x = width * ((i + 0.5) / PIECES.length);
      const y = -140 - i * 90;

      const options: MatterNS.IBodyDefinition = {
        restitution: 0.55,
        friction: 0.06,
        frictionAir: 0.012,
        density: 0.0014,
      };

      if (piece.shape === "circle") return Bodies.circle(x, y, w / 2, options);

      return Bodies.rectangle(x, y, w, h, {
        ...options,
        chamfer: { radius: piece.shape === "pill" ? h / 2 : Math.min(18, h / 3) },
      });
    });
    bodiesRef.current = bodies;

    const wallOptions = { isStatic: true, restitution: 0.4 };
    const buildWalls = () => [
      Bodies.rectangle(
        width / 2,
        height + WALL_THICKNESS / 2,
        width * 3,
        WALL_THICKNESS,
        wallOptions,
      ),
      Bodies.rectangle(-WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height * 4, wallOptions),
      Bodies.rectangle(
        width + WALL_THICKNESS / 2,
        height / 2,
        WALL_THICKNESS,
        height * 4,
        wallOptions,
      ),
    ];

    let walls = buildWalls();
    Composite.add(engine.world, [...bodies, ...walls]);

    /* Dragging */
    const mouse = Mouse.create(scene);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.16, damping: 0.08, render: { visible: false } },
    });
    Composite.add(engine.world, mouseConstraint);

    /* Keep the page scrollable: Matter grabs wheel and touch events by default. */
    const m = mouse as unknown as { mousewheel: EventListener; button: number };
    scene.removeEventListener("wheel", m.mousewheel);
    scene.removeEventListener("DOMMouseScroll", m.mousewheel);

    const onTouchMove = (e: TouchEvent) => {
      if (m.button !== -1) e.preventDefault();
    };
    scene.addEventListener("touchmove", onTouchMove, { passive: false });

    const runner = Runner.create();
    Runner.run(runner, engine);

    const sync = () => {
      for (let i = 0; i < PIECES.length; i += 1) {
        const node = nodesRef.current.get(PIECES[i].id);
        const body = bodies[i];
        if (!node) continue;
        node.style.transform = `translate(${body.position.x - node.offsetWidth / 2}px, ${
          body.position.y - node.offsetHeight / 2
        }px) rotate(${body.angle}rad)`;
      }
    };

    Events.on(engine, "afterUpdate", sync);
    sync();
    setIsReady(true);

    /* Rebuild floor and side walls when the container changes size. */
    const onResize = () => {
      const next = scene.getBoundingClientRect();
      if (Math.abs(next.width - width) < 2 && Math.abs(next.height - height) < 2) return;
      width = next.width;
      height = next.height;

      Composite.remove(engine.world, walls);
      walls = buildWalls();
      Composite.add(engine.world, walls);

      for (const body of bodies) {
        if (body.position.x > width) {
          Body.setPosition(body, { x: width - 60, y: body.position.y });
        }
      }
    };

    const observer = new ResizeObserver(onResize);
    observer.observe(scene);

    /* Re-drop the pieces every time the playground scrolls back into view. */
    const inView = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) scatterRef.current();
        }
      },
      { threshold: 0.35 },
    );
    inView.observe(scene);

    return () => {
      inView.disconnect();
      observer.disconnect();
      scene.removeEventListener("touchmove", onTouchMove);
      Events.off(engine, "afterUpdate", sync);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      bodiesRef.current = [];
    };
    }

    return () => {
      cancelled = true;
      loader.disconnect();
      cleanup?.();
    };
  }, []);

  return (
    <section className="relative pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{copy.play.eyebrow}</p>
            <h2 className="display mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              {copy.play.title1}
              <br />
              {copy.play.title2}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="max-w-[15rem] text-sm leading-relaxed text-muted">
              {copy.play.note}
            </p>
            <button type="button" onClick={scatter} className="btn btn--outline shrink-0">
              {copy.play.shake}
            </button>
          </div>
        </div>

        <div
          ref={sceneRef}
          aria-label="Interactive playground of draggable design keywords"
          className={`relative mt-10 h-[26rem] w-full overflow-hidden rounded-[1.75rem] border border-line bg-paper-2/50 transition-opacity duration-700 md:mt-14 md:h-[28rem] md:rounded-[2.5rem] ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        >
          {PIECES.map((piece) => (
            <div
              key={piece.id}
              ref={(el) => {
                if (el) nodesRef.current.set(piece.id, el);
                else nodesRef.current.delete(piece.id);
              }}
              className={`play-body rounded-full text-center text-sm font-medium md:text-base ${
                piece.shape === "square" ? "!rounded-2xl" : ""
              } ${piece.className}`}
              style={
                piece.shape === "pill"
                  ? { width: piece.size, height: 56 }
                  : { width: piece.size, height: piece.size }
              }
            >
              {piece.label}
            </div>
          ))}

          <p className="pointer-events-none absolute inset-x-0 bottom-5 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {copy.play.hint}
          </p>
        </div>
      </div>
    </section>
  );
}
