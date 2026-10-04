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
  {
    slug: "niso-studio",
    index: "05",
    title: "NISO Studio",
    kind: "Self-directed project",
    status: "Live",
    year: "2025",
    focus: ["Web Design", "UI/UX", "Editorial Layout"],
    summary:
      "A site for a fictional Jakarta creative studio, built around one line: clarity as a discipline. The design work itself had to demonstrate the restraint the copy talks about.",
    link: {
      label: "niso-site.vercel.app",
      href: "https://niso-site.vercel.app/",
    },
    accent: "sun",
    cover: {
      src: "/work/niso/cover.jpg",
      alt: "NISO Studio homepage with a design desk photo and the headline Clarity, as a discipline",
      ratio: 2,
    },
    shots: [
      {
        src: "/work/niso/cover.jpg",
        alt: "NISO Studio hero section with layered serif headline over a studio desk",
        ratio: 2,
      },
      {
        src: "/work/niso/work-wall.jpg",
        alt: "NISO Studio work index with project photography in a two-column wall",
        ratio: 2,
      },
    ],
    study: [
      {
        no: "01",
        label: "Brief",
        body: "Build a credible studio site for a design practice whose whole pitch is restraint. The layout could not out-shout the claim it was making.",
      },
      {
        no: "02",
        label: "Direction",
        body: "A dark editorial hero with a single serif headline layered over documentary studio photography, then a full switch to a light, almost archival index for the work itself.",
      },
      {
        no: "03",
        label: "Exploration",
        body: "Tried a grid-heavy portfolio layout first; it read as a template. Rebuilt it as an asymmetric two-column wall so each project photo keeps its own size and crop, which reads as curated rather than generated.",
      },
      {
        no: "04",
        label: "Final design",
        body: "Serif display type for statements, a monospace-adjacent label system for awards and publications, and generous negative space between sections so the achievements list doesn't compete with the work.",
      },
      {
        no: "05",
        label: "Production",
        body: "Shipped as a live Next.js site on Vercel, with the work wall and achievements sections built to take new projects without touching the layout.",
      },
    ],
  },
  {
    slug: "wastu-home-building",
    index: "06",
    title: "Wastu Home Building Studio",
    kind: "Self-directed project",
    status: "Live",
    year: "2025",
    focus: ["Web Design", "UI/UX", "Art Direction"],
    summary:
      "A site for a fictional home-building studio, built on the idea that the work worth showing is the part no one sees: foundation, framing, and finish.",
    link: {
      label: "contractor-site-omega.vercel.app",
      href: "https://contractor-site-omega.vercel.app/",
    },
    accent: "bubble",
    cover: {
      src: "/work/wastu/cover.jpg",
      alt: "Wastu Home Building Studio hero photo of a construction site at sunset",
      ratio: 2,
    },
    shots: [
      {
        src: "/work/wastu/cover.jpg",
        alt: "Wastu homepage hero with a sunset construction site and project size counter",
        ratio: 2,
      },
      {
        src: "/work/wastu/detail.jpg",
        alt: "Wastu about section with founded year, principal name, and services list",
        ratio: 2,
      },
    ],
    study: [
      {
        no: "01",
        label: "Brief",
        body: "A construction studio needed a site that reads as considered as an architecture practice, not a directory listing for a contractor.",
      },
      {
        no: "02",
        label: "Direction",
        body: "Full-bleed site photography as the hero, a plain-spoken headline ('Built to last.'), and a fact sheet layout for founding year, principal, and services instead of marketing copy.",
      },
      {
        no: "03",
        label: "Exploration",
        body: "Tested a portfolio-grid homepage against a single-scroll narrative. The scroll version won: it lets one project's story (340 square metres, ground to finish) carry the whole first impression instead of splitting attention across thumbnails.",
      },
      {
        no: "04",
        label: "Final design",
        body: "Warm, unstyled documentary photography, a plain sans headline system, and a thin-rule fact-sheet grid that reads more like a building permit than a brochure.",
      },
      {
        no: "05",
        label: "Production",
        body: "Shipped as a live Next.js site on Vercel, structured to take new project galleries under the same fact-sheet pattern.",
      },
    ],
  },
  {
    slug: "webzonly",
    index: "07",
    title: "Webzonly",
    kind: "Self-directed project",
    status: "Live",
    year: "2025",
    focus: ["Web Design", "Art Direction", "Motion"],
    summary:
      "A digital craft studio site built to prove a point about scroll: 'websites that behave like objects, weighted, responsive, and impossible to scroll past.' A full-bleed Earth shot under a serif wordmark opens the case.",
    link: {
      label: "webzonly.vercel.app",
      href: "https://webzonly.vercel.app/",
    },
    accent: "sky",
    cover: {
      src: "/work/webzonly/cover.jpg",
      alt: "Webzonly homepage with an Earth-from-orbit hero image behind the WEBZONLY wordmark",
      ratio: 2,
    },
    shots: [
      {
        src: "/work/webzonly/cover.jpg",
        alt: "Webzonly hero with the serif WEBZONLY wordmark over an orbital Earth photo",
        ratio: 2,
      },
      {
        src: "/work/webzonly/case-card.jpg",
        alt: "Webzonly case study card for Sable Studio with a portrait background and gradient title",
        ratio: 2,
      },
    ],
    study: [
      {
        no: "01",
        label: "Brief",
        body: "Build a studio site whose interaction model is the pitch: heavy, weighted scroll rather than a fast, disposable scroll.",
      },
      {
        no: "02",
        label: "Direction",
        body: "Oversized serif type over full-bleed photography for both the hero and every case card, so each scroll stop reads like a magazine spread rather than a grid item.",
      },
      {
        no: "03",
        label: "Exploration",
        body: "Pushed the scroll weighting until cards felt like they had mass, then pulled it back once fast scrolling started to fight the browser instead of guiding it — the brief was 'weighted,' not 'blocked.'",
      },
      {
        no: "04",
        label: "Final design",
        body: "A dark, editorial system: one serif display face, minimal chrome (CONTACTS / MENU only), and gradient-foil title treatments on each case card that shift with the background photo.",
      },
      {
        no: "05",
        label: "Production",
        body: "Shipped as a live Next.js site on Vercel, with the case-card component built to drop in new studio work without changing the scroll mechanics.",
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
        src: "/work/orlyx/slide-12.png",
        alt: "ORLYX Instagram icon and apparel application",
        ratio: 1580 / 889,
      },
      { src: "/work/orlyx/slide-13.png", alt: "ORLYX debossed black packaging box", ratio: 395 / 223 },
      { src: "/work/orlyx/slide-14.png", alt: "ORLYX mailer bag with logo", ratio: 395 / 223 },
      { src: "/work/orlyx/slide-15.png", alt: "ORLYX seal sticker on tissue paper", ratio: 395 / 223 },
      { src: "/work/orlyx/slide-01.png", alt: "ORLYX mark on gradient", ratio: 395 / 223 },
      { src: "/work/orlyx/slide-05.png", alt: "ORLYX brand vision page", ratio: 395 / 223 },
    ],
    study: [
      {
        no: "01",
        label: "Brief",
        body: "ORLYX needed an identity for the opposite of a hype brand. The client asked for a mark that reads sharp before it reads loud: quiet luxury, cut edges, and a clear sense of forward vision carried by an arrow.",
      },
      {
        no: "02",
        label: "Direction",
        body: "Black, white, and one gradient. A single geometric X built from four blades, every arm cut to an arrowhead so the mark points outward in all four directions, set on a construction grid so the edges stay keen at sticker size and at garment scale.",
      },
      {
        no: "03",
        label: "Exploration",
        body: "Sharpened the blade angles against a strict grid until the negative space stayed even across all four quadrants, testing how far each arm could be cut before the arrow read as aggression instead of direction. Then set the wordmark at extreme letter spacing until the lockup read as a label rather than a logo.",
      },
      {
        no: "04",
        label: "Final design",
        body: "A brand guide covering the mark, its cut angles and construction, the wordmark lockup, gradient, colour values, manifesto voice, and social icon behaviour inside the circular Instagram crop.",
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
    title: "Random Poster Series",
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
    // Posters 01, 02 and 12 were shirt graphics; they now live in the T-shirt Design project.
    shots: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14].map((i) => {
      const n = String(i).padStart(2, "0");
      return {
        src: `/work/posters/poster-${n}.jpg`,
        alt: `Poster ${n} from the random poster series`,
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
        body: "Eleven posters at print proportion, each carrying its own colour and subject while sharing the same typographic grid and credit system.",
      },
      {
        no: "05",
        label: "Production",
        body: "Exported print ready at poster ratio, plus cropped versions for social. The consistent credit line lets the series read as one body of work even when posted one at a time.",
      },
    ],
  },
  {
    slug: "youtube-thumbnails",
    index: "08",
    title: "YouTube Thumbnail Design",
    kind: "Self-directed project",
    status: "Ongoing series",
    year: "2025",
    focus: ["Photo Manipulation", "Thumbnail Design", "Composite", "Typography"],
    summary:
      "Thumbnails built the way editorial composites are: a real portrait cut cleanly from its background, then staged against a graphic or photo scene until the two read as one shot, not a sticker on a photo.",
    accent: "flame",
    cover: {
      src: "/work/thumbnails/uber-the-truth.jpg",
      alt: "THE TRUTH thumbnail with a torn-paper Uber investigation corkboard",
      ratio: 16 / 9,
    },
    shots: [
      {
        src: "/work/thumbnails/ai-voice-agent.jpg",
        alt: "AI Voice Agent No Code thumbnail with a shocked face and an n8n workflow diagram",
        ratio: 16 / 9,
      },
      {
        src: "/work/thumbnails/uber-the-truth.jpg",
        alt: "THE TRUTH thumbnail with a torn-paper Uber investigation corkboard",
        ratio: 16 / 9,
      },
      {
        src: "/work/thumbnails/uber-i-was-wrong.jpg",
        alt: "I WAS WRONG thumbnail with burning cash and a falling stock chart behind the Uber logo",
        ratio: 16 / 9,
      },
    ],
    study: [
      {
        no: "01",
        label: "Brief",
        body: "A YouTube thumbnail has one job in a crowded feed: stop the scroll in under a second. That meant every composite had to read clearly at a thumbnail's actual on-screen size, not just at full resolution.",
      },
      {
        no: "02",
        label: "Direction",
        body: "Cut the subject clean from its source photo, then rebuild the lighting and colour grade around it so the composite reads as one consistent scene: a screen-lit face against a UI diagram, a portrait dropped into a torn-paper evidence board, a hand-on-forehead reaction lit by a burning-money graphic.",
      },
      {
        no: "03",
        label: "Exploration",
        body: "Tested how far the supporting graphic (workflow nodes, corkboard photos, a falling stock line) could be pushed toward the background before it stopped supporting the headline and started competing with the face for attention.",
      },
      {
        no: "04",
        label: "Final design",
        body: "A repeatable system: one expressive portrait, one high-contrast headline in a bold display face, and one graphic element doing the storytelling work, so a viewer gets the video's premise before they read a single word.",
      },
      {
        no: "05",
        label: "Production",
        body: "Exported at 1920×1080, the standard YouTube thumbnail size, and checked at actual feed size, not just at full resolution, since that's the size the click decision actually happens at.",
      },
    ],
  },
  {
    slug: "tshirt-design",
    index: "10",
    title: "T-shirt Design",
    kind: "Apparel graphics",
    status: "Ongoing series",
    year: "2025",
    focus: ["Apparel Graphics", "Illustration", "Display Lettering", "Composition"],
    summary:
      "Shirt graphics in two registers: loud front prints built like band merch, and the quiet typographic back prints of the ORLYX streetwear line. Either way the garment has to read from across a room.",
    accent: "flame",
    cover: {
      src: "/work/tshirts/damnation.jpg",
      alt: "Damnation t-shirt graphic: a knight on horseback inside a thorn-ringed crest under flame lettering",
      ratio: 1100 / 1556,
    },
    shots: [
      {
        src: "/work/tshirts/dope-squad.jpg",
        alt: "Dope Squad t-shirt graphic: a helmeted skull biting a bullet over crossed rifles",
        ratio: 1100 / 1556,
      },
      {
        src: "/work/tshirts/damnation.jpg",
        alt: "Damnation t-shirt graphic: a knight on horseback inside a thorn-ringed crest under flame lettering",
        ratio: 1100 / 1556,
      },
      {
        src: "/work/tshirts/castigo.jpg",
        alt: "Castigo t-shirt graphic: an engraved angel wrestling a red devil under a heavy black serif title",
        ratio: 1414 / 2000,
      },
      {
        src: "/work/tshirts/chill-astronaut.jpg",
        alt: "Chill t-shirt graphic: a duotone astronaut inside an arch under chrome lettering, IGY 2008 to 3008",
        ratio: 1100 / 1555,
      },
      {
        src: "/work/tshirts/orlyx-tee-01.jpg",
        alt: "ORLYX tee, back print reading How's the view from back there, small logo on the front",
        ratio: 2200 / 1466,
      },
      {
        src: "/work/tshirts/orlyx-tee-02.jpg",
        alt: "ORLYX tee, back print Hungry in Silence, Loud Result with engraved figures",
        ratio: 2200 / 1466,
      },
      {
        src: "/work/tshirts/orlyx-tee-03.jpg",
        alt: "ORLYX tee, back print of a figure planting an ORLYX flag, front text block",
        ratio: 2200 / 1466,
      },
      {
        src: "/work/tshirts/orlyx-tee-04.jpg",
        alt: "ORLYX tee, back print Move Quietly, Arrive Loudly, front orange outline mark",
        ratio: 2200 / 1466,
      },
      {
        src: "/work/tshirts/burn-it.jpg",
        alt: "Burn It tee mockup: washed black shirt with a chrome car in blue flames across the hem and a pink chest line",
        ratio: 1802 / 1758,
      },
    ],
    study: [], // case study copy lives in src/i18n/dict.ts (projects["tshirt-design"])
  },
];

/* ------------------------------------------------------------------ *
 * GEN AI - generated imagery
 * ------------------------------------------------------------------ */

const genAiShots: [string, string, number][] = [
  ["diverse-moss-cream", "Green glass moss cream jar resting on wet forest moss in morning light", 1493 / 2000],
  ["forest-serum-trio", "Three amber dropper bottles on mossy rocks in a misty forest", 1493 / 2000],
  ["amor-shampoo", "Black AMOR shampoo bottle floating with fern, orchid and charcoal", 1493 / 2000],
  ["chrome-couture", "Couture portrait in a crystal mesh bodysuit and chrome corset holding a blade", 896 / 1280],
  ["graffiti-fisheye", "Fisheye editorial portrait inside a graffiti covered bathroom stall", 1493 / 2000],
  ["rainforest-floor", "Sunlit rainforest floor with mossy rocks and ferns", 1493 / 2000],
  ["moss-cream-jar", "Moss cream jar on a wooden kitchen table, phone snapshot style", 764 / 1024],
  ["honey-lemon-beer", "Tall glass of iced honey lemon beer with an orange slice", 1493 / 2000],
  ["strawberry-beer", "Short glass of strawberry beer with sliced strawberries and ice", 1493 / 2000],
  ["lakeside-garden", "Lawn opening onto a lake framed by flowering bushes", 1493 / 2000],
  ["strawberries", "Whole and halved strawberries on white", 1493 / 2000],
  ["orange-slices", "Floating orange rounds and wedges on white", 1493 / 2000],
  ["dino-nugget-plate", "Plate of dinosaur shaped nuggets with fries, peas, corn and tomatoes", 1493 / 2000],
  ["dino-nugget-trex", "Single T-rex shaped chicken nugget on white", 1493 / 2000],
  ["dino-nugget-cutout", "T-rex nugget cutout on a transparency grid", 1493 / 2000],
];

export const genAiWork: Project = {
  slug: "gen-ai",
  index: "09",
  title: "Gen AI Imagery",
  kind: "Generative AI / art direction",
  status: "Ongoing practice",
  year: "2025",
  focus: ["Generative AI", "Product Visuals", "Art Direction", "Compositing"],
  summary:
    "Product shots, editorial portraits and composite assets made with image generation, then art directed and retouched until they hold up next to a real photo shoot.",
  accent: "grass",
  cover: {
    src: "/work/gen-ai/diverse-moss-cream.jpg",
    alt: genAiShots[0][1],
    ratio: genAiShots[0][2],
  },
  shots: genAiShots.map(([name, alt, ratio]) => ({
    src: `/work/gen-ai/${name}.jpg`,
    alt,
    ratio,
  })),
  study: [
    {
      no: "01",
      label: "Brief",
      body: "Treat generation like a photo shoot, not a slot machine: decide the product, the light and the mood first, then generate toward that instead of picking whatever comes out.",
    },
    {
      no: "02",
      label: "Direction",
      body: "Each set has one lighting story. Low morning sun through forest haze for skincare, a clean studio gradient for the floating bottle, hard flash and fisheye for the street portrait.",
    },
    {
      no: "03",
      label: "Exploration",
      body: "Many rounds per image, adjusting lens, angle and surface detail (condensation, crumb texture, fabric sparkle) until the small things stop giving the image away.",
    },
    {
      no: "04",
      label: "Final design",
      body: "Standalone hero images, plus isolated assets like the beer glasses, fruit and garden that were generated separately and composited into the Honey Lemon and Strawberry Beer poster.",
    },
    {
      no: "05",
      label: "Production",
      body: "Labels and type are set by hand afterwards, then colour graded and cleaned up so the output is ready for social, packaging mockups or poster work.",
    },
  ],
};

export const allWork: Project[] = [...digitalWork, ...graphicWork, genAiWork];

/* ------------------------------------------------------------------ *
 * HOME PAGE PICKS - which pictures each section shows
 * ------------------------------------------------------------------ */

export type Pic = { src: string; alt: string };

/** Welcome stack, opened one by one. The last one is also the front frame of the hero stack. */
export const welcomeFrames: Pic[] = [
  { src: "/work/tshirts/dope-squad.jpg", alt: "" },
  { src: "/work/gen-ai/honey-lemon-beer.jpg", alt: "" },
  { src: "/work/imagin/cover.jpg", alt: "" },
  { src: "/work/posters/poster-11.jpg", alt: "" },
  { src: "/work/posters/poster-07.jpg", alt: "No Privacy poster from the Random Poster Series" },
];

/** The rest of the hero deck, behind the welcome's last frame. The loop shuffles them through the front. */
export const heroStack: Pic[] = [
  { src: "/work/tshirts/damnation.jpg", alt: "Damnation t-shirt graphic" },
  { src: "/work/imagin/cover.jpg", alt: "Imagin Studio website" },
  { src: "/work/posters/poster-03.jpg", alt: "Poster from the Random Poster Series" },
  { src: "/work/wirawiri/screens.jpg", alt: "Wira Wiri app screens" },
  { src: "/work/tshirts/chill-astronaut.jpg", alt: "Chill astronaut t-shirt graphic" },
  { src: "/work/posters/poster-11.jpg", alt: "Poster from the Random Poster Series" },
];

/** Case studies on the WebGL ribbon, in the order a studio reviewer should meet them. */
export const ribbonOrder = [
  "orlyx",
  "poster-series",
  "tshirt-design",
  "imagin-studio",
  "niso-studio",
  "wira-wiri",
  "wastu-home-building",
  "webzonly",
  "youtube-thumbnails",
  "gen-ai",
] as const;

/** Scattered archive grid. col/span are 12-column positions on desktop; drop shifts the tile down. */
export const archiveTiles: (Pic & { slug: string; ratio: number; col: number; span: number; drop: number })[] = [
  { slug: "poster-series", src: "/work/posters/poster-07.jpg", alt: "No Privacy poster", ratio: 1100 / 1556, col: 1, span: 3, drop: 8 },
  { slug: "orlyx", src: "/work/orlyx/slide-13.png", alt: "ORLYX identity applied to packaging", ratio: 1580 / 889, col: 5, span: 4, drop: 16 },
  { slug: "poster-series", src: "/work/posters/poster-13.jpg", alt: "Poster from the Random Poster Series", ratio: 1100 / 1556, col: 10, span: 3, drop: 0 },
  { slug: "orlyx", src: "/work/orlyx/board-02.jpg", alt: "ORLYX brand guide board", ratio: 2200 / 1237, col: 1, span: 5, drop: 6 },
  { slug: "youtube-thumbnails", src: "/work/thumbnails/uber-i-was-wrong.jpg", alt: "YouTube thumbnail composite", ratio: 16 / 9, col: 7, span: 3, drop: 2 },
  { slug: "gen-ai", src: "/work/gen-ai/honey-lemon-beer.jpg", alt: "Honey Lemon beer poster made with image generation", ratio: 1493 / 2000, col: 11, span: 2, drop: 14 },
  { slug: "poster-series", src: "/work/posters/poster-05.jpg", alt: "Poster from the Random Poster Series", ratio: 1100 / 1556, col: 2, span: 3, drop: 4 },
  { slug: "tshirt-design", src: "/work/tshirts/damnation.jpg", alt: "Damnation t-shirt graphic", ratio: 1100 / 1556, col: 5, span: 3, drop: 10 },
  { slug: "tshirt-design", src: "/work/tshirts/chill-astronaut.jpg", alt: "Chill astronaut t-shirt graphic", ratio: 1100 / 1555, col: 10, span: 3, drop: 6 },
  { slug: "gen-ai", src: "/work/gen-ai/chrome-couture.jpg", alt: "Generated chrome couture portrait", ratio: 896 / 1280, col: 8, span: 2, drop: 12 },
];

/** One picture per service row, shown beside the cursor on hover. */
export const servicePics: Pic[] = [
  { src: "/work/wirawiri/screens.jpg", alt: "" },
  { src: "/work/imagin/cover.jpg", alt: "" },
  { src: "/work/posters/poster-07.jpg", alt: "" },
];
