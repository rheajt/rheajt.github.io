import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Router } from "@solidjs/router";
import { ProjectsSection } from "~/components/projects-section";

function renderInRouter(ui: () => any) {
    return render(() => (
        <Router root={() => ui()}>{[]}</Router>
    ));
}

describe("ProjectsSection", () => {
    it("does not render when projects is undefined", () => {
        const { container } = renderInRouter(() => (
            <ProjectsSection />
        ));
        expect(
            container.querySelector("section"),
        ).not.toBeInTheDocument();
    });

    it("does not render when projects is empty", () => {
        const { container } = renderInRouter(() => (
            <ProjectsSection projects={[]} />
        ));
        expect(
            container.querySelector("section"),
        ).not.toBeInTheDocument();
    });

    it("renders projects when provided", () => {
        const projects = [
            {
                id: "1",
                title: "Project One",
                slug: "project-one",
                excerpt: "First project description",
            },
            {
                id: "2",
                title: "Project Two",
                slug: "project-two",
                excerpt: "Second project description",
            },
        ];
        renderInRouter(() => (
            <ProjectsSection projects={projects} />
        ));
        expect(screen.getByText("Project One")).toBeInTheDocument();
        expect(screen.getByText("Project Two")).toBeInTheDocument();
        expect(
            screen.getByText("First project description"),
        ).toBeInTheDocument();
    });

    it("renders project image when imageUrl provided", () => {
        const projects = [
            {
                id: "1",
                title: "With Image",
                slug: "with-image",
                excerpt: "Has an image",
                imageUrl: "/img/test.png",
            },
        ];
        renderInRouter(() => (
            <ProjectsSection projects={projects} />
        ));
        const img = screen.getByAltText("With Image");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "/img/test.png");
    });
});
