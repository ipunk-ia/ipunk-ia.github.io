"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { heroStack, welcomeFrames } from "@/data/work";
import { useCopy } from "@/i18n/LanguageProvider";
import { Preloader } from "@/components/Preloader";
import { Clock } from "@/components/Clock";
import { Rise } from "@/components/Reveal";
import { createDeckLoop, slotUnits } from "@/lib/deckLoop";

type Stage = "loading" | "revealed" | "done";

/** Card 0 is the welcome's last frame: the preloader lands on it, then it joins the shuffle. */
const DECK = [welcomeFrames[welcomeFrames.length - 1], ...heroStack];
const WORDMARK = [..."ivan ghazali"];

/** First viewport: two plain statements, and a deck of the work that shuffles under the name. */
export function Hero() {
  const { hero, welcome } = useCopy();
  const [stage, setStage] = useState<Stage>("loading");
  const sectionRef = useRef<HTMLElement>(null);
  const markRef = useRef<HTMLParagraphElement>(null);
  const loopRef = useRef<ReturnType<typeof createDeckLoop> | null>(null);

  // Build the loop once, before paint, so the deck is placed by JS from the first frame.
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const mark = markRef.current;
    if (!section || !mark) return;
    const loop = createDeckLoop({
      section,
      cards: Array.from(section.querySelectorAll<HTMLElement>(".deck-card")),
      mark,
      chars: Array.from(mark.querySelectorAll<HTMLElement>(".wordmark__char")),
    });
    loop.settle();
    loopRef.current = loop;
    return () => loop.stop();
  }, []);

  useEffect(() => {
    const loop = loopRef.current;
    if (!loop || stage === "loading") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (stage === "revealed") {
      const landing = sectionRef.current?.querySelector<HTMLElement>(".hero-visual");
      if (landing) loop.intro(landing);
      return;
    }
    loop.start();
  }, [stage]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className={`on-dark relative flex min-h-[100svh] flex-col overflow-hidden bg-deep text-paper ${
        stage !== "loading" ? "is-in" : ""
      }`}
    >
      <h1 className="shell relative z-30 flex flex-col justify-between gap-1 pt-20 text-[clamp(1.6rem,2.7vw,2.75rem)] leading-[1.1] tracking-[-0.025em] md:flex-row md:pt-24">
        <span className="sr-only">{site.name}: </span>
        <Rise>{hero.left}</Rise>
        <Rise delay={120}>{hero.right}</Rise>
      </h1>

      <div className="pointer-events-none absolute inset-0">
        {DECK.map((pic, k) => {
          const s = slotUnits(k, DECK.length);
          return (
            <div
              key={pic.src}
              className={`deck-card ${k === 0 ? "hero-visual" : ""}`}
              data-visual={k === 0 ? (stage === "done" ? "shown" : "hidden") : undefined}
              style={{
                zIndex: DECK.length - k,
                transform: `translate(-50%, -50%) translate(calc(var(--frame-w) * ${s.x}), calc(var(--frame-w) * ${s.y})) scale(${s.scale})`,
              }}
            >
              <Image src={pic.src} alt={pic.alt} fill loading="eager" fetchPriority={k === 0 ? "high" : "auto"} sizes="(min-width: 1600px) 352px, (min-width: 1092px) 22vw, 240px" className="object-cover" />
            </div>
          );
        })}
      </div>

      <p ref={markRef} aria-hidden="true" className="wordmark">
        <span className="wordmark__line">
          {WORDMARK.map((char, i) => (
            <span key={i} className="wordmark__char">
              {char}
            </span>
          ))}
        </span>
      </p>

      <div className="shell relative z-30 mt-auto flex items-end justify-between gap-6 pb-6 text-[0.9375rem] leading-snug md:absolute md:inset-x-0 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:items-center md:pb-0">
        <p className="fade-in" style={{ "--rise-delay": "300ms" } as CSSProperties}>
          {hero.disciplines[0]}
          <br />
          {hero.disciplines[1]}
        </p>
        <p className="fade-in text-right" style={{ "--rise-delay": "380ms" } as CSSProperties}>
          <Clock />
          <br />
          {hero.city}
        </p>
      </div>

      {stage !== "done" ? (
        <Preloader
          label={welcome}
          onReveal={() => setStage("revealed")}
          onComplete={() => setStage("done")}
        />
      ) : null}
    </section>
  );
}
