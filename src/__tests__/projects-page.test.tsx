import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";

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
                imageAlt: "Test image",
            },
        ]),
    ),
}));

import Projects from "~/routes/projects/index";
import { fetchPosts } from "~/lib/sanity";

function renderInRouter(ui: () => any) {
    return render(() => (
        <MetaProvider>
            <Router root={() => ui()}>{[]}</Router>
        </MetaProvider>
    ));
}

describe("Projects route", () => {
    it("renders published posts from Sanity", async () => {
        renderInRouter(() => <Projects />);
        expect(vi.mocked(fetchPosts)).toHaveBeenCalledWith();
        expect(await screen.findByText("Project One")).toBeInTheDocument();
        expect(
            screen.getByText("First project description"),
        ).toBeInTheDocument();
        expect(screen.getByAltText("Test image")).toBeInTheDocument();
        expect(screen.getByText("January 1, 2024")).toBeInTheDocument();

        const link = screen.getByRole("link", { name: /Project One/i });
        expect(link).toHaveAttribute("href", "/projects/project-one");
    });

    it("shows an error message when Sanity fails", async () => {
        vi.mocked(fetchPosts).mockRejectedValueOnce(new Error("offline"));
        renderInRouter(() => <Projects />);
        expect(
            await screen.findByText(/failed to load projects/i),
        ).toBeInTheDocument();
    });
});
