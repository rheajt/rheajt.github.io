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

    it("leaves static 404 markup untouched and skips mounting at unknown paths", () => {
        window.history.replaceState({}, "", "/unknown-fallback-path");
        document.body.innerHTML = `
            <div id="app"><div data-static-404><a href="/">Home</a></div></div>
        `;
        const markup = document.body.innerHTML;

        mountClient();

        expect(document.body.innerHTML).toBe(markup);
        expect(mount).not.toHaveBeenCalled();
        window.history.replaceState({}, "", "/");
    });

    it("mounts the client for pages without the static 404 marker", () => {
        mountClient();

        expect(mount).toHaveBeenCalledOnce();
    });
});
