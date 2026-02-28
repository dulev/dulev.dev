# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev                       # Start dev server on port 3000
pnpm build                     # Production build (output: .output/)
node .output/server/index.mjs  # Run production server
```

No test framework is configured.

## Architecture

Personal portfolio site built with **React 19 + TypeScript + TanStack Start + Nitro**, deployed on Vercel.

**Stack:** TanStack Router (file-based routing) · Vite 7 · Tailwind CSS v4 · Motion.dev · pnpm

**Key paths:**
- `src/routes/` — File-based routes; `routeTree.gen.ts` is auto-generated (do not edit)
- `src/routes/-home/` — Homepage sub-components (hero, projects, interests, footer); `-` prefix = colocated, not a route
- `src/routes/cv/`, `uses/`, `my-image-assets/`, `designs/12/` — Route dirs; component defined inline in `index.tsx`
- `src/components/` — Shared only: nav, scan-reveal, sound-provider, crt-intro, ui/
- `src/components/pixel-reveal.tsx` — Core clip-path polygon reveal animation (zero layout shift)
- `src/data/content.ts` — Centralized typed content (projects, interests, site metadata)
- `src/routes/cv/-cv.ts` — CV data (colocated with CV route, only used there)
- `src/styles/app.css` — Tailwind v4 theme config (`@theme` directive) with neo-brutalist design tokens
- `src/styles/neobrutalist.css` — Custom CSS utilities (grid bg, dividers, cursor animation)

**Path alias:** `~/` maps to `src/`

## Patterns & Conventions

- **Neo-brutalist aesthetic:** Bold 3-4px borders, harsh drop shadows (4px 4px 0 #111), lime (#C8FF00) and orange (#FF6B00) accents, monospace typography
- **Reveal system:** `PixelReveal` wraps any element — uses a shared IntersectionObserver + jotai scheduler atom to auto-stagger reveals (80ms apart) with no parent orchestration. Clip-path polygon scan animation at 4ms/pixel, 32px grid cells
- **Route colocation:** Route file = route definition + page component(s) in the same file (component defined below `Route` export). For routes needing many sub-components, convert to a directory and colocate with `-prefix` (TanStack Router ignores `-prefixed` files/dirs). Shared components live in `src/components/`.
- **Route definitions** use `createFileRoute()` — TanStack Router convention
- **Keyboard shortcuts:** `i` toggles between main and inspo views; Space restarts animations on `/animations`
- **Sound system** is scaffolded (`SoundProvider`, `use-sound`) but playback is stubbed out
- **Tailwind v4** uses `@theme` directive in app.css for custom colors, fonts, and shadows — not a tailwind.config file
- **UI primitives:** Prefer Radix UI and shadcn/ui for components and primitives
- **Icons:** Use Phosphor fill icons via `react-icons/pi`. Convention:
  - Icon before text → navigational/back actions (e.g. `<PiArrowLeftFill /> dulev.dev`)
  - Icon after text → external links (e.g. `GitHub <PiArrowUpRightFill />`)
  - Icon only → toggles/controls (sound, theme)
  - Icon above text → vertical card labels (interest stamps)
- **Package manager:** pnpm
