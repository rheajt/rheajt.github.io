import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { graphql, Link, useStaticQuery } from "gatsby";
import { FaLongArrowAltRight } from "react-icons/fa";

const projectsQuery = graphql`
    query {
        projects: allMarkdownRemark(
            filter: { fields: { category: { eq: "project" } } }
            limit: 6
        ) {
            nodes {
                id
                frontmatter {
                    title
                    tags
                    image {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                    quote {
                        author
                        email
                        employer
                        excerpt
                        position
                        text
                    }
                }
                fields {
                    slug
                }
                excerpt
            }
        }
    }
`;
export const ProjectsSection = () => {
    const data = useStaticQuery(projectsQuery);

    const projects = data.projects.nodes;

    return (
        <StyledProjectsSection>
            <div className="container">
                <h4>Projects</h4>

                <div className="row">
                    {projects.map((p: any) => {
                        const image = getImage(p.frontmatter.image);
                        return (
                            <StyledItem key={p.id}>
                                <Link to={`/projects/${p.fields.slug}`}>
                                    {image && (
                                        <div className="img-post">
                                            <GatsbyImage
                                                image={image}
                                                alt={p.frontmatter.title}
                                            />
                                        </div>
                                    )}
                                    <div className="cont-post">
                                        <span className="tag">
                                            {p.frontmatter.title}
                                        </span>
                                        <h6>{p.fields.date}</h6>

                                        <p>{p.excerpt}</p>

                                        <span className="read-more-btn">
                                            Read More <FaLongArrowAltRight />
                                        </span>
                                    </div>
                                </Link>
                            </StyledItem>
                        );
                    })}
                </div>
            </div>
        </StyledProjectsSection>
    );
};

const StyledProjectsSection = styled.section`
    margin: 0 auto 4rem auto;
    max-width: 1080px;

    h4 {
        text-align: center;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: stretch;
    }
`;

const StyledItem = styled.div`
    max-width: 350px;
    flex: 1 1 350px;
    align-self: stretch;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;

    &:hover {
        border: 1px solid var(--color-primary);
    }

    a {
        color: var(--color-text);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .img-post {
        position: relative;
        overflow: hidden;
        background-color: #eef6ff;
        flex: 0 0 auto;
        width: 100%;
        margin-top: 0;

        &:hover img {
            transform: scale(1.2, 1.2);
        }

        .gatsby-image-wrapper,
        img {
            width: 100%;
            display: block;
            transition: all 0.5s;
        }
    }

    .cont-post {
        padding: 30px 15px;
        background: #fff;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;

        .tag {
            margin-bottom: 15px;
            color: #999;
            font-weight: 700;
        }

        h6 {
            font-size: 18px;
            margin-bottom: 15px;
        }

        p {
            margin-bottom: 0.75rem;
        }

        .read-more-btn {
            margin-top: auto;
            font-size: 12px;
            font-weight: 700;
            color: var(--color-primary);
            text-transform: uppercase;
            display: flex;
            align-items: center;
            transition: transform 0.5s;

            &:hover {
                transform: translate(5px);
            }
        }
    }
`;
