"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { Search, ExternalLink, ArrowUpRight, BookOpen, X, Info, CheckCircle2, AlertTriangle, Lightbulb, Cpu } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

const screenshotMap: Record<string, string> = {
  "smartdollar-labs": "/smart_dollar_ui.jpg",
  "resume-builder": "/vaylo_ai_ui.jpg",
  "ebook-marketplace": "/ebook_marketplace_ui.jpg",
  "travel-website": "/guru_kripa_ui.jpg",
  "interior-decor": "/interior_decor_ui.jpg",
  "kulja-motors": "/kulja_motors_ui.jpg"
};

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isPending, startTransition] = useTransition();

  const categories = ["All", "Full-Stack", "Frontend", "UI/UX"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="projects" className="relative border-t border-border-dark/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
              Case Studies
            </h2>
            <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Work
            </h3>
            <p className="mt-4 text-sm text-text-muted leading-relaxed font-sans">
              A curated collection of web applications, focusing on clean user experience, robust state handling, API integrations, and database schemas.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-xs shrink-0">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search by tech or name..."
              value={searchQuery}
              onChange={(e) => startTransition(() => setSearchQuery(e.target.value))}
              className="w-full rounded-lg border border-border-dark bg-card-bg/40 py-2.5 pl-9 pr-4 text-xs text-text-white placeholder-text-muted outline-none transition-all focus:border-accent-purple/55 focus:bg-card-bg/85 font-sans"
            />
          </div>
        </div>

        {/* Categories Underline Tabs */}
        <div className="flex gap-6 mb-12 border-b border-border-dark/30 pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative pb-3 text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                selectedCategory === cat ? "text-white" : "text-text-muted hover:text-white"
              }`}
            >
              <span>{cat}</span>
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-purple"
                />
              )}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group flex flex-col rounded-xl border border-border-dark bg-card-bg/30 overflow-hidden card-border-glow h-full"
              >
                {/* Visual Header Mockup (Real Image or abstract Vercel styling) */}
                {screenshotMap[project.id] ? (
                  <div className="relative h-48 w-full border-b border-border-dark overflow-hidden bg-[#070708]">
                    <img
                      src={screenshotMap[project.id]}
                      alt={`${project.title} Preview`}
                      className="h-full w-full object-cover grayscale opacity-90 transition-all duration-500 ease-out group-hover:scale-103 group-hover:grayscale-0 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 w-full bg-gradient-to-br from-[#0c0c0e] to-[#070708] border-b border-border-dark flex items-center justify-center p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.02),transparent_70%)]" />
                    
                    {/* Styled Browser Window */}
                    <div className="relative w-full h-full rounded border border-border-dark/65 bg-[#0b0b0d] shadow-sm translate-y-4 transition-transform duration-300 group-hover:translate-y-2 flex flex-col overflow-hidden">
                      <div className="flex items-center gap-1.5 border-b border-border-dark/60 bg-black/40 px-3 py-1.5">
                        <div className="h-1 w-1 rounded-full bg-border-dark" />
                        <div className="h-1 w-1 rounded-full bg-border-dark" />
                        <div className="h-1 w-1 rounded-full bg-border-dark" />
                        <div className="ml-2 rounded bg-border-dark/30 px-2 py-0.5 text-[7px] font-mono text-text-muted truncate max-w-[120px]">
                          {project.liveUrl.replace("https://", "").replace("http://", "")}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-center px-4 py-2">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
                          {project.category}
                        </span>
                        <strong className="font-display text-xs font-bold text-white mt-1">
                          {project.title}
                        </strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Info Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white mt-1 group-hover:text-accent-purple transition-colors">
                      {project.title}
                    </h4>
                    <p className="mt-3 text-xs text-text-muted leading-relaxed font-sans">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-border-dark/30 border border-border-dark/40 px-2.5 py-0.5 text-[10px] font-mono text-text-white"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="rounded bg-border-dark/10 px-2 py-0.5 text-[9px] font-mono text-text-muted">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-3 border-t border-border-dark/20 text-xs">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="flex items-center gap-1 font-bold text-white hover:text-accent-purple transition-colors cursor-pointer"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-white transition-colors flex items-center gap-1 font-semibold"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Dynamic Project Details Slider */}
      <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
              {/* Overlay Background Click */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 cursor-pointer"
              />

              {/* Sliding Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 220 }}
                className="relative h-full w-full max-w-2xl border-l border-border-dark bg-card-bg shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-border-dark bg-black/30 px-6 py-4.5">
                  <div>
                    <span className="text-[10px] font-mono text-accent-purple uppercase tracking-wider">
                      {activeProject.category} Case Study
                    </span>
                    <h4 className="font-display text-lg font-bold text-white mt-0.5">
                      {activeProject.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="rounded-lg p-1.5 text-text-muted hover:bg-card-bg hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-thin">
                  
                  {/* Visual header */}
                  <div className="rounded-lg border border-border-dark bg-secondary-bg p-6">
                    <p className="text-sm font-semibold italic text-white/95 leading-relaxed font-sans">
                      &ldquo;{activeProject.tagline}&rdquo;
                    </p>
                    <div className="flex gap-4 mt-6">
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-primary-bg transition-colors hover:bg-white/90"
                      >
                        <span>Visit Live Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg border border-border-dark bg-card-bg/45 px-4 py-2 text-xs font-bold text-text-muted transition-colors hover:border-text-white hover:text-white"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        <span>Code Repository</span>
                      </a>
                    </div>
                  </div>

                  {/* Split grid: Problem & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-lg border border-border-dark/60 bg-card-bg/25 p-5">
                      <h5 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                        <AlertTriangle className="h-4 w-4 text-red-400" />
                        <span>The Problem</span>
                      </h5>
                      <p className="text-xs leading-relaxed text-text-muted font-sans">
                        {activeProject.problem}
                      </p>
                    </div>

                    <div className="rounded-lg border border-border-dark/60 bg-card-bg/25 p-5">
                      <h5 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span>The Solution</span>
                      </h5>
                      <p className="text-xs leading-relaxed text-text-muted font-sans">
                        {activeProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Project Outcome banner */}
                  <div className="rounded-lg border border-border-dark/60 bg-secondary-bg p-5">
                    <h5 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-accent-purple mb-2">
                      <Info className="h-4 w-4" />
                      <span>Project Outcome</span>
                    </h5>
                    <p className="text-xs text-text-white leading-relaxed font-sans">
                      {activeProject.impact}
                    </p>
                  </div>

                  {/* Core Features list */}
                  <div>
                    <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted mb-4">
                      Key Implementation Features
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-muted font-sans">
                      {activeProject.features.map((feat, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-purple mt-1.5 shrink-0" />
                          <span className="leading-normal">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Challenges & Learnings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border-dark/40 pt-6">
                    <div>
                      <h5 className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                        <Cpu className="h-4 w-4 text-accent-purple" />
                        <span>The Biggest Challenge</span>
                      </h5>
                      <p className="text-xs leading-relaxed text-text-muted font-sans">
                        {activeProject.challenges}
                      </p>
                    </div>

                    <div>
                      <h5 className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                        <Lightbulb className="h-4 w-4 text-yellow-400" />
                        <span>Key Takeaway</span>
                      </h5>
                      <p className="text-xs leading-relaxed text-text-muted font-sans">
                        {activeProject.whatILearned}
                      </p>
                    </div>
                  </div>

                  {/* Complete Tech Stack list */}
                  <div className="border-t border-border-dark/40 pt-6">
                    <h5 className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                      Technologies Employed
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-border-dark/50 border border-border-dark px-3 py-1 text-xs font-mono text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    );
  }
