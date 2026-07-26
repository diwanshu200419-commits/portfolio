"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Readable Code",
      detail: "Writing clean, modular code with descriptive variable naming and clear logic so that team members can collaborate easily."
    },
    {
      title: "Focus on Usability",
      detail: "Ensuring visual elements, form fields, and page scroll behaviors feel intuitive and work on both desktop and mobile layouts."
    },
    {
      title: "Document-First Learning",
      detail: "Admitting what I don't know, diving deep into technical documentation, and building isolated prototypes to learn new skills."
    },
    {
      title: "Honest Feedback",
      detail: "Seeking constructive code reviews, learning from senior engineers, and contributing transparently to team tasks."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="about" className="relative border-t border-border-dark/60 bg-black/5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="mb-16 md:max-w-2xl">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
            About Me
          </h2>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My path into software development and how I work.
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6 text-sm text-text-muted leading-relaxed font-sans">
            <p>
              My interest in software development began in college while pursuing my Bachelor of Computer Applications (BCA) degree. I was fascinated by the fact that you could write lines of code in a editor and immediately see a functional tool appear on the screen. I started by learning HTML, CSS, and basic programming logic, which quickly led me to explore modern javascript frameworks, backend routing, and database structures.
            </p>
            <p>
              Today, I enjoy building clean, functional web projects that solve practical problems—whether it&apos;s a visual tool to track personal finances, a real-time resume editor, or a catalog for a local business. I am motivated by the challenge of making things feel clean, responsive, and easy to use. I believe that good software doesn&apos;t need to be complex; it just needs to work reliably and be easy for other developers to read.
            </p>
            <p>
              I approach learning by building. When I want to understand a new library or design pattern, I read its official documentation, build a small prototype, and debug the errors myself. I want to join a collaborative, quality-focused development team where I can receive constructive feedback, learn industry-standard best practices from experienced engineers, and contribute to real-world codebases.
            </p>
          </div>

          {/* Right Column: Key Values Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-border-dark bg-card-bg/50 p-6 shadow-sm">
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
                What I Value
              </h4>
              
              <ul className="space-y-4">
                {values.map((val, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="h-4.5 w-4.5 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    <div>
                      <strong className="block text-xs font-bold text-white mb-1">{val.title}</strong>
                      <p className="text-[11px] text-text-muted leading-relaxed font-sans">{val.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
