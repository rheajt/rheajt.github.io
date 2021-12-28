import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Post } from "../typings/Post";
import { format } from "date-fns";

interface Props {
    data: any;
    location: Location;
}

const Blog: React.FC<Props> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const posts = data.allMarkdownRemark.nodes;

    if (posts.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <Seo title="All posts" />
                <Bio />
                <p>No blog posts found.</p>
            </Layout>
        );
    }

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="All posts" />
            <Bio />
            <ol style={{ listStyle: `none` }}>
                {posts.map((post: Post) => {
                    const title = post.frontmatter.title || post.fields.slug;

                    return (
                        <li key={post.fields.slug}>
                            <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <header>
                                    <h2>
                                        <Link
                                            to={post.fields.slug}
                                            itemProp="url"
                                        >
                                            <span itemProp="headline">
                                                {title}
                                            </span>
                                        </Link>
                                    </h2>
                                    <small>
                                        {format(
                                            new Date(post.fields.date),
                                            "PPP"
                                        )}
                                    </small>
                                </header>
                                <section>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                post.frontmatter.description ||
                                                post.excerpt,
                                        }}
                                        itemProp="description"
                                    />
                                </section>
                            </article>
                        </li>
                    );
                })}
            </ol>
        </Layout>
    );
};

export default Blog;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
            nodes {
                excerpt
                fields {
                    slug
                    date
                }
                frontmatter {
                    title
                    description
                }
            }
        }
    }
`;
