export type Lang = "en" | "id";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
];

export type Discipline = { no: string; title: string; body: string; items: string[]; color: string };
type Principle = { no: string; title: string; body: string };
type Study = { no: string; label: string; body: string };

type ProjectCopy = {
  title: string;
  kind: string;
  status: string;
  focus: string[];
  summary: string;
  study: Study[];
};

export type Copy = {
  nav: { links: { label: string; href: string }[]; cta: string; skip: string };
  hero: { eyebrow: string; tagline: string; primary: string; secondary: string; available: string };
  intro: {
    eyebrow: string;
    headline: [string, string, string, string, string];
    body1: string;
    body2: string;
    stats: { value: string; label: string }[];
    proofTitle: string;
    proof: { label: string; items: string[] }[];
  };
  showcase: {
    eyebrow: string;
    line1: string;
    line2a: string;
    line2b: string;
    filters: string[];
    cards: { title: string; desc: string }[];
    view: string;
    prev: string;
    next: string;
  };
  craft: { eyebrow: string; title1: string; title2: string; note: string };
  disciplines: Discipline[];
  digital: {
    eyebrow: string;
    title: string;
    note: string;
    focus: string;
    status: string;
    read: string;
    visit: string;
  };
  graphic: { eyebrow: string; title: string; note: string; viewAll: string };
  genAi: { eyebrow: string; title: string; note: string };
  approach: { eyebrow: string; title1: string; title2: string; note: string };
  principles: Principle[];
  play: {
    eyebrow: string;
    title1: string;
    title2: string;
    note: string;
    shake: string;
    hint: string;
  };
  footer: {
    eyebrow: string;
    title1: string;
    title2: string;
    accent: string;
    body: string;
    services: string[];
    send: string;
  };
  modal: {
    type: string;
    focus: string;
    status: string;
    year: string;
    gallery: string;
    close: string;
    visit: string;
  };
  projects: Record<string, ProjectCopy>;
};

const en: Copy = {
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#showcase" },
      { label: "Craft", href: "#craft" },
      { label: "Visual", href: "#visual" },
      { label: "Gen AI", href: "#gen-ai" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Get in touch",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "UI/UX · Web · Graphic",
    tagline:
      "Designing interfaces that work and visuals that get remembered. Working across UI/UX, web, and graphic design out of Semarang, Indonesia.",
    primary: "See selected work",
    secondary: "Get in touch",
    available: "Available for work",
  },
  intro: {
    eyebrow: "About",
    headline: [
      "I'm a designer working across ",
      "UI/UX",
      "web",
      "graphic",
      "visual design",
    ],
    body1:
      "My work combines structured digital experiences with strong visual communication, from interfaces and websites to typography, branding, apparel graphics, and digital campaigns.",
    body2:
      "I use AI as part of my workflow to explore, iterate, and build faster, while keeping the creative direction and design decisions human-led.",
    stats: [
      { value: "2", label: "Years designing" },
      { value: "4", label: "Craft areas" },
      { value: "20+", label: "Pieces shipped" },
      { value: "2", label: "Live client projects" },
    ],
    proofTitle: "Proof of work",
    proof: [
      {
        label: "UI/UX",
        items: ["Live websites", "Responsive interfaces", "Product concepts", "User flows"],
      },
      { label: "Web", items: ["Live implementation", "Responsive websites", "Landing pages"] },
      { label: "Graphic", items: ["Apparel graphics", "Typography", "Branding", "Print design"] },
      {
        label: "AI",
        items: ["AI-assisted workflow", "AI-assisted development", "Workflow automation"],
      },
    ],
  },
  showcase: {
    eyebrow: "Selected work",
    line1: "A look at what",
    line2a: "I've ",
    line2b: "designed",
    filters: ["All", "UI/UX", "Web", "Brand", "Poster"],
    cards: [
      { title: "Imagin Studio", desc: "A live studio site for a 3D product film team, built so the render itself is the proof." },
      { title: "Wira Wiri", desc: "Travel app putting local guides, local food, and travel money into one flow." },
      { title: "ORLYX Identity", desc: "A streetwear identity built on restraint: one mark, one line, nothing louder." },
      { title: "Random Posters", desc: "Fourteen posters where one idea has to land while someone scrolls past." },
      { title: "Wira Wiri Onboarding", desc: "Photography carries the mood, the interface stays quiet and out of the way." },
      { title: "ORLYX Apparel", desc: "The mark taken from screen to garment, packaging, and a social feed system." },
      { title: "Print Explorations", desc: "Halftone, duotone, and condensed type pushed until the photo becomes texture." },
    ],
    view: "View project",
    prev: "Scroll showcase left",
    next: "Scroll showcase right",
  },
  craft: {
    eyebrow: "What I do",
    title1: "Four things I do,",
    title2: "one way of thinking.",
    note: "The medium changes. The method does not: understand the goal, build the structure, then make it look inevitable.",
  },
  disciplines: [
    {
      no: "01",
      title: "UI/UX Design",
      body: "Turning fuzzy product ideas into flows, screens, and systems people can actually move through.",
      items: [
        "User flows",
        "Information architecture",
        "Wireframing",
        "Prototyping",
        "Interaction design",
        "Usability thinking",
        "Design systems",
        "Responsive interfaces",
      ],
      color: "sky",
    },
    {
      no: "02",
      title: "Web Design",
      body: "Sites built to hold attention and move someone to the next step, not just to look nice in a screenshot.",
      items: [
        "Landing pages",
        "Business websites",
        "Responsive web",
        "Conversion-focused interfaces",
        "Visual hierarchy",
        "Web implementation",
      ],
      color: "grass",
    },
    {
      no: "03",
      title: "Graphic Design",
      body: "Type, image, and composition pushed until the message lands before anyone reads a word.",
      items: [
        "Brand identity",
        "Typography",
        "Apparel graphics",
        "Social media design",
        "Marketing materials",
        "Poster design",
        "Print design",
        "Photo editing",
      ],
      color: "bubble",
    },
    {
      no: "04",
      title: "AI-Augmented Workflow",
      body: "AI as an accelerator for research, exploration, and build. Direction and final judgment stay human.",
      items: [
        "AI-assisted research",
        "Ideation",
        "Visual exploration",
        "Content structuring",
        "Asset generation",
        "Prototyping",
        "Development assistance",
        "Workflow automation",
      ],
      color: "sun",
    },
  ],
  digital: {
    eyebrow: "Selected work / Digital",
    title: "Product & web",
    note: "Interfaces and sites where the job is measured in whether people get through, not in how the screenshot looks.",
    focus: "Focus",
    status: "Status",
    read: "Read case study",
    visit: "Visit live site",
  },
  graphic: {
    eyebrow: "Selected work / Graphic & visual",
    title: "Brand, print & poster",
    note: "Different job from the screens above. Here the whole message has to land in one glance, with no second screen to explain it.",
    viewAll: "View all posters",
  },
  genAi: {
    eyebrow: "Selected work / Gen AI",
    title: "Generated, then directed",
    note: "Image generation used like a studio: the light, the product and the mood are decided first, then pushed until nothing gives it away.",
  },
  approach: {
    eyebrow: "Design approach",
    title1: "How I decide",
    title2: "what stays.",
    note: "Five rules I keep coming back to when a layout starts fighting itself. Hover a rule to see it at work.",
  },
  principles: [
    {
      no: "01",
      title: "Clarity",
      body: "Make the message understandable before making it beautiful.",
    },
    {
      no: "02",
      title: "Simplicity",
      body: "Remove elements that don't contribute to the goal.",
    },
    {
      no: "03",
      title: "Visual hierarchy",
      body: "Control attention through typography, scale, spacing, and composition.",
    },
    {
      no: "04",
      title: "Purpose",
      body: "Every visual decision should support communication or business objectives.",
    },
    {
      no: "05",
      title: "AI-augmented",
      body: "Use AI to accelerate exploration and production, while keeping creative direction human-led.",
    },
  ],
  play: {
    eyebrow: "Playground",
    title1: "Grab one.",
    title2: "Throw it around.",
    note: "Every piece here is something I work with. They fall, collide, and stack for real.",
    shake: "Shake",
    hint: "Drag to play",
  },
  footer: {
    eyebrow: "Contact",
    title1: "Let's build",
    title2: "something ",
    accent: "useful.",
    body: "Available for UI/UX, web design, graphic design, visual identity, and selected freelance or remote opportunities.",
    services: [
      "UI/UX design",
      "Web design",
      "Graphic design",
      "Visual identity",
      "Freelance",
      "Remote",
    ],
    send: "Send an email",
  },
  modal: {
    type: "Type",
    focus: "Focus",
    status: "Status",
    year: "Year",
    gallery: "Gallery",
    close: "Close case study",
    visit: "Visit",
  },
  projects: {
    "imagin-studio": {
      title: "Imagin Studio",
      kind: "Real client project",
      status: "Live",
      focus: ["Web Design", "UI/UX", "Brand Experience"],
      summary:
        "A studio site for a 3D product film team. Everything on the page is rendered, nothing is photographed, so the site had to make that claim believable in the first three seconds.",
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
    "wira-wiri": {
      title: "Wira Wiri",
      kind: "Design competition",
      status: "Competition / Concept",
      focus: ["UI/UX", "Product Thinking", "Visual Design"],
      summary:
        "A travel app for Indonesia that puts local guides, local food, and travel money in one flow, designed for a design competition.",
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
    "niso-studio": {
      title: "NISO Studio",
      kind: "Self-directed project",
      status: "Live",
      focus: ["Web Design", "UI/UX", "Editorial Layout"],
      summary:
        "A site for a fictional Jakarta creative studio, built around one line: clarity as a discipline. The design work itself had to demonstrate the restraint the copy talks about.",
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
    "wastu-home-building": {
      title: "Wastu Home Building Studio",
      kind: "Self-directed project",
      status: "Live",
      focus: ["Web Design", "UI/UX", "Art Direction"],
      summary:
        "A site for a fictional home-building studio, built on the idea that the work worth showing is the part no one sees: foundation, framing, and finish.",
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
    webzonly: {
      title: "Webzonly",
      kind: "Self-directed project",
      status: "Live",
      focus: ["Web Design", "Art Direction", "Motion"],
      summary:
        "A digital craft studio site built to prove a point about scroll: 'websites that behave like objects, weighted, responsive, and impossible to scroll past.' A full-bleed Earth shot under a serif wordmark opens the case.",
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
    orlyx: {
      title: "ORLYX",
      kind: "Real client project",
      status: "Live / identity system",
      focus: ["Brand Identity", "Typography", "Art Direction", "Apparel"],
      summary:
        "A full identity for a streetwear label built on restraint: one mark, one line, nothing louder than the person wearing it.",
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
    "poster-series": {
      title: "Random Poster Series",
      kind: "Graphic / visual exploration",
      status: "Ongoing series",
      focus: ["Typography", "Photo Manipulation", "Composition", "Experimental"],
      summary:
        "A running poster practice. One idea, one dominant colour, one piece of type doing the heavy lifting, made to keep composition instincts sharp.",
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
          body: "Fourteen posters at print proportion, each carrying its own colour and subject while sharing the same typographic grid and credit system.",
        },
        {
          no: "05",
          label: "Production",
          body: "Exported print ready at poster ratio, plus cropped versions for social. The consistent credit line lets the series read as one body of work even when posted one at a time.",
        },
      ],
    },
    "youtube-thumbnails": {
      title: "YouTube Thumbnail Design",
      kind: "Self-directed project",
      status: "Ongoing series",
      focus: ["Photo Manipulation", "Thumbnail Design", "Composite", "Typography"],
      summary:
        "Thumbnails built the way editorial composites are: a real portrait cut cleanly from its background, then staged against a graphic or photo scene until the two read as one shot, not a sticker on a photo.",
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
    "gen-ai": {
      title: "Gen AI Imagery",
      kind: "Generative AI / art direction",
      status: "Ongoing practice",
      focus: ["Generative AI", "Product Visuals", "Art Direction", "Compositing"],
      summary:
        "Product shots, editorial portraits and composite assets made with image generation, then art directed and retouched until they hold up next to a real photo shoot.",
      study: [
        { no: "01", label: "Brief", body: "Treat generation like a photo shoot, not a slot machine: decide the product, the light and the mood first, then generate toward that instead of picking whatever comes out." },
        { no: "02", label: "Direction", body: "Each set has one lighting story. Low morning sun through forest haze for skincare, a clean studio gradient for the floating bottle, hard flash and fisheye for the street portrait." },
        { no: "03", label: "Exploration", body: "Many rounds per image, adjusting lens, angle and surface detail (condensation, crumb texture, fabric sparkle) until the small things stop giving the image away." },
        { no: "04", label: "Final design", body: "Standalone hero images, plus isolated assets like the beer glasses, fruit and garden that were generated separately and composited into the Honey Lemon and Strawberry Beer poster." },
        { no: "05", label: "Production", body: "Labels and type are set by hand afterwards, then colour graded and cleaned up so the output is ready for social, packaging mockups or poster work." },
      ],
    },
  },
};

const id: Copy = {
  nav: {
    links: [
      { label: "Tentang", href: "#about" },
      { label: "Karya", href: "#showcase" },
      { label: "Keahlian", href: "#craft" },
      { label: "Visual", href: "#visual" },
      { label: "Gen AI", href: "#gen-ai" },
      { label: "Kontak", href: "#contact" },
    ],
    cta: "Hubungi saya",
    skip: "Lewati ke konten",
  },
  hero: {
    eyebrow: "UI/UX · Web · Grafis",
    tagline:
      "Merancang antarmuka yang benar-benar berfungsi dan visual yang membekas. Bekerja di UI/UX, web, dan desain grafis dari Semarang, Indonesia.",
    primary: "Lihat karya pilihan",
    secondary: "Hubungi saya",
    available: "Terbuka untuk proyek",
  },
  intro: {
    eyebrow: "Tentang",
    headline: [
      "Saya desainer yang bekerja di ",
      "UI/UX",
      "web",
      "grafis",
      "desain visual",
    ],
    body1:
      "Karya saya menggabungkan pengalaman digital yang terstruktur dengan komunikasi visual yang kuat, mulai dari antarmuka dan situs web sampai tipografi, branding, grafis apparel, dan kampanye digital.",
    body2:
      "Saya memakai AI sebagai bagian dari alur kerja untuk eksplorasi, iterasi, dan membangun lebih cepat, sementara arah kreatif dan keputusan desain tetap dipegang manusia.",
    stats: [
      { value: "2", label: "Tahun mendesain" },
      { value: "4", label: "Bidang kerja" },
      { value: "20+", label: "Karya rilis" },
      { value: "2", label: "Proyek klien live" },
    ],
    proofTitle: "Bukti kerja",
    proof: [
      {
        label: "UI/UX",
        items: ["Situs live", "Antarmuka responsif", "Konsep produk", "User flow"],
      },
      { label: "Web", items: ["Implementasi live", "Situs responsif", "Landing page"] },
      { label: "Grafis", items: ["Grafis apparel", "Tipografi", "Branding", "Desain cetak"] },
      {
        label: "AI",
        items: ["Alur kerja berbantuan AI", "Development berbantuan AI", "Otomasi alur kerja"],
      },
    ],
  },
  showcase: {
    eyebrow: "Karya pilihan",
    line1: "Inilah yang",
    line2a: "sudah saya ",
    line2b: "rancang",
    filters: ["Semua", "UI/UX", "Web", "Brand", "Poster"],
    cards: [
      { title: "Imagin Studio", desc: "Situs studio live untuk tim film produk 3D, dibuat supaya render-nya sendiri jadi buktinya." },
      { title: "Wira Wiri", desc: "Aplikasi travel yang menyatukan pemandu lokal, kuliner lokal, dan uang perjalanan dalam satu alur." },
      { title: "Identitas ORLYX", desc: "Identitas streetwear yang dibangun dari menahan diri: satu mark, satu garis, tanpa yang berisik." },
      { title: "Poster Random", desc: "Empat belas poster yang satu idenya harus sampai saat orang sedang scroll melewatinya." },
      { title: "Onboarding Wira Wiri", desc: "Fotografi yang membawa suasana, antarmukanya tetap tenang dan tidak mengganggu." },
      { title: "Apparel ORLYX", desc: "Mark yang dibawa dari layar ke pakaian, kemasan, dan sistem feed media sosial." },
      { title: "Eksplorasi Cetak", desc: "Halftone, duotone, dan tipografi condensed didorong sampai fotonya berubah jadi tekstur." },
    ],
    view: "Lihat proyek",
    prev: "Geser showcase ke kiri",
    next: "Geser showcase ke kanan",
  },
  craft: {
    eyebrow: "Yang saya kerjakan",
    title1: "Empat hal yang saya kerjakan,",
    title2: "satu cara berpikir.",
    note: "Medianya berubah, metodenya tidak: pahami tujuannya, bangun strukturnya, lalu buat hasilnya terasa memang sudah seharusnya begitu.",
  },
  disciplines: [
    {
      no: "01",
      title: "Desain UI/UX",
      body: "Mengubah ide produk yang masih kabur menjadi alur, layar, dan sistem yang benar-benar bisa dilalui orang.",
      items: [
        "User flow",
        "Arsitektur informasi",
        "Wireframe",
        "Prototipe",
        "Desain interaksi",
        "Pertimbangan usability",
        "Design system",
        "Antarmuka responsif",
      ],
      color: "sky",
    },
    {
      no: "02",
      title: "Desain Web",
      body: "Situs yang dibuat untuk menahan perhatian dan mendorong ke langkah berikutnya, bukan sekadar cantik di screenshot.",
      items: [
        "Landing page",
        "Situs bisnis",
        "Web responsif",
        "Antarmuka fokus konversi",
        "Hierarki visual",
        "Implementasi web",
      ],
      color: "grass",
    },
    {
      no: "03",
      title: "Desain Grafis",
      body: "Tipografi, gambar, dan komposisi didorong sampai pesannya sampai sebelum orang membaca satu kata pun.",
      items: [
        "Identitas brand",
        "Tipografi",
        "Grafis apparel",
        "Desain media sosial",
        "Materi pemasaran",
        "Desain poster",
        "Desain cetak",
        "Olah foto",
      ],
      color: "bubble",
    },
    {
      no: "04",
      title: "Alur Kerja dengan AI",
      body: "AI sebagai pemercepat riset, eksplorasi, dan produksi. Arah dan keputusan akhir tetap di tangan manusia.",
      items: [
        "Riset berbantuan AI",
        "Ideasi",
        "Eksplorasi visual",
        "Penyusunan konten",
        "Pembuatan aset",
        "Prototipe",
        "Bantuan development",
        "Otomasi alur kerja",
      ],
      color: "sun",
    },
  ],
  digital: {
    eyebrow: "Karya pilihan / Digital",
    title: "Produk & web",
    note: "Antarmuka dan situs yang keberhasilannya diukur dari apakah orang berhasil sampai tujuan, bukan dari seberapa bagus screenshot-nya.",
    focus: "Fokus",
    status: "Status",
    read: "Baca studi kasus",
    visit: "Kunjungi situs",
  },
  graphic: {
    eyebrow: "Karya pilihan / Grafis & visual",
    title: "Brand, cetak & poster",
    note: "Pekerjaan yang berbeda dari layar di atas. Di sini seluruh pesan harus sampai dalam satu pandangan, tanpa layar kedua untuk menjelaskan.",
    viewAll: "Lihat semua poster",
  },
  genAi: {
    eyebrow: "Karya pilihan / Gen AI",
    title: "Digenerate, lalu diarahkan",
    note: "Image generation dipakai seperti studio foto: cahaya, produk, dan suasana ditentukan dulu, lalu digarap sampai tidak ada yang terlihat palsu.",
  },
  approach: {
    eyebrow: "Pendekatan desain",
    title1: "Cara saya memutuskan",
    title2: "apa yang bertahan.",
    note: "Lima aturan yang selalu saya pakai saat sebuah layout mulai berantakan. Arahkan kursor ke tiap aturan untuk melihat contohnya.",
  },
  principles: [
    { no: "01", title: "Kejelasan", body: "Buat pesannya dipahami dulu, baru dibuat indah." },
    {
      no: "02",
      title: "Kesederhanaan",
      body: "Buang elemen yang tidak berkontribusi pada tujuan.",
    },
    {
      no: "03",
      title: "Hierarki visual",
      body: "Kendalikan perhatian lewat tipografi, skala, jarak, dan komposisi.",
    },
    {
      no: "04",
      title: "Tujuan",
      body: "Setiap keputusan visual harus mendukung komunikasi atau tujuan bisnis.",
    },
    {
      no: "05",
      title: "Dibantu AI",
      body: "Pakai AI untuk mempercepat eksplorasi dan produksi, arah kreatif tetap dipegang manusia.",
    },
  ],
  play: {
    eyebrow: "Playground",
    title1: "Ambil satu.",
    title2: "Lempar sesukamu.",
    note: "Setiap objek di sini adalah hal yang saya kerjakan. Semuanya benar-benar jatuh, bertabrakan, dan menumpuk.",
    shake: "Guncang",
    hint: "Tarik untuk bermain",
  },
  footer: {
    eyebrow: "Kontak",
    title1: "Mari bangun",
    title2: "sesuatu yang ",
    accent: "berguna.",
    body: "Terbuka untuk UI/UX, desain web, desain grafis, identitas visual, serta proyek freelance atau remote tertentu.",
    services: [
      "Desain UI/UX",
      "Desain web",
      "Desain grafis",
      "Identitas visual",
      "Freelance",
      "Remote",
    ],
    send: "Kirim email",
  },
  modal: {
    type: "Jenis",
    focus: "Fokus",
    status: "Status",
    year: "Tahun",
    gallery: "Galeri",
    close: "Tutup studi kasus",
    visit: "Kunjungi",
  },
  projects: {
    "imagin-studio": {
      title: "Imagin Studio",
      kind: "Proyek klien nyata",
      status: "Live",
      focus: ["Desain Web", "UI/UX", "Pengalaman Brand"],
      summary:
        "Situs studio untuk tim film produk 3D. Semua yang ada di halaman itu hasil render, tidak ada yang difoto, jadi situsnya harus membuat klaim itu meyakinkan dalam tiga detik pertama.",
      study: [
        {
          no: "01",
          label: "Brief",
          body: "Studio 3D independen butuh situs yang menjual layanan yang sulit dijelaskan: film produk yang tidak pernah difilmkan. Masalah sebenarnya adalah kredibilitas. Pengunjung mengira karyanya stok atau video biasa, bukan dibangun frame demi frame.",
        },
        {
          no: "02",
          label: "Arah",
          body: "Mulai dari kontradiksinya. Judulnya berbunyi 'Nothing here was filmed' dan hero-nya langsung menampilkan render real-time yang bisa ditarik pengunjung. Klaim dan buktinya berada di satu layar yang sama.",
        },
        {
          no: "03",
          label: "Eksplorasi",
          body: "Menguji layout gelap yang sinematik melawan versi terang bergaya editorial. Versi terang menang: objek render diposisikan seperti karya galeri, bukan potongan film, dan itu mendukung cerita dibangun, bukan difoto.",
        },
        {
          no: "04",
          label: "Desain akhir",
          body: "Judul grotesk besar, baris metadata monospace, ruang kosong yang lega, dan deretan klien untuk UBS Gold, Mini Fan, OFTEQ, dan Alter Ego. Versi mobile tetap mempertahankan render interaktif tapi menyusun poin buktinya jadi satu kolom yang enak dibaca.",
        },
        {
          no: "05",
          label: "Produksi",
          body: "Dirilis sebagai situs live responsif dengan render real-time yang berjalan di browser, bukan video loop. Petunjuk interaksi ditulis di dalam antarmuka supaya pengunjung baru tahu objeknya bisa ditarik.",
        },
      ],
    },
    "wira-wiri": {
      title: "Wira Wiri",
      kind: "Kompetisi desain",
      status: "Kompetisi / Konsep",
      focus: ["UI/UX", "Product Thinking", "Desain Visual"],
      summary:
        "Aplikasi travel untuk Indonesia yang menyatukan pemandu lokal, kuliner lokal, dan uang perjalanan dalam satu alur, dirancang untuk sebuah kompetisi desain.",
      study: [
        {
          no: "01",
          label: "Brief",
          body: "Pelancong di Indonesia harus membuka tiga aplikasi berbeda: satu untuk cari makan, satu untuk pesan pemandu, satu untuk kirim uang. Brief kompetisinya meminta satu produk yang menghapus biaya berpindah-pindah itu.",
        },
        {
          no: "02",
          label: "Arah",
          body: "Perlakukan aplikasinya sebagai teman perjalanan, bukan marketplace. Fotografi yang membawa suasana, antarmukanya tetap tenang, dan setiap layar menjawab satu pertanyaan: ke mana saya pergi, siapa yang menemani, bagaimana saya membayar.",
        },
        {
          no: "03",
          label: "Eksplorasi",
          body: "Memetakan alur dari onboarding, pemesanan, sampai pembayaran sebelum menyentuh visual. Ikon kategori melewati beberapa putaran supaya pengguna baru bisa membaca Viral, Local Food, Noodles, dan Rice Dishes sekilas tanpa bergantung penuh pada label.",
        },
        {
          no: "04",
          label: "Desain akhir",
          body: "Sistem warna biru dengan kartu berkontras tinggi. Profil pemandu dibuka dengan angka kredibilitas: tahun pengalaman, jumlah pelancong, bahasa, destinasi. Layar dompet menyatukan metode transfer, penerima, nominal, dan catatan dalam satu scroll dengan chip nominal cepat.",
        },
        {
          no: "05",
          label: "Produksi",
          body: "Dikirim sebagai prototipe dengan alur yang saling terhubung dan satu set layar presentasi untuk penjurian, termasuk mockup perangkat untuk deck pitch.",
        },
      ],
    },
    "niso-studio": {
      title: "NISO Studio",
      kind: "Proyek mandiri",
      status: "Live",
      focus: ["Desain Web", "UI/UX", "Tata Letak Editorial"],
      summary:
        "Situs untuk studio kreatif fiktif di Jakarta, dibangun di sekitar satu kalimat: kejelasan sebagai disiplin. Desainnya sendiri harus membuktikan kesederhanaan yang diucapkan copy-nya.",
      study: [
        {
          no: "01",
          label: "Brief",
          body: "Membangun situs studio yang kredibel untuk praktik desain yang seluruh pitch-nya adalah kesederhanaan. Layoutnya tidak boleh lebih berisik dari klaim yang dibuatnya.",
        },
        {
          no: "02",
          label: "Arah",
          body: "Hero editorial gelap dengan satu headline serif berlapis di atas foto studio dokumenter, lalu beralih penuh ke indeks terang yang hampir seperti arsip untuk bagian karya.",
        },
        {
          no: "03",
          label: "Eksplorasi",
          body: "Mencoba layout portofolio berbasis grid dulu; hasilnya terasa seperti template. Dibangun ulang jadi dinding dua kolom asimetris agar tiap foto proyek menjaga ukuran dan crop-nya sendiri, sehingga terasa dikurasi, bukan digenerate.",
        },
        {
          no: "04",
          label: "Desain akhir",
          body: "Tipe display serif untuk pernyataan, sistem label mirip monospace untuk penghargaan dan publikasi, serta ruang kosong yang lega antar-section agar daftar pencapaian tidak bersaing dengan karya.",
        },
        {
          no: "05",
          label: "Produksi",
          body: "Dirilis sebagai situs Next.js live di Vercel, dengan bagian dinding karya dan pencapaian dibangun agar bisa menampung proyek baru tanpa mengubah layout.",
        },
      ],
    },
    "wastu-home-building": {
      title: "Wastu Home Building Studio",
      kind: "Proyek mandiri",
      status: "Live",
      focus: ["Desain Web", "UI/UX", "Art Direction"],
      summary:
        "Situs untuk studio konstruksi rumah fiktif, dibangun di atas gagasan bahwa bagian pekerjaan yang layak ditunjukkan justru yang tidak terlihat siapa pun: pondasi, rangka, dan finishing.",
      study: [
        {
          no: "01",
          label: "Brief",
          body: "Sebuah studio konstruksi butuh situs yang terasa se-considered praktik arsitektur, bukan sekadar direktori tukang bangunan.",
        },
        {
          no: "02",
          label: "Arah",
          body: "Foto lokasi full-bleed sebagai hero, headline yang lugas ('Built to last.'), dan tata letak fact sheet untuk tahun berdiri, principal, dan layanan, menggantikan copy marketing.",
        },
        {
          no: "03",
          label: "Eksplorasi",
          body: "Menguji homepage grid-portofolio melawan narasi satu-scroll. Versi scroll menang: cerita satu proyek (340 meter persegi, dari tanah sampai finishing) membawa kesan pertama secara utuh alih-alih terpecah ke banyak thumbnail.",
        },
        {
          no: "04",
          label: "Desain akhir",
          body: "Fotografi dokumenter yang hangat dan apa adanya, sistem headline sans polos, dan grid fact-sheet bergaris tipis yang terasa lebih seperti izin bangunan daripada brosur.",
        },
        {
          no: "05",
          label: "Produksi",
          body: "Dirilis sebagai situs Next.js live di Vercel, disusun agar bisa menampung galeri proyek baru dengan pola fact-sheet yang sama.",
        },
      ],
    },
    webzonly: {
      title: "Webzonly",
      kind: "Proyek mandiri",
      status: "Live",
      focus: ["Desain Web", "Art Direction", "Motion"],
      summary:
        "Situs studio digital craft yang dibangun untuk membuktikan satu poin soal scroll: 'website yang berperilaku seperti objek, punya bobot, responsif, dan mustahil dilewati begitu saja.' Foto Bumi full-bleed di bawah wordmark serif membuka kasusnya.",
      study: [
        {
          no: "01",
          label: "Brief",
          body: "Membangun situs studio yang model interaksinya adalah pitch-nya sendiri: scroll yang berbobot dan berat, bukan scroll cepat yang mudah dilupakan.",
        },
        {
          no: "02",
          label: "Arah",
          body: "Tipe serif berukuran besar di atas fotografi full-bleed untuk hero maupun tiap kartu studi kasus, sehingga tiap titik henti scroll terasa seperti spread majalah, bukan item grid.",
        },
        {
          no: "03",
          label: "Eksplorasi",
          body: "Mendorong bobot scroll sampai kartu-kartunya terasa punya massa, lalu menariknya kembali begitu scroll cepat mulai melawan browser alih-alih memandunya — brief-nya 'berbobot', bukan 'terhambat'.",
        },
        {
          no: "04",
          label: "Desain akhir",
          body: "Sistem editorial gelap: satu typeface display serif, chrome minimal (cuma CONTACTS / MENU), dan olahan judul gradasi-foil di tiap kartu studi kasus yang berubah mengikuti foto latarnya.",
        },
        {
          no: "05",
          label: "Produksi",
          body: "Dirilis sebagai situs Next.js live di Vercel, dengan komponen kartu-kasus dibangun agar karya studio baru bisa ditambahkan tanpa mengubah mekanisme scroll-nya.",
        },
      ],
    },
    orlyx: {
      title: "ORLYX",
      kind: "Proyek klien nyata",
      status: "Live / sistem identitas",
      focus: ["Identitas Brand", "Tipografi", "Art Direction", "Apparel"],
      summary:
        "Identitas lengkap untuk label streetwear yang dibangun di atas prinsip menahan diri: satu mark, satu garis, tidak ada yang lebih berisik dari orang yang memakainya.",
      study: [
        {
          no: "01",
          label: "Brief",
          body: "ORLYX butuh identitas untuk kebalikan dari brand hype. Client minta mark yang terbaca tajam sebelum terbaca ramai: quiet luxury, sisi-sisi yang dipotong tegas, dan visi ke depan yang jelas lewat penggambaran tanda panah.",
        },
        {
          no: "02",
          label: "Arah",
          body: "Hitam, putih, dan satu gradien. Satu mark X geometris dari empat bilah, tiap lengannya dipotong jadi mata panah supaya mark-nya menunjuk keluar ke empat arah, diletakkan di atas grid konstruksi supaya sisinya tetap tajam sebesar stiker maupun sebesar kaos.",
        },
        {
          no: "03",
          label: "Eksplorasi",
          body: "Menajamkan sudut tiap bilah di atas grid ketat sampai ruang negatifnya rata di keempat kuadran, sambil menguji seberapa dalam tiap lengan bisa dipotong sebelum panahnya terbaca agresif alih-alih terarah. Lalu wordmark-nya disetel dengan jarak huruf ekstrem sampai lockup-nya terbaca sebagai label, bukan logo.",
        },
        {
          no: "04",
          label: "Desain akhir",
          body: "Panduan brand yang mencakup mark, sudut potong dan konstruksinya, lockup wordmark, gradien, nilai warna, nada manifesto, dan perilaku ikon sosial di dalam crop lingkaran Instagram.",
        },
        {
          no: "05",
          label: "Produksi",
          body: "Diterapkan pada grafis apparel, kotak kemasan deboss, mailer bag, stiker segel, dan sistem feed sosial supaya identitasnya tetap utuh saat pindah dari layar ke produk fisik.",
        },
      ],
    },
    "poster-series": {
      title: "Seri Poster Random",
      kind: "Eksplorasi grafis / visual",
      status: "Seri berjalan",
      focus: ["Tipografi", "Manipulasi Foto", "Komposisi", "Eksperimental"],
      summary:
        "Latihan poster yang terus berjalan. Satu ide, satu warna dominan, satu tipografi yang memikul beban terberat, dibuat untuk menjaga insting komposisi tetap tajam.",
      study: [
        {
          no: "01",
          label: "Brief",
          body: "Seri yang saya jalankan sendiri dengan satu aturan: tiap poster harus menyampaikan satu ide yang tertangkap saat orang sedang scroll melewatinya.",
        },
        {
          no: "02",
          label: "Arah",
          body: "Bidang warna datar yang pekat, perlakuan halftone tebal pada gambarnya, dan satu pernyataan condensed berwarna putih. Metadata berjalan vertikal di tepi seperti baris kredit cetak.",
        },
        {
          no: "03",
          label: "Eksplorasi",
          body: "Tiap karya berangkat dari potongan foto yang didorong lewat duotone dan halftone sampai berhenti terbaca sebagai foto dan mulai terbaca sebagai tekstur, baru tipografinya diletakkan memotong bidang itu.",
        },
        {
          no: "04",
          label: "Desain akhir",
          body: "Empat belas poster dengan proporsi cetak, masing-masing membawa warna dan subjeknya sendiri tapi berbagi grid tipografi dan sistem kredit yang sama.",
        },
        {
          no: "05",
          label: "Produksi",
          body: "Diekspor siap cetak pada rasio poster, ditambah versi crop untuk media sosial. Baris kredit yang konsisten membuat serinya terbaca sebagai satu kesatuan walau diunggah satu per satu.",
        },
      ],
    },
    "youtube-thumbnails": {
      title: "Desain Thumbnail YouTube",
      kind: "Proyek mandiri",
      status: "Seri berjalan",
      focus: ["Manipulasi Foto", "Desain Thumbnail", "Komposit", "Tipografi"],
      summary:
        "Thumbnail yang dibuat seperti komposit editorial: potret asli dipotong bersih dari latarnya, lalu ditata ulang di atas scene grafis atau foto sampai keduanya terbaca sebagai satu bidikan, bukan stiker yang ditempel di foto.",
      study: [
        {
          no: "01",
          label: "Brief",
          body: "Thumbnail YouTube punya satu tugas di feed yang padat: menghentikan scroll dalam kurang dari satu detik. Artinya tiap komposit harus terbaca jelas di ukuran tampil sebenarnya, bukan cuma di resolusi penuh.",
        },
        {
          no: "02",
          label: "Arah",
          body: "Subjek dipotong bersih dari foto sumbernya, lalu pencahayaan dan grading warnanya dibangun ulang agar komposit terbaca sebagai satu scene yang konsisten: wajah yang disinari layar di depan diagram UI, potret yang ditempatkan di papan bukti kertas robek, reaksi tangan-di-dahi yang disinari grafis uang terbakar.",
        },
        {
          no: "03",
          label: "Eksplorasi",
          body: "Menguji seberapa jauh elemen grafis pendukung (node workflow, foto corkboard, garis saham yang jatuh) bisa didorong ke latar belakang sebelum ia berhenti mendukung headline dan mulai bersaing merebut perhatian dengan wajahnya.",
        },
        {
          no: "04",
          label: "Desain akhir",
          body: "Sistem yang bisa diulang: satu potret ekspresif, satu headline berkontras tinggi dengan typeface display tebal, dan satu elemen grafis yang mengerjakan tugas bercerita, sehingga penonton menangkap premis video sebelum membaca satu kata pun.",
        },
        {
          no: "05",
          label: "Produksi",
          body: "Diekspor pada 1920×1080, ukuran standar thumbnail YouTube, dan dicek pada ukuran tampil sebenarnya di feed, bukan cuma di resolusi penuh, karena di situlah keputusan klik sebenarnya terjadi.",
        },
      ],
    },
    "gen-ai": {
      title: "Visual Gen AI",
      kind: "Generative AI / art direction",
      status: "Praktik berjalan",
      focus: ["Generative AI", "Visual Produk", "Art Direction", "Komposit"],
      summary:
        "Foto produk, potret editorial, dan aset komposit yang dibuat dengan image generation, lalu diarahkan dan diretouch sampai sejajar dengan hasil pemotretan asli.",
      study: [
        { no: "01", label: "Brief", body: "Memperlakukan generation seperti sesi foto, bukan mesin undian: produk, cahaya, dan suasana ditentukan dulu, lalu hasilnya diarahkan ke sana, bukan asal pilih yang keluar." },
        { no: "02", label: "Arah", body: "Tiap set punya satu cerita cahaya. Matahari pagi menembus kabut hutan untuk skincare, gradasi studio yang bersih untuk botol melayang, flash keras dan fisheye untuk potret jalanan." },
        { no: "03", label: "Eksplorasi", body: "Banyak putaran per gambar, mengatur lensa, sudut, dan detail permukaan (embun, tekstur tepung, kilau kain) sampai detail kecilnya tidak lagi membongkar gambarnya." },
        { no: "04", label: "Desain akhir", body: "Gambar hero yang berdiri sendiri, ditambah aset terpisah seperti gelas bir, buah, dan taman yang digenerate sendiri-sendiri lalu dikomposit menjadi poster Honey Lemon dan Strawberry Beer." },
        { no: "05", label: "Produksi", body: "Label dan tipografi dipasang manual setelahnya, lalu di-color grade dan dibersihkan sampai siap untuk sosial media, mockup kemasan, atau poster." },
      ],
    },
  },
};

export const COPY: Record<Lang, Copy> = { en, id };
