"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Cpu, GraduationCap, Briefcase, Target, 
  LineChart, Award, FileText, Download, Eye, X, 
  ExternalLink, CheckCircle2, ChevronRight 
} from "lucide-react";
import { resumeData } from "@/data/resume";
import { projects } from "@/data/projects";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function ResumeSnapshot() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);

  const handlePrint = () => {
    window.print();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="snapshot" className="relative border-t border-border-dark/60 bg-black/10 py-24 md:py-32 print:hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
            At a Glance
          </h2>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Resume Snapshot
          </h3>
          <p className="mt-3 text-sm text-text-muted">
            Everything you need to know about my engineering profile in less than 30 seconds.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 relative rounded-xl border border-border-dark bg-card-bg/50 p-6 shadow-xl backdrop-blur-sm card-border-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-accent-purple/10 p-2 text-accent-purple">
                  <User className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Professional Summary
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-text-white font-sans">
                I am Diwanshu, a Software Engineer dedicated to building high-performance full-stack applications and AI-ready digital systems. I approach development with a product-focused engineering mindset, ensuring visual hierarchy, clean React components, and secure data schemas. My passion lies in solving business challenges and translating concepts into lightning-fast, production-ready deployments.
              </p>
            </div>
            <div className="mt-4 border-t border-border-dark/40 pt-4 flex items-center justify-between text-[9px] font-mono text-text-muted">
              <span>Mindset: Product-driven Engineering</span>
              <span>Focus: Full-Stack & AI</span>
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 relative rounded-xl border border-accent-purple/20 bg-accent-purple/5 p-6 shadow-xl backdrop-blur-sm card-border-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-accent-purple/10 p-2 text-accent-purple">
                  <FileText className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Resume Console
                </h4>
              </div>
              <p className="text-xs text-text-muted mb-6 leading-relaxed">
                Need a copy for your applicant tracking system or client review? Open the live PDF viewer immediately or print/download a standard PDF copy.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-primary-bg transition-all hover:bg-white/90 active:scale-95 cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>View Resume</span>
                </button>
                
                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-2 rounded-lg border border-border-dark bg-card-bg/40 px-4 py-2.5 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:text-white active:scale-95 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            <div className="border-t border-border-dark/40 pt-4 flex flex-wrap items-center justify-between gap-2 text-[9px] font-mono text-text-muted">
              <span>Last Updated: July 2026</span>
              <span>Size: ~120 KB</span>
              <span>Version: v2.4.0</span>
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 relative rounded-xl border border-border-dark bg-card-bg/50 p-6 shadow-xl backdrop-blur-sm card-border-glow"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="rounded-lg bg-accent-blue/10 p-2 text-accent-blue">
                <Cpu className="h-4.5 w-4.5" />
              </div>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                Technical Stack
              </h4>
            </div>

            <div className="space-y-4">
              {resumeData.skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-1.5">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                    {skillGroup.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="rounded-full bg-border-dark/30 border border-border-dark/40 px-2.5 py-0.5 text-[10px] font-mono text-white transition-all hover:border-accent-purple/40 hover:bg-accent-purple/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CARD 3: Education (1 col) */}
          <motion.div 
            variants={cardVariants}
            className="relative rounded-xl border border-border-dark bg-card-bg/50 p-6 shadow-xl backdrop-blur-sm card-border-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-accent-blue/10 p-2 text-accent-blue">
                  <GraduationCap className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Education
                </h4>
              </div>
              
              <div className="relative border-l border-border-dark pl-3 mt-4 space-y-4">
                <div className="relative">
                  <span className="absolute -left-[16px] top-1.5 h-1.5 w-1.5 rounded-full bg-accent-blue" />
                  <strong className="text-xs font-bold text-white block">BCA Graduate</strong>
                  <span className="text-[9px] font-mono text-text-muted block">Graduated: 2026</span>
                  <span className="text-[10px] text-text-muted mt-1 block">
                    Himachal Pradesh University (SILB)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-border-dark/40 pt-3 flex items-center justify-between text-[10px] font-mono text-accent-blue">
              <span>Score / GPA:</span>
              <strong>7.03 CGPA</strong>
            </div>
          </motion.div>

          {/* CARD 5: Career Objective (1 col) */}
          <motion.div 
            variants={cardVariants}
            className="relative rounded-xl border border-border-dark bg-card-bg/50 p-6 shadow-xl backdrop-blur-sm card-border-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-accent-blue/10 p-2 text-accent-blue">
                  <Target className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Career Objective
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-text-muted font-sans mt-3">
                My goal is to join a product-driven engineering team where I can build scalable software, contribute to real-world applications, continuously improve my technical skills, and create meaningful digital experiences that make a positive impact.
              </p>
            </div>
            <div className="mt-4 border-t border-border-dark/40 pt-3 text-[10px] font-mono text-text-muted">
              <span>Target Roles: SDE, Frontend, Full-Stack</span>
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 relative rounded-xl border border-border-dark bg-card-bg/50 p-6 shadow-xl backdrop-blur-sm card-border-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-highlight-cyan/10 p-2 text-highlight-cyan">
                  <Briefcase className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Featured Projects Selector
                </h4>
              </div>

              {/* Mini Selector Tabs */}
              <div className="flex gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none border-b border-border-dark/30">
                {projects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProjectIdx(idx)}
                    className={`px-3 py-1 rounded text-[10px] font-mono shrink-0 transition-colors cursor-pointer ${
                      selectedProjectIdx === idx 
                        ? "bg-highlight-cyan/10 border border-highlight-cyan/30 text-highlight-cyan" 
                        : "bg-border-dark/20 border border-border-dark/40 text-text-muted hover:text-white"
                    }`}
                  >
                    {proj.title}
                  </button>
                ))}
              </div>

              {/* Tab Display Panel */}
              <div className="space-y-3 min-h-[110px]">
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-bold text-white">
                    {projects[selectedProjectIdx].title}
                  </strong>
                  <span className="text-[9px] font-mono text-highlight-cyan bg-highlight-cyan/10 px-2 py-0.5 rounded">
                    {projects[selectedProjectIdx].category}
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {projects[selectedProjectIdx].tagline}
                </p>
                <div className="flex flex-wrap gap-1">
                  {projects[selectedProjectIdx].techStack.slice(0, 4).map((t) => (
                    <span key={t} className="rounded bg-border-dark/30 border border-border-dark/40 px-2 py-0.5 text-[9px] font-mono text-text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Selector actions */}
            <div className="mt-4 border-t border-border-dark/40 pt-4 flex items-center justify-between gap-4">
              <a 
                href={projects[selectedProjectIdx].githubUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-mono text-text-muted hover:text-white"
              >
                <GitHubIcon className="h-3.5 w-3.5 fill-current" />
                <span>Source Code</span>
              </a>
              
              <a 
                href={projects[selectedProjectIdx].liveUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-mono text-highlight-cyan hover:underline"
              >
                <span>Live Site</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          {/* CARD 6: Currently Learning (1 col) */}
          <motion.div 
            variants={cardVariants}
            className="relative rounded-xl border border-border-dark bg-card-bg/50 p-6 shadow-xl backdrop-blur-sm card-border-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-highlight-cyan/10 p-2 text-highlight-cyan">
                  <LineChart className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Learning Roadmap
                </h4>
              </div>

              {/* Vertical Path */}
              <div className="relative border-l border-border-dark pl-3 mt-4 space-y-3 text-[10px]">
                <div className="relative">
                  <span className="absolute -left-[16px] top-1.5 h-1.5 w-1.5 rounded-full bg-highlight-cyan animate-pulse" />
                  <span className="font-semibold text-white block">AI Engineering & ML</span>
                  <span className="text-text-muted block text-[9px]">Model parameter optimizations, cognitive agents</span>
                </div>
                <div className="relative">
                  <span className="absolute -left-[16px] top-1.5 h-1.5 w-1.5 rounded-full bg-border-dark" />
                  <span className="font-semibold text-text-muted block">System Design & DSA</span>
                  <span className="text-text-muted block text-[9px]">Advanced routing, patterns, algorithms caching</span>
                </div>
                <div className="relative">
                  <span className="absolute -left-[16px] top-1.5 h-1.5 w-1.5 rounded-full bg-border-dark" />
                  <span className="font-semibold text-text-muted block">Data Analytics</span>
                  <span className="text-text-muted block text-[9px]">Python scripts, SQL queries, Power BI</span>
                </div>
              </div>
            </div>
            <div className="mt-4 border-t border-border-dark/40 pt-3 text-[9px] font-mono text-text-muted">
              <span>Goal: System Architecture Depth</span>
            </div>
          </motion.div>

          {/* CARD 7: Strengths (1 col) */}
          <motion.div 
            variants={cardVariants}
            className="relative rounded-xl border border-border-dark bg-card-bg/50 p-6 shadow-xl backdrop-blur-sm card-border-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-highlight-cyan/10 p-2 text-highlight-cyan">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Core Strengths
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 text-[10px] font-mono">
                {["Quick Learner", "Problem Solver", "Self Motivated", "Team Player", "Adaptability", "Continuous Learning"].map((strength) => (
                  <div 
                    key={strength}
                    className="flex items-center gap-1.5 rounded bg-border-dark/20 border border-border-dark/30 px-2 py-1 text-text-muted hover:border-highlight-cyan/20 hover:text-white transition-all"
                  >
                    <CheckCircle2 className="h-3 w-3 text-highlight-cyan shrink-0" />
                    <span className="truncate">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 border-t border-border-dark/40 pt-3 text-[9px] font-mono text-text-muted">
              <span>Work Ethic: Rigorous & Agile</span>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* In-app Modal PDF Viewer / Resume Sheet Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-10 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl h-[85vh] bg-[#050816] rounded-2xl border border-border-dark flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border-dark/60 bg-black/40 px-6 py-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-4.5 w-4.5 text-accent-purple" />
                  <span className="font-display font-bold text-white text-sm">Resume Document Viewer</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 text-xs text-white transition-colors cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Print/Save PDF</span>
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-lg p-1.5 text-text-muted hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>

              {/* Modal Content - Scrollable Resume Sheet */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 text-white select-text">
                
                {/* Embedded Printable Resume Content */}
                <div className="max-w-3xl mx-auto p-6 border border-border-dark bg-card-bg/50 rounded-xl">
                  {/* Top info */}
                  <div className="border-b border-border-dark/80 pb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div>
                        <h4 className="font-display text-2xl font-black text-white">{resumeData.personalInfo.name}</h4>
                        <p className="text-sm font-semibold text-accent-purple mt-1">{resumeData.personalInfo.title}</p>
                      </div>
                      <div className="text-xs text-text-muted space-y-1 font-mono text-left sm:text-right">
                        <p>{resumeData.personalInfo.email}</p>
                        <p>{resumeData.personalInfo.phone}</p>
                        <p>{resumeData.personalInfo.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-6">
                    <div className="space-y-1.5">
                      <strong className="text-xs text-accent-blue font-bold uppercase tracking-wider block">Summary</strong>
                      <p className="text-xs text-text-muted leading-relaxed">{resumeData.summary}</p>
                    </div>

                    <div className="space-y-2">
                      <strong className="text-xs text-accent-blue font-bold uppercase tracking-wider block">Skills</strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        {resumeData.skills.map((s) => (
                          <div key={s.category}>
                            <span className="font-semibold text-white text-[11px]">{s.category}: </span>
                            <span className="text-text-muted font-mono text-[11px]">{s.items.join(", ")}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <strong className="text-xs text-accent-blue font-bold uppercase tracking-wider block">Projects</strong>
                      <div className="space-y-3">
                        {resumeData.projects.map((p) => (
                          <div key={p.name} className="border-l border-border-dark pl-3">
                            <div className="flex justify-between items-center text-xs">
                              <strong className="text-white">{p.name}</strong>
                              <span className="text-[9px] font-mono text-text-muted">{p.period}</span>
                            </div>
                            <span className="text-[10px] text-accent-purple block mt-0.5">{p.role}</span>
                            <p className="text-[11px] text-text-muted mt-1">{p.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <strong className="text-xs text-accent-blue font-bold uppercase tracking-wider block">Education</strong>
                      {resumeData.education.map((e) => (
                        <div key={e.degree} className="border-l border-border-dark pl-3 text-xs">
                          <div className="flex justify-between items-center">
                            <strong className="text-white">{e.degree}</strong>
                            <span className="text-[9px] font-mono text-text-muted">{e.period}</span>
                          </div>
                          <span className="text-[10px] text-accent-purple block mt-0.5">{e.institution}</span>
                          <p className="text-[11px] text-text-muted mt-1">{e.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
