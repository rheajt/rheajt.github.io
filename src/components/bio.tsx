import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                        github
                        linkedin
                    }
                }
            }
        }
    `);

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author;
    const social = data.site.siteMetadata?.social;

    return (
        <>
            <div className="bio">
                <StaticImage
                    className="bio-avatar"
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../../content/img/avatar-image.png"
                    width={50}
                    height={50}
                    quality={95}
                    alt="jordan rhea wearing a hoodie"
                />

                {author?.name && (
                    <div>
                        Written by <strong>{author.name}</strong>{" "}
                        {author?.summary || null}
                        {` `}

                        <div className="social-links">
                            <a href="https://github.com/rheajt">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/rheajt">
                                <FaLinkedin />
                            </a>
                            <a href="https://youtube.com/jordanrhea">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Bio;
