import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { loadPrivateModule, fetchPrivateDrafts } = vi.hoisted(() => ({
    loadPrivateModule: vi.fn(),
    fetchPrivateDrafts: vi.fn(),
}));

vi.mock("~/lib/school-drafts.server", () => {
    loadPrivateModule();
    return { fetchSchoolDraftPostsFromSanity: fetchPrivateDrafts };
});

describe("school draft server function", () => {
    beforeEach(() => {
        vi.resetModules();
        vi.clearAllMocks();
    });

    afterEach(() => vi.unstubAllEnvs());

    it("rejects production calls before importing the private implementation", async () => {
        vi.stubEnv("DEV", false);
        const { fetchSchoolDraftPosts } = await import("~/lib/school-drafts");

        await expect(fetchSchoolDraftPosts()).rejects.toThrow(
            "School draft preview is only available in development.",
        );
        expect(loadPrivateModule).not.toHaveBeenCalled();
        expect(fetchPrivateDrafts).not.toHaveBeenCalled();
    });

    it("loads private draft data only in development without accepting query input", async () => {
        vi.stubEnv("DEV", true);
        const drafts = [{ _id: "school-1", _originalId: "drafts.school-1" }];
        fetchPrivateDrafts.mockResolvedValueOnce(drafts);
        const { fetchSchoolDraftPosts } = await import("~/lib/school-drafts");

        expect(loadPrivateModule).not.toHaveBeenCalled();
        expect(await fetchSchoolDraftPosts()).toEqual(drafts);
        expect(loadPrivateModule).toHaveBeenCalledOnce();
        expect(fetchPrivateDrafts).toHaveBeenCalledExactlyOnceWith();
    });
});
