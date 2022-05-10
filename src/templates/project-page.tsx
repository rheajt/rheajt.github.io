import * as React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Blockquote from "../components/blockquote";
import Share from "../components/share";

interface Props {
    data: Data;
    location: Location;
}

interface Data {
    site: {
        siteMetadata: {
            siteUrl: string;
            title: string;
        };
    };
    markdownRemark: {
        id: string;
        html: string;
        excerpt: string;
        frontmatter: {
            title: string;
            quote: {
                author: string;
                text: string;
                employer: string;
                position: string;
                excerpt: string;
                email?: string;
            };
            image: {
                publicURL: string;
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData;
                };
            };
        };
        fields: {
            date: string;
            thumbnail: string;
            slug: string;
        };
    };
}

const ProjectPageTemplate: React.FC<Props> = ({ data, location }) => {
    const project = data.markdownRemark;
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const url =
        data.site.siteMetadata.siteUrl + "/projects/" + project.fields.slug;

    let image = undefined;

    if (project.frontmatter.image) {
        image =
            data.site.siteMetadata?.siteUrl +
            project.frontmatter.image.publicURL;
    } else if (project.fields.thumbnail) {
        image = project.fields.thumbnail;
    }

    return (
        <Layout location={location} title={siteTitle}>
            <Seo
                title={project.frontmatter.title}
                description={project.excerpt}
                image={image}
            />

            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <Share url={url} />
                <header className="project-image">
                    <GatsbyImage
                        image={
                            project.frontmatter.image.childImageSharp
                                .gatsbyImageData
                        }
                        alt="project image"
                    />

                    <h1 itemProp="headline">{project.frontmatter.title}</h1>
                </header>

                {project.frontmatter.quote && (
                    <section>
                        <Blockquote quote={project.frontmatter.quote} />
                    </section>
                )}

                <section
                    dangerouslySetInnerHTML={{ __html: project.html }}
                    itemProp="articleBody"
                />

                <hr />

                <footer>
                    <Bio />
                </footer>
            </article>
        </Layout>
    );
};

export default ProjectPageTemplate;

export const projectsQuery = graphql`
    query ProjectPagesById($id: String!) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            html
            excerpt
            frontmatter {
                title
                image {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
                quote {
                    author
                    position
                    employer
                    text
                    excerpt
                }
            }
            fields {
                date
                thumbnail
                slug
            }
        }
    }
`;
