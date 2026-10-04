import type Lenis from "lenis";

/* The one Lenis instance (set by SmoothScroll), so programmatic scrolls go through it, not around it. */
let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

/** Smoothly scrolls the page to `y` (document px); instant for reduced-motion visitors. */
export function scrollToY(y: number) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (lenis && !reduce) {
    lenis.scrollTo(y);
    return;
  }
  window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
}
