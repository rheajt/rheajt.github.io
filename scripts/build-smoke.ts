import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve(".output");
const publicDirectory = resolve(outputDirectory, "public");
const projectPage = resolve(
    publicDirectory,
    "projects",
    "build-smoke-project",
    "index.html",
);
const notFoundPage = resolve(publicDirectory, "404.html");

await rm(outputDirectory, { force: true, recursive: true });

const build = Bun.spawn(
    [
        "bun",
        "--preload",
        "./scripts/mock-sanity.ts",
        "./node_modules/vinxi/bin/cli.mjs",
        "build",
    ],
    { stdin: "inherit", stdout: "inherit", stderr: "inherit" },
);

if ((await build.exited) !== 0) {
    throw new Error("Vinxi build failed.");
}

await assertPage(projectPage, "Build Smoke Project");
await assertPage(notFoundPage, "404: Not Found");

async function assertPage(path: string, expectedContent: string) {
    const page = Bun.file(path);

    if (!(await page.exists())) {
        throw new Error(`Expected generated file was not emitted: ${path}`);
    }

    if (!(await page.text()).includes(expectedContent)) {
        throw new Error(
            `Generated file did not contain expected content: ${path}`,
        );
    }
}
