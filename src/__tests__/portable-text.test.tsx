import { describe, it, expect, vi, afterEach } from "vitest";
import { fireEvent, render, screen } from "@solidjs/testing-library";
import { PortableText } from "~/components/portable-text";

describe("PortableText", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("renders paragraphs, h2, h3, and inline marks", () => {
        render(() => (
            <PortableText
                value={[
                    {
                        _type: "block",
                        _key: "paragraph",
                        children: [
                            { _type: "span", text: "Bold", marks: ["strong"] },
                            { _type: "span", text: " italic", marks: ["em"] },
                            { _type: "span", text: " code", marks: ["code"] },
                        ],
                    },
                    {
                        _type: "block",
                        _key: "h2",
                        style: "h2",
                        children: [{ _type: "span", text: "Heading two" }],
                    },
                    {
                        _type: "block",
                        _key: "h3",
                        style: "h3",
                        children: [{ _type: "span", text: "Heading three" }],
                    },
                ]}
            />
        ));

        expect(screen.getByText("Bold").tagName).toBe("STRONG");
        expect(screen.getByText("italic").tagName).toBe("EM");
        expect(screen.getByText("code").tagName).toBe("CODE");
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
            "Heading two",
        );
        expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
            "Heading three",
        );
    });

    it("renders safe links and consecutive bulleted and numbered list items", () => {
        render(() => (
            <PortableText
                value={[
                    {
                        _type: "block",
                        _key: "link",
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
                                text: "Example",
                                marks: ["link1"],
                            },
                        ],
                    },
                    {
                        _type: "block",
                        _key: "bullet-1",
                        listItem: "bullet",
                        children: [{ _type: "span", text: "First" }],
                    },
                    {
                        _type: "block",
                        _key: "bullet-2",
                        listItem: "bullet",
                        children: [{ _type: "span", text: "Second" }],
                    },
                    {
                        _type: "block",
                        _key: "number-1",
                        listItem: "number",
                        children: [{ _type: "span", text: "Third" }],
                    },
                ]}
            />
        ));

        expect(screen.getByRole("link", { name: "Example" })).toHaveAttribute(
            "rel",
            "noreferrer noopener",
        );
        expect(screen.getAllByRole("list")[0].tagName).toBe("UL");
        expect(screen.getAllByRole("listitem")).toHaveLength(3);
        expect(screen.getAllByRole("list")[1].tagName).toBe("OL");
    });

    it("renders images from projected and asset URLs with authored alt text and caption", () => {
        render(() => (
            <PortableText
                value={[
                    {
                        _type: "image",
                        _key: "projected",
                        url: "https://cdn.example/image.jpg",
                        alt: "Projected photo",
                        caption: "Photo caption",
                    },
                    {
                        _type: "image",
                        _key: "asset",
                        asset: { url: "https://cdn.example/asset.jpg" },
                        altText: "Asset photo",
                    },
                ]}
            />
        ));

        expect(screen.getByAltText("Projected photo")).toHaveAttribute(
            "src",
            "https://cdn.example/image.jpg",
        );
        expect(screen.getByText("Photo caption").tagName).toBe("FIGCAPTION");
        expect(screen.getByAltText("Asset photo")).toHaveAttribute(
            "src",
            "https://cdn.example/asset.jpg",
        );
    });

    it("embeds valid YouTube URLs through the lazy privacy-enhanced player and handles invalid URLs", () => {
        render(() => (
            <PortableText
                value={[
                    {
                        _type: "youtube",
                        _key: "video",
                        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        title: "Video walkthrough",
                    },
                    {
                        _type: "youtube",
                        _key: "invalid",
                        url: "https://example.com/not-youtube",
                    },
                ]}
            />
        ));

        const iframe = screen.getByTitle("Video walkthrough");
        expect(iframe).toHaveAttribute(
            "src",
            "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        );
        expect(iframe).toHaveAttribute("loading", "lazy");
        expect(screen.getByText("Invalid YouTube URL")).toBeInTheDocument();
    });

    it("renders code as text and copies it without losing button focus", async () => {
        const writeText = vi.fn().mockResolvedValue(undefined);
        Object.assign(navigator, { clipboard: { writeText } });
        const source = '<img src=x onerror="alert(1)">';
        render(() => (
            <PortableText
                value={[
                    {
                        _type: "code",
                        _key: "code",
                        code: source,
                        language: "html",
                    },
                ]}
            />
        ));

        expect(
            screen.getByLabelText("Code example").querySelector("code"),
        ).toHaveTextContent(source);
        expect(document.querySelector("img")).not.toBeInTheDocument();
        const button = screen.getByRole("button", { name: "Copy code" });
        button.focus();
        await fireEvent.click(button);

        expect(writeText).toHaveBeenCalledWith(source);
        expect(button).toHaveFocus();
        expect(screen.getByRole("status")).toHaveTextContent("Copied");
    });

    it("escapes unknown-language code as plain text", () => {
        const source = '<img src=x onerror="alert(1)">';
        render(() => (
            <PortableText
                value={[
                    {
                        _type: "code",
                        _key: "unknown-code",
                        code: source,
                        language: "unrecognized-language",
                    },
                ]}
            />
        ));

        expect(
            screen.getByLabelText("Code example").querySelector("code"),
        ).toHaveTextContent(source);
        expect(document.querySelector("img")).not.toBeInTheDocument();
    });

    it("announces a copy failure when clipboard methods fail", async () => {
        const writeText = vi.fn().mockRejectedValue(new Error("Denied"));
        Object.assign(navigator, { clipboard: { writeText } });
        const execCommand = vi.fn().mockReturnValue(false);
        Object.defineProperty(document, "execCommand", {
            configurable: true,
            value: execCommand,
        });
        render(() => (
            <PortableText
                value={[
                    {
                        _type: "code",
                        _key: "copy-failure",
                        code: "const unavailable = true;",
                    },
                ]}
            />
        ));

        await fireEvent.click(
            screen.getByRole("button", { name: "Copy code" }),
        );

        expect(writeText).toHaveBeenCalledWith("const unavailable = true;");
        expect(execCommand).toHaveBeenCalledWith("copy");
        expect(
            screen.getByRole("button", { name: "Unable to copy code" }),
        ).toBeInTheDocument();
        expect(screen.getByRole("status")).toHaveTextContent(
            "Unable to copy code",
        );
    });

    it("ignores unknown blocks without preventing known content from rendering", () => {
        render(() => (
            <PortableText
                value={[
                    { _type: "mystery", _key: "unknown" },
                    {
                        _type: "block",
                        _key: "known",
                        children: [{ _type: "span", text: "Still here" }],
                    },
                ]}
            />
        ));

        expect(screen.getByText("Still here")).toBeInTheDocument();
    });
});
