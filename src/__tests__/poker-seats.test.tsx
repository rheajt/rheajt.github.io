import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@solidjs/testing-library";
import PokerSeats from "~/components/poker-seats";

describe("PokerSeats", () => {
    const seats = [{ name: "Player 1", hero: true, in: 100, out: 0 }];

    it("renders seat inputs", () => {
        const handleUpdate = vi.fn();
        const handleAdd = vi.fn();
        const { container } = render(() => (
            <PokerSeats
                seats={seats}
                handleUpdateSeat={handleUpdate}
                handleAddSeat={handleAdd}
            />
        ));
        const textInputs = container.querySelectorAll('input[type="text"]');
        expect(textInputs.length).toBe(1);
    });

    it("renders add seat button", () => {
        const handleUpdate = vi.fn();
        const handleAdd = vi.fn();
        render(() => (
            <PokerSeats
                seats={seats}
                handleUpdateSeat={handleUpdate}
                handleAddSeat={handleAdd}
            />
        ));
        expect(screen.getByText("Add Seat")).toBeInTheDocument();
    });

    it("calls handleAddSeat when add button clicked", async () => {
        const handleUpdate = vi.fn();
        const handleAdd = vi.fn();
        render(() => (
            <PokerSeats
                seats={seats}
                handleUpdateSeat={handleUpdate}
                handleAddSeat={handleAdd}
            />
        ));
        fireEvent.click(screen.getByText("Add Seat"));
        expect(handleAdd).toHaveBeenCalledTimes(1);
    });

    it("renders hero checkbox checked for hero seat", () => {
        const handleUpdate = vi.fn();
        const handleAdd = vi.fn();
        const { container } = render(() => (
            <PokerSeats
                seats={seats}
                handleUpdateSeat={handleUpdate}
                handleAddSeat={handleAdd}
            />
        ));
        const checkbox = container.querySelector(
            'input[type="checkbox"]',
        ) as HTMLInputElement;
        expect(checkbox.checked).toBe(true);
    });

    it("renders multiple seats", () => {
        const multiSeats = [
            { name: "P1", hero: true, in: 50 },
            { name: "P2", hero: false, in: 100 },
            { name: "P3", hero: false, in: 75 },
        ];
        const handleUpdate = vi.fn();
        const handleAdd = vi.fn();
        const { container } = render(() => (
            <PokerSeats
                seats={multiSeats}
                handleUpdateSeat={handleUpdate}
                handleAddSeat={handleAdd}
            />
        ));
        const seatDivs = container.querySelectorAll(".seat");
        expect(seatDivs.length).toBe(3);
    });
});
