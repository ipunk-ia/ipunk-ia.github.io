"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { showcaseCards, type ShowcaseCard } from "@/data/work";
import { useCaseStudy } from "@/components/work/CaseStudyProvider";
import { SplitChars } from "@/components/SplitText";
import { useCopy } from "@/i18n/LanguageProvider";

const FILTERS = ["All", "UI/UX", "Web", "Brand", "Poster"] as const;
type Filter = (typeof FILTERS)[number];

/** Scroll distance (in viewport heights) the user scrolls through per card. */
const CARD_SCROLL_VH = 85;

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
    <button
      type="button"
      onClick={() => open(card.slug)}
      className="group flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] bg-paper p-4 text-left shadow-[0_30px_70px_-30px_rgba(22,35,61,0.5)] md:flex-row md:p-6"
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-[1.25rem] bg-paper-2 md:aspect-auto md:h-full md:w-1/2">
        <Image
          src={card.src}
          alt={card.alt}
          fill
          sizes="(min-width: 768px) 40rem, 92vw"
          className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center px-1 pb-2 pt-5 md:px-8">
        <span className="eyebrow">{card.category}</span>
        <h3 className="mt-3 text-2xl font-medium tracking-[-0.02em] md:text-4xl">{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">{desc}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-flame">
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
  );
}

export function Showcase() {
  const { showcase } = useCopy();
  const [filter, setFilter] = useState<Filter>("All");
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const withCopy = showcaseCards.map((card, i) => ({
    card,
    title: showcase.cards[i]?.title ?? card.title,
    desc: showcase.cards[i]?.desc ?? card.desc,
  }));
  const cards =
    filter === "All" ? withCopy : withCopy.filter((c) => c.card.category === filter);

  /**
   * Turns the stack into a book: scroll position (not drag) decides how far
   * each page has flipped. The section is pinned while the user scrolls
   * through `cards.length` viewport heights of runway.
   */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || reducedMotion) return;

    let frame = 0;

    const apply = () => {
      frame = 0;
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const t = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
      setProgress(t * Math.max(cards.length - 1, 0));
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
  }, [cards.length, reducedMotion]);

  return (
    <section id="showcase" className="relative py-20 md:py-28">
      {/* Bright fields, one hue. Clipped by its own layer so position:sticky
          further down the section still works (an overflow-hidden ancestor
          breaks sticky). */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="blob blob--a -left-32 top-24 h-80 w-80 bg-sun md:h-[30rem] md:w-[30rem]"
          style={{ borderRadius: "60% 40% 45% 55% / 45% 52% 48% 55%" }}
        />
        <div className="blob blob--b -right-28 bottom-16 h-72 w-72 rounded-full bg-bubble md:h-[26rem] md:w-[26rem]" />
      </div>

      <div className="shell relative">
        <div className="text-center">
          <p className="eyebrow">{showcase.eyebrow}</p>

          <h2 className="blend-title display relative z-10 mt-6 text-[clamp(2.25rem,6.5vw,5rem)]">
            <SplitChars text={showcase.line1} />
            <br />
            <SplitChars text={`${showcase.line2a}${showcase.line2b}`} />.
          </h2>
        </div>
      </div>

      {reducedMotion ? (
        <ul className="relative mt-14 flex flex-col gap-8 px-6 md:mt-20 md:px-16">
          {cards.map((entry) => (
            <li key={`${entry.card.slug}-${entry.card.title}`} className="h-[32rem] max-h-[70vh]">
              <Card card={entry.card} title={entry.title} desc={entry.desc} />
            </li>
          ))}
        </ul>
      ) : (
        <div
          ref={wrapperRef}
          className="relative mt-14 md:mt-20"
          style={{ height: `${Math.max(cards.length, 1) * CARD_SCROLL_VH}vh` }}
        >
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6 [perspective:1800px] md:px-16">
            <div className="relative h-[70vh] max-h-[36rem] w-full max-w-[68rem] [transform-style:preserve-3d]">
              {cards.map((entry, i) => {
                const local = progress - i;
                const flip = Math.min(Math.max(local, 0), 1);
                const rotateY = flip * -170;
                const opacity = flip > 0.85 ? Math.max(0, 1 - (flip - 0.85) / 0.15) : 1;

                return (
                  <div
                    key={`${entry.card.slug}-${entry.card.title}`}
                    className="absolute inset-0 [backface-visibility:hidden] [transform-origin:left_center]"
                    style={{
                      zIndex: cards.length - i,
                      opacity,
                      pointerEvents: flip > 0.5 ? "none" : "auto",
                      transform: `rotateY(${rotateY}deg)`,
                    }}
                  >
                    <Card card={entry.card} title={entry.title} desc={entry.desc} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="shell relative">
        <div className="mt-4 flex flex-wrap justify-center gap-2">
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
