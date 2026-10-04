import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { WorkRibbon } from "@/components/WorkRibbon";
import { Archive } from "@/components/Archive";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { CaseStudyProvider } from "@/components/work/CaseStudyProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <CaseStudyProvider>
        <Nav />
        <main id="main">
          <Hero />
          <Statement />
          <WorkRibbon />
          <Archive />
          <Services />
          <About />
        </main>
        <Footer />
      </CaseStudyProvider>
    </LanguageProvider>
  );
}
