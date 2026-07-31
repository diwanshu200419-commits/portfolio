export interface Skill {
  name: string;
  levelDescription: string;
  confidence: "Primary Stack" | "Familiar" | "Learning";
  iconName: string; // Used to resolve Lucide icon names dynamically
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", levelDescription: "Component lifecycle, Hooks, custom states, concurrent routing", confidence: "Primary Stack", iconName: "Atom" },
      { name: "Next.js 14/15", levelDescription: "Server Components, dynamic file routes, middleware authorization", confidence: "Primary Stack", iconName: "Layers" },
      { name: "TypeScript", levelDescription: "Type compilation, interface safety, strict generics structures", confidence: "Primary Stack", iconName: "FileCode" },
      { name: "Tailwind CSS", levelDescription: "Fluid grid layouts, custom configurations, utility styling scaling", confidence: "Primary Stack", iconName: "Paintbrush" },
      { name: "Framer Motion", levelDescription: "Subtle page transitions, scroll triggers, layout animations", confidence: "Familiar", iconName: "Sparkles" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", levelDescription: "Asynchronous runtime pipelines, file I/O operations, process tools", confidence: "Primary Stack", iconName: "Terminal" },
      { name: "Express.js", levelDescription: "REST API route controller pipelines, middleware validation", confidence: "Primary Stack", iconName: "Cpu" },
      { name: "REST APIs", levelDescription: "Standard status headers, payload serialization, route structures", confidence: "Primary Stack", iconName: "Link" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", levelDescription: "Mongoose schema patterns, query indexing, collection aggregations", confidence: "Primary Stack", iconName: "Database" },
      { name: "Supabase / PostgreSQL", levelDescription: "Relational queries, row-level policies, OAuth bindings", confidence: "Familiar", iconName: "Lock" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Vercel", levelDescription: "Static page optimization, environment setups, git deployment links", confidence: "Primary Stack", iconName: "Cloud" },
      { name: "Netlify", levelDescription: "Web deployment, custom routing rules, build pipeline linking", confidence: "Familiar", iconName: "Cloud" }
    ]
  },
  {
    title: "AI Integration",
    skills: [
      { name: "Google Gemini API", levelDescription: "Prompt structures, structured JSON parsing, text embedding contexts", confidence: "Familiar", iconName: "Brain" },
      { name: "OpenAI API", levelDescription: "Completion calls, prompt parameters tuning, chat memory setups", confidence: "Familiar", iconName: "Brain" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", levelDescription: "Version control workflows, branching rules, clean commits structure", confidence: "Primary Stack", iconName: "GitBranch" },
      { name: "GitHub", levelDescription: "Pull requests reviews, action pipelines, issue tracking, organization", confidence: "Primary Stack", iconName: "Github" }
    ]
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "SQL Query Tuning", levelDescription: "Learning relational index optimization, join costs, schema normalizations", confidence: "Learning", iconName: "Database" },
      { name: "Docker Basics", levelDescription: "Learning basic container orchestration, port mapping, local builds setups", confidence: "Learning", iconName: "Cpu" }
    ]
  }
];
