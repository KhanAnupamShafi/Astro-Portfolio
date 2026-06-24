import type { BlogPost } from "@/types";

const restApiBodyHtml = `
<p>After shipping several production APIs, I've settled on a small set of conventions that keep endpoints predictable for clients and maintainable for the team.</p>
<h2>Consistent error shapes</h2>
<p>Every error response uses the same envelope: a machine-readable <code>code</code>, a human-readable <code>message</code>, and optional <code>details</code> for validation failures. Clients never have to guess whether they're parsing a string or an object.</p>
<h2>Versioning in the URL</h2>
<p>I prefix routes with <code>/v1/</code> and treat breaking changes as a new version rather than silent mutations. Deprecation headers give consumers a migration window.</p>
<h2>Cursor-based pagination</h2>
<p>Offset pagination breaks under concurrent writes. Cursor pagination with stable sort keys scales better and avoids duplicate or skipped rows in feeds.</p>
<h2>Idempotency keys for writes</h2>
<p>POST endpoints that create billable or side-effectful resources accept an <code>Idempotency-Key</code> header. Retries stay safe without duplicate charges or records.</p>
`.trim();

const astroPortfolioBodyHtml = `
<p>This portfolio is statically generated with Astro 5 and styled with Tailwind v4. The goal was a fast, content-focused site without shipping a client framework for pages that do not need one.</p>
<h2>Component boundaries</h2>
<p>Pages fetch data in frontmatter; components receive props only. That keeps rendering predictable and makes it obvious where Sanity queries will land later without refactoring the UI.</p>
<h2>Theme without hydration</h2>
<p>Dark mode toggles a <code>.dark</code> class on <code>&lt;html&gt;</code> and reads the preference from <code>localStorage</code> in a tiny client script. CSS variables handle the rest — no flash of wrong theme, no React tree for a color swap.</p>
<h2>Tailwind v4 tokens</h2>
<p>Colors and spacing live in <code>@theme</code> inside <code>globals.css</code>, sourced from the Figma handoff. Components reference tokens, not one-off hex values, so light and dark stay in sync.</p>
`.trim();

const redisBodyHtml = `
<p>Redis is not a default dependency. I add it when latency or throughput requirements clearly exceed what PostgreSQL or the application cache can provide without heroic tuning.</p>
<h2>When a cache earns its place</h2>
<p>Read-heavy endpoints with expensive joins, rate limiting, session storage, and short-lived job queues are good fits. If the data must survive restarts or participate in transactions, keep it in the database.</p>
<h2>Invalidation strategy</h2>
<p>Prefer explicit invalidation on writes over long TTLs that serve stale data. Tag keys by entity type so a single product update clears related list and detail caches without flushing the whole namespace.</p>
<h2>Mistakes to avoid</h2>
<p>Using Redis as a primary store, caching without metrics, and sharing one instance across unrelated services all create outages that are painful to debug. Start with clear ownership and observability from day one.</p>
`.trim();

const nodeTestingBodyHtml = `
<p>Flaky integration tests erode trust faster than missing coverage. The suites I maintain today focus on deterministic setup, isolated data, and fast feedback in CI.</p>
<h2>Database per test worker</h2>
<p>Each Jest worker gets a migrated schema and truncates tables between tests. Factories create records with sensible defaults so tests read like scenarios, not SQL dumps.</p>
<h2>HTTP testing without brittleness</h2>
<p>Supertest against the real Express app catches routing and middleware issues unit tests miss. Assertions target status codes and response shapes — not full JSON snapshots that break on unrelated field additions.</p>
<h2>Keeping CI fast</h2>
<p>Parallelize by file, reuse a warm database container, and skip network calls to third parties with contract tests at the boundary. Slow suites stop running on every push, and that is when bugs slip through.</p>
`.trim();

export const postsMock: BlogPost[] = [
  {
    slug: "rest-api-design-patterns-i-use-in-production",
    thumbLabel: "API Design Patterns",
    publishedAt: "2025-03-12",
    title: "REST API Design Patterns I Use in Production",
    excerpt:
      "Versioning strategies, error shapes, pagination conventions, and how to keep APIs predictable as they grow.",
    tags: ["Backend", "API", "TypeScript"],
    bodyHtml: restApiBodyHtml,
  },
  {
    slug: "building-a-portfolio-with-astro-5-and-tailwind-v4",
    thumbLabel: "Astro + Tailwind",
    publishedAt: "2025-01-28",
    title: "Building a Portfolio with Astro 5 and Tailwind v4",
    excerpt:
      "Component structure, content collections, and theme switching without shipping unnecessary JavaScript.",
    tags: ["Astro", "Tailwind", "Frontend"],
    bodyHtml: astroPortfolioBodyHtml,
  },
  {
    slug: "when-to-add-redis-and-when-not-to",
    thumbLabel: "Caching Layers",
    publishedAt: "2024-11-05",
    title: "When to Add Redis — and When Not To",
    excerpt:
      "Practical criteria for introducing a cache layer, invalidation strategies, and mistakes I've made along the way.",
    tags: ["Redis", "Performance", "Architecture"],
    bodyHtml: redisBodyHtml,
  },
  {
    slug: "integration-testing-node-js-apis-without-flaky-suites",
    thumbLabel: "Testing Node APIs",
    publishedAt: "2024-08-19",
    title: "Integration Testing Node.js APIs Without Flaky Suites",
    excerpt:
      "Test database setup, factory patterns, and keeping CI fast while maintaining confidence in deployments.",
    tags: ["Testing", "Node.js"],
    bodyHtml: nodeTestingBodyHtml,
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  postsMock.find((post) => post.slug === slug);

export const getAllPostSlugs = (): string[] => postsMock.map((post) => post.slug);
