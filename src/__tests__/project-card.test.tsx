import { describe, expect, it } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Router } from "@solidjs/router";
import { ProjectCard } from "~/components/project-card";
import type { SanityPost } from "~/lib/sanity";

const post: SanityPost = {
    _id: "shared-card",
    title: "Shared project",
    slug: { current: "shared-project" },
    summary: "A useful project.",
    publishedAt: "2026-01-03",
    imageUrl: "/project.png",
    imageAlt: "Project overview",
    tags: [{ label: "Planning", slug: { current: "planning" } }],
};

describe("ProjectCard", () => {
    it("renders a linked card with image, date, summary, and tags", () => {
        render(() => (
            <Router
                root={() => (
                    <ProjectCard post={post} href="/projects/shared-project" />
                )}
            >
                {[]}
            </Router>
        ));
        const card = screen.getByRole("link", { name: /Shared project/ });
        expect(card).toHaveAttribute("href", "/projects/shared-project");
        expect(screen.getByAltText("Project overview")).toHaveAttribute(
            "loading",
            "lazy",
        );
        expect(card.querySelector("time")).toHaveTextContent("January 3, 2026");
        expect(card.querySelector("time")).toHaveAttribute(
            "datetime",
            "2026-01-03",
        );
        expect(card.querySelector("p")).toHaveTextContent(post.summary!);
        expect(card.querySelector(".tag")).toHaveTextContent("Planning");
    });

    it.each([undefined, null, "invalid"])(
        "renders a non-link article with placeholder and no invalid date (%s)",
        publishedAt => {
            render(() => (
                <ProjectCard
                    post={{
                        ...post,
                        imageUrl: undefined,
                        publishedAt,
                        summary: undefined,
                        tags: [],
                    }}
                />
            ));
            const card = screen.getByRole("article");
            expect(card).not.toHaveAttribute("href");
            expect(card).not.toHaveAttribute("tabindex");
            expect(card.querySelector("a, img, time, p, .tags")).toBeNull();
            expect(
                card.querySelector(".card-image.placeholder"),
            ).toHaveTextContent(post.title);
            expect(
                screen.getByRole("heading", { name: post.title }),
            ).toBeInTheDocument();
        },
    );

    it("uses the title as image alt text when no alt is provided", () => {
        render(() => <ProjectCard post={{ ...post, imageAlt: undefined }} />);
        expect(screen.getByAltText(post.title)).toHaveAttribute(
            "src",
            post.imageUrl,
        );
    });
});
