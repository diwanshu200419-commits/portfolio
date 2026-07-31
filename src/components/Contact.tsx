"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, FileText, Clipboard, Check, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("diwanshu200419@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  const contactOptions = [
    {
      name: "Direct Email",
      value: "diwanshu200419@gmail.com",
      icon: Mail,
      color: "text-accent-purple",
      actionLabel: "Copy Address",
      onClick: copyEmail,
      isCopy: true
    },
    {
      name: "WhatsApp Me",
      value: "+91 98163-57615",
      icon: MessageCircle,
      color: "text-accent-purple",
      actionLabel: "Send Message",
      href: "https://wa.me/919816357615?text=Hi%20Diwanshu%2C%20I%20want%20to%20discuss%20a%20project.",
      isCopy: false
    },
    {
      name: "LinkedIn",
      value: "diwanshu-1a010b2b8",
      icon: LinkedInIcon,
      color: "text-accent-purple",
      actionLabel: "Connect Profile",
      href: "https://www.linkedin.com/in/diwanshu-1a010b2b8",
      isCopy: false
    },
    {
      name: "GitHub",
      value: "diwanshu200419-commits",
      icon: GitHubIcon,
      color: "text-accent-purple",
      actionLabel: "View Repositories",
      href: "https://github.com/diwanshu200419-commits",
      isCopy: false
    }
  ];

  return (
    <section id="contact" className="relative border-t border-border-dark/60 py-24 md:py-36 bg-black/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Column: Slogan & Status */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple">
                Connection
              </span>
              <h3 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl mt-3 leading-[1.1]">
                Let&apos;s build something together.
              </h3>
              <p className="mt-4 text-sm text-text-muted leading-relaxed font-sans">
                Whether you have an opening for a software developer role, an internship position, or simply want to chat about web technologies, reach out. I reply within 12 hours.
              </p>
            </div>

            {/* Availability indicator */}
            <div className="inline-flex items-center gap-3 rounded-lg border border-border-dark bg-[#0a0a0c]/60 px-4 py-3 select-none">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6366f1] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6366f1]"></span>
              </span>
              <div className="text-left font-sans">
                <span className="block text-[11px] font-bold text-white leading-none">Status</span>
                <span className="block text-[9px] text-text-muted mt-1">Available to start immediately</span>
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className="rounded-xl border border-border-dark bg-[#0a0a0c]/60 p-5">
              <div className="flex items-start gap-4">
                <div className="rounded bg-border-dark/30 border border-border-dark/40 p-2.5 text-accent-purple shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="space-y-1.5 font-sans">
                  <h5 className="text-xs font-bold text-white">Looking for a printable Resume?</h5>
                  <p className="text-[10px] text-text-muted leading-normal">
                    You can view the dynamic CV sheet directly on this page or trigger printing margins for a standard PDF format.
                  </p>
                  <button
                    onClick={() => handleScrollTo("resume")}
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-accent-purple hover:text-white transition-colors pt-1 cursor-pointer"
                  >
                    <span>Scroll to Resume Sheet</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.name}
                  className="rounded-xl border border-border-dark bg-[#0a0a0c]/40 p-6 flex flex-col justify-between min-h-[160px] card-border-glow shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <div className="rounded bg-black/40 p-2 text-text-muted">
                      <Icon className={`h-4.5 w-4.5 ${opt.color}`} />
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-text-muted">
                      {opt.name}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="block text-xs font-mono font-bold text-white truncate select-all">
                      {opt.value}
                    </span>
                  </div>

                  <div className="mt-4 border-t border-border-dark/30 pt-3">
                    {opt.isCopy ? (
                      <button
                        onClick={opt.onClick}
                        className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-accent-purple hover:text-white transition-colors w-full text-left cursor-pointer"
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {copied ? (
                            <motion.span
                              key="check"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              className="flex items-center gap-1 text-green-400 font-mono"
                            >
                              <Check className="h-3 w-3" />
                              <span>Copied!</span>
                            </motion.span>
                          ) : (
                            <motion.span
                              key="copy"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              className="flex items-center gap-1 font-mono"
                            >
                              <span>{opt.actionLabel}</span>
                              <Clipboard className="h-3 w-3" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    ) : (
                      <a
                        href={opt.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] font-mono font-bold text-accent-purple hover:text-white transition-colors"
                      >
                        <span>{opt.actionLabel}</span>
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
