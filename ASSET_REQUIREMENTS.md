# Asset Requirements

Generated editorial visuals are in `public/images/`. Registry: `content/images.ts`. License notes: `public/images/ASSET_LICENSE.md`.

| Asset | Location | Status | Notes |
|---|---|---|---|
| Hero workflow control plane | Homepage hero | Shipped | `hero/control-plane.png` · labeled conceptual |
| Architecture overview | Homepage architecture | Shipped | `hero/architecture-overview.png` + HTML map |
| Customer operations | Use-case cards / detail | Shipped | `use-cases/customer-operations.png` |
| Client onboarding | Use-case cards / detail | Shipped | `use-cases/client-onboarding.png` |
| Document processing | Use-case cards / detail | Shipped | `use-cases/document-processing.png` |
| Reporting automation | Use-case cards / detail | Shipped | `use-cases/reporting-automation.png` |
| Internal knowledge | Use-case cards / detail | Shipped | `use-cases/internal-knowledge.png` |
| AI product features | Use-case cards | Shipped | `use-cases/ai-product-features.png` |
| Working session | About / careers / homepage trust | Shipped | Generated editorial · not Axionvex personnel |
| Featured case-study screenshot | Work | Missing | Needs client permission |
| Real team photos | About / careers | Missing | Publish only with approval |
| Open Graph raster | Global SEO | Partial | SVG exists; PNG optional upgrade |

## Rules

- People in generated scenes are not Axionvex employees. Captions say so.
- Prefer Next.js `Image` with width/height and `priority` on LCP hero.
- Replace any asset by dropping a new file at the same path and keeping `content/images.ts` in sync.
