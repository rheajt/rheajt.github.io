---
title: PowerSchool CLI
image: ./header.png
message: command line interface for development of powerschool plugins
tags:
    - powerschool
    - web development
    - customization
    - data
    - school data solutions
quote:
    email: jordan@jordanrhea.com
    employer: jordanrhea.com
    excerpt: PowerSchool plugins, schools can improve their productivity, enhance the user experience, and better meet the needs of their students and staff.
---

# pscli — A TypeScript CLI for PowerSchool plugin development

pscli is a developer-focused CLI (TypeScript / Node.js) that streamlines building, scaffolding, documenting, bundling, and validating PowerSchool plugins and queries. It combines project templates, query tooling, and a local
dev experience to speed up the iterative plugin workflow.

## Why use pscli

• Speeds up plugin scaffolding (pages, queries, permissions, schema, inserts, alerts).
• Standardizes plugin packaging (XML, assets, bundle).
• Provides utilities for parsing SQL metadata, fetching PowerSchool queries, and building permission XML.
• Includes a small dev server and tooling to iterate locally.

## Key features

• Scaffolding commands under src/commands/create/ (e.g. plugin, pages, queries, permissions, schema, inserts, alert).
• Bundle/packaging commands (src/commands/bundle/plugin.ts) to produce plugin bundles ready for deployment.
• Documentation helpers (src/commands/docs/) to list and generate docs for queries.
• Query export tooling (src/commands/export/queries.ts) and update helpers (src/commands/update/plugin.ts).
• Library helpers in lib/ for token fetching, plugin XML handling, dev-server, HTTPS helpers, and file utilities.
• Templates for common plugin artifacts in templates/.
• Handlebars-based views under views/ for simple previews or docs rendering.
• TypeScript-first codebase with tests (tests/), linting (.eslintrc.json), and Prettier formatting.

## Typical commands

(Exact CLI names and flags depend on the implementation; these map to scripts in bin/.)

• Scaffold a plugin: node ./bin/run.js create plugin
• Add pages/queries/permissions: node ./bin/run.js create pages
• Bundle a plugin: node ./bin/run.js bundle plugin
• Export or list queries: node ./bin/run.js export queries / node ./bin/run.js docs list-queries
• Run the local dev server: node ./bin/dev.js

Wrap these with your preferred npm scripts like npm run dev or npm run build.
