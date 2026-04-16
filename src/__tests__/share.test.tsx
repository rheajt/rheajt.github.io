import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import Share from "~/components/share";

describe("Share", () => {
    const testUrl = "https://example.com/test-page";

    it("renders share links", () => {
        const { container } = render(() => <Share url={testUrl} />);
        const links = container.querySelectorAll("a");
        expect(links.length).toBe(4);
    });

    it("renders email share link with encoded URL", () => {
        const { container } = render(() => <Share url={testUrl} />);
        const emailLink = container.querySelector('a[title="Email"]');
        expect(emailLink).toBeInTheDocument();
        expect(emailLink?.getAttribute("href")).toContain(
            encodeURIComponent(testUrl),
        );
    });

    it("renders LinkedIn share link", () => {
        const { container } = render(() => <Share url={testUrl} />);
        const linkedinLink = container.querySelector('a[title="LinkedIn"]');
        expect(linkedinLink).toBeInTheDocument();
        expect(linkedinLink?.getAttribute("href")).toContain("linkedin.com");
    });

    it("renders Twitter share link", () => {
        const { container } = render(() => <Share url={testUrl} />);
        const twitterLink = container.querySelector('a[title="Twitter"]');
        expect(twitterLink).toBeInTheDocument();
        expect(twitterLink?.getAttribute("href")).toContain("twitter.com");
    });

    it("renders Reddit share link", () => {
        const { container } = render(() => <Share url={testUrl} />);
        const redditLink = container.querySelector('a[title="Reddit"]');
        expect(redditLink).toBeInTheDocument();
        expect(redditLink?.getAttribute("href")).toContain("reddit.com");
    });

    it("renders as an unordered list", () => {
        const { container } = render(() => <Share url={testUrl} />);
        expect(container.querySelector("ul")).toBeInTheDocument();
    });
});
