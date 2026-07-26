"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
  id: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Availability", href: "#availability", id: "availability" },
    { label: "Snapshot", href: "#snapshot", id: "snapshot" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Timeline", href: "#timeline", id: "timeline" },
    { label: "Resume", href: "#resume", id: "resume" },
    { label: "Terminal", href: "#terminal", id: "terminal" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Track scrolling to adjust navbar style (add background blur when scrolled)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Detect when section is in the middle of viewport
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "glassmorphism py-4" : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue font-display text-base font-black text-white shadow-md">
              D
            </div>
            <span>Diwanshu</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative text-xs font-medium tracking-wide uppercase transition-colors duration-200 hover:text-text-white ${
                  activeSection === link.id ? "text-text-white" : "text-text-muted"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="group flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-primary-bg transition-all duration-300 hover:bg-white/95 hover:shadow-lg hover:shadow-white/5 active:scale-95"
            >
              <span>Hire Me</span>
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-card-bg hover:text-white md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 border-b border-border-dark bg-primary-bg/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors py-2 border-b border-border-dark/20 ${
                    activeSection === link.id ? "text-accent-purple font-semibold" : "text-text-muted"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue py-2.5 text-xs font-bold text-white shadow-md active:scale-95"
              >
                <span>Hire Me</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
