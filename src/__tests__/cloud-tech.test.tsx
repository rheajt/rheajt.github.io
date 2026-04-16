import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import { CloudTech } from "~/components/cloud-tech";

describe("CloudTech", () => {
    it("renders initial text", () => {
        const { container } = render(() => <CloudTech />);
        const span = container.querySelector("span span");
        expect(span).toBeInTheDocument();
        // Should show one of the cloud tech names
        const text = span?.textContent;
        expect(
            text === "Microsoft Office 365" ||
                text === "Google Workspaces",
        ).toBe(true);
    });
});
