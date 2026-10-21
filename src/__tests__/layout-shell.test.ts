import { describe, expect, it } from "vitest";
import { layoutShell } from "~/components/layout-shell";
import stylesheet from "~/styles/style.scss?raw";
import navigation from "~/components/navigation.scss?raw";

describe("responsive layout contract", () => {
    it("uses the same border-box width and gutters for static and styled shells", () => {
        const section = stylesheet
            .split(".layout-section {")[1]
            .split("@media")[0];
        for (const rule of [
            "box-sizing: border-box",
            "width: 100%",
            "max-width: var(--layout-width)",
            "margin-inline: auto",
        ]) {
            expect(layoutShell).toContain(rule);
            expect(section).toContain(rule);
        }
        expect(layoutShell).toContain("padding-inline: var(--layout-gutter)");
        expect(section).toContain("var(--spacing-12) var(--layout-gutter)");
    });

    it("aligns the navigation frame and compensates for its border", () => {
        expect(navigation).toContain("max-width: var(--layout-width)");
        expect(navigation).toContain("calc(var(--layout-gutter) - 1px)");
        expect(navigation).not.toMatch(/max-width: 1200px/);
    });
});
