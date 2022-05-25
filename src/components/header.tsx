import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Header: React.FC<{ pathname: string; showLinks?: boolean }> = ({
    pathname,
    showLinks = true,
}) => {
    // const { location } = useRouter();
    console.log(pathname);
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
                        className={`sans ${pathname.includes("projects") && "active"
                            }`}
                        to="/projects"
                    >
                        Projects
                    </Link>

                    <Link
                        className={`sans ${pathname.includes("blog") && "active"
                            }`}
                        to="/blog"
                    >
                        Blog
                    </Link>

                    <Link
                        className={`sans ${pathname.includes("contact") && "active"
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
