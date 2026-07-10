# SEO Routes and Redirects

## Canonical base

`https://www.axionvextech.com` (`content/site.ts`)

## Public marketing routes

| Route | Notes |
|---|---|
| `/` | Homepage |
| `/solutions` | Solutions index |
| `/solutions/production-ai-workflows` | |
| `/solutions/ai-product-engineering` | |
| `/solutions/ai-operations` | |
| `/solutions/systems-integration` | |
| `/use-cases` | |
| `/use-cases/customer-operations` | |
| `/use-cases/client-onboarding` | |
| `/use-cases/document-processing` | |
| `/use-cases/reporting-automation` | |
| `/use-cases/internal-knowledge` | |
| `/use-cases/ai-product-features` | Added in V2 |
| `/work` | Work index |
| `/work/[slug]` | Case studies |
| `/ai-standards` | |
| `/how-we-work` | Delivery process |
| `/insights` | |
| `/insights/[slug]` | |
| `/about` | Company |
| `/careers` | Recruiting |
| `/careers/[slug]` | Role detail, generated only for verified job records |
| `/contact` | |
| `/assessment` | Qualification form |
| `/privacy` | |
| `/terms` | |
| `/applicant-privacy` | |

## Redirects

| From | To | Type |
|---|---|---|
| `/recruiting` | `/careers` | Permanent (`next.config.ts`) |

## Metadata

- Route-level `createMetadata` via `app/lib/seo.ts`
- Root title template: `%s | Axionvex Tech`
- Homepage title avoids duplicated brand stacking where possible
- OG image: `/og-default.svg`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- Custom 404: `app/not-found.tsx`

## Structured data

- Organization / ProfessionalService helpers in `app/lib/seo.ts`
- BreadcrumbList on solution and use-case detail pages
- JobPosting eligible when open roles are published (none are published in the verified launch state)

## Preserved internal routes

`/portal/*`, `/auth/*`, `/api/*` — not part of marketing IA.
