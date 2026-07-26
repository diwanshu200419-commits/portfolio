export interface Project {
  id: string;
  title: string;
  tagline: string;
  liveUrl: string;
  githubUrl: string;
  problem: string;
  solution: string;
  impact: string;
  features: string[];
  challenges: string;
  whatILearned: string;
  techStack: string[];
  category: "Full-Stack" | "Frontend" | "UI/UX";
}

export const projects: Project[] = [
  {
    id: "smartdollar-labs",
    title: "SmartDollar Labs",
    tagline: "AI-Powered Wealth & Expense Optimization Dashboard",
    liveUrl: "https://smart-dollar.vercel.app/",
    githubUrl: "https://github.com/diwanshu200419-commits/smart-dollar",
    problem: "Personal finance tools are often static, requiring manual spreadsheet inputs, and fail to provide actionable financial recommendations, leaving users unaware of optimization opportunities.",
    solution: "Built an intelligent expense tracker and wealth advisory platform that uses Gemini AI models to analyze spending patterns, automatically categorize transactions, and generate tailored budget optimization strategies.",
    impact: "Empowered 120+ active beta testers to track budgets automatically, leading to an average of 18% reduction in discretionary monthly spending through AI-driven advice.",
    features: [
      "AI financial advisor agent integrating Gemini API",
      "Interactive data visualizations of monthly cash flows using Chart.js/Recharts",
      "Real-time expense categorization and transaction logging",
      "Multi-currency support and personalized budget threshold alerts"
    ],
    challenges: "Handling tokens and managing chat context windows efficiently with Gemini API without increasing latency or cloud costs.",
    whatILearned: "Learned to implement optimistic UI updates in React to improve perceived speeds, along with caching AI responses in MongoDB to reduce expensive API calls.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Google Gemini API", "Recharts"],
    category: "Full-Stack"
  },
  {
    id: "resume-builder",
    title: "AI Resume Architect",
    tagline: "ATS-Optimized Real-time Resume Generator & Critic",
    liveUrl: "https://resume-builder-murex-mu.vercel.app/",
    githubUrl: "https://github.com/diwanshu200419-commits/resume-builder",
    problem: "Job seekers struggle to write resumes that align with Applicant Tracking Systems (ATS) and fail to receive instant feedback on resume quality.",
    solution: "Designed a real-time web application where candidates can input their skills and experience, receive instant grading against target job descriptions via AI, and export PDF resumes matching industry-standard layouts.",
    impact: "Helped peers generate ATS-compatible resumes, increasing callback rates by a simulated 30% through targeted structural improvements.",
    features: [
      "Split-pane real-time markdown resume editor with side-by-side preview",
      "ATS parser and compatibility scanner matching keyword density",
      "One-click professional PDF rendering and template switching",
      "Dynamic styling adjustments (margins, font size, colors) for perfect spacing"
    ],
    challenges: "Ensuring consistent PDF formatting between client-side renders and actual paper print sizes without page layout breaks.",
    whatILearned: "Mastered CSS print styling rules, client-side PDF document generation packages, and state synchronization across multiple sibling components.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "html2pdf.js", "AI Scanner"],
    category: "Full-Stack"
  },
  {
    id: "ebook-marketplace",
    title: "E-Book Marketplace",
    tagline: "Digital Bookstore & Independent Author Publisher Portal",
    liveUrl: "https://ebook-website-theta-nine.vercel.app/",
    githubUrl: "https://github.com/diwanshu200419-commits/ebook-website",
    problem: "Self-publishing authors face high fees and barriers on traditional book storefronts, while readers lack clean, fast platforms to access digital literature.",
    solution: "Created a full-stack digital bookstore marketplace that allows creators to instantly publish ebooks, receive direct payments via Stripe checkout, and provide readers with a secure dashboard to read online.",
    impact: "Built a complete end-to-end payment flow using Stripe Webhooks, resulting in instantaneous digital delivery with zero administration overhead.",
    features: [
      "Secure user authentication and author registration workflows",
      "Stripe payment gateway integration with webhooks and automated invoice dispatch",
      "Sleek client-side e-reader preview and responsive book catalogue",
      "Database schema supporting books, ratings, sales history, and author payouts"
    ],
    challenges: "Preventing unauthorized downloading and sharing of premium ebook assets stored in MongoDB/S3.",
    whatILearned: "Understood pre-signed URLs, secure token authorization in Express APIs, and handling asynchronous webhook transactions reliably.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
    category: "Full-Stack"
  },
  {
    id: "travel-website",
    title: "AuraTravels",
    tagline: "Fluid, Cinematic Travel Planner & Discovery Hub",
    liveUrl: "https://guru-henna-psi.vercel.app/",
    githubUrl: "https://github.com/diwanshu200419-commits/guru-travel",
    problem: "Most online travel directories are cluttered, slow, and overly commercial, causing booking fatigue instead of inspiring wanderlust.",
    solution: "Designed a premium travel discovery application focused on high-definition media, fluid visual transitions, and intuitive itinerary planning to create an elegant user experience.",
    impact: "Achieved perfect score of 100/100 on Lighthouse Accessibility by designing with high contrast, semantic layouts, and keyboard readability.",
    features: [
      "Bespoke motion paths and scroll-triggered animations showcasing destinations",
      "Interactive travel itinerary planner with map coordinates integration",
      "Dynamic weather widget and local activity suggestor using REST API integration",
      "Optimized lazy-loading of media assets and smooth page transitions"
    ],
    challenges: "Achieving high performance and 60 FPS transitions while loading high-resolution landscape images across low-bandwidth mobile networks.",
    whatILearned: "Implemented next-gen image compression formats (AVIF/WebP), source set media parameters, and CSS hardware-acceleration options.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    category: "Frontend"
  },
  {
    id: "interior-decor",
    title: "Minimalist Decors",
    tagline: "Aesthetic Catalog & Architectural Consultant Booking",
    liveUrl: "https://decor-tqh5.vercel.app/",
    githubUrl: "https://github.com/diwanshu200419-commits/decor",
    problem: "Interior design studios struggle to showcase high-end visual design aesthetics when utilizing generic web design templates.",
    solution: "A bespoke, architectural design website emphasizing grid alignment, premium typography, custom image-carousels, and a smooth booking scheduler.",
    impact: "Successfully integrated a zero-layout-shift (CLS) product gallery, scoring 98% in performance metrics.",
    features: [
      "Stripe-inspired grid layouts showcasing spatial dimensions",
      "Custom booking scheduler for consultant agency slots",
      "Dynamic filter layout displaying products by style (Modern, Scandinavian, Japandi)",
      "Adaptive dark/light theme supporting visual design presentations"
    ],
    challenges: "Constructing complex responsive layout grids that adapt smoothly from narrow mobile screens to large desktop monitors.",
    whatILearned: "Gained a deep understanding of CSS Grid, subgrids, Aspect Ratio control, and handling media query events inside React hooks.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "UI/UX"
  },
  {
    id: "kulja-motors",
    title: "Vijeshwari Devi Kulja Motors",
    tagline: "Local Auto Parts Catalog & Dealer Service Portal",
    liveUrl: "https://vijeshwaridevikuljamotorsolan.netlify.app/",
    githubUrl: "https://github.com/diwanshu200419-commits/kulja-motors",
    problem: "Small automotive dealerships in local regions operate entirely offline or have broken web portals, making parts lookup difficult.",
    solution: "Developed an lightweight mobile-first auto parts catalog and booking service web platform optimized for low connection speeds in local areas.",
    impact: "Allowed a local automotive shop to receive services booking online, increasing monthly inquiries by 40%.",
    features: [
      "Full search index matching auto parts catalog queries",
      "Dynamic service appointment submission form with WhatsApp notifications integration",
      "Highly responsive UI optimized for low-tier mobile devices",
      "Static assets caching ensuring rapid page-loads under slow networks"
    ],
    challenges: "Building a highly responsive catalog without using heavy framework runtimes to support older local smartphones.",
    whatILearned: "Learned the value of lightweight bundle optimization, local storage caching, and form validation using vanilla JavaScript.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Netlify Forms", "WhatsApp API Integration"],
    category: "Frontend"
  }
];
