# AGENTS.md

This file is read first at the start of every Cursor session. It tells the AI agent what this project is, where everything lives, and what to do before writing any code.

---

## What This Project Is

A personal developer portfolio built with Astro 5 and Sanity CMS. Content is managed from Sanity Studio and the site is statically generated and deployed to Vercel. See `context/project-overview.md` for full details.

---

## Context Files — Read These Before Writing Code

All context files live in `context/`. Read the relevant ones for each task:

| File                          | Read when...                                             |
| ----------------------------- | -------------------------------------------------------- |
| `context/project-overview.md` | Starting a new session or unsure what the project does   |
| `context/architecture.md`     | Working on file structure, data flow, or Sanity queries  |
| `context/build-plan.md`       | Implementing a feature — exact steps per feature         |
| `context/code-standards.md`   | Writing any code — TypeScript rules, component structure |
| `context/ui-tokens.md`        | Styling anything — all colors, typography, spacing       |
| `context/ui-rules.md`         | Building any component — layout, spacing, patterns       |
| `context/ui-registry.md`      | Before building a component — check if it exists already |
| `context/library-docs.md`     | Using any library — Sanity, GROQ, Portable Text, etc.   |
| `context/progress-tracker.md` | Every session — see what's done and what's next          |
| `context/decisions.md`        | Any time you question a stack or architecture choice     |

**Always read `progress-tracker.md` first.** It tells you exactly where to start.

---

## Workflow for Every Session

1. Read `context/progress-tracker.md` — identify the next unchecked item
2. Read `context/build-plan.md` — read the exact steps for that feature
3. Read relevant context files for that feature
4. **Run the before-coding checklist** (see below)
5. Implement the feature following `context/code-standards.md`
6. Verify it works in the browser
7. Update `context/progress-tracker.md` — check off the completed item
8. Update `context/ui-registry.md` — add any new components built

---

## Before-Coding Checklist

Run this before writing any code for a feature. Do not skip steps.

- [ ] Check `context/ui-registry.md` — does a similar component already exist?
- [ ] Check `context/ui-tokens.md` — do the tokens I need already exist?
- [ ] Check `src/lib/queries.ts` — does the GROQ query I need already exist?
- [ ] Check `src/types/index.ts` — does the TypeScript type I need already exist?
- [ ] Check `context/progress-tracker.md` — is this feature already implemented?

If any item already exists, use it. Do not create duplicates.

---

## Project Structure (Quick Reference)

```
studio/          → Sanity Studio (run separately on localhost:3333)
src/pages/       → Astro pages — all data fetching happens here
src/components/  → UI components — receive props, never fetch data
src/lib/         → sanity.ts (client), queries.ts (GROQ), utils.ts
src/styles/      → globals.css — @theme tokens, @variant dark
src/types/       → TypeScript types for all Sanity content models
context/         → All context files — the source of truth
```

---

## Stack Quick Reference

- **Astro 5** — static site generator, file-based routing, `.astro` components
- **Sanity v3** — headless CMS, content managed in `studio/`, queried via GROQ
- **Tailwind CSS v4** — tokens in `globals.css @theme`, NO tailwind.config.ts colors
- **TypeScript strict** — throughout, no `any`
- **Vercel** — deployment, webhook-triggered rebuilds

---

## Key Rules (Never Violate)

- Components never fetch data — all data passed as props from page frontmatter
- GROQ queries never written inline — always in `src/lib/queries.ts`
- Never use raw Tailwind color classes — use project tokens from `ui-tokens.md`
- Dark mode via `.dark` class on `<html>` only — never `dark:` Tailwind variant
- All dynamic routes use `getStaticPaths()` — no server-side rendering
- Never use `any` TypeScript type
- Always update `progress-tracker.md` and `ui-registry.md` after completing a feature

---

## Dev Commands

```bash
# Astro site
pnpm dev             # localhost:4321

# Sanity Studio (separate terminal)
cd studio && pnpm dev       # localhost:3333

# Build
pnpm build
pnpm preview         # preview production build locally
```

---

## Environment Variables

Create `.env.local` in project root:

```
SANITY_PROJECT_ID=your_project_id_here
SANITY_DATASET=production
SANITY_API_TOKEN=optional_only_needed_for_draft_content
```

Get `SANITY_PROJECT_ID` from: https://sanity.io/manage → your project → Settings → API
