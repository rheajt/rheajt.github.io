# Navigation social icons: source notes

Verified October 17, 2026. This note preserves the librarian's primary-source findings and the approved implementation option; it does not claim that an accent color alone establishes brand compliance.

## Hover and keyboard-focus accents

| Brand      | Recommended accent | Primary-source evidence and scope                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LinkedIn   | `#0A66C2`          | The official [LinkedIn logo page](https://brand.linkedin.com/in-logo) includes an inline SVG with `fill='#0A66C2'`. This is asset-derived evidence, not a prose palette declaration.                                                                                                                                                                                                                                                     |
| GitHub     | `#000000`          | The official [GitHub logo guidelines](https://brand.github.com/foundations/logo) say logos should appear only in white, black, or, in a few cases, grey or green. Black is the recommendation for this light header, not purple.                                                                                                                                                                                                         |
| YouTube    | `#FF0033`          | The official [YouTube color page](https://brand.youtube/color/) declares `color-name1='YouTube Red'` and `hex-code1='#FF0033'`. This is the current published palette; the older `#FF0000` still appears in some site chrome.                                                                                                                                                                                                            |
| Strava     | `#FC5200`          | The official [Strava developer brand guidelines](https://developers.strava.com/guidelines/), revised September 29, 2025, explicitly specify “orange color #FC5200” for links. This is link guidance, not a universal logo specification; it is preferred over the older `#FC4C02` here.                                                                                                                                                  |
| Letterboxd | `#00E054`          | The official [Letterboxd brand page](https://letterboxd.com/about/brand/) links the [positive RGB dots decal](https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb.svg), which contains green `#00E054`, orange `#FF8000`, and blue `#40BCF4`, with white overlaps. Choosing its green for a monochrome hover/focus accent is an adaptation/design choice, **not** an official one-color mark mandate. Monochrome decals also exist. |

## Solid-compatible implementation option

The [react-icons README](https://github.com/react-icons/react-icons/blob/master/README.md) documents React components. This application uses Solid, already has `solid-icons` 1.2.0 installed, and the user approved its equivalents rather than adding a React dependency.

The librarian verified these exports in the installed package's local TypeScript declarations:

- `BsLinkedin` from `solid-icons/bs`.
- `SiGithub`, `SiYoutube`, `SiStrava`, and `SiLetterboxd` from `solid-icons/si`.

These are available implementation options, not a guarantee that bundled icon geometry matches each brand's newest artwork. The official sources above remain the references for the color evidence and its limitations.

## Navigation contract and verification scope

- Preserve the four existing destinations from `getResumeLinks()` (`~/utils/yaml`): LinkedIn, GitHub, YouTube, and Strava. Resume data remains unchanged.
- Add Letterboxd only to navigation, using the user-confirmed URL `https://boxd.it/bz8UB`.
- Render all five links in both the wide quick-connect area and the narrow/mobile Pages panel. Each is a native external anchor with `target="_blank"` and a `rel` containing `noreferrer`; `noopener` may also be present.
- Use icon-only SVGs without visible brand labels or the previous `↗`. Set each anchor's `aria-label` and `title` to its exact brand name: LinkedIn, GitHub, YouTube, Strava, or Letterboxd. Mark the SVG `aria-hidden="true"` and `focusable="false"`.
- Keep Contact separate as a text link to `/contact`.
- Header tests cover destinations, accessible names, external-link attributes, actual decorative SVGs, and unchanged resume links in both areas. They retain Pages disclosure, active-state, and native routing coverage without asserting SVG path geometry, icon-library internals, or responsive CSS layout in jsdom. Browser/responsive checks and the final full test suite/build belong to the parent validation lane.
