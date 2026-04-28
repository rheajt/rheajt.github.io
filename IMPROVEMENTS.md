# Site Improvements Audit

A comprehensive review of jordanrhea.com (SolidStart v4.0.0) with actionable improvements.

---

## Critical Issues

### 1. Duplicate CSS Custom Properties

The `:root` block was duplicated in both `_root-vars.scss` and `style.scss` with conflicting values (e.g. `--font-heading` pointed to different font families). **Status: Fixed** in this update.

### 2. No CMS Integration for Content

Blog and projects pages had placeholder text ("coming soon"). **Status: Fixed** — Sanity client now fetches posts from project `j1m85hw2`.

### 3. Unused Google Fonts

`Patrick Hand` and `Iansui` were loaded but now replaced with `Space Grotesk` and `Space Mono`. Verify no component still references `--fontFamily-cursive` or `Iansui`.

---

## Performance

### 4. Loader Component Blocks Entire Page

`src/components/loader.tsx` renders a full-screen black overlay with a spinner for 700ms on every page load. This hurts perceived performance and provides no benefit for a static site.

- **Recommendation**: Remove the `<Loader />` component from `src/routes/index.tsx` entirely. If a loading state is needed, use skeleton placeholders for async content only.

### 5. Canvas Animations Run Continuously

Both `canvas.tsx` (hero) and `bar-canvas.tsx` (quote carousel) use `requestAnimationFrame` loops that never pause, even when off-screen.

- **Recommendation**: Use `IntersectionObserver` to pause/resume animation when the canvas is not visible. This reduces CPU/battery usage significantly.

### 6. Google Fonts Loading Strategy

Fonts are loaded with a render-blocking `<link>` in the document head.

- **Recommendation**: Add `rel="preload"` for the font CSS or use `font-display: optional` to prevent layout shift. Consider self-hosting the font files for better performance.

### 7. No Image Optimization

Images (hero, projects) are served as-is with no `srcset`, `sizes`, or next-gen formats.

- **Recommendation**: Use Sanity's image URL builder (`@sanity/image-url`) to serve responsive, optimized images with format auto-detection (WebP/AVIF).

---

## Code Quality

### 8. Duplicate Style Definitions

`_icon-container.scss` and `_custom.scss` define `.icon-container` and `.contact-icons` styles, but `contact-icons.tsx` also defines them inline via `solid-styled-components`. The SCSS versions are likely dead code.

- **Recommendation**: Remove `.icon-container` and `.contact-icons` from `_icon-container.scss` since the component uses scoped CSS-in-JS.

### 9. Dead/Unused SCSS Files

- `_blockquote.scss` — entirely commented out
- `contact-form.scss` — the contact form component uses `solid-styled-components` instead
- `_custom.scss` has `.hero`, `.cloud-text`, and `.project-cards` classes that are overridden by component-level styled-components
- **Recommendation**: Audit each SCSS partial and remove unused class definitions. Keep only truly global styles.

### 10. Hardcoded Deployment ID in Contact Form

`src/components/contact-form.tsx` contains a hardcoded Google Apps Script deployment ID.

- **Recommendation**: Move to an environment variable (`import.meta.env.VITE_CONTACT_ENDPOINT`).

### 11. `googlesheets-creds.json` in Repository Root

A credentials file exists at the project root. Even if it's not committed, it's a risk.

- **Recommendation**: Ensure it's in `.gitignore`. Move credentials to environment variables or a secrets manager.

### 12. No TypeScript Strict Null Checks for Sanity Data

The portable-text component and new Sanity integration use `any` types extensively.

- **Recommendation**: Generate types from the Sanity schema using `sanity typegen` or manually define stricter interfaces.

---

## SEO & Accessibility

### 13. Missing Structured Data (JSON-LD)

No schema.org markup for Person, Website, or Article types.

- **Recommendation**: Add JSON-LD structured data in the `<head>` for the home page (Person/WebSite) and blog posts (Article).

### 14. Missing `alt` Text Standards

Some images have generic alt text ("jordan rhea header"). Screen readers need more descriptive text.

- **Recommendation**: Update alt attributes to be descriptive (e.g., "Photo of Jordan Rhea, software developer").

### 15. No Sitemap or RSS Feed

Static site has no `sitemap.xml` or RSS feed for blog posts.

- **Recommendation**: Generate a sitemap during build. Add an RSS feed endpoint for blog subscribers.

### 16. Missing Open Graph Images for All Pages

Only the home page sets an OG image. Blog posts and project pages have none.

- **Recommendation**: Pass post images to the `<Seo>` component on blog and project detail pages.

---

## Content & Features

### 17. Placeholder Pages

Several routes show "coming soon" placeholder content:

- `/vexillology` — "Flags of the world quiz coming soon"
- `/language-learning` — "Language learning resources coming soon"
- `/language-learning/dictionary` — "Dictionary interface coming soon"
- **Recommendation**: Either build these features or remove them from navigation to avoid dead-end user experiences.

### 18. No Blog Post Detail Page

There's a blog listing page but no route for individual blog posts (e.g., `/blog/[slug]`).

- **Recommendation**: Create `src/routes/blog/[slug].tsx` that fetches the full post from Sanity and renders the body using the `PortableText` component.

### 19. No Project Detail Page

Similarly, there's no `/projects/[slug]` route.

- **Recommendation**: Create a detail page that shows the full post body, tags, and related content.

### 20. Blog Page Should Be in Navigation

The blog page exists but isn't in the `links.ts` navigation array.

- **Recommendation**: Add `{ name: "Blog", to: "blog" }` to the links array.

---

## Design & UX

### 21. Mobile Navigation Missing

The header navigation hides on mobile with no hamburger menu or alternative navigation.

- **Recommendation**: Add a mobile menu toggle (hamburger icon) that reveals navigation links in a slide-out or dropdown panel.

### 22. Footer Links Not Comprehensive

Footer only has privacy and terms links. Missing links to main sections.

- **Recommendation**: Add a footer navigation section with links to Projects, Blog, About, and Contact.

### 23. No Dark Mode Support

The graph paper aesthetic could translate well to a dark mode (dark grid on dark background).

- **Recommendation**: Add a `prefers-color-scheme: dark` media query or a manual toggle, adjusting CSS custom properties for dark backgrounds.

### 24. Contact Form UX

The "message quality" progress bar is confusing — it measures character/word count, not actual quality.

- **Recommendation**: Either label it clearly as "minimum message length" or remove it in favor of a simple required field validation.

### 25. Quote Carousel Has No Controls

The quote carousel auto-advances with no user controls (dots, arrows, or pause).

- **Recommendation**: Add navigation dots or prev/next buttons. Pause auto-advance on hover.

---

## Infrastructure

### 26. No CI/CD Pipeline Visible

No `.github/workflows` or deployment configuration found.

- **Recommendation**: Add a GitHub Actions workflow for building, testing, and deploying the static site.

### 27. No Error Boundary

If a component throws, the entire app crashes with no recovery.

- **Recommendation**: Add a SolidJS `ErrorBoundary` wrapper in `app.tsx` or `layout.tsx`.

### 28. Tests May Be Broken

Tests exist in `src/__tests__/` but with the SCSS and package manager changes, they may need updating.

- **Recommendation**: Run `vitest run` and fix any failures. Add tests for the new Sanity data fetching.

### 29. Static Site Generation + Client-Side Fetching

The site uses `preset: "static"` but the new Sanity integration fetches data client-side via `createResource`. This means projects/blog pages will show loading states after static HTML loads.

- **Recommendation**: Consider using SolidStart's `createAsync` / `cache` with server-side data loading so Sanity content is included in the static HTML at build time. This would improve SEO and initial load performance.

---

## Quick Wins (Low Effort, High Impact)

| #   | Improvement                  | Effort |
| --- | ---------------------------- | ------ |
| 4   | Remove Loader component      | 5 min  |
| 8   | Delete dead SCSS files       | 10 min |
| 18  | Create blog post detail page | 30 min |
| 19  | Create project detail page   | 30 min |
| 20  | Add Blog to navigation       | 2 min  |
| 27  | Add ErrorBoundary            | 10 min |
| 14  | Fix alt text                 | 10 min |
