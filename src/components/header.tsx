import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { LinkButton } from "./link-button";
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
						<Link
							className={`page-link sans ${pathname.includes("projects") && "active"
								}`}
							to="/projects"
						>
							Projects
						</Link>
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
            &:hover {
                font-style: italic;
                // border-bottom: 1px solid gray;
            }

            &.active {
                // border-bottom: 2px solid black;
                font-weight: bold;
            }
        }

        .page-links {
            display: flex;
        }
    }
`;

// const StyledNav = styled.nav`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem;
//     background-color: #f2f2f2;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;
