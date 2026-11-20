"use client";

import Image from "next/image";
import { useCopy } from "@/i18n/LanguageProvider";
import { useCaseStudy } from "@/components/work/CaseStudyProvider";
import { Reveal } from "@/components/Reveal";
import { tshirtWork } from "@/data/work";

export function TshirtSection() {
  const { tshirtSection, projects } = useCopy();
  const { open } = useCaseStudy();
  const project = tshirtWork;
  const projectCopy = projects["tshirt-design"];

  // New t-shirt designs (first 6 shots - the newly added photos)
  const newDesigns = project.shots.filter((s) => s.src.includes("/tshirt-0"));
  // Original front graphics (dope-squad, damnation, castigo, chill-astronaut)
  const frontGraphics = [
    project.shots.find((s) => s.src.includes("dope-squad")),
    project.shots.find((s) => s.src.includes("damnation")),
    project.shots.find((s) => s.src.includes("castigo")),
    project.shots.find((s) => s.src.includes("chill-astronaut")),
  ].filter((s): s is NonNullable<typeof s> => !!s);
  // Feature streetwear mockups (burn-it, orlyx-tee-01)
  const featureMockups = [
    project.shots.find((s) => s.src.includes("burn-it")),
    project.shots.find((s) => s.src.includes("orlyx-tee-01")),
  ].filter((s): s is NonNullable<typeof s> => !!s);
  // Streetwear line trio (orlyx-tee-02, 03, 04)
  const trioMockups = [
    project.shots.find((s) => s.src.includes("orlyx-tee-02")),
    project.shots.find((s) => s.src.includes("orlyx-tee-03")),
    project.shots.find((s) => s.src.includes("orlyx-tee-04")),
  ].filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <Reveal as="section" id="tshirts" className="bg-paper pb-24 pt-20 text-ink md:pb-36 md:pt-28">
      {/* Section Header */}
      <div className="shell flex flex-col justify-between gap-6 border-b border-line pb-10 md:flex-row md:items-end">
        <div className="max-w-[44rem]">
          <p className="eyebrow">{projectCopy.kind}</p>
          <h2 className="fade-in mt-2 text-[clamp(1.8rem,3vw,3.2rem)] leading-[1.08] tracking-[-0.03em]">
            {tshirtSection.title}
          </h2>
          <p className="fade-in mt-4 text-[1.0625rem] leading-relaxed text-muted">
            {tshirtSection.tagline}
          </p>
        </div>

        <button
          type="button"
          onClick={() => open("tshirt-design")}
          className="btn btn--solid fade-in self-start md:self-end"
        >
          {tshirtSection.viewCase}
          <span aria-hidden>↗</span>
        </button>
      </div>

      {/* Part 1: New T-shirt Designs (from your photos) */}
      <div className="shell mt-12 md:mt-16">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <p className="eyebrow">New Designs</p>
          <span className="text-xs text-muted tabular-nums">01 &mdash; 06</span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {newDesigns.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => open("tshirt-design")}
              className="group block w-full text-left"
            >
              <div
                className="relative w-full overflow-hidden bg-paper-2"
                style={{ aspectRatio: `${shot.ratio}` }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  className="scale-[1.01] object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-3">
                <span className="link text-[0.9375rem] font-medium group-hover:decoration-current">
                  {shot.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Part 2: Front print graphics (original designs) */}
      <div className="shell mt-16 md:mt-24">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <p className="eyebrow">{tshirtSection.categories.graphics}</p>
          <span className="text-xs text-muted tabular-nums">07 &mdash; 10</span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {frontGraphics.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => open("tshirt-design")}
              className="group block w-full text-left"
            >
              <div
                className="relative w-full overflow-hidden bg-paper-2"
                style={{ aspectRatio: `${shot.ratio}` }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="scale-[1.01] object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-3">
                <span className="link text-[0.9375rem] font-medium group-hover:decoration-current">
                  {tshirtSection.items[i]?.name ?? "Graphic"}
                </span>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                  {tshirtSection.items[i]?.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Part 3: Streetwear Apparel & Mockups */}
      <div className="shell mt-16 md:mt-24">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <p className="eyebrow">{tshirtSection.categories.streetwear}</p>
          <span className="text-xs text-muted tabular-nums">11 &mdash; 15</span>
        </div>

        {/* 2 feature cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
          {featureMockups.map((shot, idx) => {
            // item indices: burn-it is 4, orlyx-tee-01 is 5
            const itemIndex = idx === 0 ? 4 : 5;
            return (
              <button
                key={shot.src}
                type="button"
                onClick={() => open("tshirt-design")}
                className="group block w-full text-left md:col-span-6"
              >
                <div
                  className="relative w-full overflow-hidden bg-paper-2"
                  style={{ aspectRatio: `${shot.ratio}` }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="scale-[1.01] object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-3">
                  <span className="link text-[0.9375rem] font-medium group-hover:decoration-current">
                    {tshirtSection.items[itemIndex]?.name ?? "Streetwear"}
                  </span>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                    {tshirtSection.items[itemIndex]?.caption}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* 3 line mockups */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-12">
          {trioMockups.map((shot, idx) => {
            const itemIndex = 6 + idx;
            return (
              <button
                key={shot.src}
                type="button"
                onClick={() => open("tshirt-design")}
                className="group block w-full text-left md:col-span-4"
              >
                <div
                  className="relative w-full overflow-hidden bg-paper-2"
                  style={{ aspectRatio: `${shot.ratio}` }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="scale-[1.01] object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-3">
                  <span className="link text-[0.9375rem] font-medium group-hover:decoration-current">
                    {tshirtSection.items[itemIndex]?.name ?? "Streetwear"}
                  </span>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                    {tshirtSection.items[itemIndex]?.caption}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
