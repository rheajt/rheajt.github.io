import { strict as assert } from "node:assert";
import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { JSDOM } from "jsdom";

const outputDirectory = resolve(".output");
const publicDirectory = resolve(outputDirectory, "public");
const projectsListingPage = resolve(publicDirectory, "projects", "index.html");
const schoolDataSolutionsPage = resolve(
    publicDirectory,
    "school-data-solutions",
    "index.html",
);
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
    ["./node_modules/.bin/vite", "build"],
    {
        stdin: "inherit",
        stdout: "inherit",
        stderr: "inherit",
        // Nitro 3 prerenders in a Node worker; preload the mock in that worker too.
        env: {
            ...process.env,
            NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ""} --import=${pathToFileURL(resolve("scripts/mock-sanity.ts")).href}`,
        },
    },
);

if ((await build.exited) !== 0) {
    throw new Error("Vite build failed.");
}

await Promise.all(
    projectDetailPages.map(project => assertProjectDetailPage(project)),
);
await assertPageMatches(projectsListingPage, projectsListingHeading);
await assertPage(notFoundPage, "404: Not Found");
await assertSchoolDataSolutionsPage();

async function assertSchoolDataSolutionsPage() {
    const schoolPage = await readPage(schoolDataSolutionsPage);
    const projectsPage = await readPage(projectsListingPage);
    // Parse without executing scripts so payload-only data cannot pass as a card.
    const { document } = new JSDOM(schoolPage).window;
    const headings = document.querySelectorAll("main h1");
    const cards = document.querySelectorAll("main #project-list article");

    assert.equal(headings.length, 1, "School page must render one main heading.");
    assert.equal(
        headings[0].textContent?.replace(/\s+/g, " ").trim(),
        "School Data Solutions",
        "School page heading must identify School Data Solutions.",
    );
    assert.equal(
        cards.length,
        1,
        "School page must render only its category fixture.",
    );
    assert.equal(
        cards[0].querySelector("h3")?.textContent,
        "School scheduling workspace",
        "School fixture title must be rendered in a project card.",
    );
    assert.ok(
        Array.from(cards[0].querySelectorAll("p")).some(
            paragraph =>
                paragraph.textContent ===
                "Review scheduling information in one place.",
        ),
        "School fixture summary must be rendered in a project card.",
    );
    assert.equal(
        cards[0].querySelector(".platform-label")?.textContent,
        "PowerSchool",
    );

    const logo = document.querySelector("main .hero-heading img.brand-logo");
    assert.equal(
        logo?.getAttribute("src"),
        "/school-data-solutions-new-logo.png",
    );
    assert.equal(logo?.getAttribute("alt"), "School Data Solutions logo");
    assert.ok(
        await Bun.file(
            resolve(publicDirectory, "school-data-solutions-new-logo.png"),
        ).exists(),
        "School hero logo asset must be emitted.",
    );

    for (const project of projectDetailPages) {
        assert.ok(
            !schoolPage.includes(project.title),
            `School page must not include another category's project: ${project.title}`,
        );
        assertPageContains(projectsPage, projectsListingPage, project.title);
    }
    assert.ok(
        !projectsPage.includes("School scheduling workspace"),
        "The normal projects listing must not include the school-category fixture.",
    );
}

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
