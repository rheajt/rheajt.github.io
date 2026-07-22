# Sanity project content contract

Research for [Research Sanity project content contract](https://github.com/rheajt/rheajt.github.io/issues/31).

## Current source of truth

- Project: `j1m85hw2`
- Dataset: `production`
- Studio workspace: `default` (`project-content`)
- The repository has no local Sanity Studio schema. The deployed Studio schema is therefore the current content-model source of truth.

## Existing published shape

The `post` document currently contains `title`, `slug`, `draft`, `publishedAt`, `image`, `body`, `summary`, `category`, and tag references. `body` is a Portable Text array containing:

- Standard `block` members with headings, paragraphs, lists/marks, and link annotations.
- `image` members with `alt` and `caption`.
- `youtube` members with one required `url` field.

There are currently 10 published `jordanrhea.com` posts. One published post uses a YouTube block with a normal YouTube watch URL. No published post uses a code block, and the deployed schema has no code block type.

## Recommended contract

Keep `body[]` as the post’s Portable Text content field and add a dedicated `code` object member:

```text
code: required text/string containing the snippet
language: optional string identifying the highlighting language
```

The existing YouTube object remains the contract for video embeds:

```text
youtube: required URL validated as a YouTube URL
```

The frontend should preserve `_key` and `_type` for every body member and project the fields needed by each custom member. The detail query should explicitly expand image URLs and custom objects, for example:

```groq
body[]{
  _key,
  _type,
  ...,
  _type == "image" => {"url": asset->url},
  _type == "youtube" => {url},
  _type == "code" => {code, language}
}
```

The current `fetchPostBySlug` query spreads body members and expands image URLs, so it already preserves the existing YouTube `url`; it should be made explicit and typed when the detail-page implementation is specified.

## Frontend implications

The existing local `PortableText` renderer handles standard blocks, marks, links, and images but silently drops unknown custom types. The detail-page work must add renderers for `youtube` and `code`, plus tests for both. The repository currently has no syntax-highlighting dependency, so that choice remains with the separate highlighting research ticket.
