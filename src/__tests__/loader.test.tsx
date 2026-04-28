import { describe, it, expect, vi } from "vitest";
import { render } from "@solidjs/testing-library";
import { Loader } from "~/components/loader";

describe("Loader", () => {
    it("dismisses the server-rendered loader element", () => {
        document.body.innerHTML = `<div id="page-loader"><div class="load-circle"></div></div>`;

        vi.stubGlobal(
            "requestAnimationFrame",
            (callback: FrameRequestCallback) => {
                callback(0);
                return 0;
            },
        );

        render(() => <Loader />);

        const loader = document.getElementById("page-loader");

        expect(loader).toHaveClass("ready");

        loader?.dispatchEvent(new Event("transitionend"));

        expect(document.getElementById("page-loader")).not.toBeInTheDocument();
    });
});
