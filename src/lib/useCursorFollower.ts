"use client";

import { useCallback, useEffect, useRef, type RefObject } from "react";

/*
 * One smooth cursor follower for every badge/image that trails the mouse.
 * Pointer events arrive at uneven rates per browser, so writing `transform` straight from the event
 * stutters; this eases toward the latest target once per frame instead, framerate-independent
 * (same 1 - k^(dt*60) lerp as the ribbon), and stops the loop as soon as it has caught up.
 */

const FOLLOW = 0.2; // share of the remaining distance covered per 60fps frame
const SETTLED_PX = 0.1;
const MAX_DT_S = 0.06;

type Follow = { x: number; y: number; tx: number; ty: number; placed: boolean; frame: number };

function place(el: HTMLElement | null, x: number, y: number) {
  if (el) el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
}

/** Runs frames until the follower has caught up with its target, then stops. */
function chase(p: Follow, el: RefObject<HTMLElement | null>) {
  let last = performance.now();
  const tick = (now: number) => {
    const k = 1 - Math.pow(1 - FOLLOW, Math.min((now - last) / 1000, MAX_DT_S) * 60);
    last = now;
    p.x += (p.tx - p.x) * k;
    p.y += (p.ty - p.y) * k;
    place(el.current, p.x, p.y);
    const moving = Math.abs(p.tx - p.x) > SETTLED_PX || Math.abs(p.ty - p.y) > SETTLED_PX;
    if (moving) {
      p.frame = requestAnimationFrame(tick);
      return;
    }
    // At rest, land on whole pixels: text on a half pixel renders soft.
    p.x = Math.round(p.tx);
    p.y = Math.round(p.ty);
    place(el.current, p.x, p.y);
    p.frame = 0;
  };
  p.frame = requestAnimationFrame(tick);
}

export function useCursorFollower<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const pos = useRef<Follow>({ x: 0, y: 0, tx: 0, ty: 0, placed: false, frame: 0 });

  /** Aim at (x, y) in the follower's offset-parent pixels. The first call after reset() snaps. */
  const move = useCallback((x: number, y: number) => {
    const p = pos.current;
    p.tx = x;
    p.ty = y;
    if (!p.placed || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      p.placed = true;
      p.x = Math.round(x);
      p.y = Math.round(y);
      place(ref.current, p.x, p.y);
      return;
    }
    if (!p.frame) chase(p, ref);
  }, []);

  /** Next move() snaps instead of sliding in from the old spot (call when the pointer leaves). */
  const reset = useCallback(() => {
    pos.current.placed = false;
  }, []);

  useEffect(() => {
    const p = pos.current;
    return () => cancelAnimationFrame(p.frame);
  }, []);

  return { ref, move, reset };
}
