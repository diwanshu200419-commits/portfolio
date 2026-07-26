export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  iconName: string;
}

export const timelineItems: TimelineItem[] = [
  {
    year: "Present",
    title: "Full-Stack Engineer & AI Dev",
    description: "Actively building AI-integrated products (SmartDollar Labs, AI Resume Critic) utilizing Next.js, Gemini API, and MongoDB. Open to full-time Software Engineering roles.",
    iconName: "Briefcase"
  },
  {
    year: "Late 2025",
    title: "Advanced Full-Stack Engineering",
    description: "Mastered Node.js, Express, databases, and third-party API integrations. Developed e-commerce models and full-stack marketplaces with Stripe payment flow.",
    iconName: "Code"
  },
  {
    year: "Mid 2025",
    title: "First Complex Frontend Builds",
    description: "Built advanced React websites with fluid animations and responsive grids. Shifted focus to performance scoring (Lighthouse) and pixel-perfect design.",
    iconName: "Layout"
  },
  {
    year: "Early 2025",
    title: "First Website Launched",
    description: "Learned the foundational pillars (HTML, CSS, JavaScript) and launched local client projects like Kulja Motors, helping local businesses establish online visibility.",
    iconName: "Globe"
  },
  {
    year: "2024",
    title: "Started Programming Journey",
    description: "Wrote first lines of code. Dived deep into data structures, algorithms, and logical problem solving, discovering a passion for building interactive products.",
    iconName: "BookOpen"
  }
];
