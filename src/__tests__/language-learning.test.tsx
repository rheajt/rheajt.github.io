import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@solidjs/testing-library";
import { parse } from "yaml";
import vocabularyYaml from "../../YCT_vocabulary.yaml?raw";
import { LanguageLearningPractice } from "~/routes/language-learning";

type Word = { chinese: string; pinyin: string; english: string };
type Chapter = { number: number; vocabulary: Word[] };
const { books } = parse(vocabularyYaml) as {
    books: { level: number; chapters: Chapter[] }[];
};
const chapter = (book: number, lesson: number) =>
    books
        .find(item => item.level === book)!
        .chapters.find(item => item.number === lesson)!;
const card = () => screen.getByRole("button", { name: /^Flip card/i });
const choose = (label: string, value: string) =>
    fireEvent.change(
        screen.getByRole("combobox", { name: label, exact: true }),
        {
            target: { value },
        },
    );

// Both faces may remain mounted for animation. Assert only the exposed face.
function exposedCardText() {
    const copy = card().cloneNode(true) as HTMLElement;
    copy.querySelectorAll('[aria-hidden="true"], [hidden]').forEach(node =>
        node.remove(),
    );
    return copy.textContent ?? "";
}

function expectFront(word: Word) {
    expect(card().tagName).toBe("BUTTON");
    expect(card()).toHaveAttribute("aria-pressed", "false");
    expect(exposedCardText()).toContain(word.chinese);
    expect(exposedCardText()).toContain(word.pinyin);
    expect(exposedCardText()).not.toContain(word.english);
}

describe("LanguageLearningPractice", () => {
    it("starts at Book 1 Lesson 1 and flips between Chinese/pinyin and English", () => {
        render(() => <LanguageLearningPractice />);
        expect(
            screen.getByRole("combobox", { name: "Book", exact: true }),
        ).toHaveValue("1");
        expect(
            screen.getByRole("combobox", { name: "Lesson", exact: true }),
        ).toHaveValue("1");
        const first = chapter(1, 1).vocabulary[0];
        expectFront(first);
        fireEvent.click(card());
        expect(card()).toHaveAttribute("aria-pressed", "true");
        expect(exposedCardText()).toContain(first.english);
        expect(exposedCardText()).not.toContain(first.chinese);
        expect(exposedCardText()).not.toContain(first.pinyin);
        fireEvent.click(card());
        expectFront(first);
    });

    it("moves forward and back and resets the flipped face on navigation", () => {
        render(() => <LanguageLearningPractice />);
        fireEvent.click(card());
        fireEvent.click(screen.getByRole("button", { name: "Next card" }));
        expectFront(chapter(1, 1).vocabulary[1]);
        fireEvent.click(card());
        fireEvent.click(screen.getByRole("button", { name: "Previous card" }));
        expectFront(chapter(1, 1).vocabulary[0]);
    });

    it("resets the card index and face when changing lesson or book", () => {
        render(() => <LanguageLearningPractice />);
        fireEvent.click(screen.getByRole("button", { name: "Next card" }));
        fireEvent.click(card());
        choose("Lesson", "2");
        expectFront(chapter(1, 2).vocabulary[0]);
        fireEvent.click(screen.getByRole("button", { name: "Next card" }));
        fireEvent.click(card());
        choose("Book", "2");
        const selectedLesson = Number(
            (
                screen.getByRole("combobox", {
                    name: "Lesson",
                    exact: true,
                }) as HTMLSelectElement
            ).value,
        );
        expectFront(chapter(2, selectedLesson).vocabulary[0]);
    });

    it("offers all six books and combines a book's lessons with the all option", () => {
        render(() => <LanguageLearningPractice />);
        const bookSelect = screen.getByRole("combobox", {
            name: "Book",
            exact: true,
        });
        expect(
            within(bookSelect)
                .getAllByRole("option")
                .map(option => (option as HTMLOptionElement).value),
        ).toEqual(["1", "2", "3", "4", "5", "6"]);
        choose("Lesson", "all");
        expectFront(chapter(1, 1).vocabulary[0]);
    });

    it.each([
        ["1", "12"],
        ["2", "11"],
    ])("handles empty vocabulary in Book %s Lesson %s", (book, lesson) => {
        render(() => <LanguageLearningPractice />);
        choose("Book", book);
        choose("Lesson", lesson);
        expect(
            screen.queryByRole("button", { name: /^Flip card/i }),
        ).not.toBeInTheDocument();
        for (const name of ["Previous card", "Next card"]) {
            const button = screen.queryByRole("button", { name });
            if (button) expect(button).toBeDisabled();
        }
        choose("Lesson", "1");
        expectFront(chapter(Number(book), 1).vocabulary[0]);
    });

    it.each(["词典", "dictionary"])(
        "searches all books for %s from the default selection",
        query => {
            render(() => <LanguageLearningPractice />);
            fireEvent.input(
                screen.getByLabelText("Search dictionary", { exact: true }),
                { target: { value: query } },
            );
            expect(
                screen.getByText("词典", { exact: true }),
            ).toBeInTheDocument();
            expect(screen.getByText(/Book\s*6/i)).toBeInTheDocument();
            const source = books
                .find(book => book.level === 6)!
                .chapters.find(lesson =>
                    lesson.vocabulary.some(word => word.chinese === "词典"),
                )!;
            expect(
                screen.getByText(
                    new RegExp(`Lesson\\s*${source.number}\\b`, "i"),
                ),
            ).toBeInTheDocument();
            expect(
                screen.getByRole("combobox", { name: "Book", exact: true }),
            ).toHaveValue("1");
        },
    );

    it("matches pinyin without tone marks and handles searches with no matches", () => {
        render(() => <LanguageLearningPractice />);
        const search = screen.getByLabelText("Search dictionary", { exact: true });
        fireEvent.input(search, { target: { value: "laoshi" } });
        expect(
            screen.getAllByText("老师", { exact: true }).length,
        ).toBeGreaterThan(0);
        fireEvent.input(search, {
            target: { value: "zzzz-no-vocabulary-match" },
        });
        expect(
            screen.queryByText("词典", { exact: true }),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText("老师", { exact: true }),
        ).not.toBeInTheDocument();
        expect(
            screen.getByText(/no .*?(results|matches|words)|nothing found/i),
        ).toBeInTheDocument();
    });
});
