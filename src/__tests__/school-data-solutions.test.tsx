import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@solidjs/testing-library";
import { Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";
import { fetchPosts, type SanityPost } from "~/lib/sanity";
import SchoolDataSolutions from "~/routes/school-data-solutions";

vi.mock("~/lib/sanity", () => ({ fetchPosts: vi.fn() }));

const posts: SanityPost[] = [
    {
        _id: "school-1", title: "School scheduling workspace",
        slug: { current: "school-scheduling" }, publishedAt: "2026-01-01",
        summary: "Review scheduling information in one place.",
        imageUrl: "/school-workspace.png", imageAlt: "Scheduling workspace overview",
        tags: [
            { label: "PowerSchool", slug: { current: "powerschool" } },
            { label: "Planning", slug: { current: "planning" } },
        ],
    },
    {
        _id: "school-2", title: "Planning notebook",
        slug: { current: "planning-notebook" }, publishedAt: "2026-01-02",
        imageUrl: "/notebook.png",
        tags: [{ label: "Planning", slug: { current: "planning" } }],
    },
    {
        _id: "school-3", title: "A small school tool",
        slug: { current: "small-tool" }, publishedAt: "2026-01-03",
    },
];

function renderPage() {
    return render(() => (
        <MetaProvider>
            <Router root={() => <SchoolDataSolutions />}>{[]}</Router>
        </MetaProvider>
    ));
}

beforeEach(() => {
    vi.mocked(fetchPosts).mockReset();
    vi.mocked(fetchPosts).mockResolvedValue(posts);
});

describe("School Data Solutions", () => {
    it("loads school-category highlights, logo, and existing navigation", async () => {
        renderPage();
        expect(fetchPosts).toHaveBeenCalledWith(undefined, "schooldata.solutions");
        expect(await screen.findByRole("heading", { name: "School scheduling workspace" })).toBeInTheDocument();
        expect(screen.getAllByRole("main")).toHaveLength(1);
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("School Data Solutions");
        expect(screen.getByAltText("School Data Solutions logo")).toHaveAttribute("src", "/school-data-solutions-new-logo.png");
        expect(screen.getByRole("link", { name: /Explore projects/ })).toHaveAttribute("href", "#project-highlights");
        expect(screen.getByRole("link", { name: /Discuss your school/ })).toHaveAttribute("href", "#start-a-conversation");
        expect(screen.getByRole("link", { name: "Start a conversation" })).toHaveAttribute("href", "/contact");
        expect(screen.getByText(posts[0].summary!)).toBeInTheDocument();
        for (const card of screen.getAllByRole("article")) {
            expect(card.querySelector("a, details")).toBeNull();
        }
    });

    it("derives unique filters from fetched tags and resets to every project", async () => {
        renderPage();
        const filters = within(await screen.findByRole("group", { name: "Filter projects by tag" }));
        expect(filters.getAllByRole("button").map(button => button.textContent)).toEqual(["All", "Planning", "PowerSchool"]);
        for (const [tag, count] of [["Planning", 2], ["PowerSchool", 1]] as const) {
            fireEvent.click(filters.getByRole("button", { name: tag, exact: true }));
            expect(filters.getByRole("button", { name: tag, exact: true })).toHaveAttribute("aria-pressed", "true");
            expect(filters.getAllByRole("button").filter(button => button.getAttribute("aria-pressed") === "true")).toHaveLength(1);
            expect(screen.getAllByRole("article")).toHaveLength(count);
            expect(screen.queryByRole("heading", { name: "A small school tool" })).not.toBeInTheDocument();
            expect(screen.getByRole("status")).toHaveTextContent(`${count} ${count === 1 ? "project" : "projects"} · ${tag}`);
        }
        fireEvent.click(filters.getByRole("button", { name: "All", exact: true }));
        expect(filters.getByRole("button", { name: "All", exact: true })).toHaveAttribute("aria-pressed", "true");
        expect(screen.getAllByRole("article")).toHaveLength(3);
        expect(screen.getByRole("status")).toHaveTextContent("3 projects · All projects");
    });

    it("handles optional images, summaries, and tags without fabricated content", async () => {
        renderPage();
        await screen.findByRole("heading", { name: "School scheduling workspace" });
        expect(screen.getByAltText("Scheduling workspace overview")).toHaveAttribute("src", "/school-workspace.png");
        expect(screen.getByAltText("Planning notebook")).toHaveAttribute("src", "/notebook.png");
        const minimalCard = screen.getByRole("heading", { name: "A small school tool" }).closest("article")!;
        expect(minimalCard.querySelector("img, p")).toBeNull();
        expect(minimalCard.textContent).toBe("A small school tool");
    });

    it("keeps untagged projects visible without empty filter controls", async () => {
        vi.mocked(fetchPosts).mockResolvedValue([posts[2]]);
        renderPage();
        await screen.findByRole("heading", { name: "A small school tool" });
        expect(screen.queryByRole("group", { name: "Filter projects by tag" })).not.toBeInTheDocument();
        expect(screen.getAllByRole("article")).toHaveLength(1);
    });

    it("shows loading while keeping the introduction and contact available", async () => {
        let resolve!: (posts: SanityPost[]) => void;
        vi.mocked(fetchPosts).mockReturnValue(new Promise(done => { resolve = done; }));
        renderPage();
        expect(screen.getByRole("status")).toHaveTextContent("Loading projects…");
        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Start a conversation" })).toBeInTheDocument();
        resolve(posts);
        await screen.findByRole("heading", { name: "School scheduling workspace" });
        expect(screen.queryByText("Loading projects…")).not.toBeInTheDocument();
    });

    it("shows a useful empty state", async () => {
        vi.mocked(fetchPosts).mockResolvedValue([]);
        renderPage();
        expect(await screen.findByText(/No project highlights are available yet/)).toBeInTheDocument();
        expect(screen.queryByRole("article")).not.toBeInTheDocument();
        expect(screen.queryByRole("group", { name: "Filter projects by tag" })).not.toBeInTheDocument();
    });

    it("handles fetch failures without hiding contact or presenting an empty state", async () => {
        vi.mocked(fetchPosts).mockRejectedValue(new Error("offline"));
        renderPage();
        expect(await screen.findByRole("alert")).toHaveTextContent("Projects couldn’t be loaded.");
        expect(screen.queryByText(/No project highlights/)).not.toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Start a conversation" })).toHaveAttribute("href", "/contact");
    });

    it("preserves project-specific SEO descriptions", () => {
        renderPage();
        for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
            expect(document.head.querySelector(selector)).toHaveAttribute("content", "School workflow projects for scheduling, ManageBac imports, staff information, and Google Sheets prototypes.");
        }
    });
});
