# Code highlighting and copy interaction

Research for [Research code highlighting and copy interaction](https://github.com/rheajt/rheajt.github.io/issues/33).

## Decision

Use **Shiki at build time**, through a small server/build utility with an explicit language set, rather than browser-side Prism or Highlight.js. Use Shiki's core/fine-grained loading so the site only ships the languages and theme required by the content contract. The Portable Text `code` object renderer should pass the source and optional language to this utility and render the returned escaped HTML in a `<pre>` container. No syntax-highlighting JavaScript should hydrate in the browser.

The initial language set should cover the repository's likely project examples: `typescript`, `javascript`, `tsx`, `jsx`, `html`, `css`, `scss`, `json`, `bash`, and `markdown`. Unknown or missing languages should use a plain-text fallback instead of failing the page. The language value is a hint, not executable content.

Use Shiki directly, not `@shikijs/rehype`: the repository has a custom Solid Portable Text renderer rather than a Markdown/rehype pipeline. A cached highlighter instance should be reused across blocks during one build/render process.

Sources:

- [Shiki installation and usage](https://shiki.style/guide/install.html)
- [Shiki synchronous usage and preloading](https://shiki.style/guide/sync-usage)
- [Shiki rehype integration](https://shiki.matsu.io/packages/rehype) (useful ecosystem reference, but not the chosen integration seam)
- [lowlight](https://github.com/wooorm/lowlight) (comparison: AST output and common/all language bundles)
- [refractor](https://github.com/wooorm/refractor/) (comparison: Prism grammar bundles)

## Copy-button contract

Each code block gets a native `<button type="button">` with an accessible name such as **Copy code**. It must remain keyboard-operable with Enter and Space and must not move focus after activation. The button should expose a short status transition, for example `Copy code` → `Copied` → `Copy code`, while a nearby stable `role="status"` / `aria-live="polite"` region announces success or failure without relying on color or icon changes.

On activation, call `navigator.clipboard.writeText(source)` when available. If the Clipboard API is unavailable or rejects (including insecure/non-permitted contexts), use a narrowly scoped legacy `textarea` + `document.execCommand("copy")` fallback and report failure if that also fails. The fallback is compatibility behavior only; it should not be used during rendering.

The copied value must be the original unhighlighted source string, not rendered token text or HTML. The code block must remain readable and usable when JavaScript or clipboard permission is unavailable.

Sources:

- [MDN: Clipboard.writeText()](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)
- [MDN: Document.execCommand()](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)
- [WAI-ARIA APG: Button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [MDN: ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)

## Local constraints and acceptance checks

- The site uses SolidStart/Vinxi's static preset, so build-time highlighting avoids client bundle and hydration cost.
- No highlighting or clipboard dependency currently exists in `package.json`.
- `src/components/portable-text.tsx` currently supports inline `code` marks but drops unknown block types; the future `code` object renderer must be added explicitly.
- Existing prototype copy UI is decorative and has no handler; it is not an implementation to reuse as-is.
- Tests run in jsdom and do not currently provide a Clipboard API. Unit tests should inject/mock `navigator.clipboard` and cover success, rejection/fallback, total failure, and status text. Rendering tests should assert the source remains available for copying and that unknown languages fall back safely.
