const smokeProjects = [
    {
        _id: "build-smoke-project",
        title: "Build Smoke Project",
        slug: { current: "build-smoke-project" },
        summary:
            "A deterministic project returned during the build smoke test.",
        category: "jordanrhea.com",
        publishedAt: "2026-01-01T00:00:00.000Z",
        imageUrl: "https://example.com/build-smoke-project.png",
        imageAlt: "Build smoke project image",
        tags: [],
        seo: {
            title: "Build Smoke Project",
            description:
                "A deterministic project returned during the build smoke test.",
        },
        body: [],
    },
    {
        _id: "build-smoke-project-two",
        title: "Second Build Smoke Project",
        slug: { current: "build-smoke-project-two" },
        summary:
            "A second deterministic project returned during the build smoke test.",
        category: "jordanrhea.com",
        publishedAt: "2026-01-02T00:00:00.000Z",
        imageUrl: "https://example.com/build-smoke-project-two.png",
        imageAlt: "Second build smoke project image",
        tags: [],
        seo: {
            title: "Second Build Smoke Project",
            description:
                "A second deterministic project returned during the build smoke test.",
        },
        body: [],
    },
];

const originalFetch = globalThis.fetch;

globalThis.fetch = async (input, init) => {
    const requestUrl = new URL(
        typeof input === "string" || input instanceof URL ? input : input.url,
    );

    if (!requestUrl.hostname.endsWith("sanity.io")) {
        return originalFetch(input, init);
    }

    const query = requestUrl.searchParams.get("query") ?? "";
    const serializedSlug =
        requestUrl.searchParams.get("$slug") ??
        requestUrl.searchParams.get("slug");
    const slug = serializedSlug ? JSON.parse(serializedSlug) : null;
    const result = query.includes("].slug.current")
        ? smokeProjects.map(project => project.slug.current)
        : query.includes("slug.current == $slug")
          ? (smokeProjects.find(project => project.slug.current === slug) ??
            null)
          : smokeProjects;

    return Response.json({ result });
};
