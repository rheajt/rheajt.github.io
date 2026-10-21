import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Loader } from "~/components/loader";

vi.mock("@solidjs/start/router", () => ({ FileRoutes: () => null }));

import { AppRoot } from "~/app";

describe("fail-open loading", () => {
    it("renders local accessible loading feedback", () => {
        render(() => <Loader />);
        expect(screen.getByRole("status")).toHaveTextContent("Loading…");
        expect(document.querySelector("#page-loader")).not.toBeInTheDocument();
    });

    it("shows root content without a bootstrap loader or animation callback", () => {
        const frame = vi.spyOn(window, "requestAnimationFrame");
        render(() => (
            <AppRoot>
                <p>Visible page content</p>
            </AppRoot>
        ));
        expect(screen.getByText("Visible page content")).toBeVisible();
        expect(screen.queryByRole("status")).not.toBeInTheDocument();
        expect(document.querySelector("#page-loader")).not.toBeInTheDocument();
        expect(frame).not.toHaveBeenCalled();
        frame.mockRestore();
    });
});
