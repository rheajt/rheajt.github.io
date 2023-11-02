import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
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

						<Link
							className={`page-link sans ${pathname.includes("blog") && "active"
								}`}
							to="/blog"
						>
							Blog
						</Link>
					</div>
					<div className="page-buttons">
						<Link
							className={`page-button sans ${pathname.includes("contact") && "active"
								}`}
							to="/contact"
						>
							Contact
						</Link>
					</div>
				</nav>
			</div>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    .container {
        max-width: 900px;
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

        .page-button {
            background: none;
            border: none;
            padding: 0.5em 1em;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            text-decoration: none;
            color: white;
            font-size: inherit;
            font-weight: bold;
            font-family: inherit;
            border: 1px solid lightgray;
            border-radius: 3px;
            background-color: var(--color-primary);

            &:hover {
                $purple: var(--color-primary);
                background-color: lighten(#283597, 10%);
                // background-color: lightgray;
            }
        }
    }
`;
