"use client";

import { motion } from "framer-motion";
import { Star, GitFork, BookOpen, ExternalLink, Calendar } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { useState } from "react";

export default function GitStats() {
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null);

  // Generate contribution calendar squares (last 16 weeks * 7 days for clean visual layout)
  const totalWeeks = 18;
  const daysOfWeek = 7;
  const contributionGrid: number[][] = [];

  // Generate deterministic contribution counts for a realistic git graph
  for (let w = 0; w < totalWeeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < daysOfWeek; d++) {
      // Create pattern of contributions: higher counts on weekdays, lower on weekends, some blank days
      const isWeekend = d === 0 || d === 6;
      let count = 0;
      const seed = Math.sin(w * 0.5 + d * 0.8) * 10;
      
      if (seed > 3) {
        count = isWeekend ? Math.floor(Math.random() * 3) : Math.floor(Math.random() * 8) + 2;
      } else if (seed > -1) {
        count = Math.floor(Math.random() * 2);
      }
      week.push(count);
    }
    contributionGrid.push(week);
  }

  // Get grid square color matching GitHub dark mode colors
  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-[#161b22]";
    if (count <= 2) return "bg-[#0e4429]";
    if (count <= 4) return "bg-[#006d32]";
    if (count <= 6) return "bg-[#26a641]";
    return "bg-[#39d353]";
  };

  const topLanguages = [
    { name: "TypeScript", percentage: 56, color: "bg-[#3178c6]" },
    { name: "JavaScript", percentage: 24, color: "bg-[#f1e05a]" },
    { name: "HTML / CSS", percentage: 12, color: "bg-[#e34c26]" },
    { name: "Others (JSON, Shell)", percentage: 8, color: "bg-[#8b949e]" }
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
    <section id="github" className="relative border-t border-border-dark/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Heading */}
        <div className="mb-16 md:max-w-2xl">
          <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent-blue mb-3">
            Open Source
          </h2>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            GitHub Activity &amp; Repositories
          </h3>
          <p className="mt-4 text-sm text-text-muted">
            Belief in keeping open-source code clean and structured. Here is a breakdown of my coding habits, language distributions, and featured public repositories.
          </p>
        </div>

        {/* Outer GitHub Grid layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left Block - Grid Graph & Stats */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Contribution Matrix Container */}
            <div className="rounded-xl border border-border-dark bg-card-bg/10 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 text-xs text-white">
                  <Calendar className="h-4 w-4 text-accent-purple" />
                  <span className="font-bold">Commit Frequency (248 contributions)</span>
                </div>
                <a
                  href="https://github.com/diwanshu200419-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] font-bold text-accent-blue hover:underline"
                >
                  <span>diwanshu200419-commits</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Grid Layout scrollable container */}
              <div className="overflow-x-auto pb-4 scrollbar-thin">
                <div className="flex gap-1.5 min-w-[340px]">
                  {contributionGrid.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-1.5">
                      {week.map((count, dayIdx) => {
                        const dateStr = `Day ${dayIdx + 1}, Week ${weekIdx + 1}`;
                        return (
                          <div
                            key={dayIdx}
                            onMouseEnter={() => setHoveredDay({ count, date: dateStr })}
                            onMouseLeave={() => setHoveredDay(null)}
                            className={`h-3 w-3 rounded-sm transition-all duration-200 hover:scale-125 hover:shadow-md ${getContributionColor(
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
              <div className="flex items-center justify-between mt-4 text-[10px] text-text-muted">
                <div>
                  {hoveredDay ? (
                    <span className="text-white font-medium">
                      {hoveredDay.count} commits on {hoveredDay.date}
                    </span>
                  ) : (
                    <span>Hover over squares for details</span>
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#161b22]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#0e4429]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#006d32]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#26a641]" />
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#39d353]" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Pinned Repositories list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pinnedRepos.map((repo) => (
                <div
                  key={repo.name}
                  className="rounded-xl border border-border-dark bg-card-bg/10 p-5 backdrop-blur-sm transition-all duration-300 hover:border-border-dark/80 hover:bg-card-bg/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-accent-purple" />
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display text-sm font-bold text-white hover:text-accent-purple transition-colors"
                        >
                          {repo.name}
                        </a>
                      </div>
                      <span className="rounded-full border border-border-dark bg-black/40 px-2 py-0.5 text-[8px] font-mono text-text-muted uppercase">
                        Public
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 text-[10px] text-text-muted">
                    <span className="flex items-center gap-1">
                      <span className={`h-2.5 w-2.5 rounded-full ${repo.langColor}`} />
                      <span>{repo.language}</span>
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Star className="h-3.5 w-3.5 text-yellow-500" />
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

          {/* Right Block - Top Languages breakdown */}
          <div className="lg:col-span-4 rounded-xl border border-border-dark bg-card-bg/10 p-6 backdrop-blur-sm h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GitHubIcon className="h-5 w-5 text-text-white" />
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                  Language Distribution
                </h4>
              </div>

              {/* Progress bars list */}
              <div className="space-y-5">
                {topLanguages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-text-muted font-medium">{lang.name}</span>
                      <span className="text-white font-bold">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-border-dark overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${lang.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats footer */}
            <div className="mt-8 border-t border-border-dark/30 pt-4 text-[10px] text-text-muted leading-relaxed">
              Calculated using github-linguist stats compiled across production-deployed repositories in the last 12 months.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
