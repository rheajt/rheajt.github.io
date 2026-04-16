/// <reference types="vitest" />
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";

export default defineConfig({
    plugins: [solidPlugin()],
    resolve: {
        alias: {
            "~": resolve(__dirname, "./src"),
        },
    },
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./src/__tests__/setup.ts"],
        transformMode: {
            web: [/\.[jt]sx?$/],
        },
        deps: {
            optimizer: {
                web: {
                    include: [],
                },
            },
        },
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
