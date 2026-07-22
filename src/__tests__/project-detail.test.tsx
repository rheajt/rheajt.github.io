import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";

vi.mock("~/lib/sanity", () => ({
    fetchPostBySlug: vi.fn(() =>
        Promise.resolve({
            _id: "project-1",
            title: "Project One",
            slug: { current: "project-one" },
            publishedAt: "2024-01-01",
            summary: "A concise project summary.",
            imageUrl: "https://cdn.sanity.io/images/project.png",
            imageAlt: "Project preview",
            body: [],
        }),
    ),
}));

vi.mock("@solidjs/router", async importOriginal => {
    const actual = await importOriginal<typeof import("@solidjs/router")>();
    return { ...actual, useParams: () => ({ slug: "project-one" }) };
});

import ProjectDetail from "~/routes/projects/[slug]";
import { fetchPostBySlug } from "~/lib/sanity";

describe("Project detail route", () => {
    it("loads the scoped project and supplies project canonical social metadata", async () => {
        render(() => (
            <MetaProvider>
                <Router root={() => <ProjectDetail />}>{[]}</Router>
            </MetaProvider>
        ));

        expect(vi.mocked(fetchPostBySlug)).toHaveBeenCalledWith("project-one");
        expect(
            await screen.findByRole("heading", { name: "Project One" }),
        ).toBeInTheDocument();
        expect(
            screen.getByText("A concise project summary."),
        ).toBeInTheDocument();
        expect(screen.getByAltText("Project preview")).toBeInTheDocument();
        expect(document.title).toBe("Project One | jordan rhea");
        expect(
            document.head
                .querySelector('link[rel="canonical"]')
                ?.getAttribute("href"),
        ).toBe("https://jordanrhea.com/projects/project-one");
        expect(
            document.head
                .querySelector('meta[property="og:image"]')
                ?.getAttribute("content"),
        ).toBe("https://cdn.sanity.io/images/project.png");
        expect(
            document.head
                .querySelector('meta[name="description"]')
                ?.getAttribute("content"),
        ).toBe("A concise project summary.");
    });

    it("renders the existing 404 page when the project does not exist", async () => {
        vi.mocked(fetchPostBySlug).mockResolvedValueOnce(null);

        render(() => (
            <MetaProvider>
                <Router root={() => <ProjectDetail />}>{[]}</Router>
            </MetaProvider>
        ));

        expect(
            await screen.findByRole("heading", { name: "404: Not Found" }),
        ).toBeInTheDocument();
    });
});
