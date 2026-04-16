import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Router } from "@solidjs/router";
import { Header, BasicHeader } from "~/components/header";

function renderInRouter(ui: () => any) {
    return render(() => (
        <Router root={() => ui()}>{[]}</Router>
    ));
}

describe("Header", () => {
    it("renders logo image", () => {
        renderInRouter(() => <Header pathname="/" />);
        const img = screen.getByAltText("jordan rhea header");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute(
            "src",
            "/content/img/jr-icon.png",
        );
    });

    it("renders navigation links", () => {
        renderInRouter(() => <Header pathname="/" />);
        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
    });

    it("renders Contact button", () => {
        renderInRouter(() => <Header pathname="/" />);
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    it("marks active link based on pathname", () => {
        const { container } = renderInRouter(() => (
            <Header pathname="/projects" />
        ));
        const projectsLink = container.querySelector(
            'a[href="/projects"]',
        );
        expect(projectsLink?.className).toContain("active");
    });

    it("renders dropdown children for About", () => {
        renderInRouter(() => <Header pathname="/" />);
        expect(
            screen.getByText("Language Learning"),
        ).toBeInTheDocument();
        expect(screen.getByText("Vexillology")).toBeInTheDocument();
    });
});

describe("BasicHeader", () => {
    it("renders logo image", () => {
        renderInRouter(() => <BasicHeader />);
        const img = screen.getByAltText("jordan rhea header");
        expect(img).toBeInTheDocument();
    });
});
