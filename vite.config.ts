import { defineConfig } from "vite";
import { solidStart } from "@solidjs/start/config";
import { nitro } from "nitro/vite";
import { fetchPublishedProjectSlugs } from "./src/lib/sanity.ts";

export default defineConfig({
    // The dev toolbar retains the previous hydrated route DOM on navigation.
    plugins: [solidStart({ devOverlay: false }), nitro()],
    nitro: {
        preset: "static",
        hooks: {
            "prerender:routes": async routes => {
                routes.add("/404.html");
                routes.add("/school-data-solutions");

                const projectSlugs = await fetchPublishedProjectSlugs();

                for (const slug of projectSlugs) {
                    routes.add(`/projects/${slug}`);
                }
            },
            "prerender:generate": route => {
                // Emit the custom static fallback even though it correctly returns 404.
                if (route.route === "/404.html" && route.error?.status === 404) {
                    route.error = undefined;
                }
            },
        },
    },
    resolve: {
        dedupe: ["solid-js", "@solidjs/router", "@solidjs/meta"],
    },
    optimizeDeps: {
        // Scan lazy routes up front to avoid mixed Solid runtime optimizer hashes.
        entries: ["src/entry-client.tsx", "src/routes/**/*.{ts,tsx}"],
        include: ["@jridgewell/trace-mapping", "@jridgewell/resolve-uri"],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
            },
        },
    },
});
