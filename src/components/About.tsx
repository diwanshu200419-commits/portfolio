"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Zap, Layers } from "lucide-react";

export default function About() {
  const principles = [
    {
      icon: Eye,
      title: "UI/UX Intuition",
      description: "Belief that interfaces should feel fluid and effortless. Spacing, typography, and visual hierarchy are treated as core engineering requirements, not afterthoughts.",
    },
    {
      icon: Layers,
      title: "Clean Modular Architecture",
      description: "Designing components and APIs that are strictly typed, self-documenting, and easy to scale. Strong separation of concerns ensures low maintenance overhead.",
    },
    {
      icon: Cpu,
      title: "AI-Powered Product Thinking",
      description: "Going beyond static layouts by orchestrating LLMs and cognitive agents (like Google Gemini API) to build intelligent workflows that solve business needs.",
    },
    {
      icon: Zap,
      title: "Performance & Lighthouse Optimization",
      description: "Optimizing bundle sizes, minimizing cumulative layout shifts, caching queries, and ensuring fast load times. Target is always 100% on performance audits.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="relative border-t border-border-dark/60 bg-black/20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="mb-16 md:max-w-2xl">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
            About Me
          </h2>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Software built for clarity, speed, and real product impact.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            I don&apos;t just write lines of code. I design and build full-featured digital systems that resolve bottlenecks, optimize workflows, and deliver elite user experiences. I study modern design patterns from Stripe, Linear, and Vercel to craft interfaces that inspire confidence.
          </p>
        </div>

        {/* Core Principles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative rounded-xl border border-border-dark bg-card-bg/40 p-6 transition-all duration-300 hover:border-accent-purple/50 hover:bg-card-bg/80 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-purple/10 text-accent-purple transition-all duration-300 group-hover:bg-accent-purple group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-display text-base font-bold text-white mb-2 transition-colors duration-300 group-hover:text-accent-purple">
                  {p.title}
                </h4>
                <p className="text-xs leading-relaxed text-text-muted">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Narrative Banner */}
        <div className="mt-16 rounded-xl border border-border-dark/80 bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h4 className="font-display text-lg font-bold text-white mb-2">
                Bridging Design Aesthetics and Full Stack Logic
              </h4>
              <p className="text-xs leading-relaxed text-text-muted">
                Whether deploying a Next.js App Router project to Vercel, designing an MongoDB database model, or fine-tuning Framer Motion transitions, I keep security, responsiveness, and performance at the center of development.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-semibold text-accent-blue tracking-wide uppercase">
                Available for Projects &amp; Job Roles
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
