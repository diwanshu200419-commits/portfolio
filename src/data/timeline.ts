export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  iconName: string;
}

export const timelineItems: TimelineItem[] = [
  {
    year: "Present",
    title: "Looking for Software Engineering Opportunities",
    description: "Actively interviewing for software developer roles. Ready to deploy full-stack architectures, API logic, and AI integrations at your scale.",
    iconName: "Briefcase"
  },
  {
    year: "Mid 2026",
    title: "Building Full Stack Applications",
    description: "Orchestrating databases (MongoDB, Supabase), building modular server controllers in Express, and designing client states with Next.js App Router.",
    iconName: "Code"
  },
  {
    year: "Early 2026",
    title: "Graduated BCA",
    description: "Graduated with a Bachelor of Computer Applications degree, cementing foundation rules of databases, networking, OOP, and data structures.",
    iconName: "GraduationCap"
  },
  {
    year: "Late 2025",
    title: "Learned AI Development",
    description: "Integrated generative models (Google Gemini API) to build intelligent workflows, semantic features, and automated finance categorizations.",
    iconName: "Brain"
  },
  {
    year: "Mid 2025",
    title: "Built Real Business Websites",
    description: "Developed and launched production catalog systems for local dealers (Kulja Motors) and service providers, improving lead collection by 40%.",
    iconName: "Globe"
  },
  {
    year: "Early 2025",
    title: "Built My First Website",
    description: "Mastered HTML, CSS, JavaScript basics and launched initial static visual sites focusing on page responsiveness and layout flow.",
    iconName: "Layout"
  },
  {
    year: "2024",
    title: "Started Learning Programming",
    description: "Wrote first lines of code. Dived deep into programming logic, syntax, data structures, and computer science basics.",
    iconName: "BookOpen"
  }
];
