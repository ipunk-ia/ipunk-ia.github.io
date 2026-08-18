"use client";

import { Reveal } from "@/components/Reveal";
import { useCopy } from "@/i18n/LanguageProvider";

const ACCENT: Record<string, string> = {
  sky: "bg-sky",
  grass: "bg-grass",
  bubble: "bg-bubble",
  sun: "bg-sun",
};

export function Disciplines() {
  const { craft, disciplines } = useCopy();

  return (
    <section id="craft" className="relative py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">{craft.eyebrow}</p>
            <h2 className="display mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
              {craft.title1}
              <br />
              {craft.title2}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              {craft.note}
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2">
          {disciplines.map((discipline, i) => (
            <Reveal as="li" key={discipline.no} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-line bg-paper-2/40 p-7 transition-colors duration-500 hover:border-ink/25 md:p-9">
                <div
                  aria-hidden
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full transition-transform duration-700 group-hover:scale-150 ${
                    ACCENT[discipline.color] ?? "bg-grass"
                  }`}
                />
                <div className="relative">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tracking-[0.16em] text-muted">
                      {discipline.no}
                    </span>
                    <h3 className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                      {discipline.title}
                    </h3>
                  </div>

                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                    {discipline.body}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {discipline.items.map((item) => (
                      <li key={item} className="chip bg-paper/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
