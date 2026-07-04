# Agents of Change — National Agentic AI Bootcamp & Buildathon

Official website for OIST ACM-W's Agentic AI Bootcamp & Buildathon (10–11 July 2026).

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (primary animation)
- Lenis (smooth scroll)

## Structure
```
app/                  routes (home, register, schedule)
components/
  loader/             AgentBootLoader — CLI-style boot sequence
  sections/           Page sections (Hero, About, Timeline, ...)
  ui/                 Reusable primitives
  HomeClient.tsx       Orchestrates loader -> hero handoff
  SmoothScrollProvider.tsx  Lenis wrapper, respects prefers-reduced-motion
data/event.ts          Single source of truth for all event content
                        (sourced only from the provided event document)
lib/utils.ts            cn() class merge helper
```

## Run locally
```
npm install
npm run dev
```

## Status
Phase 1 (this delivery): project scaffold, design tokens, AgentBootLoader, Hero.
Remaining sections are being built next — see chat for the full section list.
