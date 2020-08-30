import { Grid, Slide, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { BlogCard } from '../../components';
import BlogTags from '../../components/blog-tags';

function Blog() {
  const data = useStaticQuery(BlogQuery);
  const [filters, setFilters] = useState([]);
  const tags = data.allMarkdownRemark.edges
    .map(({ node }) => node.frontmatter.tags)
    .flat();

  const setTagFilter = tag => {
    const newFilters = new Set(filters);
    if (!newFilters.has(tag)) {
      setFilters([...newFilters, tag]);
    } else {
      newFilters.delete(tag);
      setFilters([...newFilters]);
    }
  };

  const posts = data.allMarkdownRemark.edges.filter(({ node: post }) => {
    if (!filters.length) {
      return true;
    }
    return post.frontmatter.tags.some(tag => filters.includes(tag));
  });

  return (
    <>
      <Fade in timeout={1000}>
        <>
          <Typography variant="h1">Blog.</Typography>
          <Typography variant="h3" gutterBottom>
            Learning new things takes practice.
          </Typography>
          <Grid container spacing={1}>
            <Grid item sm={9}>
              <Grid container spacing={1}>
                {posts.map(({ node }, ind) => {
                  return (
                    <Slide
                      direction="right"
                      key={node.id}
                      mountOnEnter
                      unmountOnExit
                      timeout={200 * ind}
                      in>
                      <Grid item sm={12}>
                        <BlogCard post={node} />
                      </Grid>
                    </Slide>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item sm={3}>
              <BlogTags tags={tags} setTagFilter={setTagFilter} />
            </Grid>
          </Grid>
        </>
      </Fade>
    </>
  );
}

export default Blog;

const BlogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { fields: { draft: { ne: true } } }
      sort: { fields: fields___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(format: PLAIN)
          frontmatter {
            categories
            tags
            title
            youtube
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
