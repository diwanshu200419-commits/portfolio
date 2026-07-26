"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { Search, ExternalLink, ArrowUpRight, BookOpen, X, Info, CheckCircle2, AlertTriangle, Lightbulb, Cpu } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isPending, startTransition] = useTransition();

  const categories = ["All", "Full-Stack", "Frontend", "UI/UX"];

  // Filtering logic
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
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-blue mb-3">
              Case Studies
            </h2>
            <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Work
            </h3>
            <p className="mt-4 text-sm text-text-muted">
              Explore production-ready applications focusing on user experience, complex state orchestration, database queries, and third-party APIs.
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
              className="w-full rounded-lg border border-border-dark bg-card-bg/40 py-2 pl-9 pr-4 text-xs text-text-white placeholder-text-muted outline-none transition-colors focus:border-accent-blue/50 focus:bg-card-bg/80"
            />
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border-dark/30 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-accent-blue text-white shadow-md shadow-accent-blue/10"
                  : "text-text-muted hover:text-white hover:bg-card-bg/30"
              }`}
            >
              {cat}
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group flex flex-col rounded-xl border border-border-dark bg-card-bg/30 overflow-hidden card-border-glow h-full"
              >
                {/* Visual Header Mockup (Linear/Vercel styling) */}
                <div className="relative h-44 w-full bg-gradient-to-br from-[#131a2b] to-[#070b13] border-b border-border-dark flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.06),transparent_65%)]" />
                  
                  {/* Styled Browser Window Container */}
                  <div className="relative w-full h-full rounded-t-lg border border-border-dark bg-[#0b0f19] shadow-xl translate-y-4 transition-transform duration-300 group-hover:translate-y-2 flex flex-col overflow-hidden">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center gap-1.5 border-b border-border-dark bg-black/40 px-3 py-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" />
                      <div className="h-1.5 w-1.5 rounded-full bg-[#eab308]" />
                      <div className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                      <div className="ml-3 rounded bg-border-dark/50 px-2 py-0.5 text-[8px] font-mono text-text-muted truncate max-w-[120px]">
                        {project.liveUrl.replace("https://", "")}
                      </div>
                    </div>
                    {/* Inner Mock content */}
                    <div className="flex-1 flex flex-col justify-center p-4">
                      <span className="font-display text-[10px] font-bold uppercase tracking-wider text-accent-purple">
                        {project.category}
                      </span>
                      <strong className="font-display text-sm font-extrabold text-white mt-0.5">
                        {project.title}
                      </strong>
                      <span className="text-[9px] text-text-muted truncate mt-1">
                        {project.tagline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-text-muted tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white mt-1 group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-text-muted mt-2 leading-relaxed line-clamp-3">
                      {project.tagline}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-border-dark/40 px-2 py-0.5 text-[9px] font-mono text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="rounded bg-border-dark/40 px-2 py-0.5 text-[9px] font-mono text-text-muted">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center gap-4 mt-6 border-t border-border-dark/30 pt-4 text-xs font-semibold text-text-muted">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Case Study</span>
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-white transition-colors ml-auto"
                    >
                      <span>Live</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-text-muted text-sm border border-dashed border-border-dark rounded-xl">
            No projects matched your criteria. Try adjusting your search query.
          </div>
        )}

      </div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
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
                  <span className="text-[10px] font-bold text-accent-purple uppercase tracking-wider">
                    {activeProject.category} Case Study
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mt-0.5">
                    {activeProject.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="rounded-lg p-1.5 text-text-muted hover:bg-card-bg hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-thin">
                
                {/* Visual header */}
                <div className="rounded-lg border border-border-dark bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 p-6">
                  <p className="text-sm font-semibold italic text-white/95 leading-relaxed">
                    &ldquo;{activeProject.tagline}&rdquo;
                  </p>
                  <div className="flex gap-4 mt-6">
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-primary-bg transition-colors hover:bg-white/90"
                    >
                      <span>Visit Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full border border-border-dark bg-card-bg/40 px-4 py-2 text-xs font-bold text-text-muted transition-colors hover:border-text-white hover:text-white"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      <span>Code Repository</span>
                    </a>
                  </div>
                </div>

                {/* Split grid: Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg border border-border-dark/60 bg-card-bg/25 p-5">
                    <h5 className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                      <span>The Problem</span>
                    </h5>
                    <p className="text-xs leading-relaxed text-text-muted">
                      {activeProject.problem}
                    </p>
                  </div>

                  <div className="rounded-lg border border-border-dark/60 bg-card-bg/25 p-5">
                    <h5 className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span>The Solution</span>
                    </h5>
                    <p className="text-xs leading-relaxed text-text-muted">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* Business Impact banner */}
                <div className="rounded-lg border border-accent-blue/30 bg-accent-blue/5 p-5">
                  <h5 className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-accent-blue mb-2">
                    <Info className="h-4 w-4" />
                    <span>Impact &amp; Results</span>
                  </h5>
                  <p className="text-xs font-semibold text-white/90 leading-relaxed">
                    {activeProject.impact}
                  </p>
                </div>

                {/* Core Features list */}
                <div>
                  <h5 className="font-display text-xs font-bold uppercase tracking-wider text-text-muted mb-4">
                    Key Implementation Features
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-muted">
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
                    <h5 className="flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                      <Cpu className="h-4 w-4 text-accent-purple" />
                      <span>Engineering Challenges</span>
                    </h5>
                    <p className="text-xs leading-relaxed text-text-muted">
                      {activeProject.challenges}
                    </p>
                  </div>

                  <div>
                    <h5 className="flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                      <Lightbulb className="h-4 w-4 text-yellow-400" />
                      <span>What I Learned</span>
                    </h5>
                    <p className="text-xs leading-relaxed text-text-muted">
                      {activeProject.whatILearned}
                    </p>
                  </div>
                </div>

                {/* Complete Tech Stack list */}
                <div className="border-t border-border-dark/40 pt-6">
                  <h5 className="font-display text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                    Technologies Employed
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-border-dark/50 border border-border-dark px-3 py-1 text-xs font-mono text-text-muted"
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
