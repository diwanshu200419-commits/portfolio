"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, Skill } from "@/data/skills";
import { Atom, Layers, FileCode, Paintbrush, Sparkles, Terminal, Cpu, Link, Database, Lock, Cloud, Brain, GitBranch, Code2, HelpCircle } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Atom,
  Layers,
  FileCode,
  Paintbrush,
  Sparkles,
  Terminal,
  Cpu,
  Link,
  Database,
  Lock,
  Cloud,
  Brain,
  GitBranch,
  Github: GitHubIcon
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="skills" className="relative border-t border-border-dark/60 bg-black/5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="mb-16 md:max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple">
            Expertise
          </span>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl mt-3">
            Technical Stack &amp; Tooling
          </h3>
          <p className="mt-4 text-sm text-text-muted leading-relaxed font-sans">
            Here is a breakdown of the technologies I use. Click on any card to see details on how I apply it in codebases.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Column: Categorized Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8"
          >
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={categoryVariants}
                className="space-y-4"
              >
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted border-b border-border-dark/30 pb-2">
                  {cat.title}
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.iconName] || HelpCircle;
                    const isCurrent = selectedSkill?.name === skill.name;

                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`flex items-center gap-3.5 rounded-lg border p-3 text-left transition-all duration-200 cursor-pointer ${
                          isCurrent
                            ? "border-accent-purple bg-accent-purple/10 shadow-sm"
                            : "border-border-dark bg-card-bg/25 hover:border-border-dark/80 hover:bg-card-bg/50"
                        }`}
                      >
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded bg-black/40 text-text-muted transition-colors ${
                            isCurrent ? "text-accent-purple bg-accent-purple/10" : ""
                          }`}
                        >
                          <IconComponent className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="block text-xs font-bold text-white truncate">
                              {skill.name}
                            </span>
                            <span className={`text-[8.5px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                              skill.confidence === "Primary Stack"
                                ? "bg-accent-purple/10 border border-accent-purple/20 text-accent-purple"
                                : skill.confidence === "Familiar"
                                ? "bg-border-dark/30 border border-border-dark/60 text-text-muted"
                                : "bg-[#070708] border border-border-dark/30 text-text-muted"
                            }`}>
                              {skill.confidence}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Dynamic Insight Panel */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="rounded-xl border border-border-dark bg-card-bg/30 p-6 backdrop-blur-md">
              <h4 className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-text-white mb-4 border-b border-border-dark/30 pb-3">
                <Code2 className="h-4 w-4 text-accent-purple" />
                <span>Selected Skill Details</span>
              </h4>

              <AnimatePresence mode="wait">
                {selectedSkill ? (
                  <motion.div
                    key={selectedSkill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 font-sans"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">
                        {selectedSkill.name}
                      </span>
                      <span className="rounded bg-accent-purple/10 border border-accent-purple/20 px-2 py-0.5 text-[9px] font-mono text-accent-purple">
                        {selectedSkill.confidence}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-text-muted">
                      {selectedSkill.levelDescription}
                    </p>
                  </motion.div>
                ) : (
                  <div className="py-8 text-center text-xs text-text-muted font-sans">
                    <HelpCircle className="mx-auto h-8 w-8 text-border-dark mb-3 animate-pulse" />
                    <p>Click any skill card on the left to see details on application.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Tech Fact Card */}
            <div className="mt-6 rounded-xl border border-border-dark bg-[#0a0a0c]/60 p-6">
              <h5 className="font-mono text-[10px] font-bold text-white uppercase tracking-wider mb-2">
                TypeScript-First Workflows
              </h5>
              <p className="text-[11px] leading-relaxed text-text-muted font-sans">
                All React components, routes, and Next.js middlewares are developed with strict compiler configurations to catch bugs early and secure API parameter contracts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
