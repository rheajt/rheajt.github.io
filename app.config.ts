import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    server: {
        preset: "static",
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
