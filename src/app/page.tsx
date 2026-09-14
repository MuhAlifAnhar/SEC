import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Games from "@/components/Games";
import About from "@/components/About";
import PrizePool from "@/components/PrizePool";
import Timeline from "@/components/Timeline";
import Registration from "@/components/Registration";
import Juknis from "@/components/Juknis";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-sec-bg text-foreground relative">
      <div className="scanline"></div>
      
      <Navbar />
      
      <Hero />
      <Stats />
      <Games />
      <About />
      <PrizePool />
      <Timeline />
      <Registration />
      <Juknis />
      <FAQ />
      <Contact />
      
      <Footer />
      
      <StickyMobileCTA />
    </main>
  );
}
