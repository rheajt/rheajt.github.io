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

    it("removes the loader and skips mounting for static 404 pages", () => {
        document.body.innerHTML = `
            <div id="page-loader"></div>
            <div id="app"><div data-static-404></div></div>
        `;

        mountClient();

        expect(document.getElementById("page-loader")).not.toBeInTheDocument();
        expect(mount).not.toHaveBeenCalled();
    });

    it("mounts the client for pages without the static 404 marker", () => {
        mountClient();

        expect(mount).toHaveBeenCalledOnce();
    });
});
