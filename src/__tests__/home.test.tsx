import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";

vi.mock("~/lib/sanity", () => ({
    fetchPosts: vi.fn().mockResolvedValue([
        {
            _id: "ready-project",
            title: "Ready Project",
            slug: { current: "ready-project" },
            imageUrl: "/project.png",
        },
    ]),
}));

import Home from "~/routes/index";

describe("Home", () => {
    it("does not retain a loading status after projects finish loading", async () => {
        render(() => (
            <MetaProvider>
                <Router root={() => <Home />}>{[]}</Router>
            </MetaProvider>
        ));

        expect(
            await screen.findByRole("heading", { name: "Ready Project" }),
        ).toBeInTheDocument();
        expect(
            screen.queryByText(/^Loading(?:…|\.{3})$/),
        ).not.toBeInTheDocument();
    });
});
