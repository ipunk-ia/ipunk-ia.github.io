"use client";

import Image from "next/image";
import { digitalWork, type Project } from "@/data/work";
import { Reveal } from "@/components/Reveal";
import { useCaseStudy } from "@/components/work/CaseStudyProvider";
import { useCopy } from "@/i18n/LanguageProvider";

const ACCENT_BG: Record<Project["accent"], string> = {
  sky: "bg-sky",
  grass: "bg-grass",
  bubble: "bg-bubble",
  sun: "bg-sun",
  flame: "bg-flame",
};

export function DigitalWork() {
  const { open: onOpen } = useCaseStudy();
  const { digital, projects } = useCopy();

  return (
    <section id="product" className="relative py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
            <div>
              <p className="eyebrow">{digital.eyebrow}</p>
              <h2 className="display mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
                {digital.title}
              </h2>
            </div>
            <p className="max-w-xs text-base leading-relaxed text-muted">
              {digital.note}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
          {digitalWork.map((project, i) => {
            const pc = projects[project.slug];
            return (
            <Reveal key={project.slug}>
              <article className="grid gap-8 md:grid-cols-12 md:gap-12">
                {/* Screen */}
                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <button
                    type="button"
                    onClick={() => onOpen(project.slug)}
                    aria-label={`${digital.read}: ${pc.title}`}
                    className="group block w-full overflow-hidden rounded-[1.5rem] border border-line bg-paper-2 text-left transition-transform duration-500 hover:-translate-y-1 md:rounded-[2rem]"
                  >
                    <div className="flex items-center gap-1.5 border-b border-line px-5 py-3.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-line" />
                      <span className="h-2.5 w-2.5 rounded-full bg-line" />
                      <span className="h-2.5 w-2.5 rounded-full bg-line" />
                      <span className="ml-3 truncate font-mono text-[11px] tracking-[0.1em] text-muted">
                        {project.link ? project.link.label : `${project.slug}.prototype`}
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper md:aspect-[16/11]">
                      <Image
                        src={project.cover.src}
                        alt={project.cover.alt}
                        fill
                        sizes="(min-width: 768px) 55vw, 100vw"
                        className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </button>
                </div>

                {/* Meta */}
                <div
                  className={`flex flex-col justify-center md:col-span-5 ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs tracking-[0.16em] text-muted">
                      {project.index}
                    </span>
                    <span
                      aria-hidden
                      className={`h-2 w-2 rounded-full ${ACCENT_BG[project.accent]}`}
                    />
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                      {pc.kind}
                    </span>
                  </div>

                  <h3 className="display mt-4 text-4xl md:text-5xl">{pc.title}</h3>

                  <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                    {pc.summary}
                  </p>

                  <dl className="mt-7 grid grid-cols-2 gap-y-5 border-t border-line pt-6 text-sm">
                    <div>
                      <dt className="eyebrow">{digital.focus}</dt>
                      <dd className="mt-2 leading-relaxed">{pc.focus.join(", ")}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">{digital.status}</dt>
                      <dd className="mt-2 leading-relaxed">
                        {pc.status} · {project.year}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => onOpen(project.slug)}
                      className="btn btn--solid"
                    >
                      {digital.read}
                      <span aria-hidden>→</span>
                    </button>
                    {project.link ? (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn btn--outline"
                      >
                        {digital.visit}
                        <span aria-hidden>↗</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
