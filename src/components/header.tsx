import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ showLinks = true }) => {
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
                    <Link className="sans" to="/projects">
                        Projects
                    </Link>

                    <Link className="sans" to="/blog">
                        Blog
                    </Link>

                    <Link className="sans" to="/contact">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
