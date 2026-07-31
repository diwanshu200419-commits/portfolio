"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
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
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.className = nextTheme;
  };

  const navLinks: NavLink[] = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Status", href: "#availability", id: "availability" },
    { label: "Snapshot", href: "#snapshot", id: "snapshot" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Timeline", href: "#timeline", id: "timeline" },
    { label: "Resume", href: "#resume", id: "resume" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
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
          scrolled
            ? "bg-primary-bg/85 border-b border-border-dark/60 backdrop-blur-md py-3.5 shadow-[0_2px_18px_rgba(0,0,0,0.02)]"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-2.5 font-display text-[15px] font-bold tracking-tight text-text-white transition-opacity hover:opacity-90"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-purple font-display text-sm font-black text-white shadow-sm">
              D
            </div>
            <span>Diwanshu</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative text-[13px] font-medium tracking-normal transition-colors duration-200 hover:text-text-white py-1 ${
                  activeSection === link.id ? "text-text-white font-semibold" : "text-text-muted"
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-purple"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Theme switcher & Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-text-muted hover:text-text-white transition-colors hover:bg-secondary-bg cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Desktop CTA */}
            <div className="hidden xl:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="group flex items-center gap-1.5 rounded-lg bg-text-white border border-border-dark px-4 py-2 text-xs font-bold text-primary-bg transition-all duration-200 hover:shadow-sm active:scale-98"
              >
                <span>Hire Me</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-secondary-bg hover:text-text-white xl:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-30 border-b border-border-dark bg-primary-bg/95 p-6 shadow-2xl backdrop-blur-xl xl:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-[13px] font-medium tracking-normal transition-colors py-2.5 border-b border-border-dark/30 ${
                    activeSection === link.id ? "text-accent-purple font-semibold" : "text-text-muted"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-accent-purple py-2.5 text-xs font-bold text-white shadow-sm active:scale-95"
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
