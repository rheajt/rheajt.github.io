import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "j1m85hw2",
    dataset: "production",
    apiVersion: "2026-04-19",
    useCdn: true,
    // Keep the native fetch transport shared by browser, SSR, and build mocks.
    resolveFetch: () => globalThis.fetch,
});

export interface SanityPost {
    _id: string;
    title: string;
    slug: { current: string };
    summary?: string;
    category?: string;
    publishedAt?: string | null;
    imageUrl?: string;
    imageAlt?: string;
    tags?: { label: string; slug?: { current: string } | null }[];
    body?: any[];
    seo?: {
        title?: string;
        description?: string;
        imageUrl?: string;
        imageAlt?: string;
    };
}

export const SITE_PROJECT_CATEGORY = "jordanrhea.com";

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizePost(value: unknown): SanityPost | null {
    if (
        !isRecord(value) ||
        typeof value._id !== "string" ||
        !value._id.trim() ||
        typeof value.title !== "string" ||
        !value.title.trim() ||
        !isRecord(value.slug) ||
        typeof value.slug.current !== "string" ||
        !value.slug.current.trim()
    ) {
        return null;
    }

    // Dereferenced tags can contain null when the referenced document is gone.
    // Dates are optional; an undated project is still valid, routable content.
    return {
        ...value,
        ...(value.tags === undefined
            ? {}
            : {
                  tags: Array.isArray(value.tags)
                      ? value.tags.filter(
                            tag =>
                                isRecord(tag) && typeof tag.label === "string",
                        )
                      : [],
              }),
    } as SanityPost;
}

function normalizePosts(value: unknown): SanityPost[] {
    if (!Array.isArray(value)) return [];
    return value
        .map(normalizePost)
        .filter((post): post is SanityPost => post !== null);
}

const postCardProjection = `{
  _id,
  title,
  slug,
  summary,
  category,
  publishedAt,
  "imageUrl": coalesce(
    image.asset->url,
    mainImage.asset->url,
    coverImage.asset->url,
    body[_type == "image" && defined(asset)][0].asset->url
  ),
  "imageAlt": coalesce(
    image.alt,
    mainImage.alt,
    coverImage.alt,
    body[_type == "image" && defined(asset)][0].alt,
    title
  ),
  "tags": tags[]->{ label, slug }
}`;

export async function fetchPosts(
    limit?: number,
    category: string | null = SITE_PROJECT_CATEGORY,
): Promise<SanityPost[]> {
    const slice = typeof limit === "number" ? `[0...$limit]` : "";

    try {
        const posts = await sanityClient.fetch<unknown>(
            `*[
          _type == "post" &&
          defined(slug.current) &&
          slug.current != "" &&
          !(_id in path("drafts.**")) &&
          draft != true &&
          ($category == null || category == $category)
        ] | order(publishedAt desc)${slice} ${postCardProjection}`,
            { category, limit },
        );
        return normalizePosts(posts);
    } catch (error) {
        console.error("Failed to fetch projects from Sanity", error);
        throw error;
    }
}

export async function fetchPostsWithImages(
    limit?: number,
    category: string | null = SITE_PROJECT_CATEGORY,
): Promise<SanityPost[]> {
    const end = limit ?? 100;
    const posts = await sanityClient.fetch<unknown>(
        `*[
          _type == "post" &&
          defined(slug.current) &&
          slug.current != "" &&
          !(_id in path("drafts.**")) &&
          draft != true &&
          ($category == null || category == $category) &&
          (
            defined(image.asset) ||
            defined(mainImage.asset) ||
            defined(coverImage.asset) ||
            count(body[_type == "image" && defined(asset)]) > 0
          )
        ] | order(publishedAt desc)[0...$end] ${postCardProjection}`,
        { category, end },
    );
    return normalizePosts(posts);
}

export async function fetchPostBySlug(
    slug: string,
    category: string | null = SITE_PROJECT_CATEGORY,
): Promise<SanityPost | null> {
    const post = await sanityClient.fetch<unknown>(
        `*[
          _type == "post" &&
          slug.current == $slug &&
          !(_id in path("drafts.**")) &&
          draft != true &&
          ($category == null || category == $category)
        ][0]{
      _id,
      title,
      slug,
      summary,
      category,
      publishedAt,
      "imageUrl": coalesce(image.asset->url, mainImage.asset->url, coverImage.asset->url, body[_type == "image" && defined(asset)][0].asset->url),
      "imageAlt": coalesce(image.alt, mainImage.alt, coverImage.alt, body[_type == "image" && defined(asset)][0].alt, title),
      "tags": tags[]->{ label, slug },
      "seo": {
        "title": coalesce(seo.title, seo.metaTitle),
        "description": coalesce(seo.description, seo.metaDescription),
        "imageUrl": coalesce(seo.image.asset->url, seo.ogImage.asset->url),
        "imageAlt": coalesce(seo.image.alt, seo.ogImage.alt)
      },
      body[] {
        _key,
        _type,
        _type == "block" => {
          style,
          listItem,
          level,
          children[] { _key, _type, text, marks },
          markDefs[] { _key, _type, href }
        },
        _type == "image" => {
          "url": asset->url,
          "asset": { "url": asset->url },
          alt,
          altText,
          caption
        },
        _type == "youtube" => {
          url,
          videoUrl,
          youtubeUrl,
          title
        },
        _type == "youtubeVideo" => {
          url,
          videoUrl,
          youtubeUrl,
          title
        },
        _type == "code" => {
          code,
          language,
          filename
        },
        _type == "codeBlock" => {
          code,
          language,
          filename
        }
      }
    }`,
        { slug, category },
    );
    return normalizePost(post);
}

export async function fetchPublishedProjectSlugs(): Promise<string[]> {
    return sanityClient.fetch(
        `*[
          _type == "post" &&
          defined(slug.current) &&
          !(_id in path("drafts.**")) &&
          draft != true &&
          category == $category
        ].slug.current`,
        { category: SITE_PROJECT_CATEGORY },
    );
}
