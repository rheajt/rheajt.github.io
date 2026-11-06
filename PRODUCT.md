# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- School leaders and school operations/data teams evaluating tools, integrations, and consulting help.
- Potential employers and collaborators evaluating Jordan Rhea’s skills, projects, and résumé.

Both audiences are primary; neither should disappear from future work.

## Product Purpose

Jordan Rhea’s portfolio presents his work building tools and connecting education systems. A successful visit supports either a relevant school consulting inquiry or an informed professional evaluation and connection.

The repository also ships the separate School Data Solutions site. Preserve its distinct identity while retaining the portfolio’s broader professional purpose.

## Operating Context

Visitors explore project listings and individual projects, review Jordan’s background and résumé, and use contact options to start a conversation. School Data Solutions presents custom tools for the work behind the school day.

The existing content describes work involving PowerSchool, ManageBac, Microsoft Office 365, and Google Workspace. These are systems the work connects or extends, not evidence of vendor endorsement.

## Capabilities and Constraints

- The existing implementation uses SolidStart, SolidJS, Vite, Nitro static output, and Bun. Follow `AGENTS.md` for executable project instructions.
- Both sites use the same Sanity `production` dataset. Production includes published projects only; school draft projects remain local-development-only and token-gated.
- Portfolio project listings default to category `jordanrhea.com`; School Data Solutions uses the exact category `schooldata.solutions`.
- Preserve the shared project-card content and image fallback chain. Domain terminology is defined in `CONTEXT.md`.
- Résumé data lives in `resume-data.yml` and is parsed through `src/utils/resume.ts`.
- Future work must preserve the separate School Data Solutions identity and use real project and résumé evidence.

## Brand Commitments

Preserve the names Jordan Rhea and School Data Solutions and their distinct identities. Existing assets and factual copy are evidence, not permission to invent claims or endorsements.

## Evidence on Hand

- Published project content in Sanity, queried through `src/lib/sanity.ts`.
- Professional history and résumé facts in `resume-data.yml`.
- Existing homepage positioning in `src/routes/index.tsx` and site metadata in `src/site-config.ts`.
- School workflow descriptions in `src/routes/school-data-solutions.tsx`.
- Existing portrait and School Data Solutions logo referenced by the implemented pages.

Use verified source material for claims; do not fabricate customers, testimonials, outcomes, partnerships, or performance figures.

## Product Principles

- Support both school consulting inquiries and professional evaluation.
- Show real work and background so visitors can evaluate relevance.
- Preserve the distinction between the portfolio and School Data Solutions.
- Keep published content public and development-only drafts private.
- Respect the systems schools already use rather than imply unsupported replacement capabilities.

## Open Decisions

No product-specific accessibility standard, audience priority beyond the two primary groups, or additional binding voice requirements were established during initialization.
