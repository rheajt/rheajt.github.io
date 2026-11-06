import { For, Show, createMemo, createSignal } from "solid-js";
import { parse } from "yaml";
import vocabularyRaw from "../../../../YCT_vocabulary.yaml?raw";
import "./language-learning.scss";

type Word = { chinese: string; pinyin: string; english: string };
type Lesson = {
    number: number;
    chapter: string;
    english_title: string;
    pdf_page?: number | null;
    textbook_page?: number | null;
    vocabulary: Word[];
    example_sentences?: Word[];
    extraction_status?: string;
    source_note?: string;
    notes?: string[];
};
type Book = {
    level: number;
    book: string;
    source_file: string;
    scope: string;
    notes: string[];
    chapters: Lesson[];
};
type DictionaryEntry = Word & {
    level: number;
    book: string;
    lesson: number;
    title: string;
};

const books = (parse(vocabularyRaw) as { books: Book[] }).books;
const dictionary: DictionaryEntry[] = books.flatMap(book =>
    book.chapters.flatMap(lesson =>
        lesson.vocabulary.map(word => ({
            ...word,
            level: book.level,
            book: book.book,
            lesson: lesson.number,
            title: lesson.english_title,
        })),
    ),
);
const normalize = (value: string) =>
    value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase();

export function LanguageLearningPractice() {
    const [level, setLevel] = createSignal("1");
    const [lessonNumber, setLessonNumber] = createSignal("1");
    const [index, setIndex] = createSignal(0);
    const [flipped, setFlipped] = createSignal(false);
    const [query, setQuery] = createSignal("");
    const selectedBook = createMemo(() =>
        books.find(book => String(book.level) === level())!,
    );
    const selectedLesson = createMemo(() =>
        selectedBook().chapters.find(
            lesson => String(lesson.number) === lessonNumber(),
        ),
    );
    const cards = createMemo(() =>
        lessonNumber() === "all"
            ? selectedBook().chapters.flatMap(lesson => lesson.vocabulary)
            : (selectedLesson()?.vocabulary ?? []),
    );
    const results = createMemo(() => {
        const term = normalize(query().trim());
        if (!term) return [];
        return dictionary.filter(entry =>
            normalize(
                `${entry.chinese} ${entry.pinyin} ${entry.english}`,
            ).includes(term),
        );
    });
    const reset = () => {
        setIndex(0);
        setFlipped(false);
    };
    const chooseBook = (value: string) => {
        setLevel(value);
        setLessonNumber("1");
        reset();
    };
    const step = (by: number) => {
        setIndex(value =>
            Math.max(0, Math.min(cards().length - 1, value + by)),
        );
        setFlipped(false);
    };
    const current = () => cards()[index()];

    return (
        <div class="language-learning">
            <header class="learning-heading">
                <p class="learning-eyebrow">YCT VOCABULARY · SOURCE NOTES</p>
                <h1>{selectedBook().book}</h1>
                <p class="learning-current-lesson">
                    {selectedLesson()
                        ? `Lesson ${selectedLesson()!.number} · ${selectedLesson()!.english_title}`
                        : "All lessons"}
                    <Show when={selectedLesson()}>
                        {lesson => <span> · {lesson().chapter}</span>}
                    </Show>
                </p>
                <div class="source-context">
                    <p>{selectedBook().scope}</p>
                    <p class="source-file">
                        Source: {selectedBook().source_file}
                    </p>
                    <Show when={selectedBook().notes.length > 0}>
                        <details class="book-notes">
                            <summary>
                                Book notes{" "}
                                <span>({selectedBook().notes.length})</span>
                            </summary>
                            <ul>
                                <For each={selectedBook().notes}>
                                    {note => <li>{note}</li>}
                                </For>
                            </ul>
                        </details>
                    </Show>
                    <Show when={selectedLesson()}>
                        {lesson => (
                            <div class="lesson-source">
                                <p class="lesson-pages">
                                    <span>
                                        Lesson {lesson().number} source pages
                                    </span>
                                    <Show when={lesson().textbook_page != null}>
                                        <span>
                                            Textbook p. {lesson().textbook_page}
                                        </span>
                                    </Show>
                                    <Show when={lesson().pdf_page != null}>
                                        <span>PDF p. {lesson().pdf_page}</span>
                                    </Show>
                                    <Show
                                        when={
                                            lesson().pdf_page == null &&
                                            lesson().textbook_page == null
                                        }
                                    >
                                        <span>
                                            Page details not provided in source
                                        </span>
                                    </Show>
                                </p>
                                <Show
                                    when={
                                        lesson().source_note ||
                                        lesson().extraction_status ===
                                            "missing_opening_page"
                                    }
                                >
                                    <p class="lesson-source-note">
                                        {lesson().source_note ??
                                            "The lesson opening page is missing from the available source."}
                                    </p>
                                </Show>
                                <Show when={lesson().notes?.length}>
                                    <ul class="lesson-notes">
                                        <For each={lesson().notes}>
                                            {note => <li>{note}</li>}
                                        </For>
                                    </ul>
                                </Show>
                            </div>
                        )}
                    </Show>
                </div>
            </header>

            <div class="learning-grid">
                <section
                    class="practice-panel"
                    aria-labelledby="practice-title"
                >
                    <div class="panel-heading">
                        <div>
                            <p class="learning-eyebrow">01 / PRACTICE</p>
                            <h2 id="practice-title">Your study cards</h2>
                        </div>
                    </div>
                    <div class="selectors">
                        <label>
                            Book
                            <select
                                aria-label="Book"
                                value={level()}
                                onChange={event =>
                                    chooseBook(event.currentTarget.value)
                                }
                            >
                                <For each={books}>
                                    {book => (
                                        <option value={String(book.level)}>
                                            {book.book}
                                        </option>
                                    )}
                                </For>
                            </select>
                        </label>
                        <label>
                            Lesson
                            <select
                                aria-label="Lesson"
                                value={lessonNumber()}
                                onChange={event => {
                                    setLessonNumber(event.currentTarget.value);
                                    reset();
                                }}
                            >
                                <option
                                    value="all"
                                    selected={lessonNumber() === "all"}
                                >
                                    All lessons
                                </option>
                                <For each={selectedBook().chapters}>
                                    {lesson => (
                                        <option
                                            value={String(lesson.number)}
                                            selected={
                                                lessonNumber() ===
                                                String(lesson.number)
                                            }
                                        >
                                            {lesson.number} —{" "}
                                            {lesson.english_title}
                                        </option>
                                    )}
                                </For>
                            </select>
                        </label>
                    </div>
                    <Show
                        when={current()}
                        fallback={
                            <div class="empty-card">
                                <span aria-hidden="true">空</span>
                                <h3>
                                    {selectedLesson()?.extraction_status ===
                                    "missing_opening_page"
                                        ? "Lesson vocabulary unavailable"
                                        : "No vocabulary cards here yet"}
                                </h3>
                                <p>
                                    {lessonNumber() === "all"
                                        ? "This book has no vocabulary entries in the source."
                                        : selectedLesson()
                                                ?.extraction_status ===
                                            "missing_opening_page"
                                          ? "The source scan does not include this lesson’s opening page. Choose another lesson to keep practicing."
                                          : "There are no vocabulary entries in the source for this lesson. Choose another lesson to keep practicing."}
                                </p>
                            </div>
                        }
                    >
                        {word => {
                            const card = createMemo(word);
                            return (
                                <button
                                    type="button"
                                    class={`flashcard ${flipped() ? "is-flipped" : ""}`}
                                    aria-label={`Flip card: ${flipped() ? "show Chinese" : "show English"}`}
                                    aria-pressed={flipped()}
                                    onClick={() => setFlipped(value => !value)}
                                >
                                    <span class="card-topline">
                                        <span>
                                            {flipped() ? "MEANING" : "WORD"}
                                        </span>
                                        <span>
                                            {selectedBook().book} ·{" "}
                                            {lessonNumber() === "all"
                                                ? "All lessons"
                                                : `Lesson ${lessonNumber()}`}
                                        </span>
                                    </span>
                                    <span
                                        class="card-content"
                                        aria-live="polite"
                                    >
                                        {flipped() ? (
                                            <>
                                                <span class="card-english">
                                                    {card().english}
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span class="card-chinese">
                                                    {card().chinese}
                                                </span>
                                                <span class="card-pinyin">
                                                    {card().pinyin}
                                                </span>
                                            </>
                                        )}
                                    </span>
                                    <span class="card-hint">
                                        Click to turn{" "}
                                        <span aria-hidden="true">↗</span>
                                    </span>
                                </button>
                            );
                        }}
                    </Show>
                    <div class="card-controls">
                        <button
                            type="button"
                            aria-label="Previous card"
                            disabled={!cards().length || index() === 0}
                            onClick={() => step(-1)}
                        >
                            ← <span>Previous</span>
                        </button>
                        <p>
                            {cards().length ? (
                                <>
                                    <strong>{index() + 1}</strong>
                                    <span> / {cards().length}</span>
                                </>
                            ) : (
                                <>
                                    0 <span> / 0</span>
                                </>
                            )}
                        </p>
                        <button
                            type="button"
                            aria-label="Next card"
                            disabled={
                                !cards().length || index() >= cards().length - 1
                            }
                            onClick={() => step(1)}
                        >
                            <span>Next</span> →
                        </button>
                    </div>
                    <Show when={lessonNumber() !== "all" && selectedLesson()}>
                        {lesson => (
                            <p class="lesson-context">
                                Lesson {lesson().number} · {lesson().chapter}{" "}
                                <span>{lesson().english_title}</span>
                            </p>
                        )}
                    </Show>
                </section>

                <section
                    class="dictionary-panel"
                    aria-labelledby="dictionary-title"
                >
                    <div class="panel-heading">
                        <div>
                            <p class="learning-eyebrow">02 / LOOK UP</p>
                            <h2 id="dictionary-title">The dictionary</h2>
                        </div>
                        <span class="entry-count">
                            {dictionary.length} entries
                        </span>
                    </div>
                    <label class="search-label" for="dictionary-search">
                        Search dictionary
                    </label>
                    <div class="search-wrap">
                        <span aria-hidden="true">⌕</span>
                        <input
                            id="dictionary-search"
                            aria-label="Search dictionary"
                            type="search"
                            placeholder="Chinese, pinyin, or English…"
                            value={query()}
                            onInput={event =>
                                setQuery(event.currentTarget.value)
                            }
                        />
                    </div>
                    <p class="search-note">
                        Search all {books.length} books · tone marks optional
                    </p>
                    <Show
                        when={query().trim()}
                        fallback={
                            <div class="dictionary-prompt">
                                <span aria-hidden="true">字</span>
                                <p>
                                    Find a word in Chinese, pinyin, or English.
                                </p>
                                <small>
                                    Results are independent of your selected
                                    book and lesson.
                                </small>
                            </div>
                        }
                    >
                        <Show
                            when={results().length}
                            fallback={
                                <p class="no-results">
                                    No matches for “{query()}”. Try another
                                    spelling or language.
                                </p>
                            }
                        >
                            <ul class="dictionary-results" aria-live="polite">
                                <For each={results()}>
                                    {entry => (
                                        <li>
                                            <div class="result-word">
                                                <strong>{entry.chinese}</strong>
                                                <span>{entry.pinyin}</span>
                                            </div>
                                            <div class="result-meaning">
                                                <span>{entry.english}</span>
                                                <small>
                                                    Book {entry.level} · Lesson{" "}
                                                    {entry.lesson} ·{" "}
                                                    {entry.title}
                                                </small>
                                            </div>
                                        </li>
                                    )}
                                </For>
                            </ul>
                        </Show>
                    </Show>
                </section>
            </div>
            <div class="learning-footer">
                WORD BY WORD <span>·</span> YCT STANDARD COURSE
            </div>
        </div>
    );
}
