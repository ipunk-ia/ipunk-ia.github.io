"use client";

import Image from "next/image";
import { genAiWork } from "@/data/work";
import { Reveal } from "@/components/Reveal";
import { useCaseStudy } from "@/components/work/CaseStudyProvider";
import { useCopy } from "@/i18n/LanguageProvider";

export function GenAiWork() {
  const { open: onOpen } = useCaseStudy();
  const { genAi, digital, projects } = useCopy();
  const copy = projects[genAiWork.slug];

  return (
    <section id="gen-ai" className="relative py-20 md:py-28">
      <div className="shell relative">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
            <div>
              <p className="eyebrow">{genAi.eyebrow}</p>
              <h2 className="display mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
                {genAi.title}
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-base leading-relaxed text-muted">{genAi.note}</p>
              <button
                type="button"
                onClick={() => onOpen(genAiWork.slug)}
                className="btn btn--outline mt-6 w-fit"
              >
                {digital.read}
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* CSS columns give a masonry wall without measuring anything in JS */}
        <Reveal className="mt-12 columns-2 gap-4 md:mt-16 md:columns-3 md:gap-6 lg:columns-4">
          {genAiWork.shots.map((shot) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => onOpen(genAiWork.slug)}
              aria-label={`${copy.title}: ${shot.alt}`}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.25rem] shadow-[0_18px_50px_-24px_rgba(22,35,61,0.45)] md:mb-6"
            >
              <div className="relative w-full" style={{ aspectRatio: shot.ratio }}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                />
              </div>
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
