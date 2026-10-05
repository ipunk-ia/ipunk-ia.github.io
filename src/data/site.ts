export const site = {
  name: "Ivan Ghazali",
  role: "UI/UX Designer · Web Designer · Graphic Designer",
  supporting: "Visual Design · Brand Design · AI-Augmented Workflow",
  location: "Semarang, Indonesia",
  experience: "2 years",
  tagline: "Designing interfaces that work and visuals that get remembered.",
  instagram: "ghazali.yyy",
  instagramUrl: "https://instagram.com/ghazali.yyy",
} as const;

export const socials = [
  {
    label: "Instagram",
    value: `@${site.instagram}`,
    href: site.instagramUrl,
  },
] as const;




