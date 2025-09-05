import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { LinkButton } from "./link-button";
import { links } from "../utils/links";
import styled from "styled-components";

export const Header: React.FC<{ pathname: string; showLinks?: boolean }> = ({
    pathname,
    showLinks = true,
}) => {
    return (
        <StyledHeader>
            <div className="container">
                <Link to="/">
                    <StaticImage
                        layout="fixed"
                        formats={["auto", "webp", "avif"]}
                        src="../../content/img/jr-icon.png"
                        width={36}
                        height={36}
                        quality={95}
                        alt="jordan rhea header"
                    />
                </Link>

                <nav className={showLinks ? `` : `is-hidden`}>
                    <div className="page-links">
                        {links.map((link: any) => {
                            const hasChildren =
                                Array.isArray(link.children) &&
                                link.children.length > 0;
                            const isActive =
                                pathname.includes(link.to) ||
                                (hasChildren &&
                                    link.children.some((c: any) =>
                                        pathname.includes(c.to),
                                    ));

                            if (!hasChildren) {
                                return (
                                    <Link
                                        key={link.to}
                                        data-label={link.name}
                                        className={`page-link sans ${isActive ? "active" : ""}`}
                                        to={`/${link.to}`}
                                    >
                                        <span className="label">
                                            {link.name}
                                        </span>
                                    </Link>
                                );
                            }

                            return (
                                <div
                                    key={link.to}
                                    className={`page-link-with-dropdown ${isActive ? "active" : ""}`}
                                >
                                    <Link
                                        data-label={link.name}
                                        className={`page-link sans ${isActive ? "active" : ""}`}
                                        to={`/${link.to}`}
                                    >
                                        <span className="label">
                                            {link.name}
                                        </span>
                                    </Link>

                                    <div className="dropdown">
                                        {link.children.map((child: any) => (
                                            <Link
                                                key={child.to}
                                                to={`/${child.to}`}
                                                className={`dropdown-item sans ${pathname.includes(child.to) ? "active" : ""}`}
                                            >
                                                <span className="label">
                                                    {child.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <LinkButton
                        pathname={pathname}
                        href={"/contact"}
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
    padding: 0.25em;

    .container {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    nav.is-hidden {
        display: none;
    }

    a {
        background: none;
        text-decoration: none;
        color: var(--color-text);
    }

    nav {
        display: flex;
        align-items: center;
        list-style: none;
        text-transform: uppercase;
        justify-content: space-between;
        width: 100%;
        margin-left: 1em;

        a {
            padding: 0 1em;
            display: inline-block;
            position: relative;
            transition: font-weight 0.5s linear;

            /* reserve space for the bold state to prevent layout shift */
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

        /* Dropdown container */
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
        .page-link-with-dropdown .dropdown:hover {
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
`;
