"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { useCopy, useLang } from "@/i18n/LanguageProvider";

/** Probe point just under the bar, in px from the top of the viewport. */
const NAV_PROBE_Y = 70;

/** Plain text bar on a band that swaps black/white with the section beneath it. */
export function Nav() {
  const copy = useCopy();
  const { lang, setLang, options } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // The band takes the colour of whatever section sits under it, so text never runs beneath the links.
  useEffect(() => {
    let frame = 0;
    const probe = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const under = document
          .elementsFromPoint(window.innerWidth / 2, NAV_PROBE_Y)
          .find((el) => !el.closest("header"));
        setIsDark(!!under?.closest(".on-dark"));
      });
    };
    probe();
    window.addEventListener("scroll", probe, { passive: true });
    window.addEventListener("resize", probe);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", probe);
      window.removeEventListener("resize", probe);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const langSwitch = (
    <div role="group" aria-label="Language" className="flex items-center gap-2">
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLang(option.code)}
          aria-pressed={lang === option.code}
          title={option.label}
          className={`link ${lang === option.code ? "decoration-current" : "opacity-60 hover:opacity-100"}`}
        >
          {option.short}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        {copy.nav.skip}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isDark ? "on-dark bg-deep text-paper" : "bg-paper text-ink"
        }`}
      >
        <nav aria-label="Primary" className="shell grid grid-cols-[1fr_auto] items-center py-5 text-[1rem] md:grid-cols-3">
          <a href="#top" className="text-[1.375rem] leading-none tracking-[-0.045em]">
            ivan ghazali
          </a>

          <ul className="hidden justify-center gap-4 md:flex">
            {copy.nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center justify-end gap-6 md:flex">
            {langSwitch}
            <a href={`mailto:${site.email}`} className="link">
              {copy.nav.email}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="link md:hidden"
          >
            {copy.nav.menu}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        hidden={!isOpen}
        data-lenis-prevent
        className="on-dark fixed inset-0 z-[60] overflow-y-auto bg-deep text-paper md:hidden"
      >
        <div className="shell flex min-h-full flex-col pb-8">
          <div className="flex items-center justify-between py-5">
            <span className="text-[1.375rem] leading-none tracking-[-0.045em]">ivan ghazali</span>
            <button type="button" onClick={() => setIsOpen(false)} className="link">
              {copy.nav.close}
            </button>
          </div>

          <ul className="mt-16 flex flex-col gap-2">
            {copy.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[3rem] leading-[1.1] tracking-[-0.035em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-end justify-between gap-6 pt-16 text-[1rem]">
            <a href={`mailto:${site.email}`} className="link" onClick={() => setIsOpen(false)}>
              {site.email}
            </a>
            {langSwitch}
          </div>
        </div>
      </div>
    </>
  );
}
