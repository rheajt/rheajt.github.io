import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Hero } from "~/components/hero";

describe("Hero", () => {
    it("renders hero heading", () => {
        const { container } = render(() => <Hero />);
        expect(container.textContent).toContain("I am Jordan Rhea");
    });

    it("renders hero image", () => {
        render(() => <Hero />);
        const img = screen.getByAltText("jordan rhea header");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute(
            "src",
            "/content/img/jordan-rhea-header.png",
        );
    });

    it("renders cloud tech text", () => {
        const { container } = render(() => <Hero />);
        expect(container.textContent).toContain(
            "and I build software for",
        );
    });
});
