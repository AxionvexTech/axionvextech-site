# Recruiting Content Guide

## Visual direction

Careers uses a warmer, lighter treatment than buyer pages (`section-warm`, soft blue panels). Keep technical darkness minimal.

## Configuration

Edit `content/site.ts` → `recruitingConfig`:

- `mode`: `open_roles` | `talent_network` | `closed`
- `showInPrimaryNav`: keep `false` so Careers stays under Company / footer
- `showCompensation`: only enable after approved ranges exist
- `showApplicantSafety`: keep `true`

## Role data

Typed jobs live in `content/jobs/`:

- The verified launch state has no published openings and uses talent-network mode
- Set `status` to `open`, `paused`, `closed`, or `talent-network`
- Open roles appear automatically on `/careers` and sitemap
- Prefer accurate titles: Delivery Operations / Workflow Operations / Technical Operations / Platform Support
- Do not invent compensation, headcount, or process length

## Application flow

`ApplicationForm` is a progressive multi-step form:

1. Role selection
2. Contact
3. Experience
4. Work evidence
5. Availability
6. Review + privacy consent

Drafts save to `localStorage` (`avx-application-draft`). Submissions post to `/api/apply` with honeypot protection.

The email, Supabase, and Tally path depends on configured environment variables. Verify delivery in the deployment environment before enabling an open role.

## Talent network

Separate from open roles. Categories are UI-only interest chips; applicants submit via “Other / Future Role”.

## Applicant safety (required copy)

Axionvex Tech does not require applicants to:

- Pay an application fee
- Buy equipment from a designated individual
- Share private platform credentials
- Rent or sell personal accounts
- Impersonate another person
- Allow hidden access to a personal device

## Terminology

Avoid ambiguous public wording such as “Platform & Account Operations” unless it describes a legitimate internal role with clear scope.
