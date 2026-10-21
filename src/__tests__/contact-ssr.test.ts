// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createServer, type ViteDevServer } from "vite";
import solidPlugin from "vite-plugin-solid";
import { JSDOM } from "jsdom";
import { resolve } from "node:path";

describe("contact server HTML", () => {
    let server: ViteDevServer;

    beforeAll(async () => {
        server = await createServer({
            configFile: false,
            plugins: [solidPlugin({ ssr: true })],
            resolve: {
                alias: [
                    { find: "~", replacement: resolve("src") },
                    {
                        find: /^solid-js$/,
                        replacement: resolve(
                            "node_modules/solid-js/dist/server.js",
                        ),
                    },
                    {
                        find: /^solid-js\/web$/,
                        replacement: resolve(
                            "node_modules/solid-js/web/dist/server.js",
                        ),
                    },
                ],
            },
            ssr: { noExternal: ["solid-styled-components", "solid-icons"] },
            optimizeDeps: { noDiscovery: true, include: [] },
            server: { middlewareMode: true },
            appType: "custom",
            // Do not share the application's optimized dependency cache.
            cacheDir: "node_modules/.vite-contact-ssr-test",
        });
    });

    afterAll(async () => server?.close());

    it("preserves the social card tree when the browser parses server HTML", async () => {
        // Client-only render tests bypass the HTML parser's repair of nested links.
        const { ContactIcons } = await server.ssrLoadModule(
            "/src/components/contact-icons.tsx",
        );
        const { renderToString, ssr } =
            await server.ssrLoadModule("solid-js/web");
        const { provideRequestEvent } = await server.ssrLoadModule(
            "solid-js/web/storage",
        );
        const { registerStyledAssets } = await server.ssrLoadModule(
            "/src/lib/styled-server.ts",
        );
        const html = provideRequestEvent(
            {
                request: new Request("https://example.test/contact"),
                locals: {},
            },
            () =>
                renderToString(() => {
                    const page = ssr(
                        ["<html><head></head><body>", "</body></html>"],
                        ContactIcons(),
                    );
                    registerStyledAssets();
                    return page;
                }),
        );
        const dom = new JSDOM(html);
        try {
            const doc = dom.window.document;
            const cards = doc.querySelectorAll(".icon-container");
            const sheets = doc.head.querySelectorAll("style#_goober");
            expect(sheets).toHaveLength(1);
            expect(sheets[0].textContent).toContain(".icon-container");
            expect(cards).toHaveLength(3);
            const follow = doc.querySelector(".github-button")!;
            expect(follow.closest('[data-label="GitHub"]')).not.toBeNull();
            expect(doc.querySelectorAll('[data-label="GitHub"]')).toHaveLength(
                1,
            );
            expect(
                doc.querySelector(".g-ytsubscribe")!.closest("a"),
            ).toBeNull();
        } finally {
            dom.window.close();
        }
    });
});
