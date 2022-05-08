import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

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
                <div className="page-links">
                    <Link className="sans" to="/about">
                        About
                    </Link>

                    <Link className="sans" to="/blog">
                        Blog
                    </Link>
                </div>

                <div className="social-links">
                    <a href="https://github.com/rheajt"><FaGithub /></a>
                    <a href="https://linkedin.com/in/rheajt"><FaLinkedin /></a>
                    <a href="https://youtube.com/jordanrhea"><FaYoutube /></a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
