# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page-plus portfolio site for IkeOluwa Adetona, a legal practitioner and real-estate consultant. Static content only — no database, CMS, or backend; all data (projects, properties, experience) is hardcoded inside components.

## Commands

```bash
npm run dev      # start dev server (next dev --turbopack) at http://localhost:3000
npm run build    # production build (next build)
npm run start    # serve the production build (next start)
npm run lint     # next lint — NOT set up: no ESLint config or eslint installed
```

There is no test framework and no type-check script. `npm run build` performs the type-check.

## Stack

- **Next.js 15** (App Router) with **React 19 RC**, dev server uses Turbopack.
- **Tailwind CSS 3** with `tailwindcss-animate`; dark mode via `class` strategy.
- **shadcn/ui** primitives (button, card, badge, input, textarea, separator) in `components/ui/`, configured by `components.json` (base color `stone`, CSS variables).
- **framer-motion** + **react-intersection-observer** for scroll-triggered animations; **react-icons** and **lucide-react** for icons; **zod** for form validation.
- `@/*` path alias maps to the repository root (`tsconfig.json`).

## Architecture

**Routing (App Router).** `app/layout.tsx` is the root layout: it renders `Navbar`, `MobileNav`, and `Footer` around every page, loads local fonts (Geist + Neue) via `next/font/local`, and sets the site-wide gradient background. `app/template.tsx` is a trivial pass-through. Pages live directly under `app/`:
- `page.tsx` — home; composes section components in order (`Hero`, `Services`, `Stats`, `Experience`, `Certificate`, `EventsAttended`; `VolunteerWork` and `Workstation` are currently commented out).
- `about/page.tsx`, `contact/page.tsx`, `properties/page.tsx`, `testimonial/page.tsx`, `works/page.tsx` — standalone sub-pages.

**Components.** `components/` holds page-section components (one per home-page section). `components/ui/` holds the shadcn/ui primitives. `lib/utils.ts` exposes the standard `cn()` class-merge helper.

**Client vs Server.** Most components are `"use client"` because they use framer-motion, hooks (`useInView`, `usePathname`, `useState`), or browser APIs. The one server-side module is the contact form action below.

**Contact form (server action).** `app/actions/form.ts` exports `submitForm`, a `"use server"` action validated with zod and consumed by `app/contact/page.tsx` via `useFormState`/`useFormStatus`. On valid input it POSTs JSON to an external endpoint at `https://sendspear.onrender.com/api/message` (recipient `ikeoluwaadetona@gmail.com` is hardcoded in the action). There is no client-side state library — React's `useFormState` is used directly.

**Styling conventions.** Theme tokens (colors, radius) are CSS variables defined in `app/globals.css` and mapped in `tailwind.config.ts`. Custom utility classes live in `globals.css` (e.g. `.hover-underline-animation`, `.video-container`, `.card-hover`). The site is effectively light-only despite the `dark` token block; the page body uses a hardcoded cream/orange gradient rather than the `background` token.

**Assets.** Images, videos, and the resume PDF live in `public/` and are referenced by absolute path (e.g. `/RESUME_IKEOLUWA_ADETONA_2024.pdf`). One stray large image (`w-yahaya-abu.jpg`) sits in the repo root, not `public/`.
