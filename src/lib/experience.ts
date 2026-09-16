export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    id: "digital-pathshala",
    role: "Fullstack Developer Intern",
    company: "Digital Pathshala",
    duration: "3 months",
      
    description:
      "Built and maintained core features for a multi-tenant school management SaaS platform serving multiple schools from a single codebase. Developed a role-based attendance system with section-level access control for teachers, students, and admins, and a fee management module handling fee structures, invoices, payments, and automated receipt generation. Worked across the full stack - Prisma schema design, REST API development with permission-based authorization, and React/Next.js interfaces - following a layered backend architecture (controller/service/repository) and code review practices.",
    stack: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "TypeScript"],
  },
];