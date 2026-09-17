"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { useCopy } from "@/i18n/LanguageProvider";
import { mosaicRows } from "@/data/work";
import { SplitChars, SplitSentences } from "@/components/SplitText";

/** Row heights and speeds differ so the wall never reads as a single sliding block. */
const ROW_CONFIG = [
  { height: "h-32 md:h-44", duration: 96, reverse: false },
  { height: "h-40 md:h-56", duration: 120, reverse: true },
  { height: "h-32 md:h-44", duration: 108, reverse: false },
  { height: "h-36 md:h-48", duration: 132, reverse: true },
  { height: "h-32 md:h-44", duration: 114, reverse: false },
  { height: "h-36 md:h-52", duration: 126, reverse: true },
] as const;

const SPAN_WIDTH: Record<number, string> = {
  1: "w-40 md:w-56",
  2: "w-64 md:w-96",
};

/**
 * The wall sits on a curved surface: the middle faces the viewer and the outer
 * rows lean away, like the face of a lens. Pure transforms, so the compositor
 * handles it — an SVG displacement filter gave a truer fisheye but had to
 * re-rasterise the whole hero every frame, which made scrolling stutter.
 */
const CURVE_PERSPECTIVE_PX = 900;
const CURVE_TILT_DEG = 28;
/** How far the outer rows sit back from the middle of the wall. */
const CURVE_DEPTH_PX = 120;
/**
 * Receding rows are projected toward the perspective origin, which would eat the
 * gaps between them. Pushing each row back out by its own distance from the
 * centre keeps every gap open, widest in the middle — how a lens reads.
 */
const CURVE_SPREAD_PX = 25;
/** Rows shrink as they recede, so the wall is scaled up to keep covering the hero. */
const WALL_OVERSCAN = 1.12;
const LENS_MASK =
  "radial-gradient(110% 88% at 50% 50%, #000 48%, rgba(0,0,0,0.5) 78%, transparent 100%)";

function rowCurve(index: number): React.CSSProperties {
  const half = (ROW_CONFIG.length - 1) / 2;
  /** -1 at the top row, 0 at the middle of the wall, +1 at the bottom row. */
  const t = (index - half) / half;

  return {
    transform: `translateY(${t * CURVE_SPREAD_PX}px) translateZ(${
      -CURVE_DEPTH_PX * t * t
    }px) rotateX(${-t * CURVE_TILT_DEG}deg)`,
  };
}

function MosaicRow({ index }: { index: number }) {
  const row = mosaicRows[index];
  const config = ROW_CONFIG[index];
  const doubled = [...row, ...row];

  return (
    <div
      className={`marquee ${config.reverse ? "marquee--reverse" : ""}`}
      style={
        {
          "--marquee-duration": `${config.duration}s`,
          ...rowCurve(index),
        } as React.CSSProperties
      }
      aria-hidden
    >
      <ul className="marquee__track gap-2 md:gap-3">
        {doubled.map((item, i) => (
          <li
            key={`${item.src}-${i}`}
            className={`relative shrink-0 overflow-hidden rounded-xl ${config.height} ${
              SPAN_WIDTH[item.span]
            }`}
          >
            <Image
              src={item.src}
              alt=""
              fill
              sizes="(min-width: 768px) 384px, 256px"
              priority={index < 2 && i < 4}
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Hero() {
  const copy = useCopy();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden rounded-b-[2rem] bg-deep py-24 text-paper md:rounded-b-[3rem]"
    >
      {/* Image wall, bent into a lens */}
      <div
        className="absolute inset-0 flex flex-col justify-center gap-2 md:gap-3"
        style={{
          perspective: `${CURVE_PERSPECTIVE_PX}px`,
          transform: `scale(${WALL_OVERSCAN})`,
          maskImage: LENS_MASK,
          WebkitMaskImage: LENS_MASK,
        }}
      >
        {mosaicRows.map((_, i) => (
          <MosaicRow key={i} index={i} />
        ))}
      </div>

      {/* Legibility scrim */}
      <div aria-hidden className="absolute inset-0 bg-deep/55" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-deep/85 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 50%, rgba(16,28,52,0.94) 0%, rgba(16,28,52,0.7) 45%, rgba(16,28,52,0.25) 100%)",
        }}
      />

      {/* Headline */}
      <div className="shell relative text-center">
        <p className="eyebrow text-paper/60">{copy.hero.eyebrow}</p>

        <h1 className="display mt-6 text-[clamp(3.25rem,13vw,12rem)]">
          <SplitChars text="Ivan" /> <SplitChars text="Ghazali" className="text-grass" />
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-paper/75 md:text-xl">
          <SplitSentences text={copy.hero.tagline} />
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#showcase" className="btn btn--light">
            {copy.hero.primary}
            <span aria-hidden>↓</span>
          </a>
          <a href="#contact" className="btn btn--ghost">
            {copy.hero.secondary}
          </a>
        </div>
      </div>

      <div className="shell relative mt-16 flex items-center justify-between md:mt-24">
        <p className="eyebrow text-paper/45">{site.location}</p>
        <p className="eyebrow text-paper/45">{copy.hero.available}</p>
      </div>
    </section>
  );
}
