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
const projectDetailPages = [
    {
        path: resolve(
            publicDirectory,
            "projects",
            "build-smoke-project",
            "index.html",
        ),
        title: "Build Smoke Project",
        description:
            "A deterministic project returned during the build smoke test.",
        canonical: "https://jordanrhea.com/projects/build-smoke-project",
    },
    {
        path: resolve(
            publicDirectory,
            "projects",
            "build-smoke-project-two",
            "index.html",
        ),
        title: "Second Build Smoke Project",
        description:
            "A second deterministic project returned during the build smoke test.",
        canonical: "https://jordanrhea.com/projects/build-smoke-project-two",
    },
];
const notFoundPage = resolve(publicDirectory, "404.html");
const standalonePages = [
    { label: "Resume", href: "/resume" },
    { label: "About", href: "/about" },
    { label: "Language Learning", href: "/language-learning" },
    { label: "Vexillology", href: "/vexillology" },
];
const seededPages = [
    { pathname: "/schedule", heading: "Schedule a Meeting", title: "Schedule" },
    { pathname: "/poker", heading: "Poker Tracker", title: "Poker" },
    {
        pathname: "/language-learning/dictionary",
        heading: "Dictionary",
        title: "Dictionary",
    },
];

await rm(outputDirectory, { force: true, recursive: true });

const build = Bun.spawn(["./node_modules/.bin/vite", "build"], {
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
    // Nitro 3 prerenders in a Node worker; preload the mock in that worker too.
    env: {
        ...process.env,
        // A static production build must never need draft credentials, even if
        // the developer has a token in their shell or an ignored env file.
        SANITY_READ_TOKEN: "",
        NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ""} --import=${pathToFileURL(resolve("scripts/mock-sanity.ts")).href}`,
    },
});

if ((await build.exited) !== 0) {
    throw new Error("Vite build failed.");
}

await Promise.all(
    projectDetailPages.map(project => assertProjectDetailPage(project)),
);
await assertPageHeading(projectsListingPage, "Projects");
await assertPageHeading(notFoundPage, "404: Not Found");
await assertSchoolDataSolutionsPage();
await assertNoPrivateDraftCode();
await assertProductionNavigation();
for (const page of seededPages) {
    await assertPageHeading(
        resolve(publicDirectory, page.pathname.slice(1), "index.html"),
        page.heading,
        page.title,
    );
}
for (const path of [
    "prototype-editorial/index.html",
    "prototype-editorial.html",
]) {
    assert.equal(
        await Bun.file(resolve(publicDirectory, path)).exists(),
        false,
        "The editorial prototype must not be published.",
    );
}

function assertInitialLoader(document: Document) {
    const loader = document.querySelector(".page-loader");
    if (!loader)
        throw new Error(
            "Static document must include the initial page loader.",
        );
    assert.ok(
        loader.classList.contains("page-loader--initial"),
        "The initial page loader must be marked for dismissal.",
    );
    assert.equal(
        loader.getAttribute("role"),
        "status",
        "The initial page loader must expose a status role.",
    );
    assert.ok(
        loader.querySelector(".page-loader__spinner"),
        "The initial page loader must render its spinner.",
    );
}

async function assertNoPrivateDraftCode() {
    const assets = new Bun.Glob("**/*.{html,js,json,map}");
    for await (const path of assets.scan({
        cwd: publicDirectory,
        absolute: true,
    })) {
        const content = await Bun.file(path).text();
        for (const marker of [
            "SANITY_READ_TOKEN",
            "school-drafts.server",
            "fetchSchoolDraftPostsFromSanity",
            "test-only-draft-token",
        ]) {
            assert.ok(
                !content.includes(marker),
                `Public asset must not contain private draft code or test credentials: ${path}`,
            );
        }
    }
}

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
        assertStyledElement(
            document,
            document.querySelector("footer"),
            `Footer on ${page.pathname}`,
        );
        assertInitialLoader(document);
        if (page.pathname === "/") {
            assert.ok(
                !Array.from(
                    document.querySelectorAll('main [role="status"]'),
                ).some(status =>
                    /^Loading(?:…|\.{3})$/.test(
                        status.textContent?.trim() ?? "",
                    ),
                ),
                "The completed homepage must not retain a permanent loading status.",
            );
        }
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
    const projectsDocument = new JSDOM(projectsPage).window.document;
    const projectTitles = Array.from(
        projectsDocument.querySelectorAll('main a[href^="/projects/"] h3'),
    ).map(heading => heading.textContent);
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
        1,
        "School page must render only the published school-category fixture.",
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
        schoolCard.querySelector(".tags .tag")?.textContent,
        "PowerSchool",
    );
    assert.equal(schoolCard.querySelector("a"), null);

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
            !Array.from(cards).some(
                card => card.querySelector("h3")?.textContent === project.title,
            ),
            `School page must exclude other categories: ${project.title}`,
        );
        assert.ok(
            projectTitles.includes(project.title),
            `Projects listing must contain an active card for ${project.title}.`,
        );
    }
    assert.ok(
        !projectTitles.includes("School scheduling workspace"),
        "The normal projects listing must not include the school-category fixture.",
    );
}

async function assertProjectDetailPage(project: {
    path: string;
    title: string;
    description: string;
    canonical: string;
}) {
    const dom = new JSDOM(await readPage(project.path));
    try {
        const document = dom.window.document;
        const article = document.querySelector("main article");
        assert.ok(
            article,
            `Async project must render an active main article: ${project.path}`,
        );
        assert.equal(article.querySelector("h1")?.textContent, project.title);
        assert.equal(
            article.querySelector(".dek")?.textContent,
            project.description,
        );
        assert.equal(document.querySelectorAll("main h1").length, 1);
        assert.equal(document.head.querySelectorAll("title").length, 1);
        assert.equal(
            document.head.querySelector("title")?.textContent,
            `${project.title} | jordan rhea`,
        );
        assert.equal(
            document.head
                .querySelector('meta[name="description"]')
                ?.getAttribute("content"),
            project.description,
        );
        assert.equal(
            document.head
                .querySelector('link[rel="canonical"]')
                ?.getAttribute("href"),
            project.canonical,
        );
        assertStyledElement(
            document,
            article,
            `Async article on ${project.path}`,
        );
        assertStyledElement(
            document,
            document.querySelector("footer"),
            `Footer on ${project.path}`,
        );
        assertInitialLoader(document);
    } finally {
        dom.window.close();
    }
}

async function assertPageHeading(
    path: string,
    heading: string,
    title?: string,
) {
    const dom = new JSDOM(await readPage(path));
    try {
        const document = dom.window.document;
        assert.equal(
            document.querySelector("main h1")?.textContent,
            heading,
            `Expected active main heading in ${path}.`,
        );
        if (title)
            assert.equal(
                document.head.querySelector("title")?.textContent,
                `${title} | jordan rhea`,
            );
        assertStyledElement(
            document,
            document.querySelector("footer"),
            `Footer on ${path}`,
        );
        assertInitialLoader(document);
    } finally {
        dom.window.close();
    }
}

function assertStyledElement(
    document: Document,
    element: Element | null,
    label: string,
) {
    assert.ok(
        element,
        `${label} must exist outside templates and hydration payloads.`,
    );
    const sheets =
        document.head.querySelectorAll<HTMLStyleElement>("style#_goober");
    assert.equal(
        sheets.length,
        1,
        `${label} must have one emitted Goober stylesheet in head.`,
    );
    const classes = Array.from(element.classList).filter(name =>
        /^go\d+$/.test(name),
    );
    assert.ok(classes.length, `${label} must retain its generated class.`);
    const rules = Array.from(sheets[0].sheet?.cssRules ?? []);
    assert.ok(
        classes.some(name =>
            rules.some(
                rule =>
                    "selectorText" in rule &&
                    typeof rule.selectorText === "string" &&
                    rule.selectorText
                        .split(",")
                        .some(selector => selector.trim() === `.${name}`),
            ),
        ),
        `${label} must have an emitted CSS rule matching its actual generated class.`,
    );
}

async function readPage(path: string) {
    const page = Bun.file(path);

    if (!(await page.exists())) {
        throw new Error(`Expected generated file was not emitted: ${path}`);
    }

    return page.text();
}
