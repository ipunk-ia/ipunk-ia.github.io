"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { SplitChars, SplitSentences } from "@/components/SplitText";
import { useCopy } from "@/i18n/LanguageProvider";
import type { Discipline } from "@/i18n/dict";

const ACCENT_BG: Record<string, string> = {
  sky: "bg-sky",
  grass: "bg-grass",
  bubble: "bg-bubble",
  sun: "bg-sun",
};

/** Which card plays the reference's oversized centred card before the row settles. */
const HERO_INDEX = 1;
/** How large the hero starts, relative to its final grid size. */
const HERO_SCALE_START = 1.3;
/** How far below its slot a sibling starts before sliding up into the row. */
const SIBLING_OFFSET = 56;
/** Scroll-progress gap between each sibling joining the row. */
const SIBLING_STAGGER = 0.18;

function DisciplineCard({
  discipline,
  index,
  progress,
}: {
  discipline: Discipline;
  index: number;
  progress: number;
}) {
  const isHero = index === HERO_INDEX;
  let style: CSSProperties;

  if (isHero) {
    const heroT = Math.min(progress / 0.6, 1);
    style = {
      position: "relative",
      zIndex: 10,
      transform: `scale(${HERO_SCALE_START - (HERO_SCALE_START - 1) * heroT})`,
    };
  } else {
    const order = index < HERO_INDEX ? index : index - 1;
    const start = 0.15 + order * SIBLING_STAGGER;
    const t = Math.min(Math.max((progress - start) / 0.35, 0), 1);
    style = {
      opacity: t,
      transform: `translateY(${SIBLING_OFFSET * (1 - t)}px) scale(${0.88 + 0.12 * t})`,
    };
  }

  return (
    <li style={style}>
      <article
        className={`h-full overflow-hidden rounded-[1.75rem] p-7 text-ink md:p-9 ${
          ACCENT_BG[discipline.color] ?? "bg-grass"
        }`}
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs tracking-[0.16em] text-ink/60">{discipline.no}</span>
          <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
            {discipline.title}
          </h3>
        </div>

        <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">{discipline.body}</p>

        <ul className="mt-7 flex flex-wrap gap-2">
          {discipline.items.map((item) => (
            <li key={item} className="chip bg-paper/70">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

export function Disciplines() {
  const { craft, disciplines } = useCopy();
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const rowRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(reducedMotion ? 1 : 0);

  /**
   * One card (the "hero") starts oversized and centred, like the reference;
   * the rest slide up into the row as the section scrolls into view. Desktop
   * only — mobile stacks in a single column where the effect doesn't read.
   */
  useEffect(() => {
    const row = rowRef.current;
    if (!row || reducedMotion) return;

    let frame = 0;

    const apply = () => {
      frame = 0;
      if (window.innerWidth < 768) {
        setProgress(1);
        return;
      }
      const rect = row.getBoundingClientRect();
      const revealDistance = window.innerHeight * 0.7;
      const t = Math.min(Math.max(1 - rect.top / revealDistance, 0), 1);
      setProgress(t);
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [reducedMotion]);

  return (
    <section id="craft" className="relative py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">{craft.eyebrow}</p>
            <h2 className="display mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              <SplitChars text={craft.title1} />
              <br />
              <SplitChars text={craft.title2} />
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              <SplitSentences text={craft.note} />
            </p>
          </Reveal>
        </div>

        <ul
          ref={rowRef}
          className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-4"
        >
          {disciplines.map((discipline, i) => (
            <DisciplineCard
              key={discipline.no}
              discipline={discipline}
              index={i}
              progress={progress}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
