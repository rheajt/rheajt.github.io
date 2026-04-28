import { A, useNavigate } from "@solidjs/router";
import { createSignal, onMount, onCleanup, For, Show } from "solid-js";
import { styled } from "solid-styled-components";
import {
    FaBrandsGithub,
    FaBrandsLinkedin,
    FaBrandsStrava,
    FaBrandsYoutube,
    FaSolidExternalLinkAlt,
    FaSolidGlobe,
    FaSolidBars,
    FaSolidTimes,
    FaSolidLaptopCode,
    FaSolidFileAlt,
    FaSolidUser,
    FaSolidEnvelope,
} from "solid-icons/fa";
import { LinkButton } from "./link-button";
import { links } from "~/utils/links";
import { getResumeLinks } from "~/utils/yaml";

const resumeLinkIcons = {
    Website: FaSolidGlobe,
    LinkedIn: FaBrandsLinkedin,
    GitHub: FaBrandsGithub,
    YouTube: FaBrandsYoutube,
    Strava: FaBrandsStrava,
};

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

export const Header = (props: { pathname: string; showLinks?: boolean }) => {
    const [openDropdown, setOpenDropdown] = createSignal<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);
    const showLinks = () => props.showLinks !== false;
    const resumeLinks = getResumeLinks();

    onMount(() => {
        function handleResize() {
            if (window.innerWidth > 600) {
                setOpenDropdown(null);
                setIsMobileMenuOpen(false);
            }
        }
        window.addEventListener("resize", handleResize);
        onCleanup(() => window.removeEventListener("resize", handleResize));
    });

    return (
        <StyledHeader>
            <div class="container">
                <A href="/">
                    <img
                        src="/content/img/jr-icon.png"
                        width={36}
                        height={36}
                        alt="jordan rhea header"
                    />
                </A>

                <Show when={showLinks()}>
                    <button
                        class="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen())}
                        aria-label={
                            isMobileMenuOpen() ? "Close menu" : "Open menu"
                        }
                        aria-expanded={isMobileMenuOpen()}
                        aria-controls="mobile-header-menu"
                    >
                        <Show
                            when={isMobileMenuOpen()}
                            fallback={<FaSolidBars size={24} />}
                        >
                            <FaSolidTimes size={24} />
                        </Show>
                    </button>
                </Show>

                <Show when={showLinks() && isMobileMenuOpen()}>
                    <div id="mobile-header-menu" class="mobile-menu-dropdown">
                        <A
                            href="/projects"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FaSolidLaptopCode size={18} />
                            <span>Projects</span>
                        </A>
                        <A
                            href="/resume"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FaSolidFileAlt size={18} />
                            <span>Resume</span>
                        </A>
                        <A
                            href="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FaSolidUser size={18} />
                            <span>About</span>
                        </A>
                        <A
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FaSolidEnvelope size={18} />
                            <span>Contact</span>
                        </A>
                    </div>
                </Show>

                <nav class={showLinks() ? "" : "is-hidden"}>
                    <div class="page-links">
                        <For each={links}>
                            {(link: any) => {
                                const hasChildren =
                                    Array.isArray(link.children) &&
                                    link.children.length > 0;
                                const isActive = () =>
                                    props.pathname.includes(link.to) ||
                                    (hasChildren &&
                                        link.children.some((c: any) =>
                                            props.pathname.includes(c.to),
                                        ));

                                return (
                                    <Show
                                        when={hasChildren}
                                        fallback={
                                            <A
                                                data-label={link.name}
                                                class={`page-link sans ${isActive() ? "active" : ""}`}
                                                href={`/${link.to}`}
                                                onClick={() =>
                                                    setOpenDropdown(null)
                                                }
                                            >
                                                <span class="label">
                                                    {link.name}
                                                </span>
                                            </A>
                                        }
                                    >
                                        <div
                                            class={`page-link-with-dropdown ${isActive() ? "active" : ""} ${openDropdown() === link.to ? "is-open" : ""}`}
                                        >
                                            <A
                                                data-label={link.name}
                                                class={`page-link sans ${isActive() ? "active" : ""}`}
                                                href={`/${link.to}`}
                                                onClick={e => {
                                                    if (
                                                        window.innerWidth <= 768
                                                    ) {
                                                        if (
                                                            openDropdown() ===
                                                            link.to
                                                        ) {
                                                            setOpenDropdown(
                                                                null,
                                                            );
                                                            return;
                                                        }
                                                        e.preventDefault();
                                                        setOpenDropdown(
                                                            link.to,
                                                        );
                                                    }
                                                }}
                                            >
                                                <span class="label">
                                                    {link.name}
                                                </span>
                                            </A>
                                            <div class="dropdown">
                                                <For each={link.children}>
                                                    {(child: any) => (
                                                        <A
                                                            href={`/${child.to}`}
                                                            class={`dropdown-item sans ${props.pathname.includes(child.to) ? "active" : ""}`}
                                                            onClick={() =>
                                                                setOpenDropdown(
                                                                    null,
                                                                )
                                                            }
                                                        >
                                                            <span class="label">
                                                                {child.name}
                                                            </span>
                                                        </A>
                                                    )}
                                                </For>
                                            </div>
                                        </div>
                                    </Show>
                                );
                            }}
                        </For>
                    </div>
                    <div class="resume-links">
                        <For each={resumeLinks}>
                            {link => {
                                const Icon =
                                    resumeLinkIcons[
                                        link.label as keyof typeof resumeLinkIcons
                                    ] ?? FaSolidExternalLinkAlt;

                                return (
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        class="resume-link"
                                        aria-label={link.label}
                                        title={link.label}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            }}
                        </For>
                    </div>
                    <LinkButton
                        pathname={props.pathname}
                        href="/contact"
                        label="Contact"
                    />
                </nav>
            </div>
        </StyledHeader>
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

    nav.is-hidden {
        display: none;
    }

    a {
        background: none;
        text-decoration: none;
        color: var(--color-text);
    }

    .mobile-menu-toggle {
        display: none;
        background: none;
        border: none;
        color: var(--color-text);
        cursor: pointer;
        padding: 0.5em;
        z-index: 20;
    }

    .mobile-menu-dropdown {
        display: none;
    }

    nav {
        display: flex;
        align-items: center;
        list-style: none;
        text-transform: uppercase;
        justify-content: space-between;
        width: 100%;
        margin-left: 1em;
        min-width: 0;

        a {
            padding: 0 0.85em;
            display: inline-block;
            position: relative;
            transition: font-weight 0.5s linear;

            &::after {
                content: attr(data-label);
                font-weight: 700;
                visibility: hidden;
                display: block;
                height: 0;
                overflow: hidden;
                pointer-events: none;
            }

            .label {
                font-weight: 400;
                transition: font-weight 0.05s linear;
            }

            &:hover .label {
                font-weight: 700;
            }
            &.active .label {
                font-weight: 700;
            }
        }

        .page-links {
            display: flex;
            align-items: center;
        }

        .resume-links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 0.35rem;
            margin-left: auto;
            margin-right: 0.75rem;
            flex-wrap: nowrap;
            white-space: nowrap;
        }

        .resume-link {
            border-radius: 50%;
            color: var(--color-primary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            padding: 0;
            transition:
                background 160ms ease,
                color 160ms ease,
                transform 160ms ease;

            &:hover {
                background: rgba(40, 53, 151, 0.06);
                color: var(--color-heading);
                transform: translateY(-1px);
            }
        }

        .page-link-with-dropdown {
            position: relative;
            display: flex;
            align-content: center;
        }

        .dropdown {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            position: absolute;
            top: 100%;
            left: 100%;
            transform: translateX(-50%) translateY(6px);
            background: var(--color-background, #fff);
            border-radius: 4px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
            min-width: 180px;
            padding: 0.25em 0;
            z-index: 10;
            transition:
                opacity 160ms ease,
                transform 160ms ease;
        }

        .page-link-with-dropdown:hover .dropdown,
        .page-link-with-dropdown .dropdown:hover,
        .page-link-with-dropdown.is-open .dropdown {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateX(-50%) translateY(0);
        }

        .dropdown-item {
            display: block;
            padding: 0.5em 1em;
            text-decoration: none;
            color: var(--color-text);
            white-space: nowrap;
        }

        .dropdown-item:hover {
            background: rgba(0, 0, 0, 0.04);
        }
    }

    @media (max-width: 768px) {
        nav {
            flex-wrap: nowrap;
            gap: 0.4rem;
            overflow-x: auto;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }

            .resume-links {
                margin-left: auto;
                margin-right: 0.35rem;
            }

            a {
                padding: 0 0.45em;
            }
        }
    }

    @media (max-width: 600px) {
        .container {
            position: relative;
        }

        nav {
            display: none !important;
        }

        .mobile-menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mobile-menu-dropdown {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            right: 0;
            background: var(--color-background, #fff);
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            padding: 0.5em 0;
            min-width: 200px;
            z-index: 100;
            margin-top: 0.5em;
            border: 1px solid rgba(0, 0, 0, 0.05);

            a {
                display: flex;
                align-items: center;
                gap: 1em;
                padding: 1em 1.5em;
                color: var(--color-text);
                text-decoration: none;
                font-weight: 500;
                transition: background 0.2s ease;

                &:hover {
                    background: rgba(0, 0, 0, 0.04);
                }

                svg {
                    color: var(--color-primary);
                }
            }
        }
    }
`;
