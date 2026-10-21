// @vitest-environment node
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createServer, type ViteDevServer } from "vite";
import solidPlugin from "vite-plugin-solid";
import { JSDOM } from "jsdom";
import { resolve } from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
import { compile } from "sass";

describe("unhydrated recovery HTML", () => {
    let server: ViteDevServer;
    beforeAll(async () => {
        server = await createServer({
            configFile: false,
            plugins: [solidPlugin({ ssr: true })],
            resolve: {
                alias: [
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
                    { find: "~", replacement: resolve("src") },
                ],
            },
            ssr: { noExternal: ["solid-icons"] },
            server: { middlewareMode: true },
            optimizeDeps: { noDiscovery: true, include: [] },
            cacheDir: "node_modules/.vite-static-recovery-test",
            appType: "custom",
        });
    });
    afterAll(async () => server?.close());

    it("emits functional recovery controls and visible loading text without scripts", async () => {
        const { StaticNotFoundHeader } = await server.ssrLoadModule(
            "/src/components/static-not-found-header.tsx",
        );
        const { Loader } = await server.ssrLoadModule(
            "/src/components/loader.tsx",
        );
        const { renderToString } = await server.ssrLoadModule("solid-js/web");
        const header = renderToString(StaticNotFoundHeader);
        const loading = renderToString(Loader);
        const html = `<main>${header}${loading}</main>`;
        const dom = new JSDOM(html); // No runScripts: nothing is hydrated.
        try {
            const doc = dom.window.document;
            expect(
                doc.querySelectorAll("script, button, [hidden], #page-loader"),
            ).toHaveLength(0);
            expect(doc.querySelector('[role="status"]')?.textContent).toBe(
                "Loading…",
            );
            const details = doc.querySelector("details")!;
            expect(details.open).toBe(false);
            details.querySelector("summary")!.click();
            expect(details.open).toBe(true);
            expect(details.querySelector('a[href="/resume"]')).not.toBeNull();
            for (const href of ["/", "/projects", "/contact"]) {
                expect(
                    doc.querySelector(
                        `.static-recovery-links a[href="${href}"]`,
                    ),
                ).not.toBeNull();
            }
            if (process.env.STATIC_RECOVERY_EVIDENCE) {
                const directory = process.env.STATIC_RECOVERY_EVIDENCE;
                await mkdir(directory, { recursive: true });
                const css =
                    compile("src/styles/style.scss").css +
                    compile("src/components/navigation.scss").css;
                await writeFile(
                    resolve(directory, "static-recovery-no-js.html"),
                    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><base href="http://localhost:4444/"><title>Static recovery evidence</title><style>${css}</style></head><body>${header}<main><section class="layout-section"><h1>404: Not Found</h1><p>Static header and inline loading, rendered without scripts.</p>${loading}</section></main></body></html>`,
                );
            }
        } finally {
            dom.window.close();
        }
    });
});
