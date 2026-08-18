"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { useCopy, useLang } from "@/i18n/LanguageProvider";

const SCROLL_TRIGGER = 40;

export function Nav() {
  const copy = useCopy();
  const { lang, setLang, options } = useLang();
  const LINKS = copy.nav.links;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_TRIGGER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
      >
        {copy.nav.skip}
      </a>

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="shell">
          <nav
            aria-label="Primary"
            className={`mt-3 flex items-center justify-between rounded-full py-2 pl-4 pr-2 transition-all duration-500 md:mt-4 md:pl-6 ${
              isScrolled
                ? "bg-paper/85 shadow-[0_1px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
                : "bg-transparent"
            }`}
          >
            <a
              href="#top"
              className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-medium tracking-tight transition-colors ${
                isScrolled ? "text-ink" : "text-paper"
              }`}
            >
              <span
                className={`relative block h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 transition-colors ${
                  isScrolled ? "ring-line" : "ring-paper/30"
                }`}
              >
                <Image
                  src="/work/me/portrait.jpg"
                  alt=""
                  fill
                  sizes="32px"
                  className="scale-[1.6] object-cover object-[62%_28%]"
                />
              </span>
              {site.name}
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    isScrolled
                      ? "text-muted hover:bg-ink hover:text-paper"
                      : "text-paper/70 hover:bg-paper/15 hover:text-paper"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              {/* Language switch */}
              <div
                role="group"
                aria-label="Language"
                className={`ml-2 flex items-center rounded-full p-0.5 ${
                  isScrolled ? "bg-paper-2" : "bg-paper/15"
                }`}
              >
                {options.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => setLang(option.code)}
                    aria-pressed={lang === option.code}
                    title={option.label}
                    className={`rounded-full px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] transition-colors ${
                      lang === option.code
                        ? "bg-ink text-paper"
                        : isScrolled
                          ? "text-muted hover:text-ink"
                          : "text-paper/70 hover:text-paper"
                    }`}
                  >
                    {option.short}
                  </button>
                ))}
              </div>

              <a
                href="#contact"
                className={`btn ml-2 whitespace-nowrap py-2.5 text-sm ${isScrolled ? "btn--solid" : "btn--light"}`}
              >
                {copy.nav.cta}
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors lg:hidden ${
                isScrolled ? "bg-ink text-paper" : "bg-paper text-ink"
              }`}
            >
              <span aria-hidden className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                    isOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                    isOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </nav>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="fixed inset-0 z-40 overflow-y-auto bg-ink px-6 pb-10 pt-24 text-paper lg:hidden"
      >
        <div
          role="group"
          aria-label="Language"
          className="mb-6 flex items-center gap-1 rounded-full bg-paper/10 p-1"
        >
          {options.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => setLang(option.code)}
              aria-pressed={lang === option.code}
              className={`flex-1 rounded-full px-4 py-2.5 font-mono text-xs tracking-[0.1em] transition-colors ${
                lang === option.code ? "bg-paper text-ink" : "text-paper/70"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <ul className="flex flex-col gap-1">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="display block border-b border-paper/10 py-5 text-4xl text-paper"
              >
                <span className="eyebrow mr-4 text-paper/40">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${site.email}`}
          className="btn btn--light mt-10 w-full justify-center"
          onClick={() => setIsOpen(false)}
        >
          {site.email}
        </a>
      </div>
    </>
  );
}
