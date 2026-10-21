import { strict as assert } from "node:assert";
import { JSDOM } from "jsdom";
import { createComponent, createResource, Suspense, type JSX } from "solid-js";
import {
    Dynamic,
    isServer,
    renderToString,
    renderToStringAsync,
    ssr,
} from "solid-js/web";
import { provideRequestEvent } from "solid-js/web/storage";
import { getRequestStyleSheet, styled } from "../src/lib/styled";
import { registerStyledAssets } from "../src/lib/styled-server";

assert.equal(
    isServer,
    true,
    "This regression must run with Solid's server exports.",
);

// Deliberately declare every component outside any request context.
const Shared = styled.div`
    --request-common: shared;
`;
const EarlyA = styled.div`
    --request-a-early: 1;
`;
const LateA = styled.article`
    --request-a-late: 1;
`;
const EarlyB = styled.div`
    --request-b-early: 1;
`;
const LateB = styled.article`
    --request-b-late: 1;
`;
const Custom = (props: JSX.HTMLAttributes<HTMLElement>) =>
    Dynamic({ component: "section", ...props });
const StyledCustom = styled(Custom)`
    --request-callable: 1;
`;

function deferred<T>() {
    let resolve!: (value: T) => void;
    const promise = new Promise<T>(done => {
        resolve = done;
    });
    return { promise, resolve };
}

function request(path: string) {
    return { request: new Request(`https://example.test/${path}`), locals: {} };
}

function renderRequest(
    name: "a" | "b",
    data: Promise<string>,
    started: () => void,
) {
    return provideRequestEvent(request(name), () =>
        renderToStringAsync(() => {
            const content = [
                createComponent(Shared, { children: "Common" }),
                createComponent(name === "a" ? EarlyA : EarlyB, {
                    children: "Early",
                }),
                createComponent(Suspense, {
                    fallback: "Pending",
                    get children() {
                        const [value] = createResource(() => {
                            started();
                            return data;
                        });
                        return () =>
                            value() &&
                            createComponent(name === "a" ? LateA : LateB, {
                                "data-phase": "late",
                                children: value(),
                            });
                    },
                }),
            ];
            const page = ssr(
                ["<html><head></head><body>", "</body></html>"],
                content,
            );
            registerStyledAssets();
            registerStyledAssets(); // Registration must not extract the same sheet twice.
            return page;
        }),
    );
}

function assertIsolated(html: string, name: "a" | "b") {
    const dom = new JSDOM(html);
    try {
        const document = dom.window.document;
        const styles = document.querySelectorAll("style#_goober");
        assert.equal(
            styles.length,
            1,
            "Each response must emit exactly one Goober sheet.",
        );
        assert.equal(styles[0].parentElement, document.head);
        const css = styles[0].textContent ?? "";
        for (const rule of [
            "--request-common",
            `--request-${name}-early`,
            `--request-${name}-late`,
        ]) {
            assert.ok(
                css.includes(`${rule}:`),
                `Missing request-local rule: ${rule}`,
            );
        }
        const other = name === "a" ? "b" : "a";
        assert.ok(
            !css.includes(`--request-${other}-`),
            "Concurrent request CSS must not leak.",
        );
        assert.equal(
            document.querySelector('body article[data-phase="late"]')
                ?.textContent,
            `Resolved ${name}`,
        );
    } finally {
        dom.window.close();
    }
}

assert.throws(
    getRequestStyleSheet,
    /request/i,
    "Missing request context must never use a global sheet.",
);
assert.throws(
    () => renderToString(() => createComponent(Shared, {})),
    /request/i,
);

const a = deferred<string>();
const b = deferred<string>();
const aStarted = deferred<void>();
const bStarted = deferred<void>();
let aCompleted = false;
const htmlA = renderRequest("a", a.promise, () => aStarted.resolve()).then(
    html => {
        aCompleted = true;
        return html;
    },
);
const htmlB = renderRequest("b", b.promise, () => bStarted.resolve());
await Promise.all([aStarted.promise, bStarted.promise]);
b.resolve("Resolved b");
assertIsolated(await htmlB, "b");
assert.equal(aCompleted, false, "B must complete while A remains blocked.");
a.resolve("Resolved a");
assertIsolated(await htmlA, "a");

// Goober caches classes globally, but cached classes must populate a fresh target.
assertIsolated(
    await renderRequest("a", Promise.resolve("Resolved a"), () => {}),
    "a",
);

const emptyHtml = await provideRequestEvent(request("empty"), () =>
    renderToStringAsync(() => {
        const page = ssr("<html><head></head><body>Empty</body></html>");
        registerStyledAssets();
        return page;
    }),
);
const empty = new JSDOM(emptyHtml);
try {
    const sheets = empty.window.document.querySelectorAll("style#_goober");
    assert.equal(sheets.length, 1);
    assert.equal(
        sheets[0].childNodes.length,
        1,
        "An empty sheet still needs a browser-reusable text node.",
    );
    assert.equal(sheets[0].firstChild?.nodeType, empty.window.Node.TEXT_NODE);
    assert.equal(sheets[0].textContent, " ");
} finally {
    empty.window.close();
}

const callableHtml = await provideRequestEvent(request("callable"), () =>
    renderToStringAsync(() => {
        const page = ssr(
            ["<html><head></head><body>", "</body></html>"],
            createComponent(StyledCustom, { children: "Callable" }),
        );
        registerStyledAssets();
        return page;
    }),
);
const callable = new JSDOM(callableHtml);
try {
    const document = callable.window.document;
    const section = document.querySelector("body section");
    assert.equal(section?.textContent, "Callable");
    assert.ok(
        Array.from(section?.classList ?? []).some(name => /^go\d+$/.test(name)),
        `Styled callable must emit a Goober class: ${section?.outerHTML}`,
    );
    assert.ok(
        document
            .querySelector("style#_goober")
            ?.textContent?.includes("--request-callable:"),
    );
} finally {
    callable.window.close();
}

console.log(
    "SSR styles passed: overlapping A/B, cached request, empty sheet, callable styled, missing-context rejection.",
);
