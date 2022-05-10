import * as React from "react";
import { Link, graphql } from "gatsby";
import { Disqus } from "gatsby-plugin-disqus";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { format } from "date-fns";
import { IGatsbyImageData } from "gatsby-plugin-image";
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
        excerpt: string;
        html: string;
        frontmatter: {
            title: string;
            date: string;
            description: string;
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
    previous: {
        fields: {
            slug: string;
        };
        frontmatter: {
            title: string;
        };
    };
    next: {
        fields: {
            slug: string;
        };
        frontmatter: {
            title: string;
        };
    };
}

const BlogPostTemplate: React.FC<Props> = ({ data, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const url = data.site.siteMetadata.siteUrl + "/blog/" + post.fields.slug;
    const { previous, next } = data;
    let image = undefined;

    if (post.frontmatter.image) {
        image =
            data.site.siteMetadata?.siteUrl + post.frontmatter.image.publicURL;
    } else if (post.fields.thumbnail) {
        image = post.fields.thumbnail;
    }

    return (
        <Layout location={location} title={siteTitle}>
            <Seo
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
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

                <Share url={url} />

                <section
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    itemProp="articleBody"
                />
                <hr />
                <footer>
                    <Bio />
                </footer>
            </article>
            <nav className="blog-post-nav">
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>

            <Disqus
                config={{
                    /* Replace PAGE_URL with your post's canonical URL variable */
                    url: url,
                    /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
                    identifier: post.fields.slug,
                    /* Replace PAGE_TITLE with the title of the page */
                    title: post.frontmatter.title,
                }}
            />
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                image {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
            }
            fields {
                date
                thumbnail
                slug
            }
        }
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`;
