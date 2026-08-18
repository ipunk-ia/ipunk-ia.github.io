"use client";

import Image from "next/image";
import { graphicWork } from "@/data/work";
import { Reveal } from "@/components/Reveal";
import { useCaseStudy } from "@/components/work/CaseStudyProvider";
import { useCopy } from "@/i18n/LanguageProvider";

const [identity, posters] = graphicWork;

/** Slight rotations keep the poster wall from reading as a plain grid. */
const TILT = [-2.5, 1.8, -1.2, 2.4, -1.9, 1.1, -2.2, 1.5] as const;

export function GraphicWork() {
  const { open: onOpen } = useCaseStudy();
  const { graphic, digital, projects } = useCopy();
  const ic = projects[identity.slug];
  const pcp = projects[posters.slug];
  const posterStrip = [...posters.shots, ...posters.shots];

  return (
    <section
      id="visual"
      className="relative overflow-hidden rounded-[2rem] bg-paper-2 py-20 md:rounded-[3rem] md:py-28"
    >
      <div
        aria-hidden
        className="blob blob--b -left-24 top-1/4 h-80 w-80 rounded-full bg-sun md:h-[26rem] md:w-[26rem]"
      />

      <div className="shell relative">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
            <div>
              <p className="eyebrow">{graphic.eyebrow}</p>
              <h2 className="display mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
                {graphic.title}
              </h2>
            </div>
            <p className="max-w-xs text-base leading-relaxed text-muted">
              {graphic.note}
            </p>
          </div>
        </Reveal>

        {/* Identity feature */}
        <Reveal className="mt-14 md:mt-20">
          <button
            type="button"
            onClick={() => onOpen(identity.slug)}
            aria-label={`${graphic.title}: ${ic.title}`}
            className="group relative block w-full text-left"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
              <div className="relative aspect-[16/10] w-full md:aspect-[16/7]">
                <Image
                  src={identity.cover.src}
                  alt={identity.cover.alt}
                  fill
                  sizes="(min-width: 1280px) 88rem, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                />
              </div>
              {/* The scrim and overlay text only apply once there is room for them */}
              <div
                aria-hidden
                className="absolute inset-0 hidden bg-gradient-to-t from-deep/95 via-deep/45 to-deep/10 md:block"
              />
            </div>

            <div className="mt-6 flex flex-col gap-5 md:absolute md:inset-x-10 md:bottom-10 md:mt-0 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs tracking-[0.16em] text-muted md:text-paper/70">
                    {identity.index}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted md:text-paper/70">
                    {ic.kind}
                  </span>
                </div>
                <h3 className="display mt-3 text-3xl sm:text-4xl md:text-paper md:text-6xl">
                  {ic.title}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-paper/80">
                  {ic.summary}
                </p>
              </div>
              <span className="btn btn--solid w-fit shrink-0 md:bg-paper md:text-ink">
                {digital.read}
                <span aria-hidden>→</span>
              </span>
            </div>
          </button>
        </Reveal>

        {/* Poster series header */}
        <Reveal className="mt-20 md:mt-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.16em] text-muted">
                  {posters.index}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  {pcp.kind}
                </span>
              </div>
              <h3 className="display mt-3 text-4xl md:text-6xl">{pcp.title}</h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                {pcp.summary}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpen(posters.slug)}
              className="btn btn--outline w-fit"
            >
              {graphic.viewAll}
              <span aria-hidden>→</span>
            </button>
          </div>
        </Reveal>
      </div>

      {/* Poster wall */}
      <Reveal className="mt-12 md:mt-16">
        <div
          className="marquee"
          style={{ "--marquee-duration": "90s" } as React.CSSProperties}
        >
          <ul className="marquee__track gap-6 px-6 md:gap-10">
            {posterStrip.map((shot, i) => (
              <li
                key={`${shot.src}-${i}`}
                className="shrink-0"
                style={{ transform: `rotate(${TILT[i % TILT.length]}deg)` }}
                aria-hidden={i >= posters.shots.length}
              >
                <button
                  type="button"
                  onClick={() => onOpen(posters.slug)}
                  tabIndex={i >= posters.shots.length ? -1 : 0}
                  aria-label={`${pcp.title}: ${shot.alt}`}
                  className="block overflow-hidden rounded-lg shadow-[0_18px_50px_-24px_rgba(22,35,61,0.45)] transition-transform duration-500 hover:scale-[1.04]"
                >
                  <div className="relative h-[15rem] w-[10.6rem] md:h-[22rem] md:w-[15.5rem]">
                    <Image
                      src={shot.src}
                      alt={i < posters.shots.length ? shot.alt : ""}
                      fill
                      sizes="250px"
                      className="object-cover"
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
