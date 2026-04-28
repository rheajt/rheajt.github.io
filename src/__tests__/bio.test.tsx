import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import Bio from "~/components/bio";

describe("Bio", () => {
    it("renders author name", () => {
        render(() => <Bio />);
        expect(screen.getByText("jordan rhea")).toBeInTheDocument();
    });

    it("renders author summary text", () => {
        const { container } = render(() => <Bio />);
        expect(container.textContent).toContain(
            "Building tools and connecting systems",
        );
    });

    it("renders avatar image", () => {
        render(() => <Bio />);
        const img = screen.getByAltText("jordan rhea wearing a hoodie");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "/content/img/avatar-image.png");
    });

    it("renders social links", () => {
        const { container } = render(() => <Bio />);
        const links = container.querySelectorAll("a");
        expect(links.length).toBe(4);

        const hrefs = Array.from(links).map(l => l.getAttribute("href"));
        expect(hrefs).toContain("https://twitter.com/rheajt");
        expect(hrefs).toContain("https://linkedin.com/in/rheajt");
        expect(hrefs).toContain("https://youtube.com/jordanrhea");
        expect(hrefs).toContain("https://github.com/rheajt");
    });
});
