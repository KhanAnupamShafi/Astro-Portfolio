# Memory — Sanity Studio Setup (Phase 1, Step 02)

Last updated: 2026-06-24

## What was built

- Initialized Sanity Studio in `studio/` via `npm create sanity@latest` — project `dper7lh5`, dataset `production`, clean template.
- Created `studio/schemas/index.ts` — exports empty `schemaTypes` array (schemas come in step 04).
- Updated `studio/sanity.config.ts` — imports from `./schemas`, name `portfolio`, title `Portfolio Studio`, `structureTool()` only (Vision removed).
- Removed template `studio/schemaTypes/` folder (project uses `schemas/` per architecture).
- Uninstalled `@sanity/vision` from `studio/package.json` (removed refractor dependency chain).
- Updated `context/progress-tracker.md` — 02 checked off; next is 03 Base Layout + Navbar.

## Decisions made

- Studio lives at `app/studio/` as a separate app from the Astro site — run with `cd app/studio && npm run dev` on port 3333.
- Sanity project ID is `dper7lh5` (matches `app/.env.local` `SANITY_PROJECT_ID`) — not `9mbswxzp` (that ID failed CLI auth).
- Vision plugin removed intentionally — `@sanity/vision` pulled in `refractor` via Vite pre-bundling and caused `Failed to fetch dynamically imported module` errors in dev. Studio works without the GROQ Vision tab; can be re-added later if needed.
- Schemas folder is `studio/schemas/` not `studio/schemaTypes/` — matches `context/architecture.md`.

## Problems solved

- Early `npm create sanity` attempts failed with "No projects found for current user" when using wrong project ID `9mbswxzp`.
- Studio `refractor` / dynamic import errors caused by stale Vite cache (`studio/node_modules/.sanity`) plus multiple dev servers competing on port 3333. Fix: clear `.sanity` cache, run only one `npm run dev`, hard refresh browser (`Cmd+Shift+R`). Permanent fix applied: removed Vision plugin.
- Port 3333 conflicts when a background Studio dev server was still running while user tried to start another.

## Current state

- **Astro site (01):** Scaffolded — `npm run dev` from `app/` on localhost:4321. Blank index page, globals.css with tokens, `.env.local` configured.
- **Sanity Studio (02):** Scaffolded and configured — no content schemas yet. Studio should load at localhost:3333 after `cd app/studio && npm run dev`. No dev server running at end of session.
- **Not started:** 03 Base Layout + Navbar, all Phase 2–4 features.
- **ui-registry.md:** Empty — no components built yet.

## Next session starts with

1. Run `/remember restore` (or read `memory.md` + `context/progress-tracker.md`).
2. Implement **03 Base Layout + Navbar** per `context/build-plan.md`:
   - `BaseLayout.astro`, `BaseHead.astro`, `Navbar.astro`, `Footer.astro`, `ThemeToggle.astro`, `SocialLinks.astro`
   - Mock data only — no Sanity wiring yet.
   - Verify dark mode toggle, active nav links, mobile (375px) and desktop layout.

## Open questions

- None blocking. Vision plugin can be re-added later if GROQ explorer is wanted — would need clean Vite cache and single dev server instance to avoid refractor errors.
