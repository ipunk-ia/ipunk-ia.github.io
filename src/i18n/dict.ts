export type Lang = "en" | "id";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
];

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
  nav: { links: { label: string; href: string }[]; contact: string; skip: string; menu: string; close: string };
  welcome: string;
  hero: { left: string; right: string; disciplines: [string, string]; city: string };
  statement: { text: string; notes: [string, string][] };
  work: { title: string; hint: string; open: string; prev: string; next: string };
  archive: { title: string };
  services: { title: [string, string]; rows: { title: string; body: string }[] };
  about: { label: string; text: string; body: string; caption: string; badge: string };
  footer: { talk: string; note: string; follow: string; rights: string };
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
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
    ],
    contact: "DM me",
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
  },
  welcome: "Loading the work",
  hero: {
    left: "Interfaces that work.",
    right: "Visuals that get remembered.",
    disciplines: ["UI/UX and web design.", "Graphic and brand design."],
    city: "Semarang, ID",
  },
  statement: {
    text: "A designer from Semarang working across interfaces, websites and graphics, looking for a studio that cares how things look and how they work.",
    notes: [
      ["UI/UX, web, graphic.", "AI-assisted, human-led."],
      ["Two years designing.", "Open to full-time roles."],
    ],
  },
  work: {
    title: "Work that started with a brief and ended up somewhere better.",
    hint: "Scroll or use the arrows to move the ribbon. Click a piece to open it.",
    open: "Open case study",
    prev: "Previous",
    next: "Next",
  },
  archive: {
    title: "Posters, identity boards and images, made to land in one glance.",
  },
  services: {
    title: ["Three disciplines.", "One way of thinking."],
    rows: [
      {
        title: "UI/UX design",
        body: "Turning fuzzy product ideas into flows, screens, and systems people can actually move through.",
      },
      {
        title: "Web design",
        body: "Sites built to hold attention and move someone to the next step, not just to look nice in a screenshot.",
      },
      {
        title: "Graphic design",
        body: "Type, image, and composition pushed until the message lands before anyone reads a word.",
      },
    ],
  },
  about: {
    label: "About",
    text: "I use AI to explore and build faster. The taste, the decisions and the final call stay mine.",
    body: "My work combines structured digital experiences with strong visual communication, from interfaces and websites to typography, branding, apparel graphics, and digital campaigns.",
    caption: "Ivan Ghazali, Semarang",
    badge: "say hi",
  },
  footer: {
    talk: "Let's talk",
    note: "Need a designer who can take a brief from interface to poster? Start with a DM on Instagram.",
    follow: "Follow on",
    rights: "All rights reserved",
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
    "tshirt-design": {
      title: "T-shirt Design",
      kind: "Apparel graphics",
      status: "Ongoing series",
      focus: ["Apparel Graphics", "Illustration", "Display Lettering", "Composition"],
      summary:
        "Shirt graphics in two registers: loud front prints built like band merch, and the quiet typographic back prints of the ORLYX streetwear line. Either way the garment has to read from across a room.",
      study: [
        {
          no: "01",
          label: "Brief",
          body: "A shirt graphic is seen in motion and at a distance, so each design has to hold as one silhouette before any detail registers.",
        },
        {
          no: "02",
          label: "Direction",
          body: "The front prints pair a dense, rendered image with lettering cut to its theme: weathered metal block letters for Dope Squad, flame-edged blackletter for Damnation, a heavy black serif over an engraved angel and devil for Castigo, soft chrome for Chill, and an all-over print of a chrome car in blue flames for Burn It. The ORLYX tees go the other way: a small mark on the chest and one line of type across the back.",
        },
        {
          no: "03",
          label: "Exploration",
          body: "Illustration and type are composed together, not stacked: the rifles cross behind the helmet, the lettering crowns the thorn-ringed crest, so nothing floats loose.",
        },
        {
          no: "04",
          label: "Final design",
          body: "Standalone print artwork for the graphic pieces, and front and back mockups for the four ORLYX tees (real client). The series keeps growing as new designs are added.",
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
          body: "Eleven posters at print proportion, each carrying its own colour and subject while sharing the same typographic grid and credit system.",
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
      { label: "Karya", href: "#work" },
      { label: "Layanan", href: "#services" },
      { label: "Tentang", href: "#about" },
    ],
    contact: "Kirim DM",
    skip: "Lompat ke konten",
    menu: "Menu",
    close: "Tutup",
  },
  welcome: "Memuat karya",
  hero: {
    left: "Antarmuka yang berfungsi.",
    right: "Visual yang diingat.",
    disciplines: ["Desain UI/UX dan web.", "Desain grafis dan brand."],
    city: "Semarang, ID",
  },
  statement: {
    text: "Desainer dari Semarang yang bekerja di antarmuka, website, dan grafis, mencari studio yang peduli pada tampilan sekaligus cara kerjanya.",
    notes: [
      ["UI/UX, web, grafis.", "Dibantu AI, dipimpin manusia."],
      ["Dua tahun mendesain.", "Terbuka untuk posisi full-time."],
    ],
  },
  work: {
    title: "Karya yang berawal dari brief dan berakhir di tempat yang lebih baik.",
    hint: "Scroll atau pakai panah untuk menggeser pita. Klik karya untuk membukanya.",
    open: "Buka studi kasus",
    prev: "Sebelumnya",
    next: "Berikutnya",
  },
  archive: {
    title: "Poster, papan identitas, dan gambar, dibuat untuk sampai dalam sekali lihat.",
  },
  services: {
    title: ["Tiga disiplin.", "Satu cara berpikir."],
    rows: [
      {
        title: "Desain UI/UX",
        body: "Mengubah ide produk yang masih kabur menjadi alur, layar, dan sistem yang benar-benar bisa dilalui orang.",
      },
      {
        title: "Desain web",
        body: "Situs yang dibuat untuk menahan perhatian dan mendorong ke langkah berikutnya, bukan sekadar cantik di screenshot.",
      },
      {
        title: "Desain grafis",
        body: "Tipografi, gambar, dan komposisi didorong sampai pesannya sampai sebelum orang membaca satu kata pun.",
      },
    ],
  },
  about: {
    label: "Tentang",
    text: "Saya memakai AI untuk eksplorasi dan membangun lebih cepat. Selera, keputusan, dan kata akhir tetap milik saya.",
    body: "Karya saya menggabungkan pengalaman digital yang terstruktur dengan komunikasi visual yang kuat, mulai dari antarmuka dan situs web sampai tipografi, branding, grafis apparel, dan kampanye digital.",
    caption: "Ivan Ghazali, Semarang",
    badge: "sapa",
  },
  footer: {
    talk: "Ayo ngobrol",
    note: "Butuh desainer yang bisa membawa brief dari antarmuka sampai poster? Mulai dengan DM di Instagram.",
    follow: "Ikuti di",
    rights: "Hak cipta dilindungi",
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
    "tshirt-design": {
      title: "Desain Kaos",
      kind: "Grafis apparel",
      status: "Seri berjalan",
      focus: ["Grafis Apparel", "Ilustrasi", "Lettering Display", "Komposisi"],
      summary:
        "Grafis kaos dalam dua karakter: sablon depan yang lantang seperti merch band, dan sablon punggung tipografis yang tenang untuk lini streetwear ORLYX. Apa pun karakternya, kaos harus terbaca dari seberang ruangan.",
      study: [
        {
          no: "01",
          label: "Brief",
          body: "Grafis kaos dilihat saat bergerak dan dari jauh, jadi tiap desain harus kuat sebagai satu siluet sebelum detail apa pun tertangkap.",
        },
        {
          no: "02",
          label: "Arah",
          body: "Sablon depan memasangkan gambar yang padat dan dirender penuh dengan lettering yang dipotong sesuai temanya: huruf blok logam yang aus untuk Dope Squad, blackletter bertepi api untuk Damnation, serif hitam tebal di atas malaikat dan iblis bergaya gravir untuk Castigo, chrome lembut untuk Chill, dan sablon menyeluruh mobil chrome dalam api biru untuk Burn It. Kaos ORLYX justru sebaliknya: logo kecil di dada dan satu baris tipografi di punggung.",
        },
        {
          no: "03",
          label: "Eksplorasi",
          body: "Ilustrasi dan tipografi disusun bersama, bukan ditumpuk: senapan menyilang di belakang helm, lettering memahkotai lambang berduri, sehingga tidak ada yang melayang lepas.",
        },
        {
          no: "04",
          label: "Desain akhir",
          body: "Artwork siap cetak untuk karya grafis, serta mockup depan dan belakang untuk empat kaos ORLYX (klien nyata). Seri ini terus bertambah seiring desain baru masuk.",
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
          body: "Sebelas poster dengan proporsi cetak, masing-masing membawa warna dan subjeknya sendiri tapi berbagi grid tipografi dan sistem kredit yang sama.",
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
