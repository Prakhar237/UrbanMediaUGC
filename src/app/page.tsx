import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import VelocityArgument from "@/components/VelocityArgument";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";
import Work from "@/components/Work";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <VelocityArgument />
        <Portfolio />
        <HowItWorks />
        <Work />
        <Stats />
        <Pricing />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
