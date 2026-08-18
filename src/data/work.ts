export type StudyStep = {
  no: string;
  label: string;
  body: string;
};

export type Shot = {
  src: string;
  alt: string;
  /** Aspect ratio hint for layout, width / height */
  ratio: number;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  kind: string;
  status: string;
  year: string;
  focus: string[];
  summary: string;
  link?: { label: string; href: string };
  accent: "sky" | "grass" | "bubble" | "sun" | "flame";
  cover: Shot;
  shots: Shot[];
  study: StudyStep[];
};

/* ------------------------------------------------------------------ *
 * DIGITAL - UI/UX and web product work
 * ------------------------------------------------------------------ */

export const digitalWork: Project[] = [
  {
    slug: "imagin-studio",
    index: "01",
    title: "Imagin Studio",
    kind: "Real client project",
    status: "Live",
    year: "2025",
    focus: ["Web Design", "UI/UX", "Brand Experience"],
    summary:
      "A studio site for a 3D product film team. Everything on the page is rendered, nothing is photographed, so the site had to make that claim believable in the first three seconds.",
    link: {
      label: "imagin-studio-nine.vercel.app",
      href: "https://imagin-studio-nine.vercel.app/",
    },
    accent: "flame",
    cover: {
      src: "/work/imagin/cover.jpg",
      alt: "Imagin Studio website shown on desktop and mobile",
      ratio: 2550 / 4200,
    },
    shots: [
      {
        src: "/work/imagin/cover.jpg",
        alt: "Imagin Studio desktop and mobile layouts side by side",
        ratio: 2550 / 4200,
      },
    ],
    study: [
      {
        no: "01",
        label: "Brief",
        body: "An independent 3D studio needed a site that sells a hard to explain service: product films where nothing was ever filmed. The real problem was credibility. Visitors assumed the work was stock or video, not built frame by frame.",
      },
      {
        no: "02",
        label: "Direction",
        body: "Lead with the contradiction. The headline states 'Nothing here was filmed' and the hero immediately shows a real-time render the visitor can drag. The claim and the proof sit in the same viewport.",
      },
      {
        no: "03",
        label: "Exploration",
        body: "Tested a heavy cinematic dark layout against a bright editorial one. The bright version won: it puts the rendered objects in the position of gallery pieces rather than film stills, which supports the built, not shot story.",
      },
      {
        no: "04",
        label: "Final design",
        body: "Large grotesk headlines, monospace metadata lines, generous whitespace, and a client rail for UBS Gold, Mini Fan, OFTEQ, and Alter Ego. The mobile layout keeps the interactive render but stacks the proof points into a single readable column.",
      },
      {
        no: "05",
        label: "Production",
        body: "Shipped as a responsive live site with the real-time render running in the browser, not a video loop. Interaction hints are written into the interface so first-time visitors know the object responds to drag.",
      },
    ],
  },
  {
    slug: "wira-wiri",
    index: "02",
    title: "Wira Wiri",
    kind: "Design competition",
    status: "Competition / Concept",
    year: "2025",
    focus: ["UI/UX", "Product Thinking", "Visual Design"],
    summary:
      "A travel app for Indonesia that puts local guides, local food, and travel money in one flow, designed for a design competition.",
    accent: "sky",
    cover: {
      src: "/work/wirawiri/mockup.jpg",
      alt: "Wira Wiri sign up screen on a phone held in hand",
      ratio: 1792 / 2400,
    },
    shots: [
      {
        src: "/work/wirawiri/mockup.jpg",
        alt: "Wira Wiri onboarding screen in a phone mockup",
        ratio: 1792 / 2400,
      },
      {
        src: "/work/wirawiri/screens.jpg",
        alt: "Wira Wiri culinary discovery, tour guide profile, and transfer screens",
        ratio: 2420 / 2340,
      },
    ],
    study: [
      {
        no: "01",
        label: "Brief",
        body: "Travellers in Indonesia juggle three separate apps: one to find food, one to book a guide, one to move money. The competition brief asked for a single product that removes that switching cost.",
      },
      {
        no: "02",
        label: "Direction",
        body: "Treat the app as a travel companion rather than a marketplace. Photography carries the mood, the interface stays quiet, and every screen answers one question: where do I go, who takes me, how do I pay.",
      },
      {
        no: "03",
        label: "Exploration",
        body: "Mapped the flow from onboarding to booking to payment before touching visuals. Category icons went through several rounds so a first-time user can read Viral, Local Food, Noodles, and Rice Dishes at a glance without labels doing all the work.",
      },
      {
        no: "04",
        label: "Final design",
        body: "A blue system with high contrast cards. Guide profiles lead with credibility numbers: years of experience, happy travellers, languages, destinations. The wallet screen keeps transfer method, recipient, amount, and note in a single scroll with quick amount chips.",
      },
      {
        no: "05",
        label: "Production",
        body: "Delivered as a prototype with connected flows and a presentation set of screens for judging, including device mockups for the pitch deck.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * GRAPHIC - identity, apparel, print and visual explorations
 * ------------------------------------------------------------------ */

export const graphicWork: Project[] = [
  {
    slug: "orlyx",
    index: "03",
    title: "ORLYX",
    kind: "Real client project",
    status: "Live / identity system",
    year: "2025",
    focus: ["Brand Identity", "Typography", "Art Direction", "Apparel"],
    summary:
      "A full identity for a streetwear label built on restraint: one mark, one line, nothing louder than the person wearing it.",
    accent: "grass",
    cover: {
      src: "/work/orlyx/board-01.jpg",
      alt: "ORLYX brand guide cover board",
      ratio: 16 / 9,
    },
    shots: [
      { src: "/work/orlyx/board-01.jpg", alt: "ORLYX brand guide overview board", ratio: 16 / 9 },
      { src: "/work/orlyx/board-02.jpg", alt: "ORLYX brand system board", ratio: 16 / 9 },
      {
        src: "/work/orlyx/slide-12.jpg",
        alt: "ORLYX Instagram icon and apparel application",
        ratio: 1580 / 889,
      },
      { src: "/work/orlyx/slide-13.jpg", alt: "ORLYX debossed black packaging box", ratio: 395 / 223 },
      { src: "/work/orlyx/slide-14.jpg", alt: "ORLYX mailer bag with logo", ratio: 395 / 223 },
      { src: "/work/orlyx/slide-15.jpg", alt: "ORLYX seal sticker on tissue paper", ratio: 395 / 223 },
      { src: "/work/orlyx/slide-01.jpg", alt: "ORLYX mark on gradient", ratio: 395 / 223 },
      { src: "/work/orlyx/slide-05.jpg", alt: "ORLYX brand vision page", ratio: 395 / 223 },
    ],
    study: [
      {
        no: "01",
        label: "Brief",
        body: "ORLYX needed an identity for the opposite of a hype brand. The product is a wardrobe for the work nobody sees, so the branding could not shout.",
      },
      {
        no: "02",
        label: "Direction",
        body: "Black, white, and one gradient. A single geometric X mark built from four blades, set on a construction grid so it holds at sticker size and at garment scale.",
      },
      {
        no: "03",
        label: "Exploration",
        body: "Drew the mark against a strict grid to keep the negative space even in all four quadrants, then tested the lockup with the wordmark at extreme letter spacing until it read as a label rather than a logo.",
      },
      {
        no: "04",
        label: "Final design",
        body: "A brand guide covering the mark, construction, wordmark lockup, gradient, colour values, manifesto voice, and social icon behaviour inside the circular Instagram crop.",
      },
      {
        no: "05",
        label: "Production",
        body: "Applied across apparel graphics, debossed packaging boxes, mailer bags, seal stickers, and a social feed system so the identity survives the jump from screen to physical product.",
      },
    ],
  },
  {
    slug: "poster-series",
    index: "04",
    title: "Daily Poster Series",
    kind: "Graphic / visual exploration",
    status: "Ongoing series",
    year: "2025",
    focus: ["Typography", "Photo Manipulation", "Composition", "Experimental"],
    summary:
      "A running poster practice. One idea, one dominant colour, one piece of type doing the heavy lifting, made to keep composition instincts sharp.",
    accent: "flame",
    cover: {
      src: "/work/posters/poster-07.jpg",
      alt: "NO PRIVACY poster in orange with halftone eye",
      ratio: 1414 / 2000,
    },
    shots: Array.from({ length: 13 }, (_, i) => {
      const n = String(i + 1).padStart(2, "0");
      return {
        src: `/work/posters/poster-${n}.jpg`,
        alt: `Poster ${n} from the daily poster series`,
        ratio: 1414 / 2000,
      };
    }),
    study: [
      {
        no: "01",
        label: "Brief",
        body: "A self directed series with one rule: each poster has to communicate a single idea that a viewer catches while scrolling past.",
      },
      {
        no: "02",
        label: "Direction",
        body: "Flat saturated grounds, heavy halftone treatment on the imagery, and one condensed statement in white. Metadata runs vertically along the edge like a print credit line.",
      },
      {
        no: "03",
        label: "Exploration",
        body: "Each piece starts from a photographic fragment pushed through duotone and halftone until it stops reading as a photo and starts reading as texture, then type is placed to cut across it.",
      },
      {
        no: "04",
        label: "Final design",
        body: "Thirteen posters at print proportion, each carrying its own colour and subject while sharing the same typographic grid and credit system.",
      },
      {
        no: "05",
        label: "Production",
        body: "Exported print ready at poster ratio, plus cropped versions for social. The consistent credit line lets the series read as one body of work even when posted one at a time.",
      },
    ],
  },
];

export const allWork: Project[] = [...digitalWork, ...graphicWork];

/** Full-bleed mosaic behind the hero headline, four moving rows. */
export const mosaicRows: { src: string; alt: string; span: number }[][] = [
  [
    { src: "/work/posters/poster-01.jpg", alt: "", span: 1 },
    { src: "/work/orlyx/board-01.jpg", alt: "", span: 2 },
    { src: "/work/posters/poster-07.jpg", alt: "", span: 1 },
    { src: "/work/wirawiri/screens.jpg", alt: "", span: 2 },
    { src: "/work/posters/poster-03.jpg", alt: "", span: 1 },
    { src: "/work/orlyx/slide-13.jpg", alt: "", span: 2 },
  ],
  [
    { src: "/work/imagin/cover.jpg", alt: "", span: 2 },
    { src: "/work/posters/poster-05.jpg", alt: "", span: 1 },
    { src: "/work/orlyx/slide-12.jpg", alt: "", span: 2 },
    { src: "/work/posters/poster-09.jpg", alt: "", span: 1 },
    { src: "/work/wirawiri/mockup.jpg", alt: "", span: 1 },
    { src: "/work/orlyx/slide-14.jpg", alt: "", span: 2 },
  ],
  [
    { src: "/work/posters/poster-11.jpg", alt: "", span: 1 },
    { src: "/work/orlyx/board-02.jpg", alt: "", span: 2 },
    { src: "/work/posters/poster-02.jpg", alt: "", span: 1 },
    { src: "/work/orlyx/slide-15.jpg", alt: "", span: 2 },
    { src: "/work/posters/poster-12.jpg", alt: "", span: 1 },
    { src: "/work/posters/poster-06.jpg", alt: "", span: 1 },
  ],
  [
    { src: "/work/orlyx/slide-01.jpg", alt: "", span: 2 },
    { src: "/work/posters/poster-13.jpg", alt: "", span: 1 },
    { src: "/work/posters/poster-04.jpg", alt: "", span: 1 },
    { src: "/work/orlyx/slide-05.jpg", alt: "", span: 2 },
    { src: "/work/posters/poster-08.jpg", alt: "", span: 1 },
    { src: "/work/posters/poster-10.jpg", alt: "", span: 1 },
  ],
];

export type ShowcaseCard = {
  slug: string;
  src: string;
  alt: string;
  title: string;
  desc: string;
  category: "UI/UX" | "Web" | "Brand" | "Poster";
};

/** Tilted card rail under the intro. */
export const showcaseCards: ShowcaseCard[] = [
  {
    slug: "imagin-studio",
    src: "/work/imagin/cover.jpg",
    alt: "Imagin Studio website",
    title: "Imagin Studio",
    desc: "A live studio site for a 3D product film team, built so the render itself is the proof.",
    category: "Web",
  },
  {
    slug: "wira-wiri",
    src: "/work/wirawiri/screens.jpg",
    alt: "Wira Wiri app screens",
    title: "Wira Wiri",
    desc: "Travel app putting local guides, local food, and travel money into one flow.",
    category: "UI/UX",
  },
  {
    slug: "orlyx",
    src: "/work/orlyx/board-01.jpg",
    alt: "ORLYX brand guide",
    title: "ORLYX Identity",
    desc: "A streetwear identity built on restraint: one mark, one line, nothing louder.",
    category: "Brand",
  },
  {
    slug: "poster-series",
    src: "/work/posters/poster-07.jpg",
    alt: "No Privacy poster",
    title: "Daily Posters",
    desc: "Thirteen posters where one idea has to land while someone scrolls past.",
    category: "Poster",
  },
  {
    slug: "wira-wiri",
    src: "/work/wirawiri/mockup.jpg",
    alt: "Wira Wiri onboarding",
    title: "Wira Wiri Onboarding",
    desc: "Photography carries the mood, the interface stays quiet and out of the way.",
    category: "UI/UX",
  },
  {
    slug: "orlyx",
    src: "/work/orlyx/slide-12.jpg",
    alt: "ORLYX apparel and social",
    title: "ORLYX Apparel",
    desc: "The mark taken from screen to garment, packaging, and a social feed system.",
    category: "Brand",
  },
  {
    slug: "poster-series",
    src: "/work/posters/poster-11.jpg",
    alt: "Poster from the series",
    title: "Print Explorations",
    desc: "Halftone, duotone, and condensed type pushed until the photo becomes texture.",
    category: "Poster",
  },
];

/** Thumbnails used by the moving strips in the hero. */
export const heroStrip = [
  { src: "/work/imagin/cover.jpg", alt: "Imagin Studio site", tag: "Web" },
  { src: "/work/wirawiri/screens.jpg", alt: "Wira Wiri app screens", tag: "UI/UX" },
  { src: "/work/posters/poster-07.jpg", alt: "No Privacy poster", tag: "Poster" },
  { src: "/work/orlyx/board-01.jpg", alt: "ORLYX brand guide", tag: "Brand" },
  { src: "/work/posters/poster-03.jpg", alt: "Poster series", tag: "Poster" },
  { src: "/work/wirawiri/mockup.jpg", alt: "Wira Wiri mockup", tag: "UI/UX" },
  { src: "/work/posters/poster-11.jpg", alt: "Poster series", tag: "Print" },
  { src: "/work/orlyx/slide-12.jpg", alt: "ORLYX apparel", tag: "Apparel" },
  { src: "/work/posters/poster-05.jpg", alt: "Poster series", tag: "Poster" },
  { src: "/work/orlyx/slide-14.jpg", alt: "ORLYX packaging", tag: "Brand" },
] as const;
