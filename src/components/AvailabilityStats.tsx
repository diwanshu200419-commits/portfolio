"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, Monitor, Globe, Users, Zap, Brain, Check, 
  MapPin, FileText, Download, Briefcase, Mail, Eye, X 
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
      title: "Production Shipments",
      value: "6+ Deployed",
      description: "Engineered and deployed production-ready applications featuring payment pipelines, AI context layers, and active clients.",
      color: "text-[#22D3EE] bg-[#22D3EE]/10",
      action: () => handleScrollTo("projects")
    },
    {
      icon: Monitor,
      title: "Core Expertise",
      value: "Full-Stack & AI Systems",
      description: "Architecting React single-page systems alongside serverless backends, relational/document storage, and OpenAI/Gemini endpoints.",
      color: "text-[#8B5CF6] bg-[#8B5CF6]/10",
      action: () => handleScrollTo("skills")
    },
    {
      icon: Globe,
      title: "Web Performance",
      value: "100/100 Core Web Vitals",
      description: "Delivering sub-100ms Time to First Byte (TTFB), Zero Cumulative Layout Shift (CLS), and semantic SEO optimization.",
      color: "text-[#2563EB] bg-[#2563EB]/10",
      action: () => handleScrollTo("projects") // Pointing to projects showcase
    },
    {
      icon: Users,
      title: "Target Role",
      value: "Software Engineer (SDE)",
      description: "Seeking engineering roles where I can own product features, optimize system performance, and design high-fidelity interfaces.",
      color: "text-emerald-400 bg-emerald-400/10",
      action: () => handleScrollTo("contact")
    },
    {
      icon: Zap,
      title: "CI/CD Infrastructure",
      value: "Vercel • Netlify • Git",
      description: "Configuring automated test-on-push pipelines, split-branch preview environments, and instant static page generation (SSG).",
      color: "text-amber-400 bg-amber-400/10",
      action: null
    },
    {
      icon: Brain,
      title: "Deepening Skills",
      value: "LLM Orchestration & RAG",
      description: "Implementing semantic vector search databases, context window pruning, memory state retrieval, and system caching.",
      color: "text-rose-400 bg-rose-400/10",
      action: () => handleScrollTo("timeline")
    }
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", 
    "Node.js", "Express.js", "MongoDB", "Supabase", "Git", 
    "GitHub", "Vercel", "ChatGPT", "Claude", "Gemini"
  ];

  const highlights = [
    "Full-Stack Architecture",
    "AI Orchestration & RAG",
    "Core Web Vitals Optimization",
    "Stripe Ledger Integration",
    "High-Fidelity Interface Design",
    "Distributed Document Storage",
    "Serverless API Routing",
    "Strict Accessibility (WCAG)"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="availability" className="relative border-t border-border-dark/60 bg-black/20 py-24 md:py-32 print:hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Title and Header Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start mb-16">
          {/* Left Column - Heading */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
              Recruiter Dashboard
            </h2>
            <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Available for Hire
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-muted max-w-2xl">
              I&apos;m actively looking for opportunities where I can build modern software, solve real business problems, and grow as a Software Engineer while contributing to high-impact products.
            </p>
          </div>

          {/* Right Column - Status Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-xl border border-border-dark bg-card-bg/60 p-6 shadow-xl backdrop-blur-sm card-border-glow">
              {/* Pulsing Availability Badge */}
              <div className="flex items-center justify-between border-b border-border-dark/45 pb-4 mb-4">
                <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider">
                  Live Status Card
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  </span>
                  <span>Active & Ready</span>
                </span>
              </div>

              {/* Status parameters */}
              <ul className="space-y-3 text-xs text-text-white font-sans">
                <li className="flex items-center gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-emerald-400/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>Available for Full-Time</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                    <MapPin className="h-3 w-3" />
                  </span>
                  <span>Solan, Himachal Pradesh, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-accent-purple/10 flex items-center justify-center text-accent-purple shrink-0">
                    <Globe className="h-3 w-3" />
                  </span>
                  <span>Open to Remote, Hybrid & Relocation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-highlight-cyan/10 flex items-center justify-center text-highlight-cyan shrink-0">
                    <Briefcase className="h-3 w-3" />
                  </span>
                  <span>Looking for SDE, Full Stack & Frontend roles</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Zap className="h-3 w-3" />
                  </span>
                  <span>Available to Join Immediately</span>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const hasAction = stat.action !== null;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                onClick={() => hasAction && stat.action()}
                className={`relative rounded-xl border border-border-dark bg-card-bg/50 p-6 shadow-xl backdrop-blur-sm card-border-glow flex flex-col justify-between ${
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
                  <p className="text-xs leading-relaxed text-text-muted">
                    {stat.description}
                  </p>
                </div>
                {hasAction && (
                  <div className="mt-4 border-t border-border-dark/40 pt-3 flex items-center justify-end text-[9px] font-mono text-accent-purple group hover:underline">
                    <span>Explore details →</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Marquee Strip */}
        <div className="relative border-t border-border-dark/65 py-5 mb-4 overflow-hidden select-none">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary-bg to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary-bg to-transparent z-10" />
          
          <div className="flex gap-3 animate-marquee-fast whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center rounded-lg border border-border-dark/80 bg-card-bg/25 px-4 py-1.5 text-xs font-mono text-text-white transition-all hover:border-accent-blue/35 hover:bg-accent-blue/5"
              >
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Strip */}
        <div className="relative border-b border-border-dark/65 py-5 mb-16 overflow-hidden select-none">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary-bg to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary-bg to-transparent z-10" />
          
          <div className="flex gap-4 animate-marquee-slow whitespace-nowrap">
            {[...highlights, ...highlights].map((chip, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-full border border-border-dark bg-card-bg/25 px-4.5 py-1.5 text-xs font-semibold text-text-white transition-all hover:border-accent-purple/35"
              >
                <Check className="h-3.5 w-3.5 text-accent-purple" />
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Block */}
        <div className="rounded-xl border border-border-dark bg-card-bg/50 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          <div className="max-w-3xl">
            <h4 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl mb-4">
              Let&apos;s Build Something Meaningful Together
            </h4>
            <p className="text-xs md:text-sm leading-relaxed text-text-muted mb-8 font-sans">
              I&apos;m passionate about building software that solves real-world problems through clean design, scalable architecture, and modern technologies. If you&apos;re looking for someone who enjoys learning, takes ownership, and loves creating digital products, I&apos;d love to connect.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-primary-bg transition-all hover:bg-white/95 active:scale-95 cursor-pointer"
              >
                <Eye className="h-4 w-4" />
                <span>View Resume</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-2 rounded-lg border border-border-dark bg-card-bg/40 px-5 py-2.5 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:text-white active:scale-95 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => handleScrollTo("projects")}
                className="flex items-center gap-2 rounded-lg border border-border-dark bg-card-bg/40 px-5 py-2.5 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:text-white active:scale-95 cursor-pointer"
              >
                <Rocket className="h-4 w-4" />
                <span>Explore Projects</span>
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="flex items-center gap-2 rounded-lg border border-border-dark bg-card-bg/40 px-5 py-2.5 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:text-white active:scale-95 cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee Ticker Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-slow {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .animate-marquee-fast:hover,
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Full-Screen PDF Viewer Modal */}
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
              className="relative w-full max-w-4xl h-[85vh] bg-primary-bg rounded-2xl border border-border-dark flex flex-col shadow-2xl overflow-hidden"
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
