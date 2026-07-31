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
    <section id="snapshot" className="relative border-t border-border-dark/60 bg-black/5 py-24 md:py-32 print:hidden">
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
            A quick overview of my background, skills, and current roadmap.
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
          {/* CARD 1: Professional Summary (2 cols wide) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 relative rounded-2xl border border-border-dark bg-card-bg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:border-accent-purple/35 flex flex-col justify-between"
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
                I am a graduate in Computer Applications (BCA &apos;26). I build full-stack web applications using JavaScript and TypeScript ecosystems. I focus on writing clean, readable code, organizing databases, and building responsive user interfaces. I enjoy working on tools that solve practical problems and deliver useful outcomes.
              </p>
            </div>
            <div className="mt-4 border-t border-border-dark/40 pt-4 flex items-center justify-between text-[9px] font-mono text-text-muted">
              <span>Approach: Clean & Functional</span>
              <span>Focus: Full-Stack JavaScript</span>
            </div>
          </motion.div>

          {/* CARD 8: Resume Actions (2 cols wide) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 relative rounded-2xl border border-border-dark bg-card-bg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:border-accent-purple/35 flex flex-col justify-between"
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
                You can view my complete, structured experience sheet here or save it as an ATS-friendly PDF copy.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-highlight-cyan px-4 py-2.5 text-xs font-bold text-primary-bg transition-all hover:opacity-90 active:scale-95 cursor-pointer"
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
              <span>Status: Verified Sheet</span>
            </div>
          </motion.div>

          {/* CARD 2: Technical Skills (2 cols wide) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 relative rounded-2xl border border-border-dark bg-card-bg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:border-accent-purple/35"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="rounded-lg bg-accent-purple/10 p-2 text-accent-purple">
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
            className="relative rounded-2xl border border-border-dark bg-card-bg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:border-accent-purple/35 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-accent-purple/10 p-2 text-accent-purple">
                  <GraduationCap className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Education
                </h4>
              </div>
              
              <div className="relative border-l border-border-dark pl-3 mt-4 space-y-4">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="relative text-xs">
                    <span className="absolute -left-[16px] top-1.5 h-1.5 w-1.5 rounded-full bg-accent-purple" />
                    <strong className="text-xs font-bold text-white block leading-tight">{edu.degree}</strong>
                    <span className="text-[9px] font-mono text-text-muted block mt-0.5">{edu.period} • {edu.institution}</span>
                    <span className="text-[9px] text-text-muted block mt-0.5">{edu.details}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 border-t border-border-dark/40 pt-3 text-[9px] font-mono text-text-muted">
              <span>Goal: Academic & Tech Excellence</span>
            </div>
          </motion.div>

          {/* CARD 5: Career Objective (1 col) */}
          <motion.div 
            variants={cardVariants}
            className="relative rounded-2xl border border-border-dark bg-card-bg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:border-accent-purple/35 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-accent-purple/10 p-2 text-accent-purple">
                  <Target className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Career Goal
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-text-muted font-sans mt-3">
                My goal is to start my professional career as a junior developer or software engineer intern. I want to work with collaborative teams where I can learn from experienced engineers, contribute to real-world codebases, and write clean, maintainable software.
              </p>
            </div>
            <div className="mt-4 border-t border-border-dark/40 pt-3 text-[10px] font-mono text-text-muted">
              <span>Target: Junior Dev / SDE Intern</span>
            </div>
          </motion.div>

          {/* CARD 4: Featured Projects (2 cols wide) */}
          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 relative rounded-2xl border border-border-dark bg-card-bg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:border-accent-purple/35 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-highlight-cyan/10 p-2 text-highlight-cyan">
                  <Briefcase className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Projects Quick Selector
                </h4>
              </div>

              {/* Mini Selector Tabs */}
              <div className="flex gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none border-b border-border-dark/30">
                {projects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProjectIdx(idx)}
                    className={`px-3 py-1 rounded text-[10px] font-mono whitespace-nowrap cursor-pointer transition-colors ${
                      selectedProjectIdx === idx
                        ? "bg-accent-purple/10 border border-accent-purple/35 text-white"
                        : "bg-border-dark/20 border border-transparent text-text-muted hover:text-white"
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
            className="relative rounded-2xl border border-border-dark bg-card-bg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:border-accent-purple/35 flex flex-col justify-between"
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
                  <span className="font-semibold text-white block">SQL Databases</span>
                  <span className="text-text-muted block text-[9px]">Learning indexing, joins, and normalizations</span>
                </div>
                <div className="relative">
                  <span className="absolute -left-[16px] top-1.5 h-1.5 w-1.5 rounded-full bg-border-dark" />
                  <span className="font-semibold text-text-muted block">React State</span>
                  <span className="text-text-muted block text-[9px]">Learning Context API and Redux Toolkit dynamics</span>
                </div>
                <div className="relative">
                  <span className="absolute -left-[16px] top-1.5 h-1.5 w-1.5 rounded-full bg-border-dark" />
                  <span className="font-semibold text-text-muted block">Linux CLI</span>
                  <span className="text-text-muted block text-[9px]">Writing simple bash scripts and configuring hooks</span>
                </div>
              </div>
            </div>
            <div className="mt-4 border-t border-border-dark/40 pt-3 text-[9px] font-mono text-text-muted">
              <span>Goal: Full-Stack Foundation</span>
            </div>
          </motion.div>

          {/* CARD 7: Strengths (1 col) */}
          <motion.div 
            variants={cardVariants}
            className="relative rounded-2xl border border-border-dark bg-card-bg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] hover:border-accent-purple/35 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-lg bg-highlight-cyan/10 p-2 text-highlight-cyan">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Developer Traits
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 text-[10px] font-mono">
                {["Writing Clean Code", "Responsive Layouts", "Debugging", "Reading Docs", "Collaborative Spirit", "Curiosity"].map((strength) => (
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
              <span>Work Ethic: Transparent & Reliable</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-10 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl h-[85vh] bg-primary-bg rounded-2xl border border-border-dark flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border-dark/60 bg-black/40 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-white text-sm">Resume Document Viewer</span>
                  <span className="rounded bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9px] font-mono text-emerald-400">
                    Printable
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 text-xs text-white transition-colors cursor-pointer"
                  >
                    <Download className="h-3 w-3" />
                    <span>Print PDF</span>
                  </button>
                  
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-lg p-1.5 text-text-muted hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Modal Content - Scrollable Resume Sheet */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 text-white select-text">
                <div className="max-w-3xl mx-auto p-6 border border-border-dark bg-card-bg rounded-2xl shadow-sm">
                  {/* Top info */}
                  <div className="border-b border-border-dark/80 pb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div>
                        <h4 className="font-display text-2xl font-black text-white">{resumeData.personalInfo.name}</h4>
                        <p className="text-xs font-semibold text-accent-purple mt-1">{resumeData.personalInfo.title}</p>
                        <p className="text-[10px] text-text-muted mt-2 font-mono">{resumeData.personalInfo.location}</p>
                      </div>
                      <div className="text-left sm:text-right text-[10px] font-mono space-y-1 text-text-muted">
                        <p>{resumeData.personalInfo.email}</p>
                        <p>{resumeData.personalInfo.phone}</p>
                        <p>{resumeData.personalInfo.github}</p>
                        <p>{resumeData.personalInfo.linkedin}</p>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="py-6 border-b border-border-dark/80">
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-purple mb-3">Professional Summary</h5>
                    <p className="text-xs leading-relaxed text-text-muted font-sans">{resumeData.summary}</p>
                  </div>

                  {/* Skills Grid */}
                  <div className="py-6 border-b border-border-dark/80">
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-purple mb-4">Technical Stack</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {resumeData.skills.map((s, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className="font-semibold text-white text-[11px] block">{s.category}</span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {s.items.map((it) => (
                              <span key={it} className="rounded bg-border-dark/30 border border-border-dark/40 px-2 py-0.5 text-[9px] font-mono text-text-muted">{it}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="py-6 border-b border-border-dark/80">
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-purple mb-4">Experience</h5>
                    <div className="space-y-4">
                      {resumeData.experience.map((exp, idx) => (
                        <div key={idx} className="border-l border-border-dark/60 pl-4 py-0.5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <strong className="text-sm font-bold text-white">{exp.role}</strong>
                            <span className="text-[10px] font-mono text-text-muted">{exp.period}</span>
                          </div>
                          <p className="text-[10px] text-accent-purple font-semibold mt-0.5">{exp.company}</p>
                          <p className="text-xs text-text-muted mt-2 leading-relaxed font-sans">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="py-6 border-b border-border-dark/80">
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-purple mb-4">Featured Projects</h5>
                    <div className="space-y-6">
                      {resumeData.projects.map((p, idx) => (
                        <div key={idx} className="border-l border-border-dark/60 pl-4 py-0.5">
                          <div className="flex justify-between items-baseline text-xs font-bold">
                            <span className="text-white">{p.name}</span>
                            <span className="font-mono text-[10px] text-text-muted font-normal">{p.period}</span>
                          </div>
                          <p className="text-[10px] text-accent-purple font-semibold mt-0.5">{p.tagline}</p>
                          <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-text-muted font-sans">
                            {p.description.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {p.tech.map((t) => (
                              <span key={t} className="rounded bg-border-dark/20 px-2 py-0.5 text-[9px] font-mono text-text-muted">{t}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="py-6 border-b border-border-dark/80">
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-purple mb-3">Certifications</h5>
                    <ul className="list-disc pl-5 text-xs text-text-muted space-y-1 font-sans">
                      {resumeData.certifications.map((cert, idx) => (
                        <li key={idx}>{cert}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Education */}
                  <div className="py-6">
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-purple mb-3">Education</h5>
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-baseline text-xs font-bold">
                          <span className="text-white">{edu.degree}</span>
                          <span className="font-mono text-[10px] text-text-muted font-normal">{edu.period}</span>
                        </div>
                        <p className="text-[10px] text-accent-purple font-semibold">{edu.institution}</p>
                        <p className="text-[10px] text-text-muted mt-1 font-sans">{edu.details}</p>
                      </div>
                    ))}
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
