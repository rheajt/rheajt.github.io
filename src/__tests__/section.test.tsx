import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Section } from "~/components/section";

describe("Section", () => {
    it("keeps the shared shell alongside route-specific classes and styles", () => {
        const { container } = render(() => (
            <Section className="intro" style={{ "padding-top": "0" }}>
                Content
            </Section>
        ));
        const section = container.querySelector("section")!;
        expect(section).toHaveClass("layout-section", "intro");
        expect(section.style.paddingTop).toBe("0px");
    });
    it("renders children content", () => {
        render(() => (
            <Section>
                <p>Hello Section</p>
            </Section>
        ));
        expect(screen.getByText("Hello Section")).toBeInTheDocument();
    });

    it("renders as a section element", () => {
        const { container } = render(() => (
            <Section>
                <p>Test content</p>
            </Section>
        ));
        const section = container.querySelector("section");
        expect(section).toBeInTheDocument();
    });

    it("applies custom id", () => {
        const { container } = render(() => (
            <Section id="my-section">
                <p>Test</p>
            </Section>
        ));
        expect(container.querySelector("#my-section")).toBeInTheDocument();
    });
});
