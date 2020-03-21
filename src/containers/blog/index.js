import React from 'react';
import Fade from '@material-ui/core/Fade';
import { Typography, Grid } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import { BlogCard } from '../../components';

function Blog() {
  const data = useStaticQuery(BlogQuery);

  return (
    <>
      <Fade in timeout={1000}>
        <>
          <Typography variant="h1" gutterBottom>
            Blog page
          </Typography>
          <Grid container spacing={3}>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <Grid item sm={6} key={node.id}>
                  <BlogCard post={node} />
                </Grid>
              );
            })}
          </Grid>
        </>
      </Fade>
    </>
  );
}

export default Blog;

const BlogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(filter: { fields: { draft: { ne: true } } }) {
      edges {
        node {
          id
          excerpt(format: PLAIN)
          frontmatter {
            categories
            tags
            title
          }
          fields {
            slug
            date
          }
        }
      }
    }
  }
`;
