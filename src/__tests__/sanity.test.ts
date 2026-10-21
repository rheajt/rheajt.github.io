import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@sanity/client", () => ({
    createClient: () => ({ fetch: vi.fn() }),
}));

import {
    fetchPostBySlug,
    fetchPosts,
    fetchPostsWithImages,
    sanityClient,
    SITE_PROJECT_CATEGORY,
} from "~/lib/sanity";

const validPost = {
    _id: "project-1",
    title: "Project One",
    slug: { current: "project-one" },
    publishedAt: "2024-01-01",
    imageUrl: "/image.png",
    imageAlt: "Preview",
    tags: [{ label: "Solid", slug: { current: "solid" } }],
    body: [{ _type: "block", children: [{ _type: "span", text: "Body" }] }],
};

describe("Sanity post boundary", () => {
    beforeEach(() => {
        vi.mocked(sanityClient.fetch).mockReset();
    });

    describe.each([
        ["fetchPosts", fetchPosts, "$limit"],
        ["fetchPostsWithImages", fetchPostsWithImages, "$end"],
    ] as const)("%s", (_name, fetchListing, limitParameter) => {
        it("filters unroutable posts in GROQ before applying the limit", async () => {
            vi.mocked(sanityClient.fetch).mockResolvedValueOnce([]);
            await fetchListing(4);

            const [query, params] = vi.mocked(sanityClient.fetch).mock.calls[0];
            expect(params).toMatchObject({ category: SITE_PROJECT_CATEGORY });
            expect(query).toContain("defined(slug.current)");
            expect(query).toContain('slug.current != ""');
            expect(query.indexOf("defined(slug.current)")).toBeLessThan(
                query.indexOf(`[0...${limitParameter}]`),
            );
            expect(query.indexOf('slug.current != ""')).toBeLessThan(
                query.indexOf(`[0...${limitParameter}]`),
            );
            expect(query).toContain('!(_id in path("drafts.**"))');
            expect(query).toContain("draft != true");
            expect(query).toContain(`"imageUrl": coalesce(
    image.asset->url,
    mainImage.asset->url,
    coverImage.asset->url,
    body[_type == "image" && defined(asset)][0].asset->url
  )`);
        });

        it("preserves the all-category school listing option", async () => {
            vi.mocked(sanityClient.fetch).mockResolvedValueOnce([]);
            await fetchListing(6, null);

            const [query, params] = vi.mocked(sanityClient.fetch).mock.calls[0];
            expect(params).toMatchObject({ category: null });
            expect(query).toContain(
                "($category == null || category == $category)",
            );
        });

        it("drops invalid records, retains missing dates, and removes null tag references", async () => {
            const { publishedAt: _date, ...withoutDate } = validPost;
            const withNullTags = {
                ...validPost,
                tags: [null, ...validPost.tags],
            };
            vi.mocked(sanityClient.fetch).mockResolvedValueOnce([
                null,
                123,
                {},
                { ...validPost, _id: null },
                { ...validPost, title: null },
                { ...validPost, slug: undefined },
                { ...validPost, slug: null },
                { ...validPost, slug: {} },
                { ...validPost, slug: { current: "" } },
                { ...validPost, slug: { current: "   " } },
                { ...validPost, slug: { current: 42 } },
                validPost,
                withoutDate,
                { ...validPost, publishedAt: null },
                { ...validPost, publishedAt: "invalid" },
                withNullTags,
                { ...validPost, tags: null },
            ]);

            expect(await fetchListing()).toEqual([
                validPost,
                withoutDate,
                { ...validPost, publishedAt: null },
                { ...validPost, publishedAt: "invalid" },
                validPost,
                { ...validPost, tags: [] },
            ]);
            expect(withNullTags.tags[0]).toBeNull();
        });

        it.each([null, {}])(
            "handles a malformed listing response: %s",
            async response => {
                vi.mocked(sanityClient.fetch).mockResolvedValueOnce(response);
                expect(await fetchListing()).toEqual([]);
            },
        );
    });

    it("preserves valid detail data and normalizes null tag references", async () => {
        vi.mocked(sanityClient.fetch).mockResolvedValueOnce({
            ...validPost,
            tags: [null, ...validPost.tags],
        });

        const result = await fetchPostBySlug("project-one");
        expect(result).toEqual(validPost);
        expect(result?.body).toBe(validPost.body);
        const [query, params] = vi.mocked(sanityClient.fetch).mock.calls[0];
        expect(params).toEqual({
            slug: "project-one",
            category: SITE_PROJECT_CATEGORY,
        });
        expect(query).toContain("body[] {");
        expect(query).toContain("level,");
    });

    it.each([null, {}, { ...validPost, slug: null }])(
        "returns null for absent or malformed detail data: %s",
        async response => {
            vi.mocked(sanityClient.fetch).mockResolvedValueOnce(response);
            expect(await fetchPostBySlug("project-one")).toBeNull();
        },
    );

    it("keeps valid detail content with no publication date or tags", async () => {
        const { publishedAt: _date, tags: _tags, ...post } = validPost;
        vi.mocked(sanityClient.fetch).mockResolvedValueOnce({
            ...post,
            tags: null,
        });
        expect(await fetchPostBySlug("project-one")).toEqual({
            ...post,
            tags: [],
        });
    });
});
