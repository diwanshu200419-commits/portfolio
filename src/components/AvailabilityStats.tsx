"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, Monitor, Globe, Users, Zap, Brain, Check, 
  MapPin, FileText, Download, Briefcase, Mail, Eye, X, Home, Compass, ArrowRight
} from "lucide-react";
import { resumeData } from "@/data/resume";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function AvailabilityStats() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

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

  const stats = [
    {
      icon: Rocket,
      title: "Completed Projects",
      value: "6+ Built",
      description: "Developed and published full-stack web applications, landing pages, and regional business catalogs.",
      color: "text-accent-blue bg-accent-blue/10",
      action: () => handleScrollTo("projects")
    },
    {
      icon: Monitor,
      title: "Stack Focus",
      value: "Full-Stack JavaScript",
      description: "Using React and Next.js on the client side, Node.js and Express for APIs, and MongoDB for database storage.",
      color: "text-accent-purple bg-accent-purple/10",
      action: () => handleScrollTo("skills")
    },
    {
      icon: Globe,
      title: "Development Style",
      value: "Responsive & Semantic",
      description: "Focusing on page speed, clean document structure, search engine readability, and responsive layout scaling.",
      color: "text-emerald-500 bg-emerald-500/10",
      action: () => handleScrollTo("projects")
    },
    {
      icon: Users,
      title: "Seeking Role",
      value: "Junior Software Engineer",
      description: "Ready to join a team as a junior developer or engineering intern where I can learn, build, and contribute.",
      color: "text-amber-500 bg-amber-500/10",
      action: () => handleScrollTo("contact")
    },
    {
      icon: Zap,
      title: "Hosting & Tools",
      value: "Vercel • Netlify • Git",
      description: "Deploying code with Git integration, managing active deployment previews, and configuring environment variables.",
      color: "text-indigo-500 bg-indigo-500/10",
      action: null
    },
    {
      icon: Brain,
      title: "Currently Learning",
      value: "Database Design & SQL",
      description: "Improving my knowledge of relational database structures, database indexing, and query optimization.",
      color: "text-rose-500 bg-rose-500/10",
      action: () => handleScrollTo("timeline")
    }
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", 
    "Node.js", "Express.js", "MongoDB", "Supabase", "Git", 
    "GitHub", "Vercel", "HTML5", "CSS3"
  ];

  const highlights = [
    "Clean Layout Design",
    "API Integrations",
    "Responsive Spacing",
    "Self-Directed Learner",
    "Version Control Workflows",
    "Semantic HTML Markup",
    "Documentation Reader"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="availability" className="relative border-t border-border-dark/60 bg-black/5 py-24 md:py-32 print:hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Title and Header Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start mb-16">
          {/* Left Column - Heading */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
              Current Status
            </h2>
            <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Available for Opportunities
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-muted font-sans">
              I am actively looking for entry-level Software Engineering or Frontend Developer opportunities where I can apply my full-stack training, build functional products, and grow as a developer under experienced mentorship.
            </p>
          </div>

          {/* Right Column - Status Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-xl border border-border-dark bg-card-bg/60 p-6 shadow-sm card-border-glow">
              {/* Pulsing Availability Badge */}
              <div className="flex items-center justify-between border-b border-border-dark/45 pb-4 mb-4">
                <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider">
                  Live Status Card
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-500">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <span>Open to Offers</span>
                </span>
              </div>

              {/* Status List */}
              <ul className="space-y-3 text-xs text-text-white font-sans">
                <li className="flex items-center gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-accent-purple/10 flex items-center justify-center text-accent-purple shrink-0">
                    <MapPin className="h-3 w-3" />
                  </span>
                  <span>Located in Solan, Himachal Pradesh, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                    <Compass className="h-3 w-3" />
                  </span>
                  <span>Flexible with Remote / Hybrid / On-site roles</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-highlight-cyan/10 flex items-center justify-center text-highlight-cyan shrink-0">
                    <Briefcase className="h-3 w-3" />
                  </span>
                  <span>Seeking Software Engineer (SDE) / Junior Developer roles</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Zap className="h-3 w-3" />
                  </span>
                  <span>Available to join immediately</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bento Grid Quick Stats */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const hasAction = stat.action !== null;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                onClick={() => hasAction && stat.action()}
                className={`relative rounded-xl border border-border-dark bg-card-bg/50 p-6 shadow-sm card-border-glow flex flex-col justify-between ${
                  hasAction ? "cursor-pointer" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider">
                      {stat.title}
                    </span>
                    <div className={`rounded-lg p-2 ${stat.color}`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <h4 className="font-display text-2xl font-black text-white mb-2 leading-tight">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed font-sans mt-2">
                    {stat.description}
                  </p>
                </div>
                {hasAction && (
                  <div className="mt-4 pt-3 border-t border-border-dark/30 text-[9px] font-bold text-accent-purple uppercase tracking-wider flex items-center gap-1">
                    <span>Explore Section</span>
                    <ArrowRight className="h-2.5 w-2.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Static Skills Display (Replaces Moving Marquees) */}
        <div className="border-t border-border-dark/60 pt-12 mb-16">
          <div className="text-center mb-8">
            <h4 className="font-display text-sm font-bold text-white mb-2">Technologies I Use</h4>
            <p className="text-xs text-text-muted">A clean, functional stack used to build my projects.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <div 
                key={tech} 
                className="inline-flex items-center rounded-lg border border-border-dark bg-card-bg/25 px-4 py-1.5 text-xs font-mono text-text-white transition-all hover:border-accent-purple/30 hover:bg-card-bg/50"
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mt-4 border-t border-border-dark/20 pt-4">
            {highlights.map((highlight) => (
              <div 
                key={highlight} 
                className="inline-flex items-center gap-1.5 rounded-full border border-border-dark/40 bg-card-bg/10 px-3.5 py-1 text-[10px] font-semibold text-text-muted"
              >
                <Check className="h-3 w-3 text-accent-purple" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Block */}
        <div className="rounded-xl border border-border-dark bg-card-bg/50 p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl">
            <h4 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl mb-4">
              Looking for a dependable developer?
            </h4>
            <p className="text-xs md:text-sm leading-relaxed text-text-muted mb-8 font-sans">
              I write clean, documented code and build applications that solve real needs. You can view my complete, printable resume sheet right here on my site, download it as an ATS-friendly PDF copy, or get in touch directly.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-primary-bg transition-all hover:bg-white/90 active:scale-95 cursor-pointer"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>View Resume</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-2 rounded-lg border border-border-dark bg-card-bg/40 px-5 py-2.5 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:text-white active:scale-95 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download PDF</span>
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="flex items-center gap-2 rounded-lg border border-border-dark bg-card-bg/40 px-5 py-2.5 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:text-white active:scale-95 cursor-pointer"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>

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
                <div className="max-w-3xl mx-auto p-6 border border-border-dark bg-card-bg/50 rounded-xl">
                  {/* Top info */}
                  <div className="border-b border-border-dark/80 pb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                      <div>
                        <h4 className="font-display text-2xl font-black text-white uppercase">{resumeData.personalInfo.name}</h4>
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
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue mb-3">Professional Summary</h5>
                    <p className="text-xs leading-relaxed text-text-muted font-sans">{resumeData.summary}</p>
                  </div>

                  {/* Skills Grid */}
                  <div className="py-6 border-b border-border-dark/80">
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue mb-4">Technical Stack</h5>
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
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue mb-4">Experience</h5>
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
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue mb-4">Featured Projects</h5>
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
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue mb-3">Certifications</h5>
                    <ul className="list-disc pl-5 text-xs text-text-muted space-y-1 font-sans">
                      {resumeData.certifications.map((cert, idx) => (
                        <li key={idx}>{cert}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Education */}
                  <div className="py-6">
                    <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue mb-3">Education</h5>
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
