export interface Skill {
  name: string;
  levelDescription: string;
  iconName: string; // Used to resolve Lucide icon names dynamically
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React", levelDescription: "Component design, hooks, state synchronization, concurrent features", iconName: "Atom" },
      { name: "Next.js", levelDescription: "Server Components, App Router, SSR, SSG, dynamic routing, middlewares", iconName: "Layers" },
      { name: "TypeScript", levelDescription: "Type safety, generics, interfaces, strict configuration, custom typing", iconName: "FileCode" },
      { name: "Tailwind CSS", levelDescription: "Tailwind v4, theme customization, responsive grids, dark/light theme systems", iconName: "Paintbrush" },
      { name: "Framer Motion", levelDescription: "Staggered transitions, scroll-triggered animations, page transitions, layouts", iconName: "Sparkles" }
    ]
  },
  {
    title: "Backend & Core APIs",
    skills: [
      { name: "Node.js", levelDescription: "Asynchronous I/O, file systems, npm module ecosystem, server runtimes", iconName: "Terminal" },
      { name: "Express", levelDescription: "API design, custom middleware, error handling, route optimization", iconName: "Cpu" },
      { name: "REST APIs", levelDescription: "HTTP verbs, status codes, payload design, rate-limiting, error responses", iconName: "Link" }
    ]
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", levelDescription: "Mongoose ODM, aggregation pipelines, indexing, schema design", iconName: "Database" },
      { name: "Supabase", levelDescription: "Postgres database, auth integration, real-time channels, storage storage buckets", iconName: "Lock" },
      { name: "Vercel", levelDescription: "Edge functions, production deployments, domains configuration, performance metrics", iconName: "Cloud" }
    ]
  },
  {
    title: "AI Integration & Tools",
    skills: [
      { name: "Google Gemini API", levelDescription: "Prompt engineering, context-window management, structured JSON outputs", iconName: "Brain" },
      { name: "Git", levelDescription: "Branch workflows, commit standards, merge resolving, rebase, cherry-pick", iconName: "GitBranch" },
      { name: "GitHub", levelDescription: "Pull requests, code reviews, actions/workflows, issues management", iconName: "Github" }
    ]
  }
];
