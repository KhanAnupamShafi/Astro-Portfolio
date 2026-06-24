import type { AboutPageData } from "@/types";

export const aboutPageMock: AboutPageData = {
  name: "Khan Anupam Shafi",
  title: "Senior Software Engineer",
  bio: "Full-stack engineer with 6+ years building web applications end to end. I work primarily in TypeScript, Node.js, and React — shipping APIs, admin tools, and customer-facing products with an emphasis on testability and clear system boundaries.",
  initials: "KAS",
  location: "Dhaka, Bangladesh",
  availability: "Open to remote roles",
  socialLinks: [
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
  ],
  skillCategories: [
    {
      title: "Backend",
      skills:
        "Node.js, Express, NestJS, REST & GraphQL APIs, PostgreSQL, MongoDB, Redis, message queues, auth (JWT, OAuth).",
    },
    {
      title: "Frontend",
      skills:
        "React, Next.js, Astro, Tailwind CSS, state management, accessibility, responsive layouts, performance tuning.",
    },
    {
      title: "DevOps & tooling",
      skills:
        "Docker, CI/CD (GitHub Actions), AWS (EC2, S3, RDS), monitoring, logging, infrastructure-as-code basics.",
    },
    {
      title: "Practices",
      skills:
        "System design, code review, technical writing, agile delivery, mentoring junior engineers.",
    },
  ],
  experience: [
    {
      dateRange: "2022 — present",
      role: "Senior Software Engineer",
      company: "TechScale Solutions",
      summary: "Lead backend and full-stack delivery for B2B SaaS products.",
      highlights: [
        "Architected pipeline analytics platform serving 40k+ MAU",
        "Reduced API p95 latency by refactoring hot paths and adding Redis caching",
        "Mentored two mid-level engineers on TypeScript patterns and testing",
      ],
    },
    {
      dateRange: "2019 — 2022",
      role: "Software Engineer",
      company: "DigitalCraft Ltd.",
      summary: "Built client-facing web apps and internal admin dashboards.",
      highlights: [
        "Delivered form builder and moderation tools used by operations teams daily",
        "Introduced automated testing and CI pipelines across three codebases",
      ],
    },
    {
      dateRange: "2017 — 2019",
      role: "Junior Developer",
      company: "StartupHub",
      summary: "Full-stack development on MERN stack projects for early-stage startups.",
    },
  ],
};
