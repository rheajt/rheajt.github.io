// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createServer, type ViteDevServer } from "vite";
import solidPlugin from "vite-plugin-solid";
import { JSDOM } from "jsdom";
import { resolve } from "node:path";

describe("server document", () => {
    let server: ViteDevServer;

    beforeAll(async () => {
        server = await createServer({
            configFile: false,
            plugins: [
                {
                    name: "entry-server-test-start",
                    enforce: "pre",
                    resolveId(id) {
                        if (id === "@solidjs/start/server")
                            return "\0test-start-server";
                    },
                    load(id) {
                        if (id !== "\0test-start-server") return;
                        // Keep the actual document and adapter; replace only Start's app/router boundary.
                        return `
                            import { Dynamic } from "solid-js/web";
                            export const createHandler = (render, options) => ({ render, options });
                            export const StartServer = props => props.document({
                                assets: Dynamic({ component: "meta", name: "test-assets", content: "present" }),
                                children: Dynamic({ component: "main", children: "Page" }),
                                scripts: Dynamic({ component: "script", id: "test-scripts" }),
                            });
                        `;
                    },
                },
                solidPlugin({ ssr: true }),
            ],
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
            ssr: { noExternal: ["@solidjs/start", "solid-styled-components"] },
            optimizeDeps: { noDiscovery: true, include: [] },
            server: { middlewareMode: true },
            appType: "custom",
            cacheDir: "node_modules/.vite-entry-ssr-test",
        });
    });

    afterAll(async () => server?.close());

    it("buffers async rendering and keeps document assets without a global loader", async () => {
        const { default: handler } = await server.ssrLoadModule(
            "/src/entry-server.tsx",
        );
        expect(handler.options).toEqual({ mode: "async" });
        const { renderToStringAsync } =
            await server.ssrLoadModule("solid-js/web");
        const { provideRequestEvent } = await server.ssrLoadModule(
            "solid-js/web/storage",
        );
        const html = await provideRequestEvent(
            { request: new Request("https://example.test/"), locals: {} },
            () => renderToStringAsync(handler.render),
        );
        const dom = new JSDOM(html);
        try {
            const document = dom.window.document;
            expect(document.querySelector("#page-loader")).toBeNull();
            expect(document.querySelectorAll("head style")).toHaveLength(1);
            expect(
                document.querySelector("head style#_goober")?.textContent,
            ).toBe(" ");
            expect(
                document.querySelector('head meta[name="test-assets"]'),
            ).not.toBeNull();
            expect(document.querySelector("#app main")?.textContent).toBe(
                "Page",
            );
            expect(
                document.querySelector("body > #test-scripts"),
            ).not.toBeNull();
            expect(
                document.querySelector(
                    'link[href*="fonts.googleapis.com/css2"]',
                ),
            ).not.toBeNull();
        } finally {
            dom.window.close();
        }
    });
});
