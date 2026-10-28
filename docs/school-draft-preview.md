# School project draft preview

`/school-data-solutions` lists **only drafts in development**, selected by
`_originalId` starting with `drafts.`. Production/static builds use only published
projects and do not need a preview token. Both listings use the exact Sanity
category `schooldata.solutions` (not `school-data-solutions`). Other project
listings remain published-only in development too. The decision behind this
split is recorded in [ADR 0001](./adr/0001-dev-only-draft-preview.md).

Provide a Sanity read token with draft access as **`SANITY_READ_TOKEN` in the
development server's environment**, then restart `bun run dev`. Never use a
`VITE_` prefix, put the token in browser code, or commit it. `.env*` files are
ignored; no environment file or token is required for production. Missing tokens
or fetch failures use the page's existing project error state.

The authenticated client runs only on the server, with the `drafts` perspective
and CDN disabled. Draft origin is preserved as `_originalId`; incomplete drafts
without a nonblank title, slug, or document ID are skipped by the shared card
normalizer. Existing image fallbacks are unchanged.

**Keep the dev server private.** `DEV` is not authentication: anyone who can reach
the development server can request the draft listing through its server function.
