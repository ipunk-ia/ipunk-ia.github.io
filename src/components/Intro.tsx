"use client";

import { Reveal } from "@/components/Reveal";
import { useCopy } from "@/i18n/LanguageProvider";

export function Intro() {
  const { intro } = useCopy();

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32">
      {/* Google Labs style colour fields */}
      <div
        aria-hidden
        className="blob blob--a -left-24 top-24 h-72 w-72 bg-grass/70 md:h-96 md:w-96"
        style={{ borderRadius: "58% 42% 47% 53% / 42% 51% 49% 58%" }}
      />
      <div
        aria-hidden
        className="blob blob--b -right-32 bottom-10 h-64 w-64 bg-bubble/70 md:h-[26rem] md:w-[26rem]"
        style={{ borderRadius: "48% 52% 63% 37% / 55% 40% 60% 45%" }}
      />

      <div className="shell relative">
        <Reveal>
          <p className="eyebrow">{intro.eyebrow}</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 max-w-4xl text-[clamp(1.75rem,4.4vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.03em]">
            {intro.headline[0]}
            <span className="bg-sky/45 px-1.5">{intro.headline[1]}</span>,{" "}
            <span className="bg-grass/60 px-1.5">{intro.headline[2]}</span>,{" "}
            <span className="bg-bubble/60 px-1.5">{intro.headline[3]}</span>, and{" "}
            <span className="bg-sun/60 px-1.5">{intro.headline[4]}</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-14">
          <Reveal delay={120} className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              {intro.body1}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
              {intro.body2}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-4">
              {intro.stats.map((stat) => (
                <div key={stat.label} className="bg-paper p-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="display block text-4xl">{stat.value}</span>
                    <span className="eyebrow mt-2 block normal-case tracking-[0.08em]">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={200} className="md:col-span-5">
            <div className="rounded-[1.75rem] border border-line bg-paper p-6 md:p-8">
              <p className="eyebrow">{intro.proofTitle}</p>
              <ul className="mt-6 space-y-6">
                {intro.proof.map((group) => (
                  <li key={group.label}>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink">
                      {group.label}
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                      {group.items.join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
