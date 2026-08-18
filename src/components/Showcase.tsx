"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { showcaseCards, type ShowcaseCard } from "@/data/work";
import { useCaseStudy } from "@/components/work/CaseStudyProvider";
import { useCopy } from "@/i18n/LanguageProvider";

const FILTERS = ["All", "UI/UX", "Web", "Brand", "Poster"] as const;
type Filter = (typeof FILTERS)[number];

const SCROLL_STEP = 360;
/**
 * Matches the reference rail: outer cards tilt away, the middle card sits highest.
 * Narrow screens use a gentler tilt so neighbouring cards keep their 16px gap
 * instead of swinging into each other.
 */
const ARC_ROTATION_DESKTOP = 10;
const ARC_ROTATION_MOBILE = 3;
const ARC_LIFT = 26;
const DESKTOP_BREAKPOINT = 768;

function Card({
  card,
  title,
  desc,
}: {
  card: ShowcaseCard;
  title: string;
  desc: string;
}) {
  const { open } = useCaseStudy();
  const { showcase } = useCopy();

  return (
    <li
      className="w-[17rem] shrink-0 snap-center transition-transform duration-300 ease-out md:w-[21rem]"
    >
      <button
        type="button"
        onClick={() => open(card.slug)}
        className="group flex h-full w-full flex-col rounded-[1.5rem] bg-paper p-3 text-left shadow-[0_18px_50px_-28px_rgba(22,35,61,0.45)] transition-transform duration-500 hover:-translate-y-2"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.15rem] bg-paper-2">
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes="(min-width: 768px) 21rem, 17rem"
            className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
          />
        </div>

        <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
          <span className="eyebrow">{card.category}</span>
          <h3 className="mt-2 text-xl font-medium tracking-[-0.02em]">{title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">{desc}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-flame">
            {showcase.view}
            <span
              aria-hidden
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </button>
    </li>
  );
}

export function Showcase() {
  const { showcase } = useCopy();
  const [filter, setFilter] = useState<Filter>("All");
  const railRef = useRef<HTMLUListElement>(null);

  /**
   * Bend the rail: each card's tilt and lift come from where it currently sits
   * relative to the centre of the viewport, so the arc follows the scroll.
   */
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const apply = () => {
      frame = 0;
      const bounds = rail.getBoundingClientRect();
      const centre = bounds.left + bounds.width / 2;
      const reach = bounds.width / 2 + 160;
      const rotation =
        window.innerWidth >= DESKTOP_BREAKPOINT ? ARC_ROTATION_DESKTOP : ARC_ROTATION_MOBILE;

      for (const child of Array.from(rail.children) as HTMLElement[]) {
        const box = child.getBoundingClientRect();
        const offset = box.left + box.width / 2 - centre;
        const t = Math.max(-1, Math.min(1, offset / reach));
        child.style.transform = `translateY(${-ARC_LIFT * (1 - t * t)}px) rotate(${
          t * rotation
        }deg)`;
      }
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    apply();
    rail.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      rail.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [filter]);

  const withCopy = showcaseCards.map((card, i) => ({
    card,
    title: showcase.cards[i]?.title ?? card.title,
    desc: showcase.cards[i]?.desc ?? card.desc,
  }));
  const cards =
    filter === "All" ? withCopy : withCopy.filter((c) => c.card.category === filter);

  const scrollBy = (direction: -1 | 1) => {
    railRef.current?.scrollBy({ left: direction * SCROLL_STEP, behavior: "smooth" });
  };

  return (
    <section id="showcase" className="relative overflow-hidden py-20 md:py-28">
      {/* Bright fields, one hue */}
      <div
        aria-hidden
        className="blob blob--a -left-32 top-24 h-80 w-80 bg-sun md:h-[30rem] md:w-[30rem]"
        style={{ borderRadius: "60% 40% 45% 55% / 45% 52% 48% 55%" }}
      />
      <div
        aria-hidden
        className="blob blob--b -right-28 bottom-16 h-72 w-72 rounded-full bg-bubble md:h-[26rem] md:w-[26rem]"
      />

      <div className="shell relative">
        <div className="text-center">
          <p className="eyebrow">{showcase.eyebrow}</p>

          <h2 className="blend-title display relative z-10 mt-6 text-[clamp(2.25rem,6.5vw,5rem)]">
            {showcase.line1}
            <br />
            {showcase.line2a}
            {showcase.line2b}.
          </h2>
        </div>
      </div>

      <ul
        ref={railRef}
        className="relative mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-10 pt-6 [scrollbar-width:none] md:mt-20 md:gap-14 md:px-16 [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((entry) => {
          return (
            <Card
              key={`${entry.card.slug}-${entry.card.title}`}
              card={entry.card}
              title={entry.title}
              desc={entry.desc}
            />
          );
        })}
      </ul>

      <div className="shell relative">
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label={showcase.prev}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper transition-colors hover:border-ink"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label={showcase.next}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper transition-colors hover:border-ink"
          >
            <span aria-hidden>›</span>
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((option, i) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              aria-pressed={filter === option}
              className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                filter === option
                  ? "bg-ink text-paper"
                  : "bg-paper-2 text-muted hover:bg-sun hover:text-ink"
              }`}
            >
              {showcase.filters[i] ?? option}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
