import { A, useNavigate } from "@solidjs/router";
import {
    createEffect,
    createSignal,
    onMount,
    onCleanup,
    For,
    Show,
} from "solid-js";
import { styled } from "solid-styled-components";
import { getResumeLinks } from "~/utils/yaml";
import { standalonePages, workPages } from "./navigation-data";
import "./navigation.scss";

export const BasicHeader = () => {
    const navigate = useNavigate();

    return (
        <StyledHeader>
            <div class="container">
                <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
                    <img
                        src="/content/img/jr-icon.png"
                        width={36}
                        height={36}
                        alt="jordan rhea header"
                    />
                </div>
            </div>
        </StyledHeader>
    );
};

type HeaderProps = { pathname: string; showLinks?: boolean };

function LocalLink(props: {
    href: string;
    label: string;
    pathname: string;
    class?: string;
}) {
    return (
        <A
            href={props.href}
            class={props.class}
            aria-current={props.pathname === props.href ? "page" : undefined}
        >
            {props.label}
        </A>
    );
}

function ConnectLinks() {
    return (
        <For each={getResumeLinks()}>
            {link => (
                <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <span aria-hidden="true">↗</span>
                </a>
            )}
        </For>
    );
}

export const Header = (props: HeaderProps) => {
    const [open, setOpen] = createSignal(false);
    let header!: HTMLElement;
    let trigger: HTMLButtonElement | undefined;
    let panel: HTMLElement | undefined;

    const close = (restoreFocus = false) => {
        setOpen(false);
        if (restoreFocus) trigger?.focus();
    };

    createEffect(() => {
        props.pathname;
        props.showLinks;
        close(panel?.contains(document.activeElement));
    });

    onMount(() => {
        const outside = (event: PointerEvent) => {
            if (open() && !header.contains(event.target as Node))
                close(!!panel?.contains(document.activeElement));
        };
        const escape = (event: KeyboardEvent) => {
            if (event.key === "Escape" && open()) {
                event.preventDefault();
                close(true);
            }
        };
        document.addEventListener("pointerdown", outside);
        document.addEventListener("keydown", escape);
        onCleanup(() => {
            document.removeEventListener("pointerdown", outside);
            document.removeEventListener("keydown", escape);
        });
    });

    return (
        <header ref={header} class="site-navigation">
            <div class="nav-shell">
                <div class="nav-masthead">
                    <A
                        class="nav-brand"
                        href="/"
                        aria-label="Jordan Rhea — Home"
                    >
                        <img
                            src="/content/img/jr-icon.png"
                            width="36"
                            height="36"
                            alt=""
                        />
                        <span>
                            Jordan Rhea<small>Education & technology</small>
                        </span>
                    </A>
                    <Show when={props.showLinks !== false}>
                        <nav class="nav-work" aria-label="Work">
                            <For each={workPages}>
                                {page => (
                                    <LocalLink
                                        {...page}
                                        pathname={props.pathname}
                                    />
                                )}
                            </For>
                        </nav>
                        <button
                            ref={trigger}
                            type="button"
                            class="nav-toggle"
                            aria-expanded={open()}
                            aria-controls="header-pages-panel"
                            onClick={() => setOpen(!open())}
                        >
                            Pages
                            <span aria-hidden="true">{open() ? "−" : "+"}</span>
                        </button>
                        <div class="nav-quick-connect">
                            <ConnectLinks />
                            <LocalLink
                                href="/contact"
                                label="Contact"
                                pathname={props.pathname}
                                class="nav-contact"
                            />
                        </div>
                    </Show>
                </div>
                <Show when={props.showLinks !== false}>
                    {/* Keep destinations in SSR HTML so static prerendering can crawl them. */}
                    <nav
                        ref={panel}
                        id="header-pages-panel"
                        class="nav-panel"
                        hidden={!open()}
                        aria-label="Pages and connections"
                        onClick={event => {
                            if ((event.target as Element).closest("a"))
                                close(
                                    !!panel?.contains(document.activeElement),
                                );
                        }}
                    >
                        <section class="nav-pages">
                            <h2>Pages</h2>
                            <LocalLink
                                href="/"
                                label="Home"
                                pathname={props.pathname}
                            />
                            <For each={standalonePages}>
                                {page => (
                                    <LocalLink
                                        {...page}
                                        pathname={props.pathname}
                                    />
                                )}
                            </For>
                        </section>
                        <section class="nav-connections">
                            <h2>Connect</h2>
                            <ConnectLinks />
                            <LocalLink
                                href="/contact"
                                label="Contact"
                                pathname={props.pathname}
                                class="nav-contact"
                            />
                        </section>
                    </nav>
                </Show>
            </div>
        </header>
    );
};

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    padding: 1em;

    .container {
        max-width: var(--layout-width);
        margin: 0 auto;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
    }

    @media (max-width: 600px) {
        .container {
            position: relative;
        }
    }
`;
