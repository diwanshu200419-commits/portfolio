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
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
  }[];
  projects: {
    name: string;
    tagline: string;
    period: string;
    description: string[];
    tech: string[];
    liveUrl?: string;
  }[];
  strengths: string[];
  certifications: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
    details: string;
  }[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "DIWANSHU",
    title: "Software Engineer | Full-Stack Developer",
    subTitles: ["Software Engineer", "Full-Stack Developer"],
    email: "diwanshu200419@gmail.com",
    phone: "+91 9816357615",
    location: "Solan, Himachal Pradesh, India",
    github: "github.com/diwanshu200419-commits",
    linkedin: "linkedin.com/in/diwanshu-1a010b2b8",
    portfolioUrl: "portfolio-diwanshu200419-3167s-projects.vercel.app"
  },
  summary: "Full-stack developer with hands-on experience building and deploying production web applications using React, Next.js, Node.js and MongoDB. Architected Vaylo AI, a multi-module SaaS career platform with Gemini AI integration, alongside six other live projects delivered through an internship and freelance client work. Comfortable owning a feature end-to-end, from API design through deployment on Vercel and Netlify.",
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "Supabase", "SQL"]
    },
    {
      category: "Tools & Deployment",
      items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"]
    },
    {
      category: "AI Tools",
      items: ["OpenAI API", "Gemini API", "Claude"]
    }
  ],
  experience: [
    {
      role: "Full Stack Development Intern",
      company: "ZSapiens SoftTech Pvt. Ltd.",
      period: "January 2026",
      description: "Built responsive web interfaces and completed project-based coding assignments during a one-month, full-stack focused internship, debugging code and using Git for version control."
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Freelance",
      period: "April 2026 – Present",
      description: "Designed and shipped websites for local businesses independently, integrating custom UI, WhatsApp enquiry flows and AI-assisted features from scoping through deployment."
    }
  ],
  projects: [
    {
      name: "Vaylo AI — AI Career Operating System",
      tagline: "ATS-Optimized Real-time Resume Generator & Critic",
      period: "2026",
      tech: ["Next.js 14 (App Router)", "TypeScript", "React", "Tailwind CSS", "Supabase/PostgreSQL", "Google Gemini AI", "Vercel"],
      liveUrl: "https://resume-builder-murex-mu.vercel.app/",
      description: [
        "Architected and deployed a production SaaS career platform with a strict TypeScript codebase on Next.js 14 App Router and a Supabase/PostgreSQL backend.",
        "Engineered an AI-powered ATS resume scanner using Google Gemini AI, parsing PDF/DOCX uploads to generate keyword-level scoring and before/after optimization feedback.",
        "Built a live-preview resume builder, AI job matcher, salary negotiation assistant, STAR interview prep module and portfolio generator across a unified dashboard.",
        "Implemented Google OAuth authentication and a tiered subscription system (Free/Pro/Premium) with usage-gated feature access."
      ]
    },
    {
      name: "SmartDollar Labs",
      tagline: "AI-powered business platform with Gemini API integration for recommendations and Supabase lead capture.",
      period: "2025",
      tech: ["Next.js", "React", "TypeScript", "MongoDB", "Gemini API", "Supabase"],
      liveUrl: "https://smart-dollar.vercel.app/",
      description: [
        "Built an AI-powered financial advisory platform integrating Gemini API for recommendations and Supabase for lead capture."
      ]
    },
    {
      name: "E-Book Marketplace",
      tagline: "Full-stack marketplace with authentication, CRUD operations and an admin content-moderation workflow.",
      period: "2025",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
      liveUrl: "https://ebook-website-theta-nine.vercel.app/",
      description: [
        "Developed full-stack marketplace with author publishing, Stripe checkouts, and content moderation."
      ]
    },
    {
      name: "Guru Kripa Travels",
      tagline: "Responsive, mobile-first travel website with WhatsApp enquiry integration.",
      period: "2025",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://guru-henna-psi.vercel.app/",
      description: [
        "Designed and shipped a responsive, mobile-first travel website with WhatsApp enquiry integration."
      ]
    }
  ],
  strengths: ["Problem Solving", "Quick Learner", "Adaptability", "Team Collaboration", "Communication", "Continuous Learning"],
  certifications: [
    "Full Stack Development Internship — ZSapiens SoftTech Pvt. Ltd. (January 2026)"
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Shoolini Institute of Life Sciences & Business Management, Himachal Pradesh University",
      period: "2026",
      details: "CGPA: 7.03"
    }
  ]
};
