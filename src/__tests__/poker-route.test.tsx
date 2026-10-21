import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@solidjs/testing-library";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import Poker from "~/routes/poker/index";

function renderPoker() {
    return render(() => (
        <MetaProvider>
            <Router root={() => <Poker />}>{[]}</Router>
        </MetaProvider>
    ));
}

function typeWithoutRefocusing(input: HTMLInputElement, value: string) {
    input.focus();
    let typed = "";
    for (const character of value) {
        expect(document.activeElement).toBe(input);
        typed += character;
        fireEvent.input(input, { target: { value: typed } });
        expect(input).toBeInTheDocument();
        expect(document.activeElement).toBe(input);
        expect(input.value).toBe(typed);
    }
}

describe("Poker route editing", () => {
    it.each([
        ["Name", "Alice Example"],
        ["In", "1250"],
        ["Out", "2300"],
    ])(
        "preserves the %s input DOM node and focus while typing",
        (field, value) => {
            renderPoker();
            const input = screen.getByPlaceholderText(
                field,
            ) as HTMLInputElement;

            typeWithoutRefocusing(input, value);

            expect(screen.getByPlaceholderText(field)).toBe(input);
        },
    );

    it("updates the intended player after edits and additions", () => {
        renderPoker();
        const firstName = screen.getByRole("textbox", {
            name: "Player 1 name",
        }) as HTMLInputElement;
        typeWithoutRefocusing(firstName, "Alice Example");
        const firstBuyIn = screen.getByRole("spinbutton", {
            name: "Player 1 buy-in",
        }) as HTMLInputElement;
        typeWithoutRefocusing(firstBuyIn, "1250");

        fireEvent.click(screen.getByRole("button", { name: "Add Seat" }));
        const secondName = screen.getByRole("textbox", {
            name: "Player 2 name",
        }) as HTMLInputElement;
        typeWithoutRefocusing(secondName, "Bob Example");
        typeWithoutRefocusing(
            screen.getByRole("spinbutton", {
                name: "Player 2 buy-in",
            }) as HTMLInputElement,
            "300",
        );
        typeWithoutRefocusing(
            screen.getByRole("spinbutton", {
                name: "Player 2 cash-out",
            }) as HTMLInputElement,
            "450",
        );
        fireEvent.click(
            screen.getByRole("checkbox", { name: "Player 2 hero" }),
        );

        fireEvent.click(screen.getByRole("button", { name: "Add Seat" }));
        typeWithoutRefocusing(firstName, "Alice Updated");
        typeWithoutRefocusing(firstBuyIn, "1400");
        typeWithoutRefocusing(
            screen.getByRole("spinbutton", {
                name: "Player 1 cash-out",
            }) as HTMLInputElement,
            "2000",
        );

        expect(screen.getByRole("textbox", { name: "Player 1 name" })).toBe(
            firstName,
        );
        expect(screen.getByRole("textbox", { name: "Player 2 name" })).toBe(
            secondName,
        );
        expect(secondName).toHaveValue("Bob Example");
        expect(
            screen.getByRole("checkbox", { name: "Player 1 hero" }),
        ).not.toBeChecked();
        expect(
            screen.getByRole("checkbox", { name: "Player 2 hero" }),
        ).toBeChecked();
        expect(
            screen.getByRole("textbox", { name: "Player 3 name" }),
        ).toHaveValue("");
        expect(
            screen.getByRole("spinbutton", { name: "Player 3 buy-in" }),
        ).toHaveValue(0);

        fireEvent.click(screen.getByRole("button", { name: "Show Results" }));
        const rows = within(screen.getByRole("table")).getAllByRole("row");
        expect(rows[1]).toHaveTextContent("Alice Updated+600");
        expect(rows[2]).toHaveTextContent("Bob Example+150");
        expect(rows[3]).toHaveTextContent("Unknown+0");
    });
});
