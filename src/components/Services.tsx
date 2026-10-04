"use client";

import { useState } from "react";
import Image from "next/image";
import { servicePics } from "@/data/work";
import { useCopy } from "@/i18n/LanguageProvider";
import { Reveal, Rise } from "@/components/Reveal";
import { useCursorFollower } from "@/lib/useCursorFollower";

/** Three rows; on a mouse, the hovered row turns black and a piece of that work rides the cursor. */
export function Services() {
  const { services } = useCopy();
  const [active, setActive] = useState<number | null>(null);
  const { ref: floatRef, move, reset } = useCursorFollower<HTMLLIElement>();

  const follow = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    move(e.clientX - rect.left, e.clientY - rect.top);
  };

  const leave = () => {
    setActive(null);
    reset();
  };

  return (
    <Reveal as="section" id="services" className="bg-paper pb-24 text-ink md:pb-40">
      <h2 className="shell text-[clamp(1.6rem,2.7vw,2.75rem)] leading-[1.1] tracking-[-0.025em]">
        <Rise>{services.title[0]}</Rise>
        <Rise delay={100}>{services.title[1]}</Rise>
      </h2>

      <div className="shell mt-20 grid gap-6 border-t border-line pt-6 md:mt-32 md:grid-cols-12">
        <ul className="relative md:col-span-9 md:col-start-4" onPointerMove={follow} onPointerLeave={leave}>
          {services.rows.map((row, i) => (
            <li
              key={row.title}
              className="service-row grid gap-4 border-b border-line py-8 md:grid-cols-2 md:gap-10 md:rounded-[4px] md:px-8 md:py-12"
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setActive(i);
              }}
            >
              <h3 className="text-[clamp(1.6rem,2.7vw,2.75rem)] leading-[1.1] tracking-[-0.025em]">{row.title}</h3>
              <p className="max-w-[48ch] text-[1.0625rem] leading-relaxed text-muted">{row.body}</p>
            </li>
          ))}

          <li
            ref={floatRef}
            aria-hidden="true"
            className={`pointer-events-none absolute left-0 top-0 z-10 hidden w-[clamp(9rem,14vw,13rem)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 md:block ${
              active === null ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* All three stay mounted and loaded; only opacity swaps, so a row never shows a blank frame. */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {servicePics.map((pic, i) => (
                <Image
                  key={pic.src}
                  src={pic.src}
                  alt=""
                  fill
                  sizes="13vw"
                  className={`object-cover transition-opacity duration-300 ${i === active ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </Reveal>
  );
}
