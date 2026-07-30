export type Project = {
  id: string;
  date: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlight: string;
  liveUrl?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "job-portal",
    date: "2026",
    title: "Job Portal",
    tagline: "Job listing and application platform",
    description:
      "A job board where employers post openings and candidates apply directly through the platform - with role-based views for each side.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Next.js"],
    highlight:
      "Focused on clean REST API design - consistent response shapes, proper status codes, and route-level authorization so employers and candidates only see what they should.",
    liveUrl: "",
    links: [
      { label: "Backend", href: "https://github.com/your-username/job-portal-backend" },
      { label: "Frontend", href: "https://github.com/your-username/job-portal-frontend" },
    ],
  },
  {
    id: "finance-system",
    date: "2026",
    title: "Finance Management System",
    tagline: "Personal/business finance tracking",
    description:
      "A system for tracking income, expenses, and transactions with a clean audit trail - built as a deep dive into data integrity and backend architecture decisions.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Next.js", "Redux Toolkit"],
    highlight:
      "Implemented an immutable audit log using JSONB, plus JWT auth with short-lived access tokens and HttpOnly refresh cookies to reduce XSS/CSRF exposure.",
    liveUrl: "",
    links: [
      { label: "Backend", href: "https://github.com/nabin11bh/Finance-Management-System-Backend" },
      { label: "Frontend", href: "https://github.com/nabin11bh/Finance-Management-System-Frontend" },
    ],
  },
  {
    id: "sewasathi",
    date: "2025",
    title: "SewaSathi",
    tagline: "Local services marketplace",
    description:
      "A two-sided marketplace connecting people in Nepal who need a service done with local providers who can do it, think plumbers, tutors, electricians - searchable, bookable, and reviewable.",
    stack: ["React", "Vite", "Node.js", "Express", "TypeScript", "MySQL"],
    highlight:
      "Built the provider/seeker role system from scratch - same auth flow, different permissions and dashboards depending on account type, with image uploads handled through Cloudinary.",
    liveUrl: "",
    links: [
      { label: "Backend", href: "https://github.com/nabin11bh/SewaSathi-backend" },
      { label: "Frontend", href: "https://github.com/nabin11bh/SewaSathi-frontend" },
    ],
  },
];