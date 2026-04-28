# AGENTS.md

## Use Bun

- Always use Bun in this repo: `bun install`, `bun add <pkg>`, `bun remove <pkg>`, and `bun run <script>`.
- `bun.lock` is the lockfile. Do not recreate or rely on `package-lock.json`.

## Verified commands

- Dev server: `bun run dev` (Vinxi/SolidStart on port `4444`).
- Static production build: `bun run build`.
- Full test suite: `bun run test`.
- Focused test: `bun run test -- src/__tests__/header.test.tsx`.
- Format configured files: `bun run format`.
- There is no separate lint or typecheck script in `package.json`.

## Trust config over README

- `README.md` is stale: it describes Gatsby/React/npm. The executable source is SolidStart + SolidJS + Vinxi + Bun.
- App routing is file-based through `src/app.tsx` and `src/routes/*` using `@solidjs/start/router`.
- Build output is static: `app.config.ts` sets `server.preset = "static"`.

## Project wiring

- Use the `~/*` alias for `src/*`; it is configured in both `tsconfig.json` and `vitest.config.ts`.
- Global styles enter through `src/app.tsx` importing `src/styles/style.scss`.
- Sass uses the modern compiler and `@use`; do not reintroduce deprecated Sass `@import`.
- Prettier uses 4-space tabs, semicolons, and no arrow parens for single args.

## Sanity content

- Sanity client and GROQ live in `src/lib/sanity.ts`.
- Project listings default to `category == "jordanrhea.com"` via `SITE_PROJECT_CATEGORY`.
- Project card images are projected from `image`, `mainImage`, `coverImage`, or image blocks in `body`; preserve that fallback chain.
- Homepage projects render via `src/components/projects-section.tsx`; `/projects` renders via `src/routes/projects.tsx`.

## Resume data

- `resume-data.yml` is real YAML, not JSON-in-YAML.
- Parse resume data through `src/utils/resume.ts`; do not parse `resume-data.yml?raw` inline in components.
- Raw YAML imports depend on declarations in `src/vite-env.d.ts`.
- Resume links are also rendered in the header immediately before the Contact button; the Contact button is in `src/components/header.tsx`, not `Hero`.

## Tests and browser quirks

- Vitest runs in jsdom with setup at `src/__tests__/setup.ts`.
- Canvas APIs are limited in jsdom; `BarCanvas` intentionally skips drawing under jsdom while still rendering a `<canvas>` for tests.
