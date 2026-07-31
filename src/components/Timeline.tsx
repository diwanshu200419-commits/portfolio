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
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="timeline" className="relative border-t border-border-dark/60 py-24 md:py-36 bg-black/5">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Section Heading */}
        <div className="mb-20">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple">
            Milestones
          </span>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl mt-3">
            Chronological Journey
          </h3>
          <p className="mt-4 text-sm text-text-muted max-w-xl leading-relaxed font-sans">
            A vertical trace of my development checkpoints, from learning variable declaration structures to releasing full-stack SaaS.
          </p>
        </div>

        {/* Timeline Path */}
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
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Connector Dot */}
                <div
                  className={`absolute -left-[48px] top-1 flex h-8 w-8 items-center justify-center rounded-full border bg-primary-bg transition-colors duration-300 ${
                    isLatest
                      ? "border-accent-purple text-accent-purple shadow-sm"
                      : "border-border-dark text-text-muted group-hover:border-white/60 group-hover:text-white"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                </div>

                {/* Timeline Content Block (Notion style) */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-accent-purple">
                      {item.year}
                    </span>
                    <h4 className="font-display text-base font-bold text-white">
                      {item.title}
                    </h4>
                    {isLatest && (
                      <span className="rounded bg-accent-purple/10 border border-accent-purple/20 px-2 py-0.5 text-[9px] font-mono text-accent-purple">
                        Expected Program
                      </span>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed text-text-muted max-w-2xl font-sans">
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
