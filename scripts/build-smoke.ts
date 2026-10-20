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
const standalonePages = [
    { label: "Resume", href: "/resume" },
    { label: "About", href: "/about" },
    { label: "Language Learning", href: "/language-learning" },
    { label: "Vexillology", href: "/vexillology" },
];

await rm(outputDirectory, { force: true, recursive: true });

const build = Bun.spawn(["./node_modules/.bin/vite", "build"], {
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
    // Nitro 3 prerenders in a Node worker; preload the mock in that worker too.
    env: {
        ...process.env,
        NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ""} --import=${pathToFileURL(resolve("scripts/mock-sanity.ts")).href}`,
    },
});

if ((await build.exited) !== 0) {
    throw new Error("Vite build failed.");
}

await Promise.all(
    projectDetailPages.map(project => assertProjectDetailPage(project)),
);
await assertPageMatches(projectsListingPage, projectsListingHeading);
await assertPage(notFoundPage, "404: Not Found");
await assertSchoolDataSolutionsPage();
await assertProductionNavigation();

async function assertProductionNavigation() {
    const pages = [
        { path: resolve(publicDirectory, "index.html"), pathname: "/" },
        { path: schoolDataSolutionsPage, pathname: "/school-data-solutions" },
        { path: projectsListingPage, pathname: "/projects" },
        ...standalonePages.map(page => ({
            path: resolve(publicDirectory, page.href.slice(1), "index.html"),
            pathname: page.href,
        })),
    ];

    for (const page of pages) {
        // readPage also proves Nitro discovered and emitted each standalone route.
        const { document } = new JSDOM(await readPage(page.path)).window;
        const header = document.querySelector("header");
        assert.ok(
            header,
            `Production header must be rendered: ${page.pathname}`,
        );
        const brand = header.querySelector(
            'a[aria-label="Jordan Rhea — Home"]',
        );
        assert.ok(
            brand,
            "Production header must retain the accessible home link.",
        );
        assert.equal(brand.getAttribute("href"), "/");
        assert.equal(
            brand.querySelector("img")?.getAttribute("src"),
            "/content/img/jr-icon.png",
        );

        const work = header.querySelector('nav[aria-label="Work"]');
        assert.ok(work, "Production header must expose work navigation.");
        assert.equal(
            work
                .querySelector('a[href="/school-data-solutions"]')
                ?.textContent?.trim(),
            "School Data Solutions",
        );
        assert.equal(
            work.querySelector('a[href="/projects"]')?.textContent?.trim(),
            "Projects",
        );

        const toggle = Array.from(header.querySelectorAll("button")).find(
            button => button.textContent?.trim().startsWith("Pages"),
        );
        assert.ok(
            toggle,
            "Production header must render the Pages disclosure.",
        );
        assert.equal(toggle.getAttribute("aria-expanded"), "false");
        const panelId = toggle.getAttribute("aria-controls");
        assert.ok(panelId, "Pages must identify its controlled panel.");
        const panel = document.getElementById(panelId);
        assert.ok(
            panel,
            "Closed Pages panel must remain mounted in static HTML.",
        );
        assert.ok(
            panel.hasAttribute("hidden"),
            "Pages panel must be hidden initially.",
        );
        for (const destination of [
            { label: "Home", href: "/" },
            ...standalonePages,
        ]) {
            assert.equal(
                panel
                    .querySelector(`a[href="${destination.href}"]`)
                    ?.textContent?.trim(),
                destination.label,
                `Static panel must expose ${destination.href} for Nitro crawling.`,
            );
        }
        if (page.pathname !== "/") {
            assert.equal(
                header
                    .querySelector(`a[href="${page.pathname}"]`)
                    ?.getAttribute("aria-current"),
                "page",
                `Static navigation must mark the current route: ${page.pathname}`,
            );
        }
        assert.equal(
            document.querySelector(
                '[aria-label="Navigation prototype controls"], [aria-label="Previous navigation variant"], [aria-label="Next navigation variant"]',
            ),
            null,
            "Production output must not include prototype controls.",
        );
        assert.ok(!/Navigation preview/i.test(document.body.textContent ?? ""));
        for (const link of header.querySelectorAll("a[href]")) {
            assert.ok(
                !/[?&]variant=/.test(link.getAttribute("href") ?? ""),
                "Production navigation hrefs must not retain preview variants.",
            );
        }
    }
}

async function assertSchoolDataSolutionsPage() {
    const schoolPage = await readPage(schoolDataSolutionsPage);
    const projectsPage = await readPage(projectsListingPage);
    // Parse without executing scripts so payload-only data cannot pass as a card.
    const { document } = new JSDOM(schoolPage).window;
    const headings = document.querySelectorAll("main h1");
    const cards = document.querySelectorAll("main #project-list article");

    assert.equal(
        headings.length,
        1,
        "School page must render one main heading.",
    );
    assert.equal(
        headings[0].textContent?.replace(/\s+/g, " ").trim(),
        "School Data Solutions",
        "School page heading must identify School Data Solutions.",
    );
    assert.equal(
        cards.length,
        projectDetailPages.length + 1,
        "School page must render every published fixture across categories.",
    );
    const schoolCard = Array.from(cards).find(
        card =>
            card.querySelector("h3")?.textContent ===
            "School scheduling workspace",
    );
    assert.ok(
        schoolCard,
        "School fixture title must be rendered in a project card.",
    );
    assert.ok(
        Array.from(schoolCard.querySelectorAll("p")).some(
            paragraph =>
                paragraph.textContent ===
                "Review scheduling information in one place.",
        ),
        "School fixture summary must be rendered in a project card.",
    );
    assert.equal(
        schoolCard.querySelector(".platform-label")?.textContent,
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
            Array.from(cards).some(
                card => card.querySelector("h3")?.textContent === project.title,
            ),
            `School page must render a project card from every category: ${project.title}`,
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
