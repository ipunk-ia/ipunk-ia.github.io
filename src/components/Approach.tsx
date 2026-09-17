"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SplitChars, SplitSentences } from "@/components/SplitText";
import { useCopy } from "@/i18n/LanguageProvider";

/** One piece of work per principle, revealed on hover. */
const PREVIEWS = [
  { src: "/work/posters/poster-07.jpg", alt: "No Privacy poster" },
  { src: "/work/orlyx/board-01.jpg", alt: "ORLYX brand guide" },
  { src: "/work/wirawiri/screens.jpg", alt: "Wira Wiri app screens" },
  { src: "/work/imagin/cover.jpg", alt: "Imagin Studio website" },
  { src: "/work/orlyx/slide-12.png", alt: "ORLYX apparel and social" },
] as const;

const PREVIEW_WIDTH = 260;
const PREVIEW_HEIGHT = 190;

export function Approach() {
  const { approach, principles } = useCopy();
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLOListElement>) => {
    const bounds = listRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setPoint({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <section className="relative py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">{approach.eyebrow}</p>
            <h2 className="display mt-5 text-[clamp(2.25rem,5vw,3.75rem)]">
              <SplitChars text={approach.title1} />
              <br />
              <SplitChars text={approach.title2} />
            </h2>
            <p className="mt-6 max-w-xs text-base leading-relaxed text-muted">
              <SplitSentences text={approach.note} />
            </p>
          </Reveal>

          <ol
            ref={listRef}
            onMouseMove={handleMove}
            onMouseLeave={() => setActive(null)}
            className="relative md:col-span-8"
          >
            {principles.map((item, i) => (
              <Reveal as="li" key={item.no} delay={i * 70}>
                <div
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                  className="group grid grid-cols-[auto_1fr] gap-5 border-t border-line py-7 transition-colors last:border-b md:grid-cols-[4rem_1fr] md:gap-10 md:py-9"
                >
                  <span className="font-mono text-xs tracking-[0.16em] text-muted">
                    {item.no}
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1.5 md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Cursor-following preview, desktop only */}
            <div
              aria-hidden
              className={`pointer-events-none absolute left-0 top-0 z-20 hidden overflow-hidden rounded-2xl shadow-[0_24px_60px_-24px_rgba(22,35,61,0.5)] transition-opacity duration-300 md:block ${
                active === null ? "opacity-0" : "opacity-100"
              }`}
              style={{
                width: PREVIEW_WIDTH,
                height: PREVIEW_HEIGHT,
                transform: `translate(${point.x - PREVIEW_WIDTH / 2}px, ${
                  point.y - PREVIEW_HEIGHT - 24
                }px)`,
              }}
            >
              {PREVIEWS.map((preview, i) => (
                <Image
                  key={preview.src}
                  src={preview.src}
                  alt=""
                  fill
                  sizes="260px"
                  className={`object-cover object-top transition-opacity duration-300 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
}
