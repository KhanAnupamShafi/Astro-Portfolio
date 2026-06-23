# Project Overview

## About the Project

A personal developer portfolio built with Astro and Sanity CMS. Content is managed entirely through Sanity Studio — no rebuilds needed for content updates. The site is statically generated at build time, with a Sanity webhook triggering automatic redeployment on Vercel whenever content is published.

The portfolio showcases professional work across five content areas: experience, projects, blog posts, certificates, and a personal about page. Design is clean and minimal — dark/light mode supported, Inter font, no unnecessary animation.

---

## Pages

```
/                    → Homepage — hero, featured projects, brief intro
/about               → Full bio, photo, skills, values
/projects            → Grid of all projects
/projects/[slug]     → Individual project detail page
/blog                → List of all blog posts
/blog/[slug]         → Individual blog post (Portable Text rendered)
/certificates        → Grid of all certificates
```

---

## Navigation

Top navbar only. Four items:

```
About    Projects    Blog    Certificates
```

No sidebar. Clean and minimal. Logo/name on the left, nav links on the right.

---

## Content Types (Sanity Schemas)

Five document types managed in Sanity Studio:

| Schema        | Purpose                                              |
| ------------- | ---------------------------------------------------- |
| `about`       | Bio, photo, social links, skills list, values        |
| `experience`  | Job roles — title, company, dates, description       |
| `project`     | Projects — title, description, stack, links, image   |
| `post`        | Blog posts — title, slug, body (Portable Text), date |
| `certificate` | Certificates — title, issuer, date, image, URL       |

---

## Tech Stack

| Layer      | Tool                 | Purpose                      |
| ---------- | -------------------- | ---------------------------- |
| Framework  | Astro 5              | Static site generation       |
| CMS        | Sanity v3            | Content management           |
| Styling    | Tailwind CSS v4      | Utility-first CSS            |
| Language   | TypeScript strict    | Throughout                   |
| Deployment | Vercel               | Hosting + auto-deploy        |
| Fonts      | Inter via Fontsource | Self-hosted, no Google Fonts |
| Icons      | lucide-astro         | Consistent icon set          |

---

## Core User Flow

### Visitor lands on homepage

- Sees hero section with name, title, brief intro
- Sees featured projects (3 max — flagged in Sanity)
- Links to full Projects, Blog, About pages

### Visitor browses projects

- `/projects` — grid of all projects with cover image, title, tech stack tags, short description
- Click → `/projects/[slug]` — full project detail with description, tech stack, links

### Visitor reads blog

- `/blog` — list of posts with title, date, excerpt
- Click → `/blog/[slug]` — full post rendered from Portable Text

### Visitor views about

- Bio, photo, experience timeline, skills, social links

### Visitor views certificates

- Grid of all certificates with title, issuer, date, credential link

---

## Data Flow

All pages are Server Components rendered at build time using Astro's static generation. Data fetched with GROQ queries from Sanity CDN. No client-side data fetching.

```
Sanity Studio (content author publishes)
        ↓
Sanity CDN (content stored, GROQ queryable)
        ↓
Astro build (GROQ queries fetch data at build time)
        ↓
Static HTML generated per page
        ↓
Deployed to Vercel
        ↓
Sanity webhook → triggers new Vercel deployment on publish
```

---

## Features In Scope

- Homepage with hero, featured projects, brief about section
- Top navbar — About, Projects, Blog, Certificates
- About page — bio, photo, experience timeline, skills, social links
- Projects page — grid of all projects
- Project detail page — full description, tech stack, links
- Blog list page — all posts with date and excerpt
- Blog post page — full Portable Text rendering
- Certificates page — grid of all certificates
- Dark/light mode toggle
- SEO meta tags on every page (title, description, og:image)
- Sanity webhook → Vercel redeploy on content publish
- Responsive layout — mobile first

---
