import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import { GithubSubscribe } from "~/components/github-subscribe";

describe("GithubSubscribe", () => {
    it("renders github button link", () => {
        const { container } = render(() => <GithubSubscribe />);
        const link = container.querySelector(".github-button");
        expect(link).toBeInTheDocument();
        expect(link?.getAttribute("href")).toBe(
            "https://github.com/rheajt",
        );
    });

    it("shows follow text", () => {
        const { container } = render(() => <GithubSubscribe />);
        const link = container.querySelector(".github-button");
        expect(link?.textContent).toContain("Follow @rheajt");
    });
});
