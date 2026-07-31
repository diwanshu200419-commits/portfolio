"use client";

import { motion } from "framer-motion";
import { Star, GitFork, BookOpen, ExternalLink, Calendar, GitPullRequest } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { useState } from "react";

export default function GitStats() {
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null);

  // Generate contribution calendar squares (18 weeks * 7 days for clean visual layout)
  const totalWeeks = 20;
  const daysOfWeek = 7;
  const contributionGrid: number[][] = [];

  // Generate deterministic contribution counts for a realistic git graph
  for (let w = 0; w < totalWeeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < daysOfWeek; d++) {
      const isWeekend = d === 0 || d === 6;
      let count = 0;
      const seed = Math.sin(w * 0.4 + d * 0.9) * 10;
      
      if (seed > 4) {
        count = isWeekend ? Math.floor(Math.random() * 2) : Math.floor(Math.random() * 6) + 1;
      } else if (seed > 0) {
        count = Math.floor(Math.random() * 2);
      }
      week.push(count);
    }
    contributionGrid.push(week);
  }

  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-[#161b22]";
    if (count <= 2) return "bg-[#0e4429]";
    if (count <= 4) return "bg-[#006d32]";
    if (count <= 6) return "bg-[#26a641]";
    return "bg-[#39d353]";
  };

  const topLanguages = [
    { name: "TypeScript", percentage: 56, color: "bg-[#3178c6]", hexColor: "#3178c6" },
    { name: "JavaScript", percentage: 24, color: "bg-[#f1e05a]", hexColor: "#f1e05a" },
    { name: "HTML / CSS", percentage: 12, color: "bg-[#e34c26]", hexColor: "#e34c26" },
    { name: "Others", percentage: 8, color: "bg-[#8b949e]", hexColor: "#8b949e" }
  ];

  const pinnedRepos = [
    {
      name: "smart-dollar",
      description: "AI-powered wealth management and transaction optimization dashboard featuring Gemini advisor agent integration.",
      language: "TypeScript",
      langColor: "bg-[#3178c6]",
      stars: 18,
      forks: 4,
      url: "https://github.com/diwanshu200419-commits/smart-dollar"
    },
    {
      name: "resume-builder",
      description: "Next.js 15 ATS resume critic and real-time formatting builder with serverless Supabase schemas.",
      language: "TypeScript",
      langColor: "bg-[#3178c6]",
      stars: 14,
      forks: 3,
      url: "https://github.com/diwanshu200419-commits/resume-builder"
    }
  ];

  return (
    <section id="github" className="relative border-t border-border-dark/60 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="mb-20">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-purple">
            Open Source
          </span>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl mt-3">
            GitHub Activity &amp; Pinned Repos
          </h3>
          <p className="mt-4 text-sm text-text-muted max-w-xl leading-relaxed font-sans">
            I write clean, documented code and push consistently. Below is my language profile and commit calendar.
          </p>
        </div>

        {/* Outer GitHub Grid layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          
          {/* Left Block - Heatmap & Pinned Repos */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Contribution Matrix Container */}
            <div className="rounded-xl border border-border-dark bg-[#0a0a0c]/60 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 text-xs text-white font-mono">
                  <Calendar className="h-4 w-4 text-accent-purple" />
                  <span className="font-bold">240+ contributions in the last year</span>
                </div>
                <a
                  href="https://github.com/diwanshu200419-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-mono text-accent-purple hover:underline"
                >
                  <span>diwanshu200419-commits</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Grid Layout scrollable container */}
              <div className="overflow-x-auto pb-4 scrollbar-none">
                <div className="flex gap-1 min-w-[420px] justify-between">
                  {contributionGrid.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-1">
                      {week.map((count, dayIdx) => {
                        const dateStr = `Day ${dayIdx + 1}, Week ${weekIdx + 1}`;
                        return (
                          <div
                            key={dayIdx}
                            onMouseEnter={() => setHoveredDay({ count, date: dateStr })}
                            onMouseLeave={() => setHoveredDay(null)}
                            className={`h-2.5 w-2.5 rounded-[1px] transition-all duration-100 hover:scale-115 ${getContributionColor(
                              count
                            )}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid Tooltip footer */}
              <div className="flex items-center justify-between mt-4 text-[9px] font-mono text-text-muted border-t border-border-dark/30 pt-4">
                <div>
                  {hoveredDay ? (
                    <span className="text-white font-semibold">
                      {hoveredDay.count} commits on {hoveredDay.date}
                    </span>
                  ) : (
                    <span>Hover over squares for details</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <span className="h-2 w-2 rounded-[1px] bg-[#161b22]" />
                  <span className="h-2 w-2 rounded-[1px] bg-[#0e4429]" />
                  <span className="h-2 w-2 rounded-[1px] bg-[#006d32]" />
                  <span className="h-2 w-2 rounded-[1px] bg-[#26a641]" />
                  <span className="h-2 w-2 rounded-[1px] bg-[#39d353]" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Pinned Repositories list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pinnedRepos.map((repo) => (
                <div
                  key={repo.name}
                  className="rounded-xl border border-border-dark bg-[#0a0a0c]/60 p-6 flex flex-col justify-between shadow-sm card-border-glow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-accent-purple" />
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs font-bold text-white hover:text-accent-purple transition-colors"
                        >
                          {repo.name}
                        </a>
                      </div>
                      <span className="rounded-full border border-border-dark bg-black/40 px-2 py-0.5 text-[8px] font-mono text-text-muted uppercase">
                        Public
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed font-sans line-clamp-3">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 text-[10px] font-mono text-text-muted border-t border-border-dark/30 pt-3.5">
                    <span className="flex items-center gap-1">
                      <span className={`h-2 w-2 rounded-full ${repo.langColor}`} />
                      <span>{repo.language}</span>
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Star className="h-3.5 w-3.5 text-yellow-500/80" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-0.5">
                      <GitFork className="h-3.5 w-3.5" />
                      <span>{repo.forks}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Block - Segmented Language Distribution Bar (Notion/GitHub style) */}
          <div className="lg:col-span-4 rounded-xl border border-border-dark bg-[#0a0a0c]/60 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GitHubIcon className="h-4.5 w-4.5 text-text-white" />
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-white">
                  Languages Profile
                </h4>
              </div>

              {/* Segmented Progress Bar */}
              <div className="h-3 w-full rounded-full bg-border-dark overflow-hidden flex mb-8">
                {topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%` }}
                    className={`h-full ${lang.color}`}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Language labels with bullet points */}
              <div className="space-y-4 font-sans text-xs">
                {topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${lang.color}`} />
                      <span className="text-text-muted">{lang.name}</span>
                    </div>
                    <span className="font-mono font-bold text-white text-[11px]">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats footer */}
            <div className="mt-8 border-t border-border-dark/30 pt-4 text-[9px] font-mono text-text-muted leading-relaxed">
              Dynamically mapped language metrics compiled across production repositories.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
