import * as React from "react";
import { Link, graphql } from "gatsby";
import { Disqus } from "gatsby-plugin-disqus";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { format } from "date-fns";
import Share from "../components/share";
import { BlogPostProps } from "../types/BlogPost";
import { PortableText } from "../components/portable-text";

const BlogPostTemplate: React.FC<BlogPostProps> = ({ data, location }) => {
    const post = data.sanityPost;
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const url = data.site.siteMetadata.siteUrl + "/blog/" + post.slug.current;
    const { previous, next } = data;
    let image = undefined;

    if (post.image?.asset?.url) {
        image = post.image.asset.url;
    }

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title={post.title} description={post.title} image={image} />

            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline">{post.title}</h1>
                    <p>{format(new Date(post.publishedAt), "PPP")}</p>
                </header>

                <Share url={url} />

                <section itemProp="articleBody">
                    <PortableText value={post.body} />
                </section>

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
                            <Link
                                to={"/blog/" + previous.slug.current}
                                rel="prev"
                            >
                                ← {previous.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={"/blog/" + next.slug.current} rel="next">
                                {next.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>

            <Disqus
                config={{
                    url: url,
                    identifier: post.slug.current,
                    title: post.title,
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
        sanityPost(id: { eq: $id }) {
            id
            title
            publishedAt
            slug {
                current
            }
            image {
                asset {
                    url
                    altText
                    gatsbyImageData(layout: CONSTRAINED)
                }
            }
            body {
                ... on SanityBlock {
                    _key
                    _type
                    style
                    children {
                        _key
                        _type
                        text
                        marks
                    }
                }
            }
        }
        previous: sanityPost(id: { eq: $previousPostId }) {
            slug {
                current
            }
            title
        }
        next: sanityPost(id: { eq: $nextPostId }) {
            slug {
                current
            }
            title
        }
    }
`;
