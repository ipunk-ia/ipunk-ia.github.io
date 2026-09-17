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
      { title: "Daily Posters", desc: "Thirteen posters where one idea has to land while someone scrolls past." },
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
      title: "Daily Poster Series",
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
          body: "Thirteen posters at print proportion, each carrying its own colour and subject while sharing the same typographic grid and credit system.",
        },
        {
          no: "05",
          label: "Production",
          body: "Exported print ready at poster ratio, plus cropped versions for social. The consistent credit line lets the series read as one body of work even when posted one at a time.",
        },
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
      { title: "Poster Harian", desc: "Tiga belas poster yang satu idenya harus sampai saat orang sedang scroll melewatinya." },
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
      title: "Seri Poster Harian",
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
          body: "Tiga belas poster dengan proporsi cetak, masing-masing membawa warna dan subjeknya sendiri tapi berbagi grid tipografi dan sistem kredit yang sama.",
        },
        {
          no: "05",
          label: "Produksi",
          body: "Diekspor siap cetak pada rasio poster, ditambah versi crop untuk media sosial. Baris kredit yang konsisten membuat serinya terbaca sebagai satu kesatuan walau diunggah satu per satu.",
        },
      ],
    },
  },
};

export const COPY: Record<Lang, Copy> = { en, id };
