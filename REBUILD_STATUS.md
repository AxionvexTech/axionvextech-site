# Rebuild Status

**Updated:** 2026-07-10

## Completed

- Repository audit and `REBUILD_PLAN.md`
- Design tokens (ink/paper/signal) and global layout shell
- Typed content architecture under `content/`
- Homepage sections per master spec (copy + diagrams)
- Solutions index + 4 solution pages
- Use cases index + 5 detail pages
- Work index with proof labels + updated case-study shell
- AI Standards, How We Work, About
- Configurable careers (`talent_network` default) + applicant safety
- Assessment + contact forms with server route (`/api/assessment`)
- Insights index (empty until real articles)
- Privacy / Terms / Applicant Privacy placeholders
- `/recruiting` → `/careers` redirect
- Sitemap updated to new IA
- Analytics event stub

## Completed follow-up (2026-07-10)

1. Legal/contact: public emails routed to `contact@axionvextech.com`; entity/jurisdiction/address still pending owner verification
2. Case studies: kept with proof labels; numeric claims and invented quotes removed
3. Visuals: `UseCaseVisual` conceptual UIs + `public/og-default.svg`
4. Insights: three published articles in `content/insights`
5. Assessment email: Resend + `/api/assessment` delivery verified

## Not launch-ready

- Legal entity / jurisdiction / address still pending
- Case-study numeric outcomes still need owner verification to republish
- Real team photos / sanitized screenshots still missing
- Privacy/Terms still draft placeholders
- Analytics provider still stubbed

## Commands

See latest build/lint output from the implementation session.

## Recommended next actions

1. Fill verified legal + contact values in `content/site.ts`
2. Verify each case study; adjust proof labels or unpublish
3. Commission or generate approved visuals from `ASSET_REQUIREMENTS.md`
4. Write first 3 insights articles before showing cards on homepage
5. Privacy review for analytics provider
6. Run Lighthouse + keyboard pass
7. Scrub secrets from `.env.example` and rotate exposed keys
