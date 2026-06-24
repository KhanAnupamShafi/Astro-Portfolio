import type { Project } from "@/types";

const pipelineCaseStudy: Project["sections"] = [
  {
    title: "Problem",
    content:
      "The existing analytics stack couldn't handle growing event volume. Dashboard load times exceeded 8 seconds, and the monolithic API made it risky to ship changes. Operations teams needed reliable funnel views without waiting on engineering for every report tweak.",
  },
  {
    title: "Approach",
    content:
      "I led a phased rewrite: extract event ingestion into a dedicated service, introduce materialized views for common aggregations, and rebuild the dashboard with React Query for incremental loading. We added Redis caching on hot endpoints and structured logging for observability.",
  },
  {
    title: "Outcome",
    content:
      "Dashboard p95 load time dropped from 8s to under 1.2s. The team ships analytics features independently, and the platform now processes 2M+ events daily with room to scale horizontally.",
  },
  {
    title: "Key technical decisions",
    content:
      "Partitioned PostgreSQL tables by month for event storage. Used Bull queues for async aggregation jobs. Implemented role-based dashboard views so customer success could self-serve without engineering tickets.",
  },
];

export const projectsMock: Project[] = [
  {
    slug: "pipeline-analytics",
    title: "Pipeline Analytics Platform",
    shortDescription: "Real-time funnel analytics and reporting for B2B SaaS.",
    description:
      "Real-time funnel analytics and reporting for a B2B SaaS product — rebuilt API layer and optimized React dashboards.",
    techStack: ["TypeScript", "React", "PostgreSQL"],
    browserUrl: "app.pipeline.io",
    mockupVariant: "grid-short",
    role: "Lead Engineer",
    timeline: "8 months",
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
    heroBrowserUrl: "app.pipeline.io/dashboard/funnels",
    sections: pipelineCaseStudy,
  },
  {
    slug: "form-builder",
    title: "Form Builder Platform",
    shortDescription: "Drag-and-drop forms with share links and response export.",
    description:
      "Drag-and-drop form builder with conditional logic, webhooks, and embeddable widgets for internal teams.",
    techStack: ["Astro", "MongoDB", "Tailwind"],
    browserUrl: "forms.build",
    mockupVariant: "grid-full",
    role: "Full-stack Engineer",
    timeline: "5 months",
    links: {
      github: "https://github.com",
    },
    heroBrowserUrl: "forms.build/editor",
    sections: [
      {
        title: "Problem",
        content:
          "Marketing and ops teams relied on engineering to ship every lead-capture form. Changes took days, and there was no consistent way to export responses or embed forms on external sites.",
      },
      {
        title: "Approach",
        content:
          "Built a visual form editor with drag-and-drop fields, conditional visibility rules, and shareable links. Responses land in MongoDB with CSV export and webhook delivery to downstream tools.",
      },
      {
        title: "Outcome",
        content:
          "Non-engineering teams now publish forms in minutes. The platform handles thousands of submissions weekly with zero engineering involvement for routine updates.",
      },
    ],
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    shortDescription: "User management, moderation, and real-time chat oversight.",
    description:
      "Internal tooling for user management, content moderation, and real-time chat oversight with role-based access.",
    techStack: ["Next.js", "Prisma", "Redis"],
    browserUrl: "admin.moderate.app",
    mockupVariant: "grid-medium",
    role: "Senior Engineer",
    timeline: "6 months",
    links: {
      live: "https://example.com",
    },
    heroBrowserUrl: "admin.moderate.app/queue",
    sections: [
      {
        title: "Problem",
        content:
          "Moderation workflows were spread across spreadsheets and ad-hoc scripts. Ops teams lacked a single view of flagged content, user actions, and audit history.",
      },
      {
        title: "Approach",
        content:
          "Delivered a Next.js admin app with real-time moderation queues via WebSockets, Prisma-backed audit logs, and bulk actions guarded by role-based permissions.",
      },
      {
        title: "Outcome",
        content:
          "Average moderation response time dropped by 40%. Audit trails are complete and searchable, satisfying compliance requirements without manual exports.",
      },
    ],
  },
  {
    slug: "api-gateway",
    title: "API Gateway Service",
    shortDescription: "Rate limiting, auth proxy, and request routing for microservices.",
    description:
      "Centralized API gateway providing rate limiting, authentication proxy, and request routing across internal microservices.",
    techStack: ["Go", "Docker", "K8s"],
    browserUrl: "api.gateway.dev",
    mockupVariant: "bars-short-full",
    role: "Platform Engineer",
    timeline: "4 months",
    links: {
      github: "https://github.com",
    },
    heroBrowserUrl: "api.gateway.dev/routes",
    sections: [
      {
        title: "Problem",
        content:
          "Each microservice implemented its own auth checks and rate limits inconsistently. On-call incidents frequently traced back to missing or duplicated gateway logic.",
      },
      {
        title: "Approach",
        content:
          "Implemented a Go-based gateway with JWT validation, per-tenant rate limits, and path-based routing to upstream services. Deployed via Docker and Kubernetes with health checks and structured metrics.",
      },
      {
        title: "Outcome",
        content:
          "Auth and rate-limiting logic is centralized and testable. New services onboard in hours instead of days, with consistent observability across all traffic.",
      },
    ],
  },
  {
    slug: "developer-docs",
    title: "Developer Docs Site",
    shortDescription: "MDX-powered API reference with search and versioned guides.",
    description:
      "MDX-powered developer documentation with full-text search, versioned API reference, and interactive code samples.",
    techStack: ["Astro", "MDX", "Algolia"],
    browserUrl: "docs.internal",
    mockupVariant: "bars-medium-short",
    role: "Technical Writer & Engineer",
    timeline: "3 months",
    links: {
      live: "https://example.com",
    },
    heroBrowserUrl: "docs.internal/api/v2",
    sections: [
      {
        title: "Problem",
        content:
          "API documentation lived in a wiki that drifted from production. Developers couldn't find endpoints quickly, and version changes weren't reflected in guides.",
      },
      {
        title: "Approach",
        content:
          "Migrated content to Astro with MDX, added Algolia search, and wired version tabs to OpenAPI specs. CI validates code samples against staging on every merge.",
      },
      {
        title: "Outcome",
        content:
          "Support tickets about API usage dropped 30%. Docs stay in sync with releases because broken examples fail the build.",
      },
    ],
  },
  {
    slug: "deploy-cli",
    title: "Deploy CLI Tool",
    shortDescription: "Command-line interface for staging and production deployments.",
    description:
      "CLI for staging and production deployments with environment validation, rollback support, and CI integration.",
    techStack: ["Node.js", "TypeScript", "AWS"],
    browserUrl: "cli.deploy",
    mockupVariant: "bars-full-short",
    role: "DevOps Engineer",
    timeline: "2 months",
    links: {
      github: "https://github.com",
    },
    heroBrowserUrl: "cli.deploy/release",
    sections: [
      {
        title: "Problem",
        content:
          "Deployments required running a fragile shell script with manual environment checks. Rollbacks were slow and error-prone during incidents.",
      },
      {
        title: "Approach",
        content:
          "Built a TypeScript CLI that wraps AWS deployment APIs, validates config before release, and supports one-command rollbacks with deployment history.",
      },
      {
        title: "Outcome",
        content:
          "Deploy time dropped from 15 minutes to under 3. Engineers trust rollback enough to ship more frequently without fear of lengthy recovery.",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projectsMock.find((project) => project.slug === slug);

export const getAllProjectSlugs = (): string[] =>
  projectsMock.map((project) => project.slug);
