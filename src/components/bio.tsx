import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

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
                        youtube
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
                            <a href={social.twitter}>
                                <FaTwitter />
                            </a>
                            <a href={social.linkedin}>
                                <FaLinkedin />
                            </a>
                            <a href={social.youtube}>
                                <FaYoutube />
                            </a>
                            <a href={social.github}>
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Bio;
