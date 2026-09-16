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
    id: "dpsms",
    date: "2026",
    title: "School Management System (DPSMS)",
    tagline: "Multi-tenant SaaS for school administration",
    description:
      "Attendance, fee management, and role-based access across multiple schools from one codebase - built as a deep dive into multi-tenancy and data-integrity bugs that only surface at real scale.",
    stack: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS", "BullMQ/Redis"],
    highlight:
       "Built the fee module with recurring invoice generation, partial payment tracking, and overdue reminders via BullMQ/Redis queues, and designed the attendance system with real-time roll calls, bulk-marking for class teachers, and dashboards that surface class-level and student-level trends - all scoped per tenant.",
    liveUrl: "https://digitalpathshalasms.vercel.app",
    links: [
      { label: "Backend", href: "https://github.com/nabin11bh/dpsms-backend" },
      { label: "Frontend", href: "https://github.com/nabin11bh/dpsms-frontend" },
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