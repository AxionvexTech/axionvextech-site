# Axionvex Tech Website Rebuild Plan

**Source of truth:** `Axionvex_Tech_Website_Rebuild_Master_Spec.md` (v1.0)  
**Audit date:** 2026-07-10  
**Stack:** Next.js 16.1.6 App Router · React 19 · TypeScript strict · Tailwind CSS 4 · Geist / Geist Mono

---

## Repository audit summary

| Area | Current state |
|---|---|
| Framework | Next.js App Router under `app/` |
| Styling | Tailwind 4 + dark cyan/violet theme in `globals.css` |
| Marketing routes | `/`, `/work`, `/work/[slug]`, `/recruiting` |
| Internal systems | `/portal/*`, `/auth/*`, Supabase, Resend, Tally apply APIs |
| Fonts | Geist + Geist Mono (keep) |
| Images | `public/logo.png`, `public/icon.svg` only |
| Forms | Client `ContactForm` + server apply routes |
| SEO | Basic metadata, sitemap, robots |
| Tests | None |

### Preserve

- Next.js / React / Tailwind / TypeScript toolchain
- Geist font pairing
- Internal portal, auth, Supabase, Resend, Tally application pipeline
- Existing case-study *facts* pending human verification (re-label with proof types)
- Logo assets
- `proxy.ts` portal host routing

### Replace

- Homepage layout, copy, and visual system
- Header / footer / navigation IA
- Design tokens (move from cyan/violet dark-only to ink/paper + mint/blue signals)
- Recruiting public UX → configurable careers system at `/careers`
- Work index presentation (proof labels, filters per spec)
- Unverified metrics, activity feed, emoji service cards, cursor-following background

### Remove or quarantine from public marketing

- Unlinked “recent activity” feed
- Unverified homepage/work metrics (`20+`, `15+`, etc.)
- Generic agency positioning competing with production AI workflow focus
- Public “Platform & Account Operations” framing that could imply account operation services
- Cursor-following animated background (spec prohibits cursor-following effects)

### Risks

1. **Case studies unverified** — must ship with proof labels; metrics need `CONTENT_VERIFICATION.md` review before launch claims.
2. **Legal placeholders** — entity, jurisdiction, address, privacy emails unverified.
3. **Recruiting backend roles** — Tally role keys include `proxy_interviewer`; keep internal plumbing, rewrite public careers copy per applicant-safety rules.
4. **`.env.example` contains live-looking secrets** — rotate and scrub before any public share; do not commit real keys.
5. **Portal subdomain** — marketing rebuild must not break `PORTAL_HOST` routing.

---

## Proposed route map

```text
/                                      Homepage
/solutions                             Solutions index
/solutions/production-ai-workflows
/solutions/ai-product-engineering
/solutions/ai-operations
/solutions/systems-integration
/use-cases                             Use cases index
/use-cases/customer-operations
/use-cases/client-onboarding
/use-cases/document-processing
/use-cases/reporting-automation
/use-cases/internal-knowledge
/work                                  Work index
/work/[slug]                           Case study detail
/ai-standards
/how-we-work
/insights
/insights/[slug]
/about
/careers                               Configurable recruiting
/careers/[slug]
/contact
/assessment
/privacy
/terms
/applicant-privacy

# Redirects
/recruiting  →  /careers  (308)

# Preserved internal
/portal/*  /auth/*  /api/*
```

---

## Component architecture

```text
app/
  components/
    layout/          SiteHeader, SiteFooter, AnnouncementBar, SkipLink
    marketing/       Section, Button, Card variants, CTA blocks
    diagrams/        WorkflowControlPlane, ArchitectureMap, ApprovalGate
    forms/           AssessmentForm, ContactForm, TalentNetworkForm
    careers/         JobCard, JobFilters, ApplicantSafety, RecruitingModeView
    content/         ProofLabel, Eyebrow, Prose
  content/           Typed site, nav, services, use-cases, jobs, case-studies, insights
  lib/               seo.ts, analytics.ts, forms.ts, validation.ts
```

Adapt to existing `app/` root (no duplicate `src/` tree).

---

## Content architecture

- `content/site.ts` — siteConfig, recruitingConfig
- `content/navigation.ts` — primary + footer nav
- `content/services.ts` — four solutions
- `content/use-cases.ts` — five use cases (+ product features link)
- `content/case-studies/` — typed CaseStudy records with ProofType
- `content/jobs/` — JobPosting records
- `content/insights/` — article metadata + MDX or TS bodies
- Legal pages: clear `[LEGAL REVIEW]` placeholders until verified

---

## Implementation phases

| Phase | Scope | Status |
|---|---|---|
| 0 | Audit + this plan | Done |
| 1 | Tokens, layout, nav, content config, primitives | Next |
| 2 | Homepage (all sections + hero diagram) | Pending |
| 3 | Solutions + use cases | Pending |
| 4 | Work, AI Standards, About, How We Work | Pending |
| 5 | Careers modes, assessment/contact forms, insights | Pending |
| 6 | SEO, redirects, ASSET/CONTENT docs, build QA | Pending |

---

## Dependencies

- No new animation library unless a small CSS/SVG approach fails
- Prefer HTML/CSS/SVG diagrams over raster hero art initially
- Forms: extend existing Resend path or add assessment route; keep secrets server-side
- Analytics events: stub helpers until provider verified

---

## Definition of done (per phase)

Each phase ends with: TypeScript clean for touched files, `next build` green when feasible, no fabricated proof, content editable via `content/*`.
