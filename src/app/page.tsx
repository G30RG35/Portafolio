import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <StickyMobileCTA />
    </>
  );
}
