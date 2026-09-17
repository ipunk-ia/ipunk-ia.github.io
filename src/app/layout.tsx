import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import { site } from "@/data/site";
import { SmoothScroll } from "@/components/SmoothScroll";

const ppMori = localFont({
  variable: "--font-mori",
  display: "swap",
  src: [
    { path: "../fonts/PPMori-Extralight.otf", weight: "200", style: "normal" },
    { path: "../fonts/PPMori-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/PPMori-SemiBold.otf", weight: "600", style: "normal" },
  ],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} - UI/UX, Web & Graphic Designer`,
  description:
    "Designer from Semarang, Indonesia. UI/UX, web design, brand identity, and visual work, with an AI-augmented workflow.",
  keywords: [
    "UI/UX designer",
    "web designer",
    "graphic designer",
    "brand identity",
    "Semarang",
    "Indonesia",
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} - UI/UX, Web & Graphic Designer`,
    description: site.tagline,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* The font variables live on <html> so :root-level tokens can resolve them. */
    <html lang="en" className={`${ppMori.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
