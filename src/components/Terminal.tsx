"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

export default function Terminal() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "Welcome to Diwanshu's Shell (v1.0.0-release)", type: "system" },
    { text: "Type 'help' to see list of available commands, or 'whoami' to learn more.", type: "system" },
    { text: "", type: "output" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus terminal input when clicking anywhere on the terminal window
  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Scroll to bottom when output changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    setInputVal("");

    if (!cmd) return;

    const newHistory = [...history, { text: `guest@diwanshu:~$ ${inputVal}`, type: "input" as const }];

    switch (cmd) {
      case "help":
        setHistory([
          ...newHistory,
          { text: "Available commands:", type: "output" },
          { text: "  whoami    - Display developer introduction", type: "output" },
          { text: "  skills    - List core technical stack categorizations", type: "output" },
          { text: "  projects  - Show featured production case studies", type: "output" },
          { text: "  contact   - Display communication options", type: "output" },
          { text: "  clear     - Clear the terminal output buffer", type: "output" }
        ]);
        break;
      case "whoami":
        setHistory([
          ...newHistory,
          { text: "Diwanshu", type: "output" },
          { text: "Role: Software Engineer / Full Stack & AI Developer", type: "output" },
          { text: "Bio: I build high-performance products at the intersection of design and code. Specializing in Next.js, React 19, TypeScript, and Google Gemini API integration.", type: "output" },
          { text: "Status: Currently open to full-time Software Engineering roles.", type: "output" }
        ]);
        break;
      case "skills":
        setHistory([
          ...newHistory,
          { text: "Technical Stack:", type: "output" },
          { text: "  Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, Lenis", type: "output" },
          { text: "  Backend: Node.js, Express, REST APIs, API Orchestration", type: "output" },
          { text: "  Database: MongoDB (Mongoose), Supabase, PostgreSQL", type: "output" },
          { text: "  AI Stack: Google Gemini API integration, LLM prompt engineering", type: "output" }
        ]);
        break;
      case "projects":
        setHistory([
          ...newHistory,
          { text: "Production Deployments:", type: "output" },
          { text: "  1. SmartDollar Labs       - AI-powered wealth optimization dashboard", type: "output" },
          { text: "  2. Guru Kripa Travels     - Cinematic, fast discovery travel planner", type: "output" },
          { text: "  3. Resume Builder         - ATS real-time generator and AI critic", type: "output" },
          { text: "  4. E-Book Marketplace     - Complete storefront with Stripe payments", type: "output" },
          { text: "  5. Interior Website       - Minimalist spatial architecture gallery", type: "output" },
          { text: "  6. Kulja Motors           - Auto parts lookup with WhatsApp forms", type: "output" },
          { text: "Tip: Scroll up to the Featured Work section to read full details and click live demos.", type: "system" }
        ]);
        break;
      case "contact":
        setHistory([
          ...newHistory,
          { text: "Connect channels:", type: "output" },
          { text: "  Email:    diwanshu200419@gmail.com", type: "output" },
          { text: "  Phone:    +91 98163-57615", type: "output" },
          { text: "  LinkedIn: linkedin.com/in/diwanshu-1a010b2b8", type: "output" },
          { text: "  GitHub:   github.com/diwanshu200419-commits", type: "output" }
        ]);
        break;
      case "clear":
        setHistory([]);
        break;
      default:
        setHistory([
          ...newHistory,
          { text: `bash: command not found: ${cmd}. Type 'help' to see list of valid commands.`, type: "error" }
        ]);
    }
  };

  return (
    <section id="terminal" className="relative border-t border-border-dark/60 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
            Sandbox
          </h2>
          <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Interactive CLI Shell
          </h3>
          <p className="mt-3 text-xs text-text-muted">
            For power users and tech recruiters: click the console below and type commands to query my profile.
          </p>
        </div>

        {/* Terminal Window Frame */}
        <div
          onClick={focusInput}
          className="relative rounded-2xl border border-border-dark bg-[#070b13]/90 shadow-2xl backdrop-blur-md overflow-hidden cursor-text transition-all duration-300 hover:border-accent-purple/35"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-border-dark bg-black/40 px-4 py-2.5 select-none">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#eab308]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/80" />
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
              <TerminalIcon className="h-3 w-3 text-accent-purple" />
              <span>guest@diwanshu: ~</span>
            </div>
            <span className="w-10" /> {/* Spacer to align title */}
          </div>

          {/* Terminal Console Buffer */}
          <div
            ref={containerRef}
            className="p-5 font-mono text-[11px] h-[280px] overflow-y-auto space-y-2 leading-relaxed scrollbar-thin select-text"
          >
            {history.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.type === "error"
                    ? "text-red-400"
                    : line.type === "system"
                    ? "text-[#64748b]"
                    : line.type === "input"
                    ? "text-[#fafafa]"
                    : "text-[#a1a1aa]"
                }
              >
                {line.text}
              </div>
            ))}

            {/* Input Form Prompt */}
            <form onSubmit={handleCommand} className="flex items-center text-[#fafafa] pt-1">
              <span className="text-accent-purple font-semibold mr-1.5 shrink-0 select-none">
                guest@diwanshu:~$
              </span>
              <span className="flex-1 relative flex items-center">
                {/* Transparent input that captures typing */}
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="absolute inset-0 bg-transparent text-transparent border-none outline-none select-none caret-transparent w-full"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
                {/* Visual rendering of typed value and blinking cursor */}
                <span className="text-[#fafafa] select-none whitespace-pre break-all pointer-events-none">
                  {inputVal}
                </span>
                <span className="h-3.5 w-1.5 bg-accent-purple animate-pulse ml-0.5 pointer-events-none" />
              </span>
            </form>
          </div>

          {/* Console Guide footer */}
          <div className="flex items-center justify-between border-t border-border-dark bg-black/40 px-4 py-1.5 text-[9px] font-mono text-text-muted select-none">
            <span className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" />
              <span>Available commands: whoami, skills, projects, contact, clear</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
