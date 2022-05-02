import * as React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { format } from "date-fns";

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
            image: {
                childImageSharp: {
                    gatsbyImageData: string;
                };
            };
        };
        fields: {
            date: string;
            thumbnail: string;
        };
    };
}

const ProjectPageTemplate: React.FC<Props> = ({ data, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    let image = undefined;

    if (post.frontmatter.image) {
        console.log(post.frontmatter.image);
        image =
            data.site.siteMetadata?.siteUrl +
            post.frontmatter.image.childImageSharp.gatsbyImageData;
    } else if (post.fields.thumbnail) {
        image = post.fields.thumbnail;
    }

    return (
        <Layout location={location} title={siteTitle}>
            <Seo
                title={post.frontmatter.title}
                description={post.excerpt}
                image={image}
            />

            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <p>{format(new Date(post.fields.date), "PPP")}</p>
                </header>
                <section
                    dangerouslySetInnerHTML={{ __html: post.html }}
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
    query ProjectPagesById(
        $id: String!
    ) {
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
                    childImageSharp {
                        gatsbyImageData(layout: FIXED)
                    }
                }
            }
            fields {
                date
                thumbnail
            }
        }
    }
`;
