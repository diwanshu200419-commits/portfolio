"use client";

import { motion } from "framer-motion";
import { Check, Shield, Code2, GraduationCap, Compass } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Code2,
      title: "Readable & Typed Code",
      detail: "Writing modular, strictly typed code structures with clear documentation so that team members can collaborate without Friction."
    },
    {
      icon: Compass,
      title: "Product & Usability Sense",
      detail: "Ensuring visual alignment, typographic balance, form validation, and page scroll behaviors feel native and fluid on every device."
    },
    {
      icon: Shield,
      title: "Honesty & Quality First",
      detail: "Admitting what I don't know, actively reading documentation, and using code reviews as opportunities to improve my engineering standards."
    }
  ];

  return (
    <section id="about" className="relative border-t border-border-dark/60 bg-black/5 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="mb-20 md:max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple">
            The Journey
          </span>
          <h3 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl mt-3 leading-[1.1]">
            Curiosity, documentation, and building real products.
          </h3>
        </div>

        {/* Story Grid with double whitespace spacing */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-8 text-sm text-text-muted leading-relaxed font-sans">
            <p className="text-base text-white/90 leading-relaxed font-medium">
              My interest in writing code started in 2023 during my BCA studies. What began as curiosity about styling simple web pages quickly turned into a dedicated practice of building full-stack applications.
            </p>
            <p>
              I discovered early on that I enjoy building products that people can actually use to solve practical needs. Whether it was developing a lightweightParts catalog for a regional auto dealership or engineering **Vaylo AI**—a SaaS career platform processing automated resume analyses—I approach software with a focus on usability, page performance, and clean data structures.
            </p>
            <p>
              I learn by building. When I want to understand a new protocol, API parameter, or design pattern, I read the official documentation, construct isolated test scripts, and debug them. I believe in writing code that other engineers can read easily, and I value teams that prioritize code quality and transparent collaboration.
            </p>
            <p>
              Currently, I am expanding my theoretical and technical foundations by pursuing my **Master of Computer Applications (MCA) in Machine Learning & AI**, expecting to leverage these models to build smarter, context-aware web utilities.
            </p>
          </div>

          {/* Right Column: Values Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-border-dark bg-[#0a0a0c]/60 p-8 shadow-sm">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted mb-6 border-b border-border-dark/60 pb-3">
                Core Engineering Mindset
              </h4>
              
              <ul className="space-y-6">
                {values.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded bg-border-dark/30 border border-border-dark/40 flex items-center justify-center text-accent-purple shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="block text-xs font-bold text-white mb-1.5">{val.title}</strong>
                        <p className="text-[11px] text-text-muted leading-relaxed font-sans">{val.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
