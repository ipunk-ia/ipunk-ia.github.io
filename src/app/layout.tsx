import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: `${site.name} - UI/UX, Web & Graphic Designer`,
  description:
    "Designer from Semarang, Indonesia. Interfaces that work and visuals that get remembered: UI/UX, web, brand and poster design.",
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
    <html lang="en" className={ppMori.variable} suppressHydrationWarning>
      <head>
        {/* Before first paint: a visitor who already saw the welcome this session skips it (no white flash). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("welcome-seen"))document.documentElement.classList.add("welcome-seen")}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
