import { useNavigate } from "@solidjs/router";
import {
    createEffect,
    createSignal,
    onMount,
    onCleanup,
    For,
    Show,
} from "solid-js";
import { styled } from "solid-styled-components";
import { Dynamic } from "solid-js/web";
import {
    getNavigationSocialLinks,
    standalonePages,
    workPages,
} from "./navigation-data";
import "./navigation.scss";
import { layoutShell } from "./layout-shell";

export const BasicHeader = () => {
    const navigate = useNavigate();

    return (
        <StyledHeader class="basic-header">
            <div class="container">
                <button
                    type="button"
                    aria-label="Go back"
                    onClick={() => navigate(-1)}
                    style={{
                        cursor: "pointer",
                        background: "transparent",
                        border: "0",
                        padding: "0",
                        display: "flex",
                    }}
                >
                    <img
                        src="/content/img/jr-icon.png"
                        width={36}
                        height={36}
                        alt=""
                    />
                </button>
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
    // The router handles native anchors; A would override our pathname-based aria-current.
    return (
        <a
            href={props.href}
            class={props.class}
            aria-current={props.pathname === props.href ? "page" : undefined}
        >
            {props.label}
        </a>
    );
}

function ConnectLinks() {
    return (
        <div class="nav-social-links">
            <For each={getNavigationSocialLinks()}>
                {link => (
                    <a
                        class="nav-social-link"
                        href={link.url}
                        aria-label={link.label}
                        title={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ "--social-color": link.color }}
                    >
                        <Dynamic
                            component={link.icon}
                            size={20}
                            aria-hidden="true"
                            focusable="false"
                        />
                    </a>
                )}
            </For>
        </div>
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
                    <a
                        class="nav-brand"
                        href="/"
                        aria-label="Jordan Rhea — Home"
                        aria-current={
                            props.pathname === "/" ? "page" : undefined
                        }
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
                    </a>
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
    max-width: var(--layout-width);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    padding-block: 1em;

    .container {
        ${layoutShell}
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
