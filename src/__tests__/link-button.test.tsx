import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Router } from "@solidjs/router";
import { LinkButton } from "~/components/link-button";

function renderInRouter(ui: () => any) {
    return render(() => <Router root={() => ui()}>{[]}</Router>);
}

describe("LinkButton", () => {
    it("renders internal link with label", () => {
        renderInRouter(() => <LinkButton href="/contact" label="Contact" />);
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    it("renders external link for http URLs", () => {
        const { container } = renderInRouter(() => (
            <LinkButton href="https://example.com" label="External" />
        ));
        const link = container.querySelector("a");
        expect(link).toHaveAttribute("href", "https://example.com");
        expect(screen.getByText("External")).toBeInTheDocument();
    });

    it("applies active class when pathname matches", () => {
        const { container } = renderInRouter(() => (
            <LinkButton pathname="/contact" href="/contact" label="Contact" />
        ));
        const btn = container.querySelector(".page-button");
        expect(btn?.className).toContain("active");
    });

    it("does not apply active class when pathname does not match", () => {
        const { container } = renderInRouter(() => (
            <LinkButton pathname="/about" href="/contact" label="Contact" />
        ));
        const btn = container.querySelector(".page-button");
        const classes = btn?.className.split(" ") ?? [];
        expect(classes).not.toContain("active");
    });
});
