import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AvailabilityStats from "@/components/AvailabilityStats";
import ResumeSnapshot from "@/components/ResumeSnapshot";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitStats from "@/components/GitStats";
import Timeline from "@/components/Timeline";
import ResumeSection from "@/components/ResumeSection";
import Terminal from "@/components/Terminal";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CommandMenu from "@/components/CommandMenu";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import LenisProvider from "@/components/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      {/* Global premium components */}
      <CustomCursor />
      <ScrollProgressBar />
      <CommandMenu />

      {/* Navigation Header */}
      <Navbar />

      {/* Core Page Content */}
      <main className="flex-grow">
        <Hero />
        <AvailabilityStats />
        <ResumeSnapshot />
        <About />
        <Projects />
        <Skills />
        <GitStats />
        <Timeline />
        <ResumeSection />
        <Terminal />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </LenisProvider>
  );
}
