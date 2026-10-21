import { describe, expect, it } from "vitest";
import { initialState, reducer } from "~/utils/pokerReducer";

function frozenState() {
    const state = {
        ...initialState,
        seats: [
            { name: "Alice", hero: true, in: 100, out: 150 },
            { name: "Bob", hero: false, in: 75, out: 0 },
        ],
        hands: [],
    };
    state.seats.forEach(Object.freeze);
    Object.freeze(state.seats);
    Object.freeze(state.hands);
    Object.freeze(state);
    return state;
}

describe("pokerReducer immutability", () => {
    it("adds a fresh seat without mutating frozen prior state", () => {
        const state = frozenState();
        const next = reducer(state, { type: "add_seat" });

        expect(next).not.toBe(state);
        expect(next.seats).not.toBe(state.seats);
        expect(state.seats).toHaveLength(2);
        expect(next.seats).toEqual([
            ...state.seats,
            { name: "", hero: false, in: 0 },
        ]);
        expect(next.hands).toBe(state.hands);
    });

    it("replaces only the edited seat without mutating frozen prior state", () => {
        const state = frozenState();
        const next = reducer(state, {
            type: "update_seat",
            payload: { seatIdx: 1, update: { name: "Robert", out: 120 } },
        });

        expect(next).not.toBe(state);
        expect(next.seats).not.toBe(state.seats);
        expect(next.seats[0]).toBe(state.seats[0]);
        expect(next.seats[1]).toEqual({
            name: "Robert",
            hero: false,
            in: 75,
            out: 120,
        });
        expect(state.seats[1]).toEqual({
            name: "Bob",
            hero: false,
            in: 75,
            out: 0,
        });
    });

    it("creates independent records for each addition and initial seat", () => {
        const first = reducer(initialState, { type: "add_seat" });
        const second = reducer(first, { type: "add_seat" });
        const separate = reducer(initialState, { type: "add_seat" });

        expect(first.seats).toHaveLength(2);
        expect(second.seats).toHaveLength(3);
        expect(initialState.seats).toHaveLength(1);
        expect(new Set(second.seats).size).toBe(3);
        expect(second.seats[1]).not.toBe(separate.seats[1]);
        expect(second.seats[2]).not.toBe(initialState.seats[0]);
    });
});
