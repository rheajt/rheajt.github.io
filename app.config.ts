import { defineConfig } from "@solidjs/start/config";
import { fetchPublishedProjectSlugs } from "./src/lib/sanity";

export default defineConfig({
    server: {
        preset: "static",
        hooks: {
            "prerender:routes": async routes => {
                const projectSlugs = await fetchPublishedProjectSlugs();

                for (const slug of projectSlugs) {
                    routes.add(`/projects/${slug}`);
                }
            },
        },
    },
    vite: {
        resolve: {
            dedupe: ["solid-js", "@solidjs/router", "@solidjs/meta"],
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                },
            },
        },
    },
});
