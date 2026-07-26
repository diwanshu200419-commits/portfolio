"use client";

import { motion } from "framer-motion";
import { 
  Rocket, Monitor, Globe, Users, Zap, Brain, Check, 
  MapPin, FileText, Download, Briefcase, Mail 
} from "lucide-react";

export default function AvailabilityStats() {
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
      title: "Live Projects",
      value: "6+",
      description: "Real-world responsive applications built and deployed on production.",
      color: "text-[#22D3EE] bg-[#22D3EE]/10"
    },
    {
      icon: Monitor,
      title: "Specialization",
      value: "AI + Full Stack",
      description: "Modern web applications with intelligent API logic and database schemas.",
      color: "text-[#8B5CF6] bg-[#8B5CF6]/10"
    },
    {
      icon: Globe,
      title: "Development Focus",
      value: "Responsive & SEO",
      description: "Fast page speeds, accessibility, mobile-first design, and structured metadata.",
      color: "text-[#2563EB] bg-[#2563EB]/10"
    },
    {
      icon: Users,
      title: "Career Goal",
      value: "Software Engineer",
      description: "Seeking full-time roles to collaborate, build value, and scale solutions.",
      color: "text-emerald-400 bg-emerald-400/10"
    },
    {
      icon: Zap,
      title: "Deployment",
      value: "Vercel + Netlify",
      description: "Continuous deployments, serverless functions, and static assets caching.",
      color: "text-amber-400 bg-amber-400/10"
    },
    {
      icon: Brain,
      title: "Learning Mindset",
      value: "Continuous Growth",
      description: "Currently learning Python, ML foundations, System Design, and advanced DSA.",
      color: "text-rose-400 bg-rose-400/10"
    }
  ];

  const highlightChips = [
    "AI-Assisted Development",
    "Real Business Projects",
    "Clean UI/UX",
    "Performance Focused",
    "Responsive Design",
    "SEO Optimized",
    "Modern Tech Stack",
    "Fast Learner"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="availability" className="relative border-t border-border-dark/60 bg-black/10 py-24 md:py-32 print:hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Top Header & Status Card Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start mb-16">
          {/* Left Column - Heading */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
              Status Card
            </h2>
            <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Available for Opportunities
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-muted max-w-2xl">
              Currently seeking full-time Software Engineering and Frontend Developer opportunities where I can contribute to production-grade repositories, automate workflows using AI model frameworks, and learn from experienced engineering teams.
            </p>
          </div>

          {/* Right Column - Glowing Status Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-xl border border-accent-purple/20 bg-accent-purple/5 p-6 shadow-xl backdrop-blur-sm card-border-glow">
              {/* Header Status Badge */}
              <div className="flex items-center justify-between border-b border-border-dark/60 pb-4 mb-4">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                  Recruiter quick status
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  </span>
                  <span>Active & Ready</span>
                </span>
              </div>

              {/* Status bullet parameters */}
              <ul className="space-y-3.5 text-xs text-text-white">
                <li className="flex items-start gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-emerald-400/10 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Check className="h-3 w-3" />
                  </span>
                  <div>
                    <strong className="block font-bold">Available for Full-Time</strong>
                    <span className="text-[10px] text-text-muted">Open to SDE & Frontend Developer contracts</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0 mt-0.5">
                    <MapPin className="h-3 w-3" />
                  </span>
                  <div>
                    <strong className="block font-bold">Solan, Himachal Pradesh, India</strong>
                    <span className="text-[10px] text-text-muted">Current location</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-accent-purple/10 flex items-center justify-center text-accent-purple shrink-0 mt-0.5">
                    <Globe className="h-3 w-3" />
                  </span>
                  <div>
                    <strong className="block font-bold">Open to Remote, Hybrid & Relocation</strong>
                    <span className="text-[10px] text-text-muted">Flexible working arrangements worldwide</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-highlight-cyan/10 flex items-center justify-center text-highlight-cyan shrink-0 mt-0.5">
                    <Briefcase className="h-3 w-3" />
                  </span>
                  <div>
                    <strong className="block font-bold">Software Engineering & Frontend Roles</strong>
                    <span className="text-[10px] text-text-muted">Targeting product design & development teams</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-4.5 w-4.5 rounded bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Zap className="h-3 w-3" />
                  </span>
                  <div>
                    <strong className="block font-bold">Available to Join Immediately</strong>
                    <span className="text-[10px] text-text-muted">Zero notice period buffer required</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative rounded-xl border border-border-dark bg-[#0a0f1d]/50 p-6 shadow-xl backdrop-blur-sm card-border-glow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                      {stat.title}
                    </span>
                    <div className={`rounded-lg p-2 ${stat.color}`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  <h4 className="font-display text-2xl font-black text-white mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-xs leading-relaxed text-text-muted">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlight Chips Strip */}
        <div className="relative border-y border-border-dark/60 py-6 mb-16 overflow-hidden select-none">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050816] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050816] to-transparent z-10" />
          
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {/* Double array to handle loop seamlessly */}
            {[...highlightChips, ...highlightChips].map((chip, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-full border border-border-dark bg-card-bg/30 px-4.5 py-1.5 text-xs font-semibold text-text-white"
              >
                <Check className="h-3.5 w-3.5 text-accent-purple" />
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Grid */}
        <div className="rounded-xl border border-border-dark bg-[#0a0f1d]/50 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          <div className="max-w-3xl">
            <h4 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl mb-4">
              Let&apos;s Build Something Meaningful Together
            </h4>
            <p className="text-xs md:text-sm leading-relaxed text-text-muted mb-8">
              I am passionate about creating software that solves real-world problems through clean design, scalable architecture, and modern technologies. If you are looking for someone who learns fast, takes ownership, and enjoys building impactful digital products, I would love to connect. Let&apos;s work on your next development build!
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleScrollTo("resume")}
                className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-primary-bg transition-all hover:bg-white/95 active:scale-95 cursor-pointer"
              >
                <FileText className="h-4 w-4" />
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
                <span>View Projects</span>
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
      
      {/* Inline styles for the marquee animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
