import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve(".output");
const publicDirectory = resolve(outputDirectory, "public");
const projectsListingPage = resolve(publicDirectory, "projects", "index.html");
const projectsListingHeading = /<h1[^>]*>Projects<\/h1>/;
const projectDetailPages = [
    {
        path: resolve(
            publicDirectory,
            "projects",
            "build-smoke-project",
            "index.html",
        ),
        title: "Build Smoke Project",
    },
    {
        path: resolve(
            publicDirectory,
            "projects",
            "build-smoke-project-two",
            "index.html",
        ),
        title: "Second Build Smoke Project",
    },
];
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

await Promise.all(
    projectDetailPages.map(project => assertProjectDetailPage(project)),
);
await assertPageMatches(projectsListingPage, projectsListingHeading);
await assertPage(notFoundPage, "404: Not Found");

async function assertProjectDetailPage(project: {
    path: string;
    title: string;
}) {
    const page = await readPage(project.path);

    assertPageContains(page, project.path, project.title);
    assertPageContains(page, project.path, "<article");

    if (projectsListingHeading.test(page)) {
        throw new Error(
            `Detail page rendered the projects listing heading: ${project.path}`,
        );
    }
}

async function assertPage(path: string, expectedContent: string) {
    const page = await readPage(path);

    assertPageContains(page, path, expectedContent);
}

async function assertPageMatches(path: string, expectedContent: RegExp) {
    const page = await readPage(path);

    if (!expectedContent.test(page)) {
        throw new Error(
            `Generated file did not contain expected content: ${path}`,
        );
    }
}

async function readPage(path: string) {
    const page = Bun.file(path);

    if (!(await page.exists())) {
        throw new Error(`Expected generated file was not emitted: ${path}`);
    }

    return page.text();
}

function assertPageContains(
    page: string,
    path: string,
    expectedContent: string,
) {
    if (!page.includes(expectedContent)) {
        throw new Error(
            `Generated file did not contain expected content: ${path}`,
        );
    }
}
