import { defineConfig } from "vitest/config";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        solidPlugin(),
        // Vitest has no SolidStart transform. Only tests replace its marker;
        // the real dev/build plugin still enforces the server-only boundary.
        {
            name: "test-server-only-marker",
            resolveId(id) {
                if (id === "server-only") return "\0test:server-only";
            },
            load(id) {
                if (id === "\0test:server-only") return "export {};";
            },
        },
    ],
    resolve: {
        alias: {
            "~": resolve(import.meta.dirname, "./src"),
        },
    },
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./src/__tests__/setup.ts"],
        testTimeout: 10000,
        css: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
            },
        },
    },
});
