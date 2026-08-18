"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Project } from "@/data/work";
import { useCopy } from "@/i18n/LanguageProvider";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  const { modal, projects } = useCopy();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Lock the page behind the dialog and restore focus on close. */
  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes || nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  const pc = projects[project.slug];

  return (
    <div
      className="fixed inset-0 z-[70] flex justify-center overflow-y-auto bg-ink/70 p-0 backdrop-blur-sm md:p-6"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        className="relative my-0 h-fit w-full max-w-5xl bg-paper md:my-auto md:rounded-[2rem]"
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-paper/95 px-5 py-4 backdrop-blur md:rounded-t-[2rem] md:px-10">
          <div className="min-w-0">
            <p className="eyebrow truncate">
              {project.index} / {pc.kind}
            </p>
            <p id="case-title" className="truncate text-xl font-medium tracking-[-0.02em]">
              {pc.title}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={modal.close}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform hover:rotate-90"
          >
            <span aria-hidden>✕</span>
          </button>
        </div>

        <div className="px-5 pb-16 pt-8 md:px-10 md:pt-12">
          <h2 className="display text-[clamp(2rem,6vw,4rem)]">{pc.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {pc.summary}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-line py-6 text-sm md:grid-cols-4">
            <div>
              <dt className="eyebrow">{modal.type}</dt>
              <dd className="mt-2">{pc.kind}</dd>
            </div>
            <div>
              <dt className="eyebrow">{modal.focus}</dt>
              <dd className="mt-2">{pc.focus.join(", ")}</dd>
            </div>
            <div>
              <dt className="eyebrow">{modal.status}</dt>
              <dd className="mt-2">{pc.status}</dd>
            </div>
            <div>
              <dt className="eyebrow">{modal.year}</dt>
              <dd className="mt-2">{project.year}</dd>
            </div>
          </dl>

          {project.link ? (
            <a
              href={project.link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn--solid mt-8"
            >
              {modal.visit} {project.link.label}
              <span aria-hidden>↗</span>
            </a>
          ) : null}

          {/* Case study steps */}
          <ol className="mt-14 space-y-10 md:mt-20">
            {pc.study.map((step) => (
              <li key={step.no} className="grid gap-3 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <p className="font-mono text-xs tracking-[0.16em] text-muted">{step.no}</p>
                  <h3 className="mt-2 text-xl font-medium tracking-[-0.02em]">
                    {step.label}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-muted md:col-span-9 md:text-lg">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          {/* Gallery */}
          <div className="mt-14 space-y-5 md:mt-20">
            <p className="eyebrow">{modal.gallery}</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {project.shots.map((shot, i) => (
                <figure
                  key={shot.src}
                  className={`overflow-hidden rounded-2xl border border-line bg-paper-2 ${
                    shot.ratio > 1.4 || project.shots.length === 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="relative w-full" style={{ aspectRatio: `${shot.ratio}` }}>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      loading={i < 2 ? "eager" : "lazy"}
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
