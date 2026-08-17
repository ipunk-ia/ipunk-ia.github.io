export const site = {
  name: "Ivan Ghazali",
  role: "UI/UX Designer · Web Designer · Graphic Designer",
  supporting: "Visual Design · Brand Design · AI-Augmented Workflow",
  location: "Semarang, Indonesia",
  experience: "2 years",
  tagline: "Designing interfaces that work and visuals that get remembered.",
  intro:
    "I'm a multidisciplinary designer working across UI/UX, web, graphic, and visual design. My work combines structured digital experiences with strong visual communication, from interfaces and websites to typography, branding, apparel graphics, and digital campaigns.",
  introSecondary:
    "I use AI as part of my workflow to explore, iterate, and build faster, while keeping the creative direction and design decisions human-led.",
  email: "manuggaltehnik48@gmail.com",
  phone: "081215254994",
  whatsapp: "6281215254994",
  instagram: "ghazali.yyy",
} as const;

export const socials = [
  {
    label: "WhatsApp",
    value: site.phone,
    href: `https://wa.me/${site.whatsapp}`,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
] as const;

export const stats = [
  { value: "2", label: "Years designing" },
  { value: "4", label: "Disciplines" },
  { value: "20+", label: "Pieces shipped" },
  { value: "1", label: "Live client site" },
] as const;

export const disciplines = [
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
] as const;

export const approach = [
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
] as const;

export const proofOfWork = [
  {
    label: "UI/UX",
    items: ["Live websites", "Responsive interfaces", "Product concepts", "User flows"],
  },
  {
    label: "Web",
    items: ["Live implementation", "Responsive websites", "Landing pages"],
  },
  {
    label: "Graphic",
    items: ["Apparel graphics", "Typography", "Branding", "Print design"],
  },
  {
    label: "AI",
    items: ["AI-assisted workflow", "AI-assisted development", "Workflow automation"],
  },
] as const;
