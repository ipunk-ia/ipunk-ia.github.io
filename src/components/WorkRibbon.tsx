"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { allWork, ribbonOrder, type Project } from "@/data/work";
import { useCopy } from "@/i18n/LanguageProvider";
import { useCaseStudy } from "@/components/work/CaseStudyProvider";
import imageLoader from "@/lib/image-loader";
import { layoutCards } from "@/components/ribbon/layout";
import type { RibbonItem } from "@/components/ribbon/mountRibbon";
import { useCursorFollower } from "@/lib/useCursorFollower";
import { scrollToY } from "@/lib/scroll";

/*
 * Pinned section: vertical scroll drives the WebGL ribbon sideways. The DOM, the section height and
 * the open badge live here; three.js and the scene are imported only when the section comes near.
 */

const TEXTURE_WIDTH_PX = 1600;
/** Vertical scroll spent per pixel of horizontal travel (was 1; 0.6 keeps ten cards from feeling endless). */
const SCROLL_PER_PX = 0.6;
/** Gaps between cards read as "no card" for a few frames; keep the badge up through them. */
const BADGE_HIDE_DELAY_MS = 160;
const BADGE_OFFSET_PX = 16;
/** Start downloading three.js half a viewport ahead: close enough to be ready, far enough to stay off the first load. */
const PRELOAD_MARGIN = "50% 0px";

const ribbonProjects: Project[] = ribbonOrder
  .map((slug) => allWork.find((p) => p.slug === slug))
  .filter((p): p is Project => !!p);

export function WorkRibbon() {
  const { work, projects } = useCopy();
  const { open } = useCaseStudy();
  const openLabel = work.open;
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const { ref: badgeRef, move: moveBadge, reset: resetBadge } = useCursorFollower<HTMLSpanElement>();
  const pickRef = useRef<(x: number, y: number) => string | null>(() => null);
  const [travel, setTravel] = useState(0);
  const [now, setNow] = useState(0);

  const items = useMemo<RibbonItem[]>(
    () =>
      ribbonProjects.map((p) => ({
        slug: p.slug,
        src: imageLoader({ src: p.cover.src, width: TEXTURE_WIDTH_PX }),
        width: Math.round(1000 * p.cover.ratio),
        height: 1000,
        title: projects[p.slug].title,
      })),
    [projects],
  );

  // Section height comes from the same layout the scene uses, so the page has its final length early.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const measure = () => setTravel(-layoutCards(items, stage.clientWidth, stage.clientHeight).minScroll);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items]);

  useEffect(() => {
    const stage = stageRef.current;
    const section = sectionRef.current;
    if (!stage || !section) return;

    let teardown = () => {};
    let cancelled = false;
    let badgeHide = 0;

    const onHover = (item: RibbonItem | null) => {
      const badge = badgeRef.current;
      if (!badge) return;
      window.clearTimeout(badgeHide);
      if (item) {
        badge.textContent = `[ ${openLabel}: ${item.title} ]`;
        badge.dataset.shown = "true";
      } else {
        badgeHide = window.setTimeout(() => (badge.dataset.shown = "false"), BADGE_HIDE_DELAY_MS);
      }
    };
    const onNow = (index: number) => setNow(index);
    const onPointer = (point: { x: number; y: number } | null) => {
      if (point) moveBadge(point.x + BADGE_OFFSET_PX, point.y + BADGE_OFFSET_PX);
      else resetBadge();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        import("@/components/ribbon/mountRibbon").then(({ mountRibbon }) => {
          if (cancelled) return;
          const ribbon = mountRibbon(stage, section, items, { onPointer, onHover, onNow });
          pickRef.current = ribbon.pickAt;
          teardown = ribbon.teardown;
        });
      },
      { rootMargin: PRELOAD_MARGIN },
    );
    observer.observe(section);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.clearTimeout(badgeHide);
      pickRef.current = () => null;
      teardown();
    };
  }, [items, openLabel, badgeRef, moveBadge, resetBadge]);

  /** Scrolls the page so card `index` sits in the centre of the pinned stage. */
  const goTo = (index: number) => {
    const stage = stageRef.current;
    const section = sectionRef.current;
    if (!stage || !section) return;
    const { cards, minScroll } = layoutCards(items, stage.clientWidth, stage.clientHeight);
    const card = cards[Math.max(0, Math.min(cards.length - 1, index))];
    const track = Math.min(0, Math.max(minScroll, stage.clientWidth / 2 - (card.left + card.width / 2)));
    const progress = minScroll < 0 ? track / minScroll : 0;
    const span = section.offsetHeight - window.innerHeight;
    scrollToY(section.offsetTop + progress * span);
  };

  const onStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const slug = pickRef.current(e.clientX - rect.left, e.clientY - rect.top);
    if (slug) open(slug);
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-labelledby="work-title"
      className="on-dark relative bg-deep text-paper"
      style={{ height: `calc(100svh + ${travel * SCROLL_PER_PX}px)` }}
    >
      <div ref={stageRef} className="sticky top-0 h-[100svh] w-full overflow-hidden" onClick={onStageClick}>
        <span
          ref={badgeRef}
          aria-hidden="true"
          data-shown="false"
          className="ribbon-badge pointer-events-none absolute left-0 top-0 z-20 whitespace-nowrap rounded-full bg-paper px-4 py-2 text-[0.9375rem] text-ink"
        />
        {/* The canvas is prepended here; text sits above it. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 pt-20 md:pt-24">
          <h2
            id="work-title"
            className="shell max-w-[26ch] text-[clamp(1.6rem,2.7vw,2.75rem)] leading-[1.1] tracking-[-0.025em]"
          >
            {work.title}
          </h2>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 pb-6 md:pb-8">
          <div className="shell flex flex-col gap-2 text-[0.9375rem] md:flex-row md:items-end md:justify-between md:gap-6">
            <div className="flex items-center gap-5">
              <p className="whitespace-pre tabular-nums" aria-live="polite">
                {String(now + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}  {items[now]?.title}
              </p>
              <div className="pointer-events-auto flex gap-3">
                <button type="button" className="link disabled:opacity-40" onClick={(e) => (e.stopPropagation(), goTo(now - 1))} disabled={now === 0}>
                  &larr; {work.prev}
                </button>
                <button
                  type="button"
                  className="link disabled:opacity-40"
                  onClick={(e) => (e.stopPropagation(), goTo(now + 1))}
                  disabled={now === items.length - 1}
                >
                  {work.next} &rarr;
                </button>
              </div>
            </div>
            <p className="max-w-[30ch] text-dim md:text-right">{work.hint}</p>
          </div>
        </div>

        {/* Keyboard and screen-reader path to every case study the canvas shows. */}
        <ul className="sr-only">
          {ribbonProjects.map((p) => (
            <li key={p.slug}>
              <button type="button" onClick={() => open(p.slug)}>
                {work.open}: {projects[p.slug].title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
