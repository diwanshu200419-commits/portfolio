"use client";

import { resumeData } from "@/data/resume";
import { Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, BookOpen } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function ResumeSection() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="relative border-t border-border-dark/60 py-24 md:py-32 print:py-0 print:border-none">
      <div className="mx-auto max-w-4xl px-6 print:px-0">
        
        {/* Section Heading - Hidden during print */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 print:hidden">
          <div className="max-w-xl">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-purple mb-3">
              Curriculum Vitae
            </h2>
            <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Resume
            </h3>
            <p className="mt-4 text-sm text-text-muted">
              A comprehensive overview of my software engineering capabilities, academic background, and project implementations.
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-primary-bg transition-all hover:bg-white/95 hover:shadow-lg hover:shadow-white/5 active:scale-95 cursor-pointer shrink-0"
          >
            <Download className="h-4 w-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>

        {/* Printable Resume Sheet */}
        <div className="rounded-xl border border-border-dark bg-[#0a0f1d]/50 p-8 md:p-12 shadow-2xl backdrop-blur-sm print:border-none print:bg-white print:text-black print:p-0 print:shadow-none print:rounded-none">
          
          {/* Print Header */}
          <div className="border-b border-border-dark/80 pb-6 print:border-black/20">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h4 className="font-display text-2xl font-black text-white print:text-black">
                  {resumeData.personalInfo.name}
                </h4>
                <p className="text-sm font-semibold text-accent-purple mt-1 print:text-[#5c3aba]">
                  {resumeData.personalInfo.title}
                </p>
              </div>
              <div className="text-xs text-text-muted space-y-1.5 print:text-black/80 font-mono">
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-accent-blue print:text-black" />
                  <span>{resumeData.personalInfo.email}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-accent-blue print:text-black" />
                  <span>{resumeData.personalInfo.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-accent-blue print:text-black" />
                  <span>{resumeData.personalInfo.location}</span>
                </p>
              </div>
            </div>
            {/* Social rows */}
            <div className="mt-4 flex flex-wrap gap-4 text-[10px] text-text-muted print:text-black/70 font-mono">
              <span className="flex items-center gap-1.5">
                <GitHubIcon className="h-3.5 w-3.5 text-white print:fill-black print:text-black" />
                <span>{resumeData.personalInfo.github}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <LinkedInIcon className="h-3.5 w-3.5 text-white print:fill-black print:text-black" />
                <span>{resumeData.personalInfo.linkedin}</span>
              </span>
            </div>
          </div>

          {/* Resume Body */}
          <div className="mt-8 space-y-8">
            
            {/* Summary */}
            <div className="space-y-2">
              <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue print:text-[#2563EB] flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Professional Summary</span>
              </h5>
              <p className="text-xs leading-relaxed text-text-muted print:text-black/90">
                {resumeData.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue print:text-[#2563EB] flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                <span>Technical Core Competencies</span>
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {resumeData.skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="space-y-1.5">
                    <strong className="text-white print:text-black font-semibold text-[11px]">
                      {skillGroup.category}:
                    </strong>
                    <p className="text-text-muted print:text-black/80 font-mono leading-relaxed">
                      {skillGroup.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-4">
              <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue print:text-[#2563EB] flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Project Experience</span>
              </h5>
              <div className="space-y-4">
                {resumeData.projects.map((proj) => (
                  <div key={proj.name} className="border-l border-border-dark/65 pl-4 py-0.5 print:border-black/20">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <strong className="text-sm font-bold text-white print:text-black">{proj.name}</strong>
                      <span className="text-[10px] font-mono text-text-muted print:text-black/60">{proj.period}</span>
                    </div>
                    <p className="text-[10px] text-accent-purple font-semibold mt-0.5 print:text-[#5c3aba]">{proj.role}</p>
                    <p className="text-xs text-text-muted mt-2 leading-relaxed print:text-black/80">{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {proj.tech.map((tech) => (
                        <span key={tech} className="rounded bg-border-dark/40 border border-border-dark/30 px-2 py-0.5 text-[9px] font-mono text-text-muted print:bg-gray-100 print:text-black print:border-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue print:text-[#2563EB] flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span>Education</span>
              </h5>
              {resumeData.education.map((edu) => (
                <div key={edu.degree} className="border-l border-border-dark/65 pl-4 py-0.5 print:border-black/20">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <strong className="text-sm font-bold text-white print:text-black">{edu.degree}</strong>
                    <span className="text-[10px] font-mono text-text-muted print:text-black/60">{edu.period}</span>
                  </div>
                  <p className="text-[10px] text-accent-purple font-semibold mt-0.5 print:text-[#5c3aba]">{edu.institution}</p>
                  <p className="text-xs text-text-muted mt-2 print:text-black/80">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Currently Learning */}
            <div className="space-y-2">
              <h5 className="font-display text-xs font-bold uppercase tracking-wider text-accent-blue print:text-[#2563EB] flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Active Learning Interests</span>
              </h5>
              <ul className="list-disc pl-5 text-xs text-text-muted print:text-black/80 space-y-1">
                {resumeData.learning.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
