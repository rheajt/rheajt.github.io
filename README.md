[![Built with Gatsby](https://img.shields.io/badge/built%20with-Gatsby-663399)](https://www.gatsbyjs.com/) [![Node](https://img.shields.io/badge/node-v22.16.0-blue)](https://nodejs.org/) [![License](https://img.shields.io/badge/license-0BSD-brightgreen.svg)](LICENSE) [![GitHub stars](https://img.shields.io/github/stars/rheajt/rheajt.github.io?style=social)](https://github.com/rheajt/rheajt.github.io) [![Last commit](https://img.shields.io/github/last-commit/rheajt/rheajt.github.io)](https://github.com/rheajt/rheajt.github.io)

# jordanrhea.com

Personal blog and portfolio site for Jordan Rhea. Built with Gatsby (v5), React, and TypeScript — styled with SASS and styled-components. The repository contains the source for the static site, content (posts, images, language-learning data), and utility scripts used to author and publish the site.

## Features

- Static site generated with `gatsby` (v5)
- TypeScript + React components (`.tsx`)
- SASS and `styled-components` for styling
- Markdown-based posts with image optimization (`gatsby-plugin-image`)
- Disqus comments, Google Analytics / Tag Manager plugins
- Language-learning content (Hanzi JSON files) and a flashcards page
- Utility scripts to scaffold posts and format code

## Quick start

Requirements: Node.js (see `.nvmrc`) and `npm`.

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
# or
npm start
```

Build for production:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run serve
```

Format code with Prettier:

```bash
npm run format
```

## Content & posts

- Blog posts live under `content/posts/` in folders named `YYYY-MM-DD___slug`.
- Use `utils/template.md` as the post template (frontmatter includes `draft`, `date`, `title`, `categories`, `tags`, `youtube`, `image`).
- Images for posts can be placed in the same post folder or in `content/img` / `static/`.
- Language learning data is in `content/hanzi_jsons/`.

## Utility scripts

- `npm run post` — runs `ts-node utils/post.ts` to help scaffold new posts.
- `npm run format` — runs Prettier across JS/TS/MD files.

## Deployment

- `npm run deploy` builds the site and publishes the `public` folder via `gh-pages` (see `package.json` script).
- Adjust deployment settings or branch as needed for your workflow.

## Project structure (important folders)

- `src/` — React components, Gatsby pages, and templates
- `content/` — posts, images, and data (including hanzi JSONs)
- `static/` — static assets copied to the site root on build
- `utils/` — helper scripts and templates
- `package.json` — scripts, dependencies, and project metadata

## Contributing

Contributions and PRs are welcome. Please run `npm run format` before submitting changes.

## License

This project is released under the 0BSD license (see `package.json`).

## Author

Jordan Rhea — rheajt@gmail.com
