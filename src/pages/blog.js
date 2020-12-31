import React from 'react';
import { Layout } from 'components';
import { graphql, Link } from 'gatsby';

export default function BlogPage({ data }) {
  const pages = data.allMarkdownRemark.edges.map(edge => edge.node);
  return (
    <Layout>
      <h1>Blog Page</h1>
      {pages.map(page => (
        <div>
          <Link key={page.fields.slug} to={`/blog/${page.fields.slug}`}>
            {page.fields.slug}
          </Link>
        </div>
      ))}
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
