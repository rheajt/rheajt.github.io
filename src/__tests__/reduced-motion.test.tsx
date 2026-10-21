import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@solidjs/testing-library";
import { QuoteCarousel } from "~/components/quote-carousel";
import { CloudTech } from "~/components/cloud-tech";
import { Canvas } from "~/components/canvas";
import { BarCanvas } from "~/components/bar-canvas";

function motion(matches = false) {
    const query = new EventTarget();
    Object.assign(query, { matches });
    vi.stubGlobal("matchMedia", () => query);
    return (value: boolean) => {
        Object.assign(query, { matches: value });
        query.dispatchEvent(new Event("change"));
    };
}
afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});
const quotes = [
    { author: "First", position: "Teacher", excerpt: "First quote" },
    { author: "Second", position: "Teacher", excerpt: "Second quote" },
];
describe("motion controls", () => {
    it("pauses and resumes automatic quotes; reduced motion keeps manual navigation", () => {
        vi.useFakeTimers();
        const change = motion();
        const { container } = render(() => <QuoteCarousel quotes={quotes} />);
        const active = () =>
            container.querySelector(".slide.active")?.textContent;
        fireEvent.click(screen.getByRole("button", { name: "Pause quotes" }));
        vi.advanceTimersByTime(5000);
        expect(active()).toContain("First");
        fireEvent.click(screen.getByRole("button", { name: "Resume quotes" }));
        vi.advanceTimersByTime(5000);
        expect(active()).toContain("Second");
        change(true);
        vi.advanceTimersByTime(10000);
        expect(active()).toContain("Second");
        expect(
            screen.queryByRole("button", { name: "Pause quotes" }),
        ).toBeNull();
        fireEvent.click(screen.getByRole("button", { name: "Next quote" }));
        expect(active()).toContain("First");
    });
    it("keeps cloud text static and clears a pending fade on preference change and unmount", () => {
        vi.useFakeTimers();
        const change = motion(true);
        const { unmount } = render(() => <CloudTech />);
        vi.advanceTimersByTime(12000);
        expect(screen.getByText("Microsoft Office 365")).toBeInTheDocument();
        change(false);
        vi.advanceTimersByTime(6000);
        expect(vi.getTimerCount()).toBe(2);
        change(true);
        expect(vi.getTimerCount()).toBe(0);
        expect(screen.getByText("Microsoft Office 365")).toHaveClass(
            "text-visible",
        );
        change(false);
        vi.advanceTimersByTime(6000);
        unmount();
        expect(vi.getTimerCount()).toBe(0);
    });
    for (const Component of [Canvas, BarCanvas]) {
        it(`${Component.name} draws statically, responds to preference changes and cleans up`, () => {
            vi.useFakeTimers();
            const change = motion(true);
            vi.spyOn(navigator, "userAgent", "get").mockReturnValue("Browser");
            const context = new Proxy(
                {},
                {
                    get: (_, key) =>
                        key === "createRadialGradient"
                            ? () => ({ addColorStop: vi.fn() })
                            : vi.fn(),
                    set: () => true,
                },
            );
            const getContext = vi
                .spyOn(HTMLCanvasElement.prototype, "getContext")
                .mockReturnValue(context as CanvasRenderingContext2D);
            const raf = vi
                .spyOn(window, "requestAnimationFrame")
                .mockReturnValue(123);
            const cancel = vi.spyOn(window, "cancelAnimationFrame");
            const { unmount } = render(() => (
                <Component width={800} height={240} />
            ));
            expect(getContext).toHaveBeenCalled();
            expect(raf).not.toHaveBeenCalled();
            change(false);
            expect(raf).toHaveBeenCalled();
            change(true);
            expect(cancel).toHaveBeenCalledWith(123);
            expect(vi.getTimerCount()).toBe(0);
            unmount();
        });
    }
});
