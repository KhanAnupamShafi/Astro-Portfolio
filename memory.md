# Memory — Project move to `app/` + Phase 1 setup

Last updated: Tuesday Jun 23, 2026

## What was built

- Astro 7 app scaffolded with minimal template, TypeScript strict, Tailwind CSS v4 (`@tailwindcss/vite`).
- **`app/astro.config.mjs`** — Tailwind plugin + `@/` alias → `src/`.
- **`app/tsconfig.json`** — strict config + `@/*` path mapping.
- **`app/src/styles/globals.css`** — full design tokens from context (`@theme`), Inter font imports, dark mode variable overrides.
- **`app/src/env.d.ts`** — `ImportMetaEnv` for Sanity env vars.
- **`app/.env.local`** — placeholder `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN` (gitignored).
- **`app/src/pages/index.astro`** — minimal placeholder page importing globals.css, token-based styling.
- **`app/.gitignore`** — includes `.env.local`.
- Dependencies installed: `@sanity/client`, `@sanity/image-url`, `@portabletext/to-html`, `lucide-astro`, `@fontsource/inter`, dev `sanity`.
- **`app/context/progress-tracker.md`** — 01 Project Setup marked complete.

## Decisions made

- **Project root is now `app/`** — user is consolidating the repo so all code, context (`AGENTS.md`, `context/`, `designs/`), and tooling live under `app/`. Parent folder `portfolio/` is just a wrapper.
- **Sanity Studio will live at `app/studio/`** (per build plan step 02) — not yet created.
- **Dark mode tokens** use `.dark { ... }` on `<html>` instead of `@variant dark` from context files — Tailwind v4 rejected the documented `@variant` syntax at build time.
- **No npm at repo wrapper root** — all install/dev/build commands run from `app/`.

## Problems solved

- Tailwind v4 build failure: `@variant dark (&:where(.dark, .dark *))` → replaced with plain `.dark { ... }` CSS variable overrides.
- Failed background `npm install && npm run build` at `portfolio/` root (no `package.json`) — exit 254, thousands of tar errors. Harmless; no root `node_modules` left behind. Always run npm from `app/`.

## Current state

- **Works:** `npm run build` and `npm run dev` from `app/` — static build succeeds, placeholder homepage renders.
- **Partial:** `.env.local` still has placeholder Sanity project ID.
- **Not started:** Sanity Studio (`02`), base layout/navbar (`03`), schemas, pages, polish.
- **Repo layout:** `portfolio/app/` contains everything (src, context, designs, AGENTS.md, node_modules). `portfolio/` root is nearly empty.

## Next session starts with

1. Run `/remember restore` and confirm state.
2. Read `context/progress-tracker.md` — next feature is **02 Sanity Studio Setup**.
3. From `app/`, initialize Sanity Studio at `studio/` per `context/build-plan.md`.
4. Replace placeholder `SANITY_PROJECT_ID` in `.env.local` with real project ID.

## Open questions

- Confirm Vercel deploy root should be `app/` (not parent `portfolio/`) when deploying.
- `lucide-astro` is deprecated in favour of `@lucide/astro` — switch when building UI components, or stay on current package for now?
- Context files (`architecture.md`, `AGENTS.md`) still reference paths like `src/` at repo root — may need path updates now that project root is `app/`.
