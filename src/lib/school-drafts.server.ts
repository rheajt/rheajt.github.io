import "server-only";
import { normalizePosts, postCardProjection, sanityClient } from "./sanity";

export async function fetchSchoolDraftPostsFromSanity() {
    const token = process.env.SANITY_READ_TOKEN?.trim();
    if (!token) {
        throw new Error(
            "Set SANITY_READ_TOKEN on the development server to load school drafts.",
        );
    }

    const previewClient = sanityClient.withConfig({
        perspective: "drafts",
        useCdn: false,
        token,
    });

    try {
        const posts = await previewClient.fetch<unknown>(
            `*[
              _type == "post" &&
              category == $category &&
              _originalId in path("drafts.**")
            ] | order(publishedAt desc) ${postCardProjection}`,
            { category: "schooldata.solutions" },
        );

        // The drafts perspective also includes published-only documents.
        // Keep category and origin checks at the response boundary as well as in GROQ.
        return normalizePosts(posts).filter(
            post =>
                post.category === "schooldata.solutions" &&
                typeof post._originalId === "string" &&
                post._originalId.startsWith("drafts."),
        );
    } catch {
        // Do not serialize provider errors that could include request details.
        throw new Error(
            "School draft projects could not be loaded from Sanity.",
        );
    }
}
