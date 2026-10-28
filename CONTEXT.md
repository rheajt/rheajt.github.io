# Site context

This repository holds Jordan Rhea's portfolio site and the separate School Data Solutions site it also ships. Both are rendered from the same Sanity `production` dataset.

## Language

**Project**:
A piece of work listed on the site. Stored in Sanity as a document of type `post`; the CMS type name is not the domain term.
_Avoid_: post, article, entry

**Published project**:
A project visible through the `published` perspective, and therefore the only kind that can reach a production build.
_Avoid_: live project, public post

**Draft project**:
A project that exists only in the `drafts` perspective and is reachable only from a local development server.
_Avoid_: preview, unpublished post

**School project**:
A project in the `schooldata.solutions` category, listed on the School Data Solutions page. The category string is exactly `schooldata.solutions`.
_Avoid_: school-data project, school site project

**Project listing**:
A page that renders a set of project cards. The homepage, `/projects`, and the school page each have one.
_Avoid_: index, gallery

**Project card**:
The shared card that presents one project: image or title placeholder, published date, title, summary, and tags.
_Avoid_: tile, teaser, entry card

## Decisions

- [Dev-only draft preview](./docs/adr/0001-dev-only-draft-preview.md): Draft school projects are readable only from a local development server, never from a production build.
- [Server-rendered initial loader](./docs/adr/0002-server-rendered-initial-loader.md): The initial loader ships in the server-rendered HTML and fails open when JavaScript never runs.
