import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { previewFetch, withConfig, publicFetch } = vi.hoisted(() => ({
    previewFetch: vi.fn(),
    withConfig: vi.fn(),
    publicFetch: vi.fn(),
}));

vi.mock("@sanity/client", () => ({
    createClient: () => ({ fetch: publicFetch, withConfig }),
}));

import { fetchSchoolDraftPostsFromSanity } from "~/lib/school-drafts.server";
import { postCardProjection } from "~/lib/sanity";

const draft = {
    _id: "school-1",
    _originalId: "drafts.school-1",
    _type: "post",
    title: "Draft school project",
    slug: { current: "school-project" },
    category: "schooldata.solutions",
    imageUrl: "/preview.png",
    tags: [{ label: "Planning" }],
};

describe("private school draft data", () => {
    beforeEach(() => {
        vi.resetAllMocks();
        vi.stubEnv("SANITY_READ_TOKEN", "test-only-draft-token");
        withConfig.mockReturnValue({ fetch: previewFetch });
        previewFetch.mockResolvedValue([draft]);
    });

    afterEach(() => {
        vi.unstubAllEnvs();
        vi.restoreAllMocks();
    });

    it("authenticates a non-CDN drafts client without changing the public client", async () => {
        await fetchSchoolDraftPostsFromSanity();
        expect(withConfig).toHaveBeenCalledExactlyOnceWith({
            perspective: "drafts",
            useCdn: false,
            token: "test-only-draft-token",
        });
        expect(publicFetch).not.toHaveBeenCalled();
    });

    it("queries only draft-origin school posts using a fixed parameterized category", async () => {
        await fetchSchoolDraftPostsFromSanity();
        const [query, params] = previewFetch.mock.calls[0];
        expect(params).toEqual({ category: "schooldata.solutions" });
        expect(query).toContain('_type == "post"');
        expect(query).toContain("category == $category");
        expect(query).not.toContain("schooldata.solutions");
        expect(query).toContain('_originalId in path("drafts.**")');
        expect(query).not.toContain('!(_originalId in path("drafts.**"))');
        expect(query).not.toContain("draft != true");
        expect(query).toContain(postCardProjection);
        expect(postCardProjection).toContain("_originalId,");
        expect(postCardProjection).toContain("_type,");
    });

    it("retains only exact school-category drafts from a mixed response", async () => {
        const { category: _category, ...withoutCategory } = draft;
        previewFetch.mockResolvedValue([
            draft,
            { ...draft, category: "jordanrhea.com" },
            { ...draft, category: "school-data-solutions" },
            withoutCategory,
            { ...draft, _originalId: "school-1" },
        ]);

        expect(await fetchSchoolDraftPostsFromSanity()).toEqual([draft]);
    });

    it("retains draft origin and shared normalization, dropping incomplete or published-only records", async () => {
        previewFetch.mockResolvedValue([
            { ...draft, tags: [null, ...draft.tags] },
            { ...draft, _originalId: "drafts.folder.school-2" },
            { ...draft, _originalId: "school-1" },
            { ...draft, _originalId: undefined },
            { ...draft, _originalId: 123 },
            { ...draft, _originalId: "not-drafts.school-1" },
            { ...draft, _id: "" },
            { ...draft, title: " " },
            { ...draft, title: undefined },
            { ...draft, slug: undefined },
            { ...draft, slug: { current: " " } },
            null,
        ]);
        expect(await fetchSchoolDraftPostsFromSanity()).toEqual([
            draft,
            { ...draft, _originalId: "drafts.folder.school-2" },
        ]);
    });

    it.each([undefined, "", "   "])(
        "requires a nonblank server token before creating the preview client: %s",
        async token => {
            vi.stubEnv("SANITY_READ_TOKEN", token);
            await expect(fetchSchoolDraftPostsFromSanity()).rejects.toThrow(
                "Set SANITY_READ_TOKEN on the development server to load school drafts.",
            );
            expect(withConfig).not.toHaveBeenCalled();
            expect(previewFetch).not.toHaveBeenCalled();
        },
    );

    it("never logs draft payloads or serializes provider error details", async () => {
        const log = vi.spyOn(console, "log").mockImplementation(() => {});
        const error = vi.spyOn(console, "error").mockImplementation(() => {});
        const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
        expect(await fetchSchoolDraftPostsFromSanity()).toEqual([draft]);

        previewFetch.mockRejectedValue(new Error("private provider details"));
        await expect(fetchSchoolDraftPostsFromSanity()).rejects.toThrow(
            /^School draft projects could not be loaded from Sanity\.$/,
        );
        expect(log).not.toHaveBeenCalled();
        expect(error).not.toHaveBeenCalled();
        expect(warn).not.toHaveBeenCalled();
    });
});
