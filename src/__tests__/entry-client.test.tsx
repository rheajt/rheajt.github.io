import { beforeEach, describe, expect, it, vi } from "vitest";

const { mount } = vi.hoisted(() => ({ mount: vi.fn() }));

vi.mock("@solidjs/start/client", () => ({
    mount,
    StartClient: () => null,
}));

import { mountClient } from "~/entry-client";

describe("entry client", () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="app"></div>';
        mount.mockClear();
    });

    it("removes the initial loader and leaves static 404 markup untouched", () => {
        window.history.replaceState({}, "", "/unknown-fallback-path");
        document.body.innerHTML = `
            <div class="page-loader page-loader--initial"><div class="page-loader__spinner"></div></div>
            <div id="app"><div data-static-404><a href="/">Home</a></div></div>
        `;

        mountClient();

        expect(document.querySelector(".page-loader")).toBeNull();
        expect(document.querySelector("[data-static-404]")).not.toBeNull();
        expect(
            document.querySelector('[data-static-404] a[href="/"]'),
        ).not.toBeNull();
        expect(mount).not.toHaveBeenCalled();
        window.history.replaceState({}, "", "/");
    });

    it("mounts the client for pages without the static 404 marker", () => {
        mountClient();

        expect(mount).toHaveBeenCalledOnce();
    });
});
