"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "@/lib/scroll";

/** Slower, heavier easing so scrolling reads as deliberate rather than snappy. */
const SCROLL_DURATION = 1.6;

/** Wires native scroll to Lenis's smoothing — mount once, near the document root. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: SCROLL_DURATION, autoToggle: true });
    setLenis(lenis);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
