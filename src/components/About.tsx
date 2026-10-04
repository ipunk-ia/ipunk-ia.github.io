"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { useCopy } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { useCursorFollower } from "@/lib/useCursorFollower";

const BADGE_OFFSET_PX = 24;

/** One plain statement about how the work gets made; an email badge trails the cursor across it. */
export function About() {
  const { about } = useCopy();
  const { ref: badgeRef, move, reset } = useCursorFollower<HTMLAnchorElement>();

  const follow = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    move(e.clientX - rect.left - BADGE_OFFSET_PX, e.clientY - rect.top - BADGE_OFFSET_PX);
    if (badgeRef.current) badgeRef.current.dataset.following = "true";
  };

  const leave = () => {
    if (badgeRef.current) badgeRef.current.dataset.following = "false";
    reset();
  };

  return (
    <Reveal as="section" id="about" className="relative overflow-hidden bg-paper pb-24 pt-24 text-ink md:pb-32 md:pt-48">
      <div onPointerMove={follow} onPointerLeave={leave} className="relative">
        <p className="shell fade-in max-w-[26ch] text-[clamp(2rem,4.6vw,4.75rem)] leading-[1.06] tracking-[-0.035em]">
          {about.text}
        </p>

        {/* Touch: a plain link under the statement. Mouse: the same link trails the cursor as a badge. */}
        <a href={`mailto:${site.email}`} className="link shell mt-8 block text-[1.0625rem] md:hidden">
          {about.badge} &rarr; {site.email}
        </a>
        <a
          ref={badgeRef}
          href={`mailto:${site.email}`}
          tabIndex={-1}
          aria-hidden="true"
          className="about-badge absolute left-0 top-0 hidden rounded-full bg-ink px-4 py-2 text-[0.9375rem] text-paper md:block"
        >
          [ {about.badge} ]
        </a>
      </div>

      <div className="shell mt-24 grid gap-8 md:mt-40 md:grid-cols-12">
        <p className="fade-in max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted md:col-span-5 md:col-start-2">
          {about.body}
        </p>
        <figure className="fade-in md:col-span-3 md:col-start-10">
          {/* Self-portrait collage from the poster series: facing the camera, and it is his own work. */}
          <div className="relative aspect-[1050/1090] w-full max-w-[16rem] overflow-hidden">
            <Image
              src="/work/me/portrait-collage.jpg"
              alt={`${site.name} in a self-portrait poster collage`}
              fill
              sizes="16rem"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-[0.9375rem]">{about.caption}</figcaption>
        </figure>
      </div>
    </Reveal>
  );
}
