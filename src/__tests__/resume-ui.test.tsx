import { afterEach, expect, it, vi } from "vitest";
import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@solidjs/testing-library";
import Resume from "~/routes/resume";
import PrototypeEditorial from "~/routes/prototype-editorial";
import Bio from "~/components/bio";
import { downloadResumePdf } from "~/utils/resume-pdf";

vi.mock("~/components/layout", () => ({
    default: (props: any) => <div>{props.children}</div>,
}));
vi.mock("~/components/seo", () => ({ default: () => null }));
vi.mock("~/utils/resume-pdf", () => ({ downloadResumePdf: vi.fn() }));
afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
});

it("prevents duplicate PDF launches, handles failure, and allows retry", async () => {
    let reject!: (reason: Error) => void;
    vi.mocked(downloadResumePdf)
        .mockImplementationOnce(
            () =>
                new Promise((_, fail) => {
                    reject = fail;
                }),
        )
        .mockResolvedValue(undefined);
    render(() => <Resume />);
    fireEvent.click(screen.getByRole("button", { name: "Download PDF" }));
    const pending = screen.getByRole("button", { name: "Preparing PDF…" });
    expect(pending).toBeDisabled();
    fireEvent.click(pending);
    expect(downloadResumePdf).toHaveBeenCalledTimes(1);
    reject(new Error("unavailable"));
    expect(await screen.findByRole("alert")).toHaveTextContent(
        "Please try again",
    );
    fireEvent.click(screen.getByRole("button", { name: "Download PDF" }));
    await waitFor(() => expect(downloadResumePdf).toHaveBeenCalledTimes(2));
    expect(screen.queryByRole("alert")).toBeNull();
});

it("copies the displayed editorial code and reports clipboard rejection", async () => {
    const writeText = vi
        .fn()
        .mockRejectedValueOnce(new Error("denied"))
        .mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText },
    });
    const { container } = render(() => <PrototypeEditorial />);
    fireEvent.click(screen.getByRole("button", { name: "Copy code" }));
    expect(await screen.findByRole("alert")).toHaveTextContent(
        "Could not copy",
    );
    fireEvent.click(screen.getByRole("button", { name: "Copy code" }));
    await screen.findByRole("button", { name: "Copied" });
    expect(writeText).toHaveBeenLastCalledWith(
        container.querySelector("code")?.textContent,
    );
    expect(screen.queryByRole("alert")).toBeNull();
});

it("names every bio social link", () => {
    render(() => <Bio />);
    for (const name of ["Twitter", "LinkedIn", "YouTube", "GitHub"]) {
        expect(
            screen.getByRole("link", { name, exact: true }),
        ).toBeInTheDocument();
    }
});
