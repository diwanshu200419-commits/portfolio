import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitStats from "@/components/GitStats";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CommandMenu from "@/components/CommandMenu";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  return (
    <>
      {/* Global premium components */}
      <CustomCursor />
      <ScrollProgressBar />
      <CommandMenu />

      {/* Navigation Header */}
      <Navbar />

      {/* Core Page Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <GitStats />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </>
  );
}
