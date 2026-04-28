import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import TwitterSubscribe from "~/components/twitter-subscribe";

describe("TwitterSubscribe", () => {
    it("renders twitter follow link", () => {
        const { container } = render(() => (
            <TwitterSubscribe username="testuser" />
        ));
        const link = container.querySelector(".twitter-follow-button");
        expect(link).toBeInTheDocument();
        expect(link?.getAttribute("href")).toBe("https://twitter.com/testuser");
    });

    it("shows follow text with username", () => {
        const { container } = render(() => (
            <TwitterSubscribe username="rheajt" />
        ));
        const link = container.querySelector(".twitter-follow-button");
        expect(link?.textContent).toContain("@rheajt");
    });
});
