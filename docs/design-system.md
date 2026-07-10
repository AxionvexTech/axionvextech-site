# Luminous Intelligence Design System

Axionvex Tech public marketing site visual system (V2).

## Principles

- Light-dominant: roughly 65–75% light surfaces, 15–25% deep navy anchors, ~10% accent.
- Dark navy is reserved for technical anchors (architecture, standards, final CTA).
- Motion demonstrates system behavior, not decoration.
- No fabricated metrics, logos, testimonials, or live dashboards.

## Tokens

Defined in `app/globals.css` as CSS variables and Tailwind `@theme` colors:

| Token | Role |
|---|---|
| `--canvas` / `--surface` / `--surface-soft` / `--surface-blue` | Light surfaces |
| `--ink` / `--ink-secondary` / `--ink-muted` | Text on light |
| `--navy` / `--navy-elevated` / `--graphite` | Dark anchors |
| `--blue` / `--cyan` / `--violet` / `--amber` | System states |
| `--success` / `--danger` | Confirmed outcomes / errors |
| `--border` / `--shadow-soft` / `--shadow-medium` | Structure |

## Typography

- Display / body: Geist Sans
- Technical labels: Geist Mono
- Hero ~68–88px desktop, ~42–54px mobile
- Section headlines ~44–64px desktop

## Components

Primary marketing primitives live under:

- `app/components/layout/` — header, footer, shell
- `app/components/marketing/ui.tsx` — Section, ButtonLink, PageHero, Eyebrow
- `app/components/diagrams/` — workflow, architecture, dashboards, timelines
- `app/components/forms/` — assessment, application, contact
- `app/components/content/` — proof labels, policy pages

## Motion

- CSS transitions for buttons and hover
- Client SVG/state loops for hero workflow and architecture
- IntersectionObserver for scroll reveals
- `prefers-reduced-motion` disables loops and shows static resolved states
- Off-screen hero animation pauses via IntersectionObserver

## Accessibility

- Skip link, landmarks, focus-visible rings
- Keyboard mega menu / mobile drawer
- Diagrams include textual equivalents / `role="img"` labels
- Form errors announced with `role="alert"`
