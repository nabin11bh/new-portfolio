export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "C++", "C"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "JWT Auth", "Prisma"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Cloudinary", "Postman"],
  },
];