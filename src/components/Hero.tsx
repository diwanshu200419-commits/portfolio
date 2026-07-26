"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, FileText, ChevronRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"api" | "hook">("api");

  const apiCode = `// app/api/wealth/route.ts
import { NextResponse } from 'next/server';
import { analyzeExpenses } from '@/lib/gemini';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  const { userId, timeRange } = await req.json();
  
  // Fetch transactions from DB
  const txs = await db.transaction.findMany({
    where: { userId, date: { $gte: timeRange } }
  });
  
  // Generate Gemini-optimized insights
  const analysis = await analyzeExpenses(txs);
  
  return NextResponse.json({
    savingsOpportunity: analysis.score,
    recommendations: analysis.tips
  });
}`;

  const hookCode = `// hooks/useKeyPress.ts
import { useEffect, useState } from 'react';

export function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) setKeyPressed(true);
    };
    
    const upHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) setKeyPressed(false);
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return keyPressed;
}`;

  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
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
        staggerChildren: 0.15,
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
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden py-24 md:py-32"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute inset-0 bg-radial-gradient-overlay" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Column - Headline & Pitch */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Status / Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue"></span>
              </span>
              <span>Open to Software Engineering Roles</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.08] mb-6"
            >
              Building products at the intersection of{" "}
              <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-[#60a5fa] bg-clip-text text-transparent">
                design &amp; code
              </span>
            </motion.h1>

            {/* Profession & Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base text-text-muted md:text-lg max-w-xl leading-relaxed mb-8"
            >
              Hi, I&apos;m <span className="text-white font-medium">Diwanshu</span>. I build high-performance full-stack applications with Next.js, TypeScript, Express, and AI-ready backends. Product-minded engineer focused on clean architectures and premium user interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={handleScrollToProjects}
                className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-primary-bg transition-all duration-300 hover:bg-white/95 hover:shadow-lg hover:shadow-white/5 active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#"
                className="flex items-center gap-2 rounded-full border border-border-dark bg-card-bg/40 px-5 py-2.5 text-xs font-bold text-text-muted transition-all duration-300 hover:border-text-white hover:bg-card-bg hover:text-white active:scale-95"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Resume</span>
              </a>

              <a
                href="mailto:diwanshu200419@gmail.com"
                className="flex items-center gap-2 rounded-full border border-border-dark bg-card-bg/40 px-5 py-2.5 text-xs font-bold text-text-muted transition-all duration-300 hover:border-text-white hover:bg-card-bg hover:text-white active:scale-95"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Contact</span>
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 border-t border-border-dark/60 pt-6 w-full max-w-md text-xs text-text-muted"
            >
              <span className="font-semibold uppercase tracking-wider text-[10px]">Follow:</span>
              <a
                href="https://github.com/diwanshu200419-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/diwanshu-1a010b2b8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - IDE Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Ambient background light glow */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue opacity-20 blur-xl transition-all duration-500" />
            
            {/* IDE Editor Card */}
            <div className="relative w-full rounded-xl border border-border-dark bg-[#0a0e17]/90 shadow-2xl backdrop-blur-md overflow-hidden">
              
              {/* Tab Header */}
              <div className="flex items-center justify-between border-b border-border-dark bg-black/40 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ef4444]/80" />
                    <span className="h-3 w-3 rounded-full bg-[#eab308]/80" />
                    <span className="h-3 w-3 rounded-full bg-[#22c55e]/80" />
                  </div>
                  <span className="ml-3 font-mono text-xs text-text-muted">diwanshu_dev</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab("api")}
                    className={`rounded px-2.5 py-1 font-mono text-[10px] font-medium transition-colors ${
                      activeTab === "api"
                        ? "bg-accent-purple/20 text-white border border-accent-purple/30"
                        : "text-text-muted hover:text-white"
                    }`}
                  >
                    route.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("hook")}
                    className={`rounded px-2.5 py-1 font-mono text-[10px] font-medium transition-colors ${
                      activeTab === "hook"
                        ? "bg-accent-blue/20 text-white border border-accent-blue/30"
                        : "text-text-muted hover:text-white"
                    }`}
                  >
                    useKeyPress.ts
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs overflow-x-auto leading-relaxed max-h-[350px] scrollbar-thin select-all">
                <pre className="text-left">
                  <code>
                    {activeTab === "api" ? (
                      <span className="text-[#a5b4fc]">
                        {apiCode.split("\n").map((line, idx) => {
                          if (line.trim().startsWith("//")) {
                            return <span key={idx} className="text-[#64748b] block">{line}</span>;
                          }
                          if (line.includes("import") || line.includes("export") || line.includes("await")) {
                            return <span key={idx} className="block"><span className="text-[#c084fc]">{line.substring(0, line.indexOf(line.trim()))}</span>{line.trim()}</span>;
                          }
                          return <span key={idx} className="block">{line}</span>;
                        })}
                      </span>
                    ) : (
                      <span className="text-[#93c5fd]">
                        {hookCode.split("\n").map((line, idx) => {
                          if (line.trim().startsWith("//")) {
                            return <span key={idx} className="text-[#64748b] block">{line}</span>;
                          }
                          return <span key={idx} className="block">{line}</span>;
                        })}
                      </span>
                    )}
                  </code>
                </pre>
              </div>

              {/* Editor Status Bar */}
              <div className="flex items-center justify-between border-t border-border-dark bg-black/40 px-4 py-2 text-[10px] font-mono text-text-muted">
                <span className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-accent-blue animate-pulse" />
                  <span>UTF-8</span>
                </span>
                <span>TypeScript</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
