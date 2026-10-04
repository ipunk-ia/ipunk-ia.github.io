"use client";

import type { CSSProperties } from "react";
import { site } from "@/data/site";
import { useCopy } from "@/i18n/LanguageProvider";
import { Clock } from "@/components/Clock";

/** Black close: the whole "Let's talk" line is the email link, its letters roll over on hover. */
export function Footer() {
  const { footer } = useCopy();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="on-dark bg-deep text-paper">
      <div className="shell pt-28 md:pt-40">
        <a
          href={`mailto:${site.email}`}
          className="roll-trigger block text-[clamp(4rem,15vw,15rem)] tracking-[-0.055em]"
          aria-label={`${footer.talk}: ${site.email}`}
        >
          <span className="roll" aria-hidden="true">
            {[...footer.talk].map((char, i) => (
              <span key={i} className="roll__char" style={{ "--i": i } as CSSProperties}>
                {char}
              </span>
            ))}
          </span>
        </a>
        <p className="mt-6 max-w-[34ch] text-[1.0625rem] leading-relaxed text-dim">{footer.note}</p>
      </div>

      <div className="shell mt-24 grid gap-8 border-t border-line-dark pb-8 pt-6 text-[0.9375rem] md:mt-40 md:grid-cols-4">
        <p>
          <span className="text-dim">{footer.sayHi}</span>
          <br />
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
        </p>
        <p>
          <span className="text-dim">{footer.follow}</span>
          <br />
          <a
            href={`https://instagram.com/${site.instagram}`}
            target="_blank"
            rel="noreferrer noopener"
            className="link"
          >
            @{site.instagram}
          </a>
        </p>
        <p>
          <Clock />
          <br />
          {site.location}
        </p>
        <p className="text-dim md:text-right">
          &copy; {year} {site.name}
          <br />
          {footer.rights}
        </p>
      </div>
    </footer>
  );
}
