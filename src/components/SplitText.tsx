"use client";

import { useEffect, useRef, useState } from "react";

const OBSERVER_THRESHOLD = 0.2;
const OBSERVER_MARGIN = "0px 0px -10% 0px";
const CHAR_STAGGER_MS = 32;
const SENTENCE_STAGGER_MS = 260;

/** True once the ref'd element has scrolled into view (fires only once). */
function useRevealTrigger<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isIn, setIsIn] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || isIn || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsIn(true);
            observer.disconnect();
          }
        }
      },
      { threshold: OBSERVER_THRESHOLD, rootMargin: OBSERVER_MARGIN },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isIn]);

  return [ref, isIn] as const;
}

/**
 * Splits headline text into individual characters that rise up into place,
 * one after another, the first time the text scrolls into view.
 */
export function SplitChars({ text, className }: { text: string; className?: string }) {
  const [ref, isIn] = useRevealTrigger<HTMLSpanElement>();
  const chars = Array.from(text);

  return (
    <span ref={ref} className={className}>
      {chars.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.2em] -mb-[0.2em] align-bottom">
          <span
            className="inline-block"
            style={{
              transform: isIn ? "translateY(0)" : "translateY(115%)",
              opacity: isIn ? 1 : 0,
              transition: `transform 0.75s cubic-bezier(0.22,1,0.36,1) ${i * CHAR_STAGGER_MS}ms, opacity 0.6s ease ${
                i * CHAR_STAGGER_MS
              }ms`,
            }}
          >
            {char === " " ? " " : char}
          </span>
        </span>
      ))}
    </span>
  );
}

/**
 * Splits body text into sentences that fade and lift into place, one after
 * another, the first time the text scrolls into view.
 */
export function SplitSentences({ text, className }: { text: string; className?: string }) {
  const [ref, isIn] = useRevealTrigger<HTMLSpanElement>();
  const sentences = text.trim().split(/(?<=[.!?])\s+/).filter(Boolean);

  return (
    <span ref={ref} className={className}>
      {sentences.map((sentence, i) => (
        <span key={i}>
          <span
            className="inline-block"
            style={{
              transform: isIn ? "translateY(0)" : "translateY(14px)",
              opacity: isIn ? 1 : 0,
              transition: `transform 0.9s cubic-bezier(0.22,1,0.36,1) ${i * SENTENCE_STAGGER_MS}ms, opacity 0.8s ease ${
                i * SENTENCE_STAGGER_MS
              }ms`,
            }}
          >
            {sentence}
          </span>
          {i < sentences.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
