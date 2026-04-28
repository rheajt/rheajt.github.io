import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import { PortableText } from "~/components/portable-text";

describe("PortableText", () => {
    it("renders a simple paragraph block", () => {
        const blocks = [
            {
                _type: "block",
                _key: "1",
                style: "normal",
                children: [{ _type: "span", text: "Hello world" }],
            },
        ];
        const { container } = render(() => <PortableText value={blocks} />);
        expect(container.textContent).toContain("Hello world");
    });

    it("renders h1 block", () => {
        const blocks = [
            {
                _type: "block",
                _key: "1",
                style: "h1",
                children: [{ _type: "span", text: "Main Heading" }],
            },
        ];
        const { container } = render(() => <PortableText value={blocks} />);
        const h1 = container.querySelector("h1");
        expect(h1).toBeInTheDocument();
        expect(h1?.textContent).toBe("Main Heading");
    });

    it("renders h2 block", () => {
        const blocks = [
            {
                _type: "block",
                _key: "1",
                style: "h2",
                children: [{ _type: "span", text: "Sub Heading" }],
            },
        ];
        const { container } = render(() => <PortableText value={blocks} />);
        expect(container.querySelector("h2")?.textContent).toBe("Sub Heading");
    });

    it("renders strong marks", () => {
        const blocks = [
            {
                _type: "block",
                _key: "1",
                style: "normal",
                children: [
                    {
                        _type: "span",
                        text: "bold text",
                        marks: ["strong"],
                    },
                ],
            },
        ];
        const { container } = render(() => <PortableText value={blocks} />);
        expect(container.querySelector("strong")?.textContent).toBe(
            "bold text",
        );
    });

    it("renders em marks", () => {
        const blocks = [
            {
                _type: "block",
                _key: "1",
                style: "normal",
                children: [
                    {
                        _type: "span",
                        text: "italic text",
                        marks: ["em"],
                    },
                ],
            },
        ];
        const { container } = render(() => <PortableText value={blocks} />);
        expect(container.querySelector("em")?.textContent).toBe("italic text");
    });

    it("renders links from markDefs", () => {
        const blocks = [
            {
                _type: "block",
                _key: "1",
                style: "normal",
                markDefs: [
                    {
                        _key: "link1",
                        _type: "link",
                        href: "https://example.com",
                    },
                ],
                children: [
                    {
                        _type: "span",
                        text: "click here",
                        marks: ["link1"],
                    },
                ],
            },
        ];
        const { container } = render(() => <PortableText value={blocks} />);
        const link = container.querySelector("a");
        expect(link).toBeInTheDocument();
        expect(link?.getAttribute("href")).toBe("https://example.com");
        expect(link?.textContent).toBe("click here");
    });

    it("renders empty when no blocks", () => {
        const { container } = render(() => <PortableText value={[]} />);
        expect(container.textContent).toBe("");
    });

    it("renders blockquote style", () => {
        const blocks = [
            {
                _type: "block",
                _key: "1",
                style: "blockquote",
                children: [{ _type: "span", text: "A wise quote" }],
            },
        ];
        const { container } = render(() => <PortableText value={blocks} />);
        expect(container.querySelector("blockquote")?.textContent).toBe(
            "A wise quote",
        );
    });
});
