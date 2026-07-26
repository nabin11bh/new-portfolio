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
      "Worked as a fullstack intern building and maintaining web applications, gaining hands-on experience with real-world development workflows, code reviews, and team collaboration.",
    stack: ["React", "Node.js", "Express", "PostgreSQL","Next.js"],
  },
];