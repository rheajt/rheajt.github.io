import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@solidjs/testing-library";
import { Router } from "@solidjs/router";
import { MetaProvider } from "@solidjs/meta";
import { fetchPosts, type SanityPost } from "~/lib/sanity";
import { fetchSchoolDraftPosts } from "~/lib/school-drafts";
import SchoolDataSolutions from "~/routes/school-data-solutions";

vi.mock("~/lib/sanity", () => ({ fetchPosts: vi.fn() }));
vi.mock("~/lib/school-drafts", () => ({ fetchSchoolDraftPosts: vi.fn() }));

const posts: SanityPost[] = [
    {
        _id: "school-1",
        title: "School scheduling workspace",
        _originalId: "drafts.school-1",
        slug: { current: "school-scheduling" },
        publishedAt: "2026-01-01",
        category: "schooldata.solutions",
        summary: "Review scheduling information in one place.",
        imageUrl: "/school-workspace.png",
        imageAlt: "Scheduling workspace overview",
        tags: [
            { label: "PowerSchool", slug: { current: "powerschool" } },
            { label: "Planning", slug: { current: "planning" } },
        ],
    },
    {
        _id: "school-2",
        title: "Planning notebook",
        _originalId: "drafts.school-2",
        slug: { current: "planning-notebook" },
        publishedAt: "2026-01-02",
        category: "schooldata.solutions",
        imageUrl: "/notebook.png",
        tags: [{ label: "Planning", slug: { current: "planning" } }],
    },
    {
        _id: "school-3",
        title: "A small school tool",
        _originalId: "drafts.school-3",
        category: "schooldata.solutions",
        slug: { current: "small-tool" },
        publishedAt: "2026-01-03",
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
    vi.stubEnv("DEV", true);
    vi.mocked(fetchPosts).mockReset();
    vi.mocked(fetchPosts).mockResolvedValue(posts);
    vi.mocked(fetchSchoolDraftPosts).mockReset();
    vi.mocked(fetchSchoolDraftPosts).mockResolvedValue(posts);
});

afterEach(() => vi.unstubAllEnvs());

const excludedPosts: SanityPost[] = [
    "jordanrhea.com",
    "schooldata.solutions-preview",
    "Schooldata.solutions",
    "schooldata.solutions ",
    undefined,
].map((category, index) => ({
    _id: `excluded-${index}`,
    title: `Excluded project ${index}`,
    slug: { current: `excluded-${index}` },
    category,
    tags: [
        {
            label: `Excluded tag ${index}`,
            slug: { current: `excluded-${index}` },
        },
    ],
}));

describe.each([true, false])("school category guard (DEV=%s)", dev => {
    beforeEach(() => vi.stubEnv("DEV", dev));

    it("excludes wrong, near-match, and missing categories before cards, filters, and counts", async () => {
        vi.mocked(dev ? fetchSchoolDraftPosts : fetchPosts).mockResolvedValue([
            ...posts,
            ...excludedPosts,
        ]);
        renderPage();
        await screen.findByRole("heading", { name: posts[0].title });
        expect(screen.getAllByRole("article")).toHaveLength(3);
        expect(screen.getByRole("status")).toHaveTextContent(
            "3 projects · All projects",
        );
        for (const post of excludedPosts) {
            expect(screen.queryByText(post.title)).not.toBeInTheDocument();
            expect(
                screen.queryByText(post.tags![0].label),
            ).not.toBeInTheDocument();
        }
        fireEvent.click(screen.getByRole("button", { name: "Planning" }));
        expect(screen.getAllByRole("article")).toHaveLength(2);
        expect(screen.getByRole("status")).toHaveTextContent(
            "2 projects · Planning",
        );
    });

    it("shows the empty state when every upstream record is excluded", async () => {
        vi.mocked(dev ? fetchSchoolDraftPosts : fetchPosts).mockResolvedValue(
            excludedPosts,
        );
        renderPage();
        expect(
            await screen.findByText(/No projects are available yet/),
        ).toBeInTheDocument();
        expect(screen.queryByRole("article")).not.toBeInTheDocument();
        expect(
            screen.queryByRole("group", { name: "Filter projects by tag" }),
        ).not.toBeInTheDocument();
        expect(screen.queryByText(/· All projects/)).not.toBeInTheDocument();
        for (const post of excludedPosts) {
            expect(screen.queryByText(post.title)).not.toBeInTheDocument();
            expect(
                screen.queryByText(post.tags![0].label),
            ).not.toBeInTheDocument();
        }
    });
});

describe("School Data Solutions", () => {
    it("loads draft school projects in development, logo, and existing navigation", async () => {
        renderPage();
        expect(fetchSchoolDraftPosts).toHaveBeenCalledExactlyOnceWith();
        expect(fetchPosts).not.toHaveBeenCalled();
        expect(
            await screen.findByRole("heading", {
                name: "School scheduling workspace",
            }),
        ).toBeInTheDocument();
        expect(
            screen.getByText("School Data Solutions Projects"),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "All of the projects I have been working on for building custom tools for schools.",
            ),
        ).toBeInTheDocument();
        expect(screen.getAllByRole("article")).toHaveLength(posts.length);
        for (const post of posts) {
            expect(
                screen.getByRole("heading", { level: 3, name: post.title }),
            ).toBeInTheDocument();
        }
        expect(screen.getAllByRole("main")).toHaveLength(1);
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
            "School Data Solutions",
        );
        expect(
            screen.getByAltText("School Data Solutions logo"),
        ).toHaveAttribute("src", "/school-data-solutions-new-logo.png");
        expect(
            screen.getByRole("link", { name: /Explore projects/ }),
        ).toHaveAttribute("href", "#project-highlights");
        expect(
            screen.getByRole("link", { name: /Discuss your school/ }),
        ).toHaveAttribute("href", "#start-a-conversation");
        expect(
            screen.getByRole("link", { name: "Start a conversation" }),
        ).toHaveAttribute("href", "/contact");
        expect(screen.getByText(posts[0].summary!)).toBeInTheDocument();
        for (const card of screen.getAllByRole("article")) {
            expect(card.querySelector("a, details")).toBeNull();
        }
    });

    it("loads only the published school category without a limit in production", async () => {
        vi.stubEnv("DEV", false);
        vi.mocked(fetchPosts).mockResolvedValueOnce([
            {
                ...posts[0],
                _originalId: undefined,
                title: "Published school project",
            },
        ]);
        renderPage();

        expect(fetchPosts).toHaveBeenCalledExactlyOnceWith(
            undefined,
            "schooldata.solutions",
        );
        expect(fetchSchoolDraftPosts).not.toHaveBeenCalled();
        expect(
            await screen.findByRole("heading", {
                name: "Published school project",
            }),
        ).toBeInTheDocument();
        expect(screen.getAllByRole("article")).toHaveLength(1);
    });

    it("renders every returned school draft beyond common result caps", async () => {
        const allPosts: SanityPost[] = Array.from(
            { length: 105 },
            (_, index) => ({
                _id: `project-${index}`,
                _originalId: `drafts.project-${index}`,
                title: `Draft project ${index}`,
                slug: { current: `project-${index}` },
                publishedAt: "2026-01-01",
                category: "schooldata.solutions",
            }),
        );
        vi.mocked(fetchSchoolDraftPosts).mockResolvedValue(allPosts);
        const { container, findByText } = renderPage();
        // Match the final heading directly instead of computing accessible
        // names for all 105 styled cards on every async query retry.
        expect(
            await findByText(allPosts[104].title, {
                selector: "#project-list article h3",
            }),
        ).toBeVisible();
        expect(fetchSchoolDraftPosts).toHaveBeenCalledExactlyOnceWith();
        const list = container.querySelector<HTMLElement>("#project-list")!;
        expect(list).toBeVisible();
        // Native article elements preserve the semantic-card assertion without
        // repeating jsdom's expensive computed visibility checks for every card.
        const cards = Array.from(list.querySelectorAll("article"));
        expect(cards).toHaveLength(105);
        expect(
            cards.map(card => card.querySelector("h3")?.textContent),
        ).toEqual(allPosts.map(post => post.title));
        expect(screen.getByRole("status")).toHaveTextContent(
            /^105 projects · All projects$/,
        );
    });

    it("derives unique filters from fetched tags and resets to every project", async () => {
        renderPage();
        const filters = within(
            await screen.findByRole("group", {
                name: "Filter projects by tag",
            }),
        );
        expect(
            filters.getAllByRole("button").map(button => button.textContent),
        ).toEqual(["All", "Planning", "PowerSchool"]);
        for (const [tag, count] of [
            ["Planning", 2],
            ["PowerSchool", 1],
        ] as const) {
            fireEvent.click(filters.getByRole("button", { name: tag }));
            expect(filters.getByRole("button", { name: tag })).toHaveAttribute(
                "aria-pressed",
                "true",
            );
            expect(
                filters
                    .getAllByRole("button")
                    .filter(
                        button =>
                            button.getAttribute("aria-pressed") === "true",
                    ),
            ).toHaveLength(1);
            expect(screen.getAllByRole("article")).toHaveLength(count);
            expect(
                screen.queryByRole("heading", { name: "A small school tool" }),
            ).not.toBeInTheDocument();
            expect(screen.getByRole("status")).toHaveTextContent(
                `${count} ${count === 1 ? "project" : "projects"} · ${tag}`,
            );
        }
        fireEvent.click(filters.getByRole("button", { name: "All" }));
        expect(filters.getByRole("button", { name: "All" })).toHaveAttribute(
            "aria-pressed",
            "true",
        );
        expect(screen.getAllByRole("article")).toHaveLength(3);
        expect(screen.getByRole("status")).toHaveTextContent(
            "3 projects · All projects",
        );
        for (const post of posts) {
            expect(
                screen.getByRole("heading", { name: post.title }),
            ).toBeInTheDocument();
        }
    });

    it("handles optional images, summaries, and tags without fabricated content", async () => {
        renderPage();
        await screen.findByRole("heading", {
            name: "School scheduling workspace",
        });
        expect(
            screen.getByAltText("Scheduling workspace overview"),
        ).toHaveAttribute("src", "/school-workspace.png");
        expect(screen.getByAltText("Planning notebook")).toHaveAttribute(
            "src",
            "/notebook.png",
        );
        const minimalCard = screen
            .getByRole("heading", { name: "A small school tool" })
            .closest("article")!;
        expect(minimalCard.querySelector("img, p")).toBeNull();
        expect(
            minimalCard.querySelector(".card-image.placeholder"),
        ).toHaveTextContent("A small school tool");
        expect(minimalCard.querySelector("time")).toHaveAttribute(
            "datetime",
            "2026-01-03",
        );
        expect(minimalCard.querySelector(".tags")).toBeNull();
    });

    it("keeps untagged projects visible without empty filter controls", async () => {
        vi.mocked(fetchSchoolDraftPosts).mockResolvedValue([posts[2]]);
        renderPage();
        await screen.findByRole("heading", { name: "A small school tool" });
        expect(
            screen.queryByRole("group", { name: "Filter projects by tag" }),
        ).not.toBeInTheDocument();
        expect(screen.getAllByRole("article")).toHaveLength(1);
    });

    it("shows loading while keeping the introduction and contact available", async () => {
        let resolve!: (posts: SanityPost[]) => void;
        vi.mocked(fetchSchoolDraftPosts).mockReturnValue(
            new Promise(done => {
                resolve = done;
            }),
        );
        renderPage();
        expect(screen.getByRole("status")).toHaveTextContent(
            "Loading projects…",
        );
        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: "Start a conversation" }),
        ).toBeInTheDocument();
        resolve(posts);
        await screen.findByRole("heading", {
            name: "School scheduling workspace",
        });
        expect(screen.queryByText("Loading projects…")).not.toBeInTheDocument();
    });

    it("shows a useful empty state", async () => {
        vi.mocked(fetchSchoolDraftPosts).mockResolvedValue([]);
        renderPage();
        expect(
            await screen.findByText(/No projects are available yet/),
        ).toBeInTheDocument();
        expect(screen.queryByRole("article")).not.toBeInTheDocument();
        expect(
            screen.queryByRole("group", { name: "Filter projects by tag" }),
        ).not.toBeInTheDocument();
    });

    it("handles fetch failures without hiding contact or presenting an empty state", async () => {
        vi.mocked(fetchSchoolDraftPosts).mockRejectedValue(
            new Error(
                "Set SANITY_READ_TOKEN on the development server to load school drafts.",
            ),
        );
        renderPage();
        expect(await screen.findByRole("alert")).toHaveTextContent(
            "Projects couldn’t be loaded.",
        );
        expect(
            screen.queryByText(/No projects are available/),
        ).not.toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: "Start a conversation" }),
        ).toHaveAttribute("href", "/contact");
    });

    it("preserves project-specific SEO descriptions", () => {
        renderPage();
        for (const selector of [
            'meta[name="description"]',
            'meta[property="og:description"]',
            'meta[name="twitter:description"]',
        ]) {
            expect(document.head.querySelector(selector)).toHaveAttribute(
                "content",
                "School workflow projects for scheduling, ManageBac imports, staff information, and Google Sheets prototypes.",
            );
        }
    });
});
