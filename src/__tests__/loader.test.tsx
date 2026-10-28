import { afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@solidjs/testing-library";
import { Loader } from "~/components/loader";

vi.mock("@solidjs/start/router", () => ({ FileRoutes: () => null }));

import { AppRoot } from "~/app";

afterEach(() => {
    vi.restoreAllMocks();
});

describe("purple page loader", () => {
    it("renders the full-screen spinner with accessible status text", () => {
        render(() => <Loader />);

        const status = screen.getByRole("status");
        expect(status).toHaveClass("page-loader");
        expect(status).toHaveTextContent("Loading…");
        expect(status.querySelector(".page-loader__spinner")).not.toBeNull();
    });

    it("does not auto-dismiss a non-initial loader", () => {
        const frame = vi.spyOn(window, "requestAnimationFrame");

        render(() => <Loader />);

        expect(screen.getByRole("status")).toBeInTheDocument();
        expect(frame).not.toHaveBeenCalled();
    });

    it("keeps a custom status label", () => {
        render(() => <Loader label="Loading projects…" />);

        expect(screen.getByRole("status")).toHaveTextContent(
            "Loading projects…",
        );
    });

    it("dismisses the initial app loader after it fades", () => {
        const frame = vi
            .spyOn(window, "requestAnimationFrame")
            .mockImplementation(callback => {
                callback(0);
                return 0;
            });

        render(() => (
            <AppRoot>
                <p>Visible page content</p>
            </AppRoot>
        ));

        expect(screen.getByText("Visible page content")).toBeVisible();
        const loader = document.querySelector(".page-loader");
        expect(loader).not.toBeNull();
        expect(loader).toHaveClass("page-loader--initial");
        expect(loader).toHaveClass("ready");
        expect(frame).toHaveBeenCalled();

        fireEvent.transitionEnd(loader!);
        expect(document.querySelector(".page-loader")).toBeNull();
    });
});
