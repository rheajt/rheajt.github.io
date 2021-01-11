import React from 'react';
import { Layout } from 'components';
import { graphql, Link } from 'gatsby';

export default function BlogPage({ data }) {
    const pages = data.allMarkdownRemark.edges.map(edge => edge.node);
    return (
        <Layout>
            <section>
                <h1>Blog Page</h1>

                <p>
                    Documenting some of the projects I have worked on and am
                    still working on. The learning process never stops in the
                    wonder world of web development
                </p>

                {pages.map(page => (
                    <div>
                        <Link
                            key={page.fields.slug}
                            to={`/${page.fields.slug}`}>
                            {page.frontmatter.title}
                        </Link>
                    </div>
                ))}
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                        youtubeId
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
