import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "static",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
