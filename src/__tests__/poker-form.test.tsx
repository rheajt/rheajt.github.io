import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@solidjs/testing-library";
import PokerForm from "~/components/poker-form";

describe("PokerForm", () => {
    const seats = [
        { name: "Alice", hero: true, in: 100, out: 200 },
        { name: "Bob", hero: false, in: 100, out: 50 },
    ];

    it("renders show results button", () => {
        render(() => <PokerForm seats={seats} />);
        expect(screen.getByText("Show Results")).toBeInTheDocument();
    });

    it("does not show results table initially", () => {
        const { container } = render(() => <PokerForm seats={seats} />);
        expect(container.querySelector("table")).not.toBeInTheDocument();
    });

    it("shows results when button is clicked", async () => {
        render(() => <PokerForm seats={seats} />);
        const button = screen.getByText("Show Results");
        fireEvent.click(button);
        expect(screen.getByText("Hide Results")).toBeInTheDocument();
        expect(screen.getByText("Alice")).toBeInTheDocument();
        expect(screen.getByText("Bob")).toBeInTheDocument();
    });

    it("calculates profit correctly", async () => {
        render(() => <PokerForm seats={seats} />);
        fireEvent.click(screen.getByText("Show Results"));
        expect(screen.getByText("+100")).toBeInTheDocument();
        expect(screen.getByText("-50")).toBeInTheDocument();
    });

    it("hides results when button is clicked again", async () => {
        const { container } = render(() => <PokerForm seats={seats} />);
        fireEvent.click(screen.getByText("Show Results"));
        expect(container.querySelector("table")).toBeInTheDocument();
        fireEvent.click(screen.getByText("Hide Results"));
        expect(container.querySelector("table")).not.toBeInTheDocument();
    });
});
