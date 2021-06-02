import React from 'react';
import { Layout } from 'components';
import { graphql, Link } from 'gatsby';
import { format } from 'date-fns';

export default function BlogPage({ data }) {
    const pages = data.allMarkdownRemark.edges.map(edge => edge.node);

    const byMonth = pages.reduce((acc, page) => {
        if (!page.fields.date) return acc;

        const monthYear = format(new Date(page.fields.date), 'MMMM yyyy');
        if (acc[monthYear]) {
            acc[monthYear].push(page);
        } else {
            acc[monthYear] = [page];
        }

        return acc;
    }, {});

    return (
        <Layout title="Blog">
                <h1>Blog Page</h1>
            <section>

                <p>
                    I build things for the web. Sometimes for Google Workspaces.
                    Sometimes for Microsoft Sharepoint. Always with code.
                </p>

                {Object.keys(byMonth).map(month => {
                    return (
                        <>
                            <h3>{month}</h3>
                            {byMonth[month].map(page => (
                                <div>
                                    <Link
                                        key={page.fields.slug}
                                        to={`/${page.fields.slug}`}>
                                        {page.frontmatter.title}
                                    </Link>
                                </div>
                            ))}
                        </>
                    );
                })}
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: fields___date }) {
            edges {
                node {
                    fields {
                        slug
                        youtubeId
                        date
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
