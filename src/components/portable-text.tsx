import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import { createSignal, For, Show } from "solid-js";
import type { JSX } from "solid-js";

interface Span {
    _type: string;
    text?: string;
    marks?: string[];
}

interface Block {
    _type: string;
    _key?: string;
    style?: string;
    children?: Span[];
    markDefs?: { _key?: string; _type?: string; href?: string }[];
    listItem?: string;
    level?: number;
    url?: string;
    videoUrl?: string;
    youtubeUrl?: string;
    asset?: { url?: string };
    alt?: string;
    altText?: string;
    caption?: string;
    code?: string;
    language?: string;
    filename?: string;
    title?: string;
}

function isSafeHref(href: string): boolean {
    return /^(https?:|mailto:|\/|#)/i.test(href);
}

function renderSpan(span: Span, markDefs: Block["markDefs"] = []): JSX.Element {
    let text: JSX.Element = span.text || "";

    for (const markKey of span.marks || []) {
        if (markKey === "strong") text = <strong>{text}</strong>;
        else if (markKey === "em") text = <em>{text}</em>;
        else if (markKey === "code") text = <code>{text}</code>;
        else {
            const definition = markDefs.find(
                definition => definition._key === markKey,
            );
            const href = definition?.href;
            if (definition?._type === "link" && href && isSafeHref(href)) {
                const isExternal = /^https?:\/\//i.test(href);
                text = (
                    <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer noopener" : undefined}
                    >
                        {text}
                    </a>
                );
            }
        }
    }

    return text;
}

function blockChildren(block: Block): JSX.Element {
    return (
        <For each={block.children || []}>
            {child => renderSpan(child, block.markDefs)}
        </For>
    );
}

function renderTextBlock(block: Block): JSX.Element {
    const children = blockChildren(block);

    if (block.style === "h1") return <h1>{children}</h1>;
    if (block.style === "h2") return <h2>{children}</h2>;
    if (block.style === "h3") return <h3>{children}</h3>;
    if (block.style === "h4") return <h4>{children}</h4>;
    if (block.style === "blockquote")
        return <blockquote>{children}</blockquote>;
    return <p>{children}</p>;
}

function imageAlt(block: Block): string {
    return block.alt || block.altText || "";
}

function renderImage(block: Block): JSX.Element {
    const url = block.url || block.asset?.url;
    if (!url) return null as unknown as JSX.Element;

    return (
        <figure>
            <img
                src={url}
                alt={imageAlt(block)}
                style={{ "max-width": "100%" }}
            />
            <Show when={block.caption}>
                <figcaption>{block.caption}</figcaption>
            </Show>
        </figure>
    );
}

function youtubeId(value?: string): string | null {
    if (!value) return null;

    try {
        const parsed = new URL(value);
        const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
        let id: string | null = null;

        if (host === "youtu.be") id = parsed.pathname.split("/")[1] || null;
        else if (host === "youtube.com" || host.endsWith(".youtube.com")) {
            id =
                parsed.searchParams.get("v") ||
                parsed.pathname.match(
                    /^\/(?:embed|shorts|live)\/([^/?#]+)/,
                )?.[1] ||
                null;
        }

        return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
    } catch {
        return null;
    }
}

function renderYoutube(block: Block): JSX.Element {
    const id = youtubeId(block.url || block.videoUrl || block.youtubeUrl);
    if (!id) return <p role="status">Invalid YouTube URL</p>;

    return (
        <div style={{ position: "relative", "padding-top": "56.25%" }}>
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title={block.title || "YouTube video"}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                referrerpolicy="strict-origin-when-cross-origin"
                style={{
                    position: "absolute",
                    inset: "0",
                    width: "100%",
                    height: "100%",
                    border: "0",
                }}
            />
        </div>
    );
}

function highlightedCode(code: string, language?: string): string {
    const normalizedLanguage = language?.toLowerCase();
    const grammar =
        normalizedLanguage === "js" || normalizedLanguage === "javascript"
            ? Prism.languages.javascript
            : normalizedLanguage === "ts" || normalizedLanguage === "typescript"
              ? Prism.languages.typescript
              : normalizedLanguage === "jsx"
                ? Prism.languages.jsx
                : normalizedLanguage === "tsx"
                  ? Prism.languages.tsx
                  : normalizedLanguage === "html" ||
                      normalizedLanguage === "markup"
                    ? Prism.languages.markup
                    : normalizedLanguage === "css"
                      ? Prism.languages.css
                      : normalizedLanguage === "scss"
                        ? Prism.languages.scss
                        : normalizedLanguage === "json"
                          ? Prism.languages.json
                          : normalizedLanguage === "bash" ||
                              normalizedLanguage === "sh" ||
                              normalizedLanguage === "shell"
                            ? Prism.languages.bash
                            : normalizedLanguage === "markdown" ||
                                normalizedLanguage === "md"
                              ? Prism.languages.markdown
                              : undefined;

    if (!grammar)
        return code
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#39;");

    return Prism.highlight(code, grammar, normalizedLanguage || "plain");
}

function CodeBlock(props: { block: Block }): JSX.Element {
    const [copied, setCopied] = createSignal(false);
    const [copyFailed, setCopyFailed] = createSignal(false);
    const source = () => props.block.code || "";

    async function copyCode(event: MouseEvent) {
        const button = event.currentTarget as HTMLButtonElement;
        let didCopy = false;

        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(source());
                didCopy = true;
            }
        } catch {
            // Fall through to the legacy clipboard API.
        }

        if (!didCopy) {
            const textarea = document.createElement("textarea");
            textarea.value = source();
            textarea.setAttribute("readonly", "");
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.append(textarea);
            textarea.select();
            try {
                didCopy = document.execCommand("copy");
            } catch {
                didCopy = false;
            }
            textarea.remove();
        }

        if (didCopy) {
            setCopied(true);
            setCopyFailed(false);
            button.focus();
        } else {
            setCopied(false);
            setCopyFailed(true);
        }
    }

    return (
        <section aria-label={props.block.filename || "Code example"}>
            <Show when={props.block.filename}>
                <p>{props.block.filename}</p>
            </Show>
            <button type="button" onClick={copyCode}>
                {copied()
                    ? "Copied"
                    : copyFailed()
                      ? "Unable to copy code"
                      : "Copy code"}
            </button>
            <span role="status" aria-live="polite">
                {copied()
                    ? "Copied"
                    : copyFailed()
                      ? "Unable to copy code"
                      : ""}
            </span>
            <pre>
                <code
                    class={
                        props.block.language
                            ? `language-${props.block.language}`
                            : undefined
                    }
                    innerHTML={highlightedCode(source(), props.block.language)}
                />
            </pre>
        </section>
    );
}

function renderBlock(block: Block): JSX.Element {
    if (block._type === "image") return renderImage(block);
    if (block._type === "youtube" || block._type === "youtubeVideo")
        return renderYoutube(block);
    if (block._type === "code" || block._type === "codeBlock")
        return <CodeBlock block={block} />;
    if (block._type === "block") return renderTextBlock(block);
    return null as unknown as JSX.Element;
}

function renderBlocks(blocks: Block[]): JSX.Element[] {
    const rendered: JSX.Element[] = [];

    for (let index = 0; index < blocks.length; index += 1) {
        const block = blocks[index];
        if (
            block._type === "block" &&
            (block.listItem === "bullet" || block.listItem === "number")
        ) {
            const listItem = block.listItem;
            const items: Block[] = [];
            while (
                blocks[index]?._type === "block" &&
                blocks[index].listItem === listItem
            ) {
                items.push(blocks[index]);
                index += 1;
            }
            index -= 1;
            const content = (
                <For each={items}>{item => <li>{blockChildren(item)}</li>}</For>
            );
            rendered.push(
                listItem === "number" ? <ol>{content}</ol> : <ul>{content}</ul>,
            );
        } else {
            rendered.push(renderBlock(block));
        }
    }

    return rendered;
}

export const PortableText = (props: { value: unknown }) => {
    const blocks = () =>
        Array.isArray(props.value) ? (props.value as Block[]) : [];
    return <>{renderBlocks(blocks())}</>;
};
