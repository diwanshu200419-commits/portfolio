export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    subTitles: string[];
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    portfolioUrl: string;
  };
  summary: string;
  objective: string;
  skills: {
    category: string;
    items: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    details: string;
  }[];
  projects: {
    name: string;
    role: string;
    period: string;
    description: string;
    tech: string[];
  }[];
  learning: string[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Diwanshu",
    title: "Software Engineer / Full Stack Developer",
    subTitles: ["Software Engineer", "Full Stack Developer", "AI Software Engineer"],
    email: "diwanshu200419@gmail.com",
    phone: "+91 9816357615",
    location: "Himachal Pradesh, India",
    github: "github.com/diwanshu200419-commits",
    linkedin: "linkedin.com/in/diwanshu-1a010b2b8",
    portfolioUrl: "portfolio-diwanshu200419-3167s-projects.vercel.app"
  },
  summary: "Product-minded Software Engineer specializing in building full-stack web applications and AI-integrated products. Proficient in Next.js, TypeScript, Node.js, and MongoDB, with a strong focus on clean code design, performant architectures, database schemas, and Apple-level user interfaces.",
  objective: "To secure a Software Engineering opportunity at a product-centric organization where I can leverage my full-stack skills, AI integration expertise, and UI/UX sensibilities to build high-performance, business-critical applications.",
  skills: [
    {
      category: "Frontend Engineering",
      items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "GSAP", "Lenis", "HTML5", "CSS3", "JavaScript (ES6+)"]
    },
    {
      category: "Backend & Systems",
      items: ["Node.js", "Express", "REST APIs", "API Orchestration", "Serverless Functions"]
    },
    {
      category: "Databases & Services",
      items: ["MongoDB (Mongoose)", "Supabase", "PostgreSQL", "Vercel deployments", "Git", "GitHub version control"]
    },
    {
      category: "AI Technologies",
      items: ["Google Gemini API integration", "AI Prompt Engineering", "JSON-mode structured LLM outputs"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Himachal Pradesh University",
      period: "Completed BCA",
      details: "Focused on computer networks, object-oriented programming, database management systems, and algorithmic principles."
    }
  ],
  projects: [
    {
      name: "SmartDollar Labs",
      role: "Lead Full-Stack Developer",
      period: "2025 - Present",
      description: "Designed and engineered an AI-powered financial advisory dashboard. Integrated Gemini API for custom wealth advice, optimized MongoDB query patterns for transaction history caching, and designed smooth analytics visualization using Recharts.",
      tech: ["Next.js", "React", "TypeScript", "MongoDB", "Gemini API", "Recharts"]
    },
    {
      name: "Resume Builder & Critic",
      role: "Lead Frontend Engineer",
      period: "2025",
      description: "Built a split-pane interactive ATS resume builder. Implemented real-time markdown styling compilers, Supabase authorization rules, and client-side PDF document compilers with layout shift safeguards.",
      tech: ["Next.js", "React", "TypeScript", "Supabase", "html2pdf.js"]
    },
    {
      name: "Guru Kripa Travels",
      role: "Frontend Developer",
      period: "2025",
      description: "Designed a premium travel booking portal featuring high-definition image galleries, AVIF/WebP asset compression, and custom Framer Motion page reveals, achieving a 100/100 Lighthouse performance score.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      name: "Vijeshwari Devi Kulja Motors",
      role: "Lead Web Developer",
      period: "2025",
      description: "Developed a lightweight, mobile-first auto parts catalog and booking tool for a local dealership, driving a 40% increase in monthly online inquiries.",
      tech: ["HTML5", "CSS3", "JavaScript", "Netlify Forms", "WhatsApp API"]
    }
  ],
  learning: [
    "Three.js & React Three Fiber (for premium 3D web interactions)",
    "Database sharding and advanced indexing methodologies",
    "Cognitive agent frameworks and langchain architectures"
  ]
};
