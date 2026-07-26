"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Mail, FileText, ChevronRight, Compass } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  // Parallax motion tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);
  
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    
    // Normalize coordinates from -0.5 to 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Map to degree ranges (e.g., max 20deg tilt)
    mouseX.set(x * 20);
    mouseY.set(y * -20);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[95vh] flex-col justify-center overflow-hidden py-24 md:py-32"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute inset-0 bg-radial-gradient-overlay" />
      <div className="absolute inset-0 bg-noise" />

      {/* Luxury ambient floating elements */}
      <div className="absolute top-[20%] left-[10%] -z-10 h-72 w-72 rounded-full bg-accent-purple/5 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[20%] right-[10%] -z-10 h-96 w-96 rounded-full bg-accent-blue/5 blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Column - Copy & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Availability Indicator */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3.5 py-1 text-xs font-semibold text-accent-purple"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-purple opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-purple"></span>
              </span>
              <span>Available for Software Engineering Roles</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-text-muted">
                Hi, I&apos;m Diwanshu.
              </span>
              <h1 className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.05] mb-6">
                Building{" "}
                <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-highlight-cyan bg-clip-text text-transparent">
                  AI Powered Products
                </span>{" "}
                that solve real problems.
              </h1>
            </motion.div>

            {/* Bio pitch */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-text-muted md:text-base max-w-xl leading-relaxed mb-8"
            >
              I am a Software Engineer and Full Stack Developer. I build modern web applications and AI-powered digital products that combine Vercel-level speed with custom design details inspired by Stripe and Apple.
            </motion.p>

            {/* Action Buttons Grid */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3.5 mb-8"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-primary-bg transition-all hover:bg-white/95 hover:shadow-lg hover:shadow-white/5 active:scale-95 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleScrollTo("resume")}
                className="flex items-center gap-2 rounded-full border border-border-dark bg-card-bg/40 px-5 py-3 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:bg-card-bg hover:text-white active:scale-95 cursor-pointer"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Resume</span>
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                className="flex items-center gap-2 rounded-full border border-border-dark bg-card-bg/40 px-5 py-3 text-xs font-bold text-text-muted transition-all hover:border-text-white hover:bg-card-bg hover:text-white active:scale-95 cursor-pointer"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Hire Me</span>
              </button>
            </motion.div>

            {/* Social channels shortcut row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 border-t border-border-dark/60 pt-6 w-full max-w-md text-xs text-text-muted"
            >
              <span className="font-semibold uppercase tracking-wider text-[10px]">Directory:</span>
              <a
                href="https://github.com/diwanshu200419-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/diwanshu-1a010b2b8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Parallax Cutout Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[340px] aspect-[4/5]">
              {/* Radial glow background reflection */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent-purple/10 to-accent-blue/10 opacity-60 blur-xl" />

              {/* Parallax Container */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => setIsHovered(true)}
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative h-full w-full rounded-2xl border border-border-dark bg-card-bg/60 overflow-hidden shadow-2xl backdrop-blur-sm cursor-pointer select-none"
              >
                {/* Simulated Glass Reflection Overlay */}
                <motion.div
                  className="absolute inset-0 z-20 pointer-events-none opacity-0 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"
                  style={{
                    x: glowX,
                    y: glowY,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Subtly Animated Profile Cutout Image */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-3 z-10"
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src="/profile.png"
                    alt="Diwanshu Profile Portrait"
                    className="h-full w-full object-cover rounded-xl border border-border-dark/30 shadow-inner"
                    draggable="false"
                  />
                </motion.div>

                {/* Floating HUD Chip overlay inside card */}
                <div 
                  className="absolute bottom-4 left-4 z-20 rounded-lg border border-border-dark bg-black/60 px-3 py-2 backdrop-blur-md flex items-center gap-2 select-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse" />
                  <span className="font-mono text-[9px] text-text-muted">
                    Loc: Himachal Pradesh
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
