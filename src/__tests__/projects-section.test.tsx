import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Router } from "@solidjs/router";

vi.mock("~/lib/sanity", () => ({
    fetchPosts: vi.fn(() =>
        Promise.resolve([
            {
                _id: "1",
                title: "Project One",
                slug: { current: "project-one" },
                summary: "First project description",
                publishedAt: "2024-01-01",
                imageUrl: "/img/test.png",
            },
        ]),
    ),
}));

import { ProjectsSection } from "~/components/projects-section";
import { fetchPosts } from "~/lib/sanity";

function renderInRouter(ui: () => any) {
    return render(() => <Router root={() => ui()}>{[]}</Router>);
}

describe("ProjectsSection", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders projects from Sanity", async () => {
        renderInRouter(() => <ProjectsSection />);
        expect(vi.mocked(fetchPosts)).toHaveBeenCalledWith(4);
        expect(await screen.findByText("Project One")).toBeInTheDocument();
        expect(
            screen.getByText("First project description"),
        ).toBeInTheDocument();
        expect(screen.getByText("January 1, 2024")).toBeInTheDocument();
        expect(screen.queryByRole("link", { name: "Project One" })).toBeNull();
    });

    it("renders a View All Projects link", async () => {
        renderInRouter(() => <ProjectsSection />);
        const link = await screen.findByText("View All Projects");
        expect(link).toBeInTheDocument();
        expect(link.closest("a")).toHaveAttribute("href", "/projects");
    });

    it("shows an error message when projects are unavailable", async () => {
        vi.mocked(fetchPosts).mockRejectedValueOnce(new Error("offline"));
        renderInRouter(() => <ProjectsSection />);
        expect(
            await screen.findByText(/projects are temporarily unavailable/i),
        ).toBeInTheDocument();
    });
});
