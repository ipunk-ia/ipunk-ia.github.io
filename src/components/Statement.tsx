"use client";

import { useCopy } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

/** White field after the black hero: one long sentence, then the name set as large as the page allows. */
export function Statement() {
  const { statement } = useCopy();

  return (
    <Reveal as="section" className="relative overflow-hidden bg-paper text-ink">
      <div className="shell pb-10 pt-28 md:pt-40">
        <p className="fade-in max-w-[22ch] text-[clamp(2rem,4.6vw,4.75rem)] leading-[1.06] tracking-[-0.035em] [text-indent:18%] md:max-w-[24ch] md:[text-indent:38%]">
          {statement.text}
        </p>
      </div>

      <div className="shell flex flex-col gap-10 pb-6 pt-24 md:flex-row md:items-end md:justify-between md:pt-40">
        <div className="flex shrink-0 gap-8 text-[0.9375rem] md:whitespace-nowrap leading-snug">
          {statement.notes.map(([a, b]) => (
            <p key={a}>
              {a}
              <br />
              {b}
            </p>
          ))}
        </div>
        <p
          aria-hidden="true"
          className="fade-in -mb-[0.18em] select-none whitespace-nowrap text-[clamp(4rem,13vw,14rem)] leading-[0.8] tracking-[-0.06em]"
        >
          ivan ghazali
        </p>
      </div>
    </Reveal>
  );
}
