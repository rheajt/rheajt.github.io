import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Header: React.FC<{ pathname: string; showLinks?: boolean }> = ({
    pathname,
    showLinks = true,
}) => {
    return (
        <header className="header">
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
        </header>
    );
};
