import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
// import { Post } from "../typings/Post";
import { format } from "date-fns";

interface Props {
    data: any;
    location: Location;
}

interface Post {
    fields: {
        slug: string;
        date: string;
    };
    frontmatter: {
        title: string;
        description: string;
        tags: string;
    };
    excerpt: string;
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

    const byMonth = posts.reduce((acc: any, page: any) => {
        if (!page.fields.date) return acc;

        const monthYear = format(new Date(page.fields.date), "MMMM yyyy");

        if (acc[monthYear]) {
            acc[monthYear].push(page);
        } else {
            acc[monthYear] = [page];
        }

        return acc;
    }, {});

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="All posts" />
            <Bio />

            {Object.keys(byMonth).map(month => {
                return (
                    <section key={month}>
                        <h3>{month}</h3>
                        {byMonth[month].map((page: any) => (
                            <div key={`${month}-${page.fields.slug}`}>
                                <Link to={`/blog/${page.fields.slug}`}>
                                    <b>{page.frontmatter.title}</b>
                                </Link>

                                <p>
                                    <i>
                                        {format(
                                            new Date(page.fields.date),
                                            "PPP"
                                        )}
                                    </i>{" "}
                                    -{page.excerpt}
                                </p>
                                <p>
                                    Tags in this post:{" "}
                                    <i>{page.frontmatter.tags.join(", ")}</i>
                                </p>
                            </div>
                        ))}
                    </section>
                );
            })}
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
        allMarkdownRemark(
            filter: { fields: { category: { eq: "blog" } } }
            sort: { fields: [fields___date], order: DESC }
        ) {
            nodes {
                excerpt
                fields {
                    slug
                    date
                }
                frontmatter {
                    title
                    description
                    tags
                }
            }
        }
    }
`;
