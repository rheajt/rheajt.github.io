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
                        {links.map(link => (
                            <Link
                                key={link.to}
                                data-label={link.name}
                                className={`page-link sans ${
                                    pathname.includes(link.to) ? "active" : ""
                                }`}
                                to={`/${link.to}`}
                            >
                                <span className="label">{link.name}</span>
                            </Link>
                        ))}
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
        }
    }
`;
