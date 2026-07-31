"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, FileText, Globe, GitBranch, Terminal } from "lucide-react";
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
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden py-32 md:py-48"
    >
      {/* Spotlight grid background and premium ambient gradient layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute inset-0 bg-noise" />
      <div className="ambient-glow" />

      <div className="relative mx-auto w-full max-w-6xl px-6 z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left Column - Large Typography Editorial Intro */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Status indicator badge */}
            <motion.div
              variants={itemVariants}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-dark/80 bg-card-bg/60 px-3.5 py-1.5 text-[10px] font-mono text-text-muted shadow-sm select-none"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-purple opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-purple"></span>
              </span>
              <span>Available for Software Engineering Roles</span>
            </motion.div>

            {/* Huge Headline as Hero */}
            <motion.div variants={itemVariants} className="space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple">
                Diwanshu / Software Engineer
              </span>
              <h1 className="font-display text-5xl font-black tracking-tight text-text-white sm:text-6xl md:text-7xl leading-[1.02] mb-8 max-w-2xl">
                I build clean, <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-purple via-indigo-600 to-violet-600 dark:from-accent-purple dark:via-indigo-400 dark:to-violet-400">functional web products.</span>
              </h1>
            </motion.div>

            {/* Spaced, Readable Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base text-text-muted md:text-lg max-w-xl leading-relaxed mb-10 font-sans"
            >
              I am a product-focused software engineer currently completing my MCA in Machine Learning & AI. I focus on developing clean, responsive interfaces and reliable full-stack applications using Next.js, Express, MongoDB, and Supabase.
            </motion.p>

            {/* SaaS-Style CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="group flex items-center gap-2 rounded-lg bg-highlight-cyan px-6 py-3.5 text-xs font-bold text-primary-bg transition-all hover:opacity-90 active:scale-98 cursor-pointer shadow-md"
              >
                <span>View Products</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollTo("resume")}
                className="flex items-center gap-2 rounded-lg border border-border-dark bg-card-bg/60 px-6 py-3.5 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:text-white hover:bg-card-bg active:scale-98 cursor-pointer"
              >
                <FileText className="h-4 w-4" />
                <span>Resume Sheet</span>
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="flex items-center gap-2 rounded-lg border border-border-dark bg-card-bg/60 px-6 py-3.5 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:text-white hover:bg-card-bg active:scale-98 cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                <span>Get in Touch</span>
              </button>
            </motion.div>

            {/* Social Directories Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 border-t border-border-dark/60 pt-8 w-full max-w-md text-xs text-text-muted"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider">Connect:</span>
              <a
                href="https://github.com/diwanshu200419-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-text-white transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/diwanshu-1a010b2b8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-text-white transition-colors"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Portrait Frame with Ambient Backdrop Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[360px] aspect-[4/5] group">
              {/* Soft gradient ambient glow behind the photo container */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-accent-purple/20 to-indigo-500/10 opacity-70 blur-2xl transition-all duration-500 group-hover:scale-105 group-hover:opacity-90" />
              
              {/* Thin crisp border card */}
              <div className="relative h-full w-full rounded-2xl border border-border-dark bg-card-bg p-3.5 shadow-sm select-none transition-all duration-300 group-hover:border-accent-purple/30">
                
                {/* Profile Image Portrait */}
                <div className="relative h-full w-full overflow-hidden rounded-xl border border-border-dark/30">
                  <img
                    src="/profile.png"
                    alt="Diwanshu Profile Portrait"
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                </div>

                {/* Floating Location Overlay */}
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 rounded-full bg-primary-bg/95 border border-border-dark/60 px-3.5 py-1 text-[10px] font-mono text-text-muted select-none shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Himachal Pradesh, India</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Tiny Trust Indicators Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-24 border-t border-border-dark/45 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[10px] font-mono text-text-muted uppercase tracking-wider"
        >
          <div className="flex items-center gap-3">
            <Globe className="h-4 w-4 text-accent-purple" />
            <span>Active Deployments on Vercel & Netlify</span>
          </div>
          <div className="flex items-center gap-3">
            <GitBranch className="h-4 w-4 text-accent-purple" />
            <span>Open Source Project Owner</span>
          </div>
          <div className="flex items-center gap-3">
            <Terminal className="h-4 w-4 text-accent-purple" />
            <span>Verified 240+ Git Commits</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
