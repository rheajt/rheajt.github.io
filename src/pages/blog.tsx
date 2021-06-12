import React from 'react';
import { Layout } from '../components';
import { graphql, Link, PageProps } from 'gatsby';
import { format } from 'date-fns';

interface BlogPageProps extends PageProps {
    data: any;
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
    const pages = data.allMarkdownRemark.edges.map((edge: any) => edge.node);

    const byMonth = pages.reduce((acc: any, page: any) => {
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
            </section>

            {Object.keys(byMonth).map((month) => {
                return (
                    <section key={month}>
                        <h3>{month}</h3>
                        {byMonth[month].map((page: any) => (
                            <p key={page.fields.slug}>
                                <Link
                                    key={page.fields.slug}
                                    to={`/${page.fields.slug}`}>
                                    {page.frontmatter.title}
                                </Link>

                                {page.excerpt}
                            </p>
                        ))}
                    </section>
                );
            })}
        </Layout>
    );
};

export default BlogPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: fields___date }) {
            edges {
                node {
                    excerpt
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
