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

  const contactOptions = [
    {
      name: "Direct Email",
      value: "diwanshu200419@gmail.com",
      icon: Mail,
      color: "text-[#ef4444]",
      actionLabel: "Copy Address",
      onClick: copyEmail,
      isCopy: true
    },
    {
      name: "WhatsApp Me",
      value: "+91 98163-57615",
      icon: MessageCircle,
      color: "text-[#22c55e]",
      actionLabel: "Send Message",
      href: "https://wa.me/919816357615?text=Hi%20Diwanshu%2C%20I%20want%20to%20discuss%20a%20project.",
      isCopy: false
    },
    {
      name: "LinkedIn",
      value: "diwanshu-1a010b2b8",
      icon: LinkedInIcon,
      color: "text-[#0a66c2]",
      actionLabel: "Connect Profile",
      href: "https://www.linkedin.com/in/diwanshu-1a010b2b8",
      isCopy: false
    },
    {
      name: "GitHub",
      value: "diwanshu200419-commits",
      icon: GitHubIcon,
      color: "text-[#f3f4f6]",
      actionLabel: "View Repositories",
      href: "https://github.com/diwanshu200419-commits",
      isCopy: false
    }
  ];

  return (
    <section id="contact" className="relative border-t border-border-dark/60 py-24 md:py-32">
      {/* Background ambient gradient */}
      <div className="absolute left-1/3 bottom-10 -z-10 h-72 w-72 rounded-full bg-accent-blue/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Column: Slogan & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-blue mb-3">
                Connection
              </h2>
              <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s build something exceptional.
              </h3>
              <p className="mt-4 text-sm text-text-muted leading-relaxed">
                Whether you have an opening for a frontend or full-stack software engineer, a complex SaaS idea, or simply want to chat about system design, reach out. I reply within 12 hours.
              </p>
            </div>

            {/* Availability indicator */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-border-dark bg-card-bg/30 px-4 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
              </span>
              <div className="text-left">
                <span className="block text-[11px] font-bold text-white leading-none">Live Availability Badge</span>
                <span className="block text-[9px] text-text-muted mt-1">Ready to start immediately</span>
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className="rounded-xl border border-border-dark/80 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 p-5">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/5 p-2.5 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h5 className="font-display text-xs font-bold text-white">Need a copy of my Resume?</h5>
                  <p className="text-[10px] text-text-muted leading-normal">
                    Download my structured resume containing full technical experience, projects metrics, and certifications.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-accent-blue hover:text-white transition-colors pt-2"
                  >
                    <span>Download PDF</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
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
                  className="rounded-xl border border-border-dark bg-card-bg/20 p-5 backdrop-blur-sm transition-all duration-300 hover:border-border-dark/80 hover:bg-card-bg/40 flex flex-col justify-between min-h-[150px]"
                >
                  <div className="flex justify-between items-start">
                    <div className="rounded-lg bg-black/40 p-2 text-text-muted">
                      <Icon className={`h-4.5 w-4.5 ${opt.color}`} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-text-muted">
                      {opt.name}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="block text-xs font-semibold text-white truncate select-all">
                      {opt.value}
                    </span>
                  </div>

                  <div className="mt-4 border-t border-border-dark/30 pt-3">
                    {opt.isCopy ? (
                      <button
                        onClick={opt.onClick}
                        className="flex items-center gap-1.5 text-[10px] font-bold text-accent-purple hover:text-white transition-colors w-full text-left cursor-pointer"
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {copied ? (
                            <motion.span
                              key="check"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              className="flex items-center gap-1 text-green-400"
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
                              className="flex items-center gap-1"
                            >
                              <Clipboard className="h-3 w-3" />
                              <span>{opt.actionLabel}</span>
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    ) : (
                      <a
                        href={opt.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] font-bold text-accent-blue hover:text-white transition-colors"
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
