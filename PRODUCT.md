# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Creative directors, design leads, and recruiters at agencies and creative studios, screening candidates for an in-house designer role. They open many portfolios in a row, decide within seconds whether to keep looking, and judge taste and craft before reading any copy.

## Product Purpose
Personal portfolio of Ivan Ghazali, a UI/UX, web, and graphic designer based in Semarang, Indonesia (2 years designing). Success means a studio reviewer shortlists Ivan for a full-time, in-house position and gets in touch by email.

## Positioning
One designer who covers the full range a studio hires for: brand and poster work with a strong graphic eye, plus interfaces and websites he designs and ships live himself. The work itself must prove the creative claim; the owner's stated problem with the previous version was that nothing on it showed he is a creative person.

## Operating Context
- Reviewers arrive from a job application, CV link, or DM, usually on desktop, sometimes on a phone.
- Contact happens by email (ivanghazali.creative@gmail.com). WhatsApp was deliberately removed. Instagram handle: ghazali.yyy.
- Copy is bilingual, English default with an Indonesian toggle (`src/i18n/dict.ts`).

## Capabilities and Constraints
- Next.js 16 static export, deployed on Vercel (project `ivan_creative_portofolio`, production from `main`). No server, no on-request image optimisation.
- Images are pre-built to fixed widths by `scripts/gen-images.sh` and served through `src/lib/image-loader.ts`; widths must match `next.config.ts`.
- `/work/*` is served `immutable` for a year (`vercel.json`): replacing an image means giving it a new filename, or returning visitors keep the old one.
- Case studies open in a modal driven by `src/data/work.ts`.
- Owned font files: PP Mori (Regular, SemiBold, Extralight) in `src/fonts/`.

## Brand Commitments
- Name: Ivan Ghazali. Roles: UI/UX Designer, Web Designer, Graphic Designer. AI is part of the workflow; creative direction stays human-led.
- No personal backstory as a hook: the work carries the personality.
- No em-dash or en-dash in headlines, buttons, or pills.

## Evidence on Hand
Lead work, in the owner's priority:
- Graphic and brand: ORLYX streetwear identity (real client, `public/work/orlyx/`), Random Poster Series, 14 posters (`public/work/posters/`).
- Websites, all live: Imagin Studio (real client), NISO Studio, Wastu Home Building Studio, Webzonly (self-directed, fictional clients).
- UI/UX: Wira Wiri travel app (design competition, `public/work/wirawiri/`).

Supporting, not lead: Gen AI imagery (`public/work/gen-ai/`), YouTube thumbnail design (`public/work/thumbnails/`).

Portrait shown on the site: `public/work/me/portrait-collage.jpg`, the owner-chosen crop (2026-10-04) of the self-portrait collage poster 09 (original `Document/PORTOFOLIO/POSTER 9.jpg`, crop 1050x1090 at x190 y430); it faces the camera. `public/work/me/portrait.jpg` faces away and is no longer used.

Absent and must not be fabricated: testimonials, client logos, awards, metrics beyond those in `src/data/work.ts`, a downloadable CV file.

## Product Principles
1. The work is the argument. Every section either shows work or gets out of its way.
2. Show range without diluting taste: graphic and digital sit side by side as one sensibility, not two portfolios.
3. A reviewer should reach a strong piece within the first viewport and the email within one action from anywhere.
4. Truthful labels: real client, competition, and self-directed work are named as such.

## Accessibility & Inclusion
No product-specific requirement established beyond WCAG AA contrast, keyboard access, and reduced-motion support.
