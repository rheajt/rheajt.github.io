import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import Blockquote from "~/components/blockquote";

describe("Blockquote", () => {
    const quote = {
        author: "John Doe",
        position: "Software Engineer",
        excerpt: "This is a great quote",
    };

    it("renders quote excerpt", () => {
        render(() => <Blockquote quote={quote} />);
        expect(screen.getByText("This is a great quote")).toBeInTheDocument();
    });

    it("renders author name", () => {
        render(() => <Blockquote quote={quote} />);
        expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    it("renders author position", () => {
        render(() => <Blockquote quote={quote} />);
        expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    });

    it("renders as a blockquote element", () => {
        const { container } = render(() => <Blockquote quote={quote} />);
        expect(container.querySelector("blockquote")).toBeInTheDocument();
    });
});
