import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { format } from "date-fns";

interface Props {
    data: any;
    location: Location;
}

const Blog: React.FC<Props> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const posts = data.allSanityPost.nodes;

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
        if (!page.publishedAt) return acc;

        const monthYear = format(new Date(page.publishedAt), "MMMM yyyy");

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
                            <div key={`${month}-${page.slug.current}`}>
                                <Link to={`/blog/${page.slug.current}`}>
                                    <b>{page.title}</b>
                                </Link>

                                <p>
                                    <i>
                                        {format(
                                            new Date(page.publishedAt),
                                            "PPP",
                                        )}
                                    </i>{" "}
                                </p>
                                <p>
                                    Tags in this post:{" "}
                                    <i>
                                        {(page.tags || [])
                                            .map((tag: any) => tag?.label)
                                            .filter(Boolean)
                                            .join(", ")}
                                    </i>
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
        allSanityPost(
            filter: { slug: { current: { ne: null } } }
            sort: { publishedAt: DESC }
        ) {
            nodes {
                id
                title
                tags {
                    _id
                    label
                }
                publishedAt
                slug {
                    current
                }
            }
        }
    }
`;
