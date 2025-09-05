import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

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
        <StyledBio>
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
                        <a href={social.twitter} data-label="Twitter">
                            <span className="label">
                                <FaTwitter />
                            </span>
                        </a>
                        <a href={social.linkedin} data-label="LinkedIn">
                            <span className="label">
                                <FaLinkedin />
                            </span>
                        </a>
                        <a href={social.youtube} data-label="YouTube">
                            <span className="label">
                                <FaYoutube />
                            </span>
                        </a>
                        <a href={social.github} data-label="GitHub">
                            <span className="label">
                                <FaGithub />
                            </span>
                        </a>
                    </div>
                </div>
            )}
        </StyledBio>
    );
};

export default Bio;

const StyledBio = styled.div`
    display: flex;
    margin-top: var(--spacing-16);
    margin-bottom: var(--spacing-16);
    a {
        color: var(--color-text);
        text-decoration: none;
        display: inline-block;
        position: relative;

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
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        &:hover .label {
            font-weight: 700;
        }
    }

    p {
        margin-bottom: var(--spacing-0);
    }

    .bio-avatar {
        margin-right: var(--spacing-4);
        margin-bottom: var(--spacing-0);
        min-width: 50px;
        border-radius: 100%;
    }
`;
