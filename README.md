# IntelliByld — Website (Next.js / App Router)

A multi-page rebuild of intellibyld.com: **minimal images, animated flowcharts.**
Light blueprint theme, brand-blue accent, zero raster images — every visual is CSS or
animated SVG. Drops into a Next.js App Router project.

---

## Pages / routes

| Route | File | Notes |
|-------|------|-------|
| `/` | `app/page.tsx` | Home — hero flowchart, agents, value props, team, FAQs |
| `/b2-agents` | `app/b2-agents/page.tsx` | Overview — three teams, fourteen agents |
| `/digital-twins` | `app/digital-twins/page.tsx` | Physical ↔ digital mirror |
| `/b2-carbon` | `app/b2-carbon/page.tsx` | Embodied-carbon ledger |
| `/pilot` | `app/pilot/page.tsx` + `components/ib/pilot-form.tsx` | Pilot application form |
| `/contact-us` | `app/contact-us/page.tsx` + `components/ib/contact-form.tsx` | Contact form |
| `/use-cases/supplier-delay-neutralization` | `app/use-cases/[slug]/page.tsx` | ↓ |
| `/use-cases/multi-site-coordination` | `app/use-cases/[slug]/page.tsx` | data-driven |
| `/use-cases/embodied-carbon` | `app/use-cases/[slug]/page.tsx` | |
| `/agents/procurement` | `app/agents/[slug]/page.tsx` | ↓ Procurement team — 5 agents (sourcing) |
| `/agents/logistics` | `app/agents/[slug]/page.tsx` | Logistics team — 3 agents (execution) |
| `/agents/scope3` | `app/agents/[slug]/page.tsx` | Scope 3 team — 6 agents (carbon) |

The six sub-pages (use-cases + agents) are **data-driven**: their content lives in
`components/ib/detail-data.ts` and renders through one shared template
(`components/ib/detail-page.tsx`). To add or edit a sub-page, edit the data file —
no new JSX required.

## Project layout

```
app/
├── layout.tsx                  # root: <html>/<body>, .ib-root wrapper, Nav + Footer, metadata
├── page.tsx                    # Home
├── b2-agents/page.tsx
├── digital-twins/page.tsx
├── b2-carbon/page.tsx
├── pilot/page.tsx              # server wrapper (metadata) → PilotForm
├── contact-us/page.tsx         # server wrapper (metadata) → ContactForm
├── use-cases/[slug]/page.tsx   # dynamic → DetailPage (3 slugs)
└── agents/[slug]/page.tsx      # dynamic → DetailPage (3 slugs)
components/ib/
├── theme.css                   # design tokens + all styles (scoped under .ib-root)
├── flowchart.tsx               # ★ reusable animated flowchart engine (SVG + CSS)
├── nav.tsx                     # client: nav + Use Cases dropdown + mobile menu + scroll-reveal
├── footer.tsx
├── icons.tsx                   # inline stroke icons
├── pilot-form.tsx              # client form
├── contact-form.tsx            # client form
├── detail-page.tsx             # shared template for use-case / agent pages
└── detail-data.ts              # content for all 6 sub-pages
public/
└── images/                     # empty — add favicon / OG / any assets here
```

## Install (into a Next.js App Router project)

1. Copy `app/`, `components/`, and `public/` into your project root.
2. Imports use the `@/` alias (default in v0 / create-next-app). If yours isn't set up,
   either add it to `tsconfig.json`:
   ```json
   { "compilerOptions": { "paths": { "@/*": ["./*"] } } }
   ```
   or switch the imports to relative paths.
3. `app/layout.tsx` is the **root layout** — it renders `<html>`/`<body>`. If your project
   already has one, merge them (keep one root layout; this one wires the Nav, Footer, CSS,
   and metadata).
4. `npm run dev`.

No Tailwind required — styling is self-contained CSS scoped under `.ib-root`.

## The flowchart engine

`components/ib/flowchart.tsx` is the signature piece. It's a **server component** (pure
SVG + CSS, no JS) — pulses flow along edges via CSS `offset-path`, and
`prefers-reduced-motion` hides them automatically. Feed it nodes + edges in viewBox units:

```tsx
<Flowchart
  height={300}
  title="Autonomous Execution — PRJ-04"
  caption="…"
  legend
  nodes={[{ id: "a", label: "BIM Takeoff", sub: "IFC · BOQ", x: 24, y: 36, kind: "source" }, …]}
  edges={[{ from: "a", to: "b" }, …]}
/>
```

Node `kind`: `source` (dashed) · `agent` (blue) · `physical` (clay/warm) · `twin`
(emphasized) · `default`. The warm "physical" colour is intentional — it marks
real-world nodes so every diagram reads as *physical site ↔ digital twin*.

## Fonts

Loaded via `@import` at the top of `theme.css` (Archivo / Inter / IBM Plex Mono) — zero
config. To use `next/font` instead, delete that line and wire the families in `layout.tsx`.

## Wiring the forms

Both forms show a success screen on submit without sending anywhere. Find the
`// TODO: wire to your backend` comment in `pilot-form.tsx` / `contact-form.tsx` and connect:
- create `app/api/pilot/route.ts` (and `app/api/contact/route.ts`) with a `POST` handler
  that forwards the payload to email / CRM / a sheet, then `fetch()` it from the form, **or**
- use a Server Action.

## Images

Static assets go in **`public/`** and are served from the root (`public/images/x.svg` →
`/images/x.svg`). Use `next/image`. The pages use **no images** — only these are worth adding:

| Asset | Where | Notes |
|-------|-------|-------|
| Favicon | `app/favicon.ico` (or `app/icon.png`) | auto-detected |
| Social / OG image | `app/opengraph-image.png` (1200×630) | auto-attached |
| Logo (optional) | `public/images/logo.svg` | current design uses the text wordmark |

---

## One thing to confirm — CTO name spelling

Your live site renders the CTO as **"Thaun S Kalimili"**; the Stoqr site I built earlier
used **"Tahrun Sai Kalimili"**. I've used **"Tarun Sai Kalimili"** here (in
`app/page.tsx`, the `team` array). These three don't match — please set the correct
spelling in one place: `app/page.tsx`.

© 2026 IntelliByld.
