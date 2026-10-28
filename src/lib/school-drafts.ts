import type { SanityPost } from "./sanity";

export async function fetchSchoolDraftPosts(): Promise<SanityPost[]> {
    "use server";

    if (!import.meta.env.DEV) {
        throw new Error(
            "School draft preview is only available in development.",
        );
    }

    const { fetchSchoolDraftPostsFromSanity } =
        await import("./school-drafts.server");
    return fetchSchoolDraftPostsFromSanity();
}
