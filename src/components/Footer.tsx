"use client";

import { site, socials } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SplitChars, SplitSentences } from "@/components/SplitText";
import { useCopy } from "@/i18n/LanguageProvider";

export function Footer() {
  const { footer } = useCopy();

  return (
    <footer id="contact" className="relative overflow-hidden bg-paper pt-20 md:pt-28">
      <div className="shell relative">
        <Reveal>
          <p className="eyebrow">{footer.eyebrow}</p>
          <h2 className="display mt-6 text-[clamp(2.5rem,9vw,7.5rem)]">
            <SplitChars text={footer.title1} />
            <br />
            <SplitChars text={footer.title2} />
            <SplitChars text={footer.accent} className="text-flame" />
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 md:mt-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="max-w-sm text-lg leading-relaxed text-muted">
              <SplitSentences text={footer.body} />
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {footer.services.map((service) => (
                <li key={service} className="chip bg-paper">
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="md:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="group flex flex-col items-start gap-1 py-6 transition-colors hover:text-flame sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <span className="eyebrow w-24 shrink-0 group-hover:text-flame">
                      {social.label}
                    </span>
                    <span className="truncate text-lg md:text-2xl">{social.value}</span>
                    <span
                      aria-hidden
                      className="shrink-0 transition-transform duration-500 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn btn--solid">
                {footer.send}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="relative mt-20 md:mt-28">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
            <p className="eyebrow">{site.location}</p>
            <p className="eyebrow">
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>
        </div>
        <p
          aria-hidden
          className="display select-none whitespace-nowrap px-4 pb-6 text-center text-[clamp(3rem,15.5vw,16rem)] leading-[0.85] text-ink"
        >
          Ivan Ghazali
        </p>
      </div>
    </footer>
  );
}
