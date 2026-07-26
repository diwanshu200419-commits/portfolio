"use client";

import { motion } from "framer-motion";
import { timelineItems } from "@/data/timeline";
import { Briefcase, Code, Layout, Globe, BookOpen, GraduationCap, HelpCircle } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Code,
  Layout,
  Globe,
  BookOpen,
  GraduationCap
};

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="timeline" className="relative border-t border-border-dark/60 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-blue mb-3">
            Journey
          </h2>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Milestones &amp; Experience
          </h3>
          <p className="mt-4 text-sm text-text-muted mx-auto max-w-xl">
            A chronological look at my evolution from parsing initial algorithms to deploying full-featured SaaS prototypes and local commercial deployments.
          </p>
        </div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-border-dark/60 pl-8 ml-4 md:ml-6 space-y-12"
        >
          {timelineItems.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || HelpCircle;
            const isLatest = index === 0;

            return (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="relative group"
              >
                {/* Connector Dot */}
                <div
                  className={`absolute -left-[45px] top-1 flex h-8 w-8 items-center justify-center rounded-full border bg-primary-bg transition-colors duration-300 ${
                    isLatest
                      ? "border-accent-blue text-accent-blue shadow-lg shadow-accent-blue/15"
                      : "border-border-dark text-text-muted group-hover:border-white/60 group-hover:text-white"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                </div>

                {/* Timeline content card */}
                <div className="rounded-xl border border-border-dark/40 bg-card-bg/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border-dark/80 hover:bg-card-bg/25">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-accent-purple">
                      {item.year}
                    </span>
                    {isLatest && (
                      <span className="rounded bg-accent-blue/10 border border-accent-blue/20 px-2 py-0.5 text-[9px] font-mono text-accent-blue">
                        Current focus
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-base font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
