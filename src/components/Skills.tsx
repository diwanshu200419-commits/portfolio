"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
      transition: { staggerChildren: 0.1 },
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
    <section id="skills" className="relative border-t border-border-dark/60 bg-black/20 py-24 md:py-32">
      {/* Background radial highlight */}
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-accent-purple/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="mb-16 md:max-w-2xl">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
            Expertise
          </h2>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Stack &amp; Tooling
          </h3>
          <p className="mt-4 text-sm text-text-muted">
            Rather than grading myself with meaningless percentages, here is an explanation of what I specialize in and how I apply each technology in real-world scenarios.
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
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                variants={categoryVariants}
                className="space-y-4"
              >
                <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border-dark/30 pb-2">
                  {cat.title}
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.iconName] || HelpCircle;
                    const isCurrent = selectedSkill?.name === skill.name;

                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`flex items-center gap-3.5 rounded-lg border p-3 text-left transition-all duration-200 cursor-pointer ${
                          isCurrent
                            ? "border-accent-purple bg-accent-purple/10 shadow-lg shadow-accent-purple/5"
                            : "border-border-dark bg-[#111827]/20 hover:border-border-dark/80 hover:bg-[#111827]/40"
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
                          <span className="block text-xs font-bold text-white truncate">
                            {skill.name}
                          </span>
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
            <div className="rounded-xl border border-border-dark bg-[#111827]/30 p-6 backdrop-blur-md">
              <h4 className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-text-white mb-4">
                <Code2 className="h-4.5 w-4.5 text-accent-blue" />
                <span>Production Implementation</span>
              </h4>

              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">
                      {selectedSkill.name}
                    </span>
                    <span className="rounded bg-accent-purple/10 border border-accent-purple/20 px-2 py-0.5 text-[9px] font-mono text-accent-purple">
                      Verified Skill
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-text-muted">
                    {selectedSkill.levelDescription}
                  </p>
                </motion.div>
              ) : (
                <div className="py-8 text-center text-xs text-text-muted">
                  <HelpCircle className="mx-auto h-8 w-8 text-border-dark mb-3 animate-pulse" />
                  <p>Click any skill card on the left to see how it is applied in my stack architectures.</p>
                </div>
              )}
            </div>

            {/* Quick Tech Fact Card */}
            <div className="mt-6 rounded-xl border border-border-dark/60 bg-gradient-to-br from-accent-purple/5 to-accent-blue/5 p-6">
              <h5 className="font-display text-xs font-bold text-white mb-2">
                TypeScript-First Workflows
              </h5>
              <p className="text-[11px] leading-relaxed text-text-muted">
                All React apps and Next.js APIs are written using strict TypeScript configurations to guarantee compiler-level contract compliance and eliminate runtime type failures.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
