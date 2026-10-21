import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@solidjs/testing-library";
import { MemoryRouter } from "@solidjs/router";
import Layout from "~/components/layout";
import { StaticNotFoundHeader } from "~/components/static-not-found-header";

vi.mock("~/components/footer", () => ({ Footer: () => <footer /> }));

describe("static recovery navigation", () => {
    it("provides visible native primary links and a native disclosure", () => {
        const { container } = render(() => <StaticNotFoundHeader />);
        const recovery = screen.getByRole("navigation", {
            name: "Page recovery",
        });
        for (const [name, href] of [
            ["Home", "/"],
            ["Projects", "/projects"],
            ["Contact", "/contact"],
        ]) {
            expect(
                within(recovery).getByRole("link", { name }),
            ).toHaveAttribute("href", href);
        }
        expect(container.querySelector("details > summary")).toHaveTextContent(
            "More pages",
        );
        expect(
            container.querySelector("details a[href='/resume']"),
        ).not.toBeNull();
        expect(
            container.querySelector("[hidden], button, [aria-expanded]"),
        ).toBeNull();
    });

    it("selects native recovery instead of the interactive header when overridden", () => {
        render(() => (
            <MemoryRouter
                root={() => (
                    <Layout header={<StaticNotFoundHeader />}>
                        <p>Not found content</p>
                    </Layout>
                )}
            >
                {[]}
            </MemoryRouter>
        ));
        expect(
            screen.getByRole("navigation", { name: "Page recovery" }),
        ).toBeInTheDocument();
        expect(
            screen.queryByRole("button", { name: "Pages" }),
        ).not.toBeInTheDocument();
        expect(screen.getByText("Not found content")).toBeInTheDocument();
    });

    it("keeps the normal interactive header as the default", () => {
        render(() => (
            <MemoryRouter
                root={() => (
                    <Layout>
                        <p>Normal page</p>
                    </Layout>
                )}
            >
                {[]}
            </MemoryRouter>
        ));
        expect(
            screen.getByRole("button", { name: "Pages" }),
        ).toBeInTheDocument();
        expect(
            screen.queryByRole("navigation", { name: "Page recovery" }),
        ).not.toBeInTheDocument();
    });
});
