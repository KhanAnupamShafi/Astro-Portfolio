import type { HomePageData } from "@/types";

export const homePageMock: HomePageData = {
  name: "Khan Anupam Shafi",
  title: "Senior Software Engineer",
  bio: "I design and ship production web systems — APIs, dashboards, and full-stack products with a focus on reliability, clean architecture, and maintainable TypeScript.",
  availability: "Available for new opportunities",
  timezone: "Asia/Dhaka",
  socialLinks: [
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
  ],
  featuredProjects: [
    {
      title: "Pipeline Analytics Platform",
      description:
        "Real-time funnel analytics for B2B SaaS teams. Built event ingestion, cohort views, and export APIs that cut reporting time from hours to minutes.",
      techStack: ["TypeScript", "Node.js", "React", "PostgreSQL"],
      links: [
        { label: "Case study", href: "/projects/pipeline-analytics" },
        { label: "GitHub", href: "https://github.com", icon: "external" },
        { label: "Live demo", href: "https://example.com", icon: "external" },
      ],
      mockupUrl: "app.pipeline.io/dashboard",
      browserUrl: "app.pipeline.io/dashboard",
      imageSeed: "pipeline",
    },
    {
      title: "Form Builder Platform",
      description:
        "Drag-and-drop form builder with conditional logic, webhooks, and embeddable widgets. Used by internal teams to ship lead-capture flows without engineering.",
      techStack: ["Astro", "Tailwind", "MongoDB", "Express"],
      links: [
        { label: "Case study", href: "/projects/form-builder" },
        { label: "GitHub", href: "https://github.com", icon: "external" },
      ],
      mockupUrl: "form.build/editor",
      browserUrl: "form.build/editor",
      imageSeed: "formbuilder",
    },
    {
      title: "Admin Dashboard & Moderation",
      description:
        "Internal tooling for content moderation and role-based access. Real-time queues, audit logs, and bulk actions for ops teams.",
      techStack: ["Next.js", "Prisma", "WebSockets", "Redis"],
      links: [
        { label: "Case study", href: "/projects/admin-dashboard" },
        { label: "Live demo", href: "https://example.com", icon: "external" },
      ],
      mockupUrl: "admin.moderate.app",
      browserUrl: "admin.moderate.app",
      imageSeed: "admindash",
    },
  ],
};
