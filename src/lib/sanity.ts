import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "j1m85hw2",
    dataset: "production",
    apiVersion: "2026-04-19",
    useCdn: true,
});

export interface SanityPost {
    _id: string;
    title: string;
    slug: { current: string };
    summary?: string;
    category?: string;
    publishedAt: string;
    imageUrl?: string;
    imageAlt?: string;
    tags?: { label: string; slug: { current: string } }[];
    body?: any[];
    seo?: {
        title?: string;
        description?: string;
        imageUrl?: string;
        imageAlt?: string;
    };
}

export const SITE_PROJECT_CATEGORY = "jordanrhea.com";

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
        return await sanityClient.fetch(
            `*[
          _type == "post" &&
          !(_id in path("drafts.**")) &&
          draft != true &&
          ($category == null || category == $category)
        ] | order(publishedAt desc)${slice} ${postCardProjection}`,
            { category, limit },
        );
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
    return sanityClient.fetch(
        `*[
          _type == "post" &&
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
}

export async function fetchPostBySlug(
    slug: string,
    category: string | null = SITE_PROJECT_CATEGORY,
): Promise<SanityPost | null> {
    return sanityClient.fetch(
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
        ...,
        _type == "image" => {
          ...,
          "url": asset->url
        }
      }
    }`,
        { slug, category },
    );
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
