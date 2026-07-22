# Static slug prerendering for Sanity project pages

## Decision

Use SolidStart's Nitro-backed `server.hooks["prerender:routes"]` hook in
`app.config.ts` to fetch the published project slugs from Sanity and add one
`/projects/<slug>` route per result to the prerender route set. Keep the route
itself as `src/routes/projects/[slug].tsx` so it remains a normal file-based
dynamic route.

The slug query must use the same published-post and
`SITE_PROJECT_CATEGORY` constraints as the existing Sanity project listing.
Prefer a small slug-only query (or an equivalent projection) for this hook;
the page route can use `fetchPostBySlug` for its full content.

## Build and hosting behavior

- `app.config.ts` already uses `server.preset = "static"`.
- SolidStart's route prerendering configuration is Nitro's `server.prerender`
  configuration. Static routes can be listed explicitly, but CMS-driven
  dynamic routes need to be added during the `prerender:routes` hook.
- `crawlLinks: true` is not sufficient by itself unless every project link is
  rendered from a page that is crawled reliably; explicit CMS route injection
  is the safer source of truth.
- The hook runs at build time, so newly published or changed slugs require a
  new GitHub Pages build. The Sanity client currently uses the CDN, so the
  build should account for CDN freshness when release timing matters.

## Unknown and unpublished slugs

Only slugs returned by the published Sanity query are added to the static
output. The existing `src/routes/[...404].tsx` catch-all should handle paths
that do not correspond to generated project pages. The static deployment must
also emit the site's 404 entry point as required by the GitHub Pages adapter;
validate the generated `.output/public/404.html` during implementation.

If the dynamic page is reached in a non-static/server context and
`fetchPostBySlug` returns `null`, the page should use the framework's not-found
response behavior rather than rendering empty project content. This protects
against a slug being unpublished after route generation.

## References

- [SolidStart route prerendering](https://docs.solidjs.com/solid-start/building-your-application/route-prerendering)
- [SolidStart routing](https://docs.solidjs.com/solid-start/building-your-application/routing)
- [SolidStart `defineConfig`](https://docs.solidjs.com/solid-start/reference/config/define-config)
- [Nitro prerender configuration](https://nitro.build/config)
- [Nitro prerender route hook](https://github.com/nitrojs/nitro/blob/main/src/prerender/prerender.ts)
