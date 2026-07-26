"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden py-24 md:py-32"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute inset-0 bg-noise" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Column - Copy & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Availability Indicator */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-dark bg-card-bg/40 px-3.5 py-1 text-xs font-semibold text-text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available for Junior Developer roles</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-text-muted">
                Hi, I&apos;m Diwanshu.
              </span>
              <h1 className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.05] mb-6">
                I build clean, functional web applications.
              </h1>
            </motion.div>

            {/* Bio pitch */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-text-muted md:text-base max-w-xl leading-relaxed mb-8"
            >
              I am a recent computer applications graduate who enjoys building clean, functional web applications. I focus on writing clear code, building responsive interfaces, and solving usability problems using Next.js, Express, MongoDB, and Supabase.
            </motion.p>

            {/* Interactive Command Shortcut Reminder */}
            <motion.div
              variants={itemVariants}
              className="hidden sm:flex items-center gap-2 rounded-full border border-border-dark bg-card-bg/40 px-3.5 py-1 text-[10px] font-mono text-text-muted mb-6 select-none"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent-purple animate-pulse" />
              <span>
                Tip: Press{" "}
                <kbd className="rounded bg-border-dark px-1.5 py-0.5 text-[9px] font-semibold text-text-white shadow-sm">
                  ⌘K
                </kbd>{" "}
                or{" "}
                <kbd className="rounded bg-border-dark px-1.5 py-0.5 text-[9px] font-semibold text-text-white shadow-sm">
                  Ctrl+K
                </kbd>{" "}
                to launch the control center.
              </span>
            </motion.div>

            {/* Action Buttons Grid */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3.5 mb-8"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-primary-bg transition-all hover:bg-white/95 active:scale-95 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollTo("resume")}
                className="flex items-center gap-2 rounded-full border border-border-dark bg-card-bg/40 px-5 py-3 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:bg-card-bg hover:text-white active:scale-95 cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Resume</span>
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="flex items-center gap-2 rounded-full border border-border-dark bg-card-bg/40 px-5 py-3 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:bg-card-bg hover:text-white active:scale-95 cursor-pointer"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Hire Me</span>
              </button>
            </motion.div>

            {/* Social channels shortcut row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 border-t border-border-dark/60 pt-6 w-full max-w-md text-xs text-text-muted"
            >
              <span className="font-semibold uppercase tracking-wider text-[10px]">Directory:</span>
              <a
                href="https://github.com/diwanshu200419-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/diwanshu-1a010b2b8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[340px] aspect-[4/5]">
              {/* Profile Card */}
              <div className="relative h-full w-full rounded-2xl border border-border-dark bg-card-bg/60 overflow-hidden shadow-sm select-none">
                
                {/* Profile Image - Clean & Flat */}
                <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                  <img
                    src="/profile.png"
                    alt="Diwanshu Profile Portrait"
                    className="h-full w-full object-cover rounded-xl border border-border-dark/30"
                    draggable="false"
                  />
                </div>

                {/* Floating Location Overlay inside card */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-primary-bg/85 border border-border-dark/50 px-3 py-1 text-[9px] font-mono text-text-muted backdrop-blur-sm select-none">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Loc: Himachal Pradesh, IN</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
