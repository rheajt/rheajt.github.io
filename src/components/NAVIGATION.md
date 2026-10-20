# Navigation

The production header uses the selected Pages-bar design (option A). The original two previews are archived on local branch `prototype/navigation-options-2026-10-16` at `d3eebd10b`.

To add a standalone page, create its route and add one `{ label, href }` entry to `standalonePages` in `navigation-data.ts`. This list is independent of Sanity projects. Top-level work links are in `workPages`; social destinations come from `getResumeLinks()`.

The Pages panel stays mounted with `hidden` when closed, keeping destinations available to the static prerender crawler without exposing closed links to keyboard or screen-reader navigation. Below 1200px, social links and Contact move into the panel; at 720px and below, work links stack beneath the identity and the panel opens in the page flow.

Social icons and hover/focus colors are mapped in `navigation-data.ts` using Solid-compatible `solid-icons`. LinkedIn, GitHub, YouTube, and Strava keep their resume-data URLs; Letterboxd (`https://boxd.it/bz8UB`) is navigation-only. Icons are neutral at rest, with brand colors on hover and keyboard focus plus a separate focus ring. Brand sources and the Letterboxd green adaptation are documented in `docs/research/navigation-social-icons.md`.

`Header` accepts a reactive `pathname` for active states and optional `showLinks={false}` for brand-only rendering. `BasicHeader` retains its existing back-navigation behavior. No preview query parameter or keyboard-switching behavior remains.
