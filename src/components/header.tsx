import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
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

            <nav>
                <Link className="sans" to="/about">
                    About
                </Link>
                <Link className="sans" to="/blog">
                    Blog
                </Link>

                {/*<a className="sans" href="https://jordanrhea.com/consulting">
                    Consulting
                </a>*/}
            </nav>
        </header>
    );
};

export default Header;
