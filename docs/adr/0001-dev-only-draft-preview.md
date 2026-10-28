# Draft school projects are previewable only in local development

## Context

The School Data Solutions page has to show work that is still being written in Sanity, so the school listing needs to read documents that have not been published. The same site builds to a static preset and deploys to GitHub Pages, where every emitted asset is public.

## Decision

Production and static builds read the `published` perspective through the published client and need no read token. Draft documents are reachable only from a local development server: a server function refuses to run outside `import.meta.env.DEV` and dynamically imports a `server-only` module that holds the token.

## Why

A static build is public output, so shipping a read token or unpublished work into it would leak both. The `drafts` perspective also bypasses the CDN, so keeping it out of the build path leaves production reads cached.

## Consequences

`SANITY_READ_TOKEN` is read from the development server's environment only, is never bundled, and is not required for production. The development server has to be treated as private: `DEV` is not authentication, so anyone who can reach it can request the draft listing through the server function. Drafts are not previewable on a deployed preview environment, because such an environment is not `DEV` and is usually public. The static build is asserted to contain no draft code or token markers, so a token that reaches the bundle fails the build instead of shipping.

## Rejected alternatives

Serving drafts from a deployed preview environment would put unpublished work behind a public URL. Sharing one read token across environments would make the token's exposure equal to that of the least protected environment.
