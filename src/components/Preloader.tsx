"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, CustomEase } from "@/lib/gsap";
import { welcomeFrames } from "@/data/work";
import imageLoader from "@/lib/image-loader";

type Props = {
  /** Fires as the curtain starts lifting, so the hero intro plays underneath it. */
  onReveal: () => void;
  /** Fires once the last frame has landed on `.hero-visual` and the overlay can unmount. */
  onComplete: () => void;
  label: string;
};

/*
 * Vault: Element - Splash Preloader Frame Stack Morph (set 3), compressed so the whole welcome is
 * over in ~1.3s (owner's performance brief: max 1.5s, never waits on assets). The vault's original
 * pacing was 0.5s per frame and a 1.2s wipe, ~3.7s in total.
 */
const TIMING = {
  frameDelay: 0.15,
  frameDuration: 0.6,
  counterSteps: [27, 42, 68, 92, 99],
  counterEnter: 0.4,
  counterTick: 0.3,
  counterExit: 0.4,
  wipeDelay: 0.1,
  wipeDuration: 0.6,
  morphDelay: 0.05,
  morphDuration: 0.5,
};
const FRAME_SCALE_FROM = 1.5;
/** Set once the welcome has played; the inline script in layout.tsx reads it before first paint. */
export const WELCOME_SEEN_KEY = "welcome-seen";
/* Same box as the hero deck card (--frame-w), so the browser can pick the right width. */
const FRAME_SIZES = "(min-width: 1600px) 352px, (min-width: 1092px) 22vw, 240px";
const FRAME_WIDTHS = [320, 640, 768, 1080];
const frameSrcSet = (src: string) => FRAME_WIDTHS.map((w) => `${imageLoader({ src, width: w })} ${w}w`).join(", ");
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function Digit() {
  return (
    <div className="preloader__digit">
      <div className="preloader__digit-inner">
        {DIGITS.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
    </div>
  );
}

/**
 * Welcome: five pieces of work open from their centre while a counter runs to 99, the white
 * curtain lifts off the black hero, and the last frame flies onto the hero's front frame.
 */
export function Preloader({ onReveal, onComplete, label }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const html = document.documentElement;
    const seen = html.classList.contains(WELCOME_SEEN_KEY);
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onReveal();
      onComplete();
      return;
    }

    // A restored scroll position would send the last frame flying to a hero that is off-screen.
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    html.classList.add("is-loading");

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const [tens, ones] = q(".preloader__digit-inner");
      const framesBox = q(".preloader__frames")[0] as HTMLElement;
      const frames = q(".preloader__frame");

      // Odometer: each column is a 0-9 strip, digit d sits at -d * 10%.
      const showCount = (n: number) => {
        const tick = { duration: TIMING.counterTick, ease: "expo.out", overwrite: "auto" as const };
        gsap.to(tens, { yPercent: -Math.floor(n / 10) * 10, ...tick });
        gsap.to(ones, { yPercent: -(n % 10) * 10, ...tick });
      };
      gsap.set(tens, { yPercent: -Math.floor(TIMING.counterSteps[0] / 10) * 10 });
      gsap.set(ones, { yPercent: -(TIMING.counterSteps[0] % 10) * 10 });

      const finish = () => {
        html.classList.remove("is-loading");
        try {
          sessionStorage.setItem(WELCOME_SEEN_KEY, "1");
        } catch {
          /* Storage blocked: the welcome simply plays again next time. */
        }
        onComplete();
      };
      const tl = gsap.timeline({ onComplete: finish });
      tl.fromTo(
        ".preloader__digits",
        { yPercent: 100 },
        { yPercent: 0, duration: TIMING.counterEnter, ease: "power4.out" },
        0,
      );

      frames.forEach((frame, i) => {
        const at = i * TIMING.frameDelay;
        const reveal = { duration: TIMING.frameDuration, ease: "power4.out" };
        tl.fromTo(
          frame,
          { clipPath: "inset(50% 50% 50% 50%)" },
          { clipPath: "inset(0% 0% 0% 0%)", ...reveal },
          at,
        ).fromTo(frame.querySelector("img"), { scale: FRAME_SCALE_FROM }, { scale: 1, ...reveal }, at);
        if (i > 0) tl.call(() => showCount(TIMING.counterSteps[Math.min(i, TIMING.counterSteps.length - 1)]), undefined, at);
      });

      const exitAt = (frames.length - 1) * TIMING.frameDelay;
      const wipeAt = exitAt + TIMING.wipeDelay;
      // Read at morph time, not mount time: fonts can shift the hero after load.
      const heroRect = () => document.querySelector(".hero-visual")?.getBoundingClientRect();
      const counterExit = { duration: TIMING.counterExit, ease: "power3.in" };

      tl.to(".preloader__digits", { yPercent: -100, ...counterExit }, exitAt)
        .call(
          () => {
            // Pin the stack where it is so it can travel in viewport coordinates.
            const r = framesBox.getBoundingClientRect();
            gsap.set(framesBox, { position: "fixed", top: r.top, left: r.left, width: r.width, height: r.height });
          },
          undefined,
          exitAt,
        )
        .call(onReveal, undefined, wipeAt)
        .to(
          ".preloader__bg",
          {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: TIMING.wipeDuration,
            ease: CustomEase.create("welcomeWipe", "M0,0 C0.73,0.15 0.15,0.99 1,1"),
          },
          wipeAt,
        )
        .to(
          framesBox,
          {
            top: () => heroRect()?.top ?? 0,
            left: () => heroRect()?.left ?? 0,
            width: () => heroRect()?.width ?? 0,
            height: () => heroRect()?.height ?? 0,
            duration: TIMING.morphDuration,
            ease: "power2.inOut",
          },
          wipeAt + TIMING.morphDelay,
        );
    }, root);

    return () => {
      ctx.revert();
      html.classList.remove("is-loading");
    };
    // Runs once per mount; the callbacks are stable state setters from Hero.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="preloader" ref={rootRef} role="status" aria-label={label}>
      <div className="preloader__bg" />
      <div className="preloader__stage">
        <div className="preloader__frames">
          {welcomeFrames.map((pic, i) => (
            <div key={pic.src} className="preloader__frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageLoader({ src: pic.src, width: 768 })}
                srcSet={frameSrcSet(pic.src)}
                sizes={FRAME_SIZES}
                alt=""
                decoding="async"
                fetchPriority={i === 0 ? "high" : "low"}
              />
            </div>
          ))}
        </div>
        <div className="preloader__counter" aria-hidden="true">
          <div className="preloader__mask">
            <div className="preloader__digits">
              <Digit />
              <Digit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
