"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { useCopy } from "@/i18n/LanguageProvider";
import { mosaicRows } from "@/data/work";

/** Row heights and speeds differ so the wall never reads as a single sliding block. */
const ROW_CONFIG = [
  { height: "h-32 md:h-44", duration: 96, reverse: false },
  { height: "h-40 md:h-56", duration: 120, reverse: true },
  { height: "h-32 md:h-44", duration: 108, reverse: false },
  { height: "h-36 md:h-48", duration: 132, reverse: true },
] as const;

const SPAN_WIDTH: Record<number, string> = {
  1: "w-40 md:w-56",
  2: "w-64 md:w-96",
};

function MosaicRow({ index }: { index: number }) {
  const row = mosaicRows[index];
  const config = ROW_CONFIG[index];
  const doubled = [...row, ...row];

  return (
    <div
      className={`marquee ${config.reverse ? "marquee--reverse" : ""}`}
      style={{ "--marquee-duration": `${config.duration}s` } as React.CSSProperties}
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
              sizes="384px"
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
      {/* Image wall */}
      <div className="absolute inset-0 flex flex-col justify-center gap-2 md:gap-3">
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
          Ivan <span className="text-grass">Ghazali</span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-paper/75 md:text-xl">
          {copy.hero.tagline}
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
