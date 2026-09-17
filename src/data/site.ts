export const site = {
  name: "Ivan Ghazali",
  role: "UI/UX Designer · Web Designer · Graphic Designer",
  supporting: "Visual Design · Brand Design · AI-Augmented Workflow",
  location: "Semarang, Indonesia",
  experience: "2 years",
  tagline: "Designing interfaces that work and visuals that get remembered.",
  email: "ivanghazali.creative@gmail.com",
  instagram: "ghazali.yyy",
} as const;

export const socials = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
] as const;




