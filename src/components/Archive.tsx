"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { archiveTiles } from "@/data/work";
import { useCopy } from "@/i18n/LanguageProvider";
import { useCaseStudy } from "@/components/work/CaseStudyProvider";
import { Reveal } from "@/components/Reveal";

const WIDE = 1.2;

/** The graphic side of the work, scattered on a 12-column grid so no two rows line up. */
export function Archive() {
  const { archive, projects } = useCopy();
  const { open } = useCaseStudy();

  return (
    <Reveal as="section" className="bg-paper pb-24 pt-28 text-ink md:pb-40 md:pt-40">
      <h2 className="shell fade-in max-w-[24ch] text-[clamp(1.6rem,2.7vw,2.75rem)] leading-[1.1] tracking-[-0.025em]">
        {archive.title}
      </h2>

      <ul className="shell mt-16 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-24 md:grid-cols-12 md:gap-x-6 md:gap-y-16">
        {archiveTiles.map((tile, i) => (
          <li
            key={tile.src}
            className="archive-tile fade-in"
            data-wide={tile.ratio > WIDE || undefined}
            style={
              {
                "--col": `${tile.col} / span ${tile.span}`,
                "--drop": `${tile.drop}rem`,
                "--rise-delay": `${(i % 3) * 90}ms`,
              } as CSSProperties
            }
          >
            <button type="button" onClick={() => open(tile.slug)} className="group block w-full text-left">
              <span className="relative block overflow-hidden" style={{ aspectRatio: tile.ratio }}>
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 50vw"
                  className="scale-[1.01] object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </span>
              <span className="mt-3 block text-[0.9375rem] leading-snug">
                <span className="link group-hover:decoration-current">{projects[tile.slug].title}</span>
                <span className="block text-muted">({projects[tile.slug].kind.toLowerCase()})</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
