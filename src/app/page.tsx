import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Showcase } from "@/components/Showcase";
import { Disciplines } from "@/components/Disciplines";
import { DigitalWork } from "@/components/work/DigitalWork";
import { GraphicWork } from "@/components/work/GraphicWork";
import { GenAiWork } from "@/components/work/GenAiWork";
import { CaseStudyProvider } from "@/components/work/CaseStudyProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Approach } from "@/components/Approach";
import { PlaySection } from "@/components/PlaySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <CaseStudyProvider>
        <Nav />
        <main id="main">
          <Hero />
          <Intro />
          <Showcase />
          <Disciplines />
          <DigitalWork />
          <GraphicWork />
          <GenAiWork />
          <Approach />
          <PlaySection />
        </main>
        <Footer />
      </CaseStudyProvider>
    </LanguageProvider>
  );
}
