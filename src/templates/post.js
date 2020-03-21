import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Layout } from 'components';
import { graphql } from 'gatsby';
import { setLightness } from 'polished';
import React from 'react';
import { Helmet } from 'react-helmet';
import rehypeReact from 'rehype-react';

const PageTemplate = props => {
  const { siteUrl } = props.data.site.siteMetadata;
  const post = props.data.markdownRemark;
  let width = '';
  let height = '';

  if (post.frontmatter.image && post.frontmatter.image.childImageSharp) {
    width = post.frontmatter.image.childImageSharp.fluid.sizes
      .split(', ')[1]
      .split('px')[0];
    height = String(
      Number(width) / post.frontmatter.image.childImageSharp.fluid.aspectRatio
    );
  }

  const renderAst = new rehypeReact({
    createElement: React.createElement,
  }).Compiler;

  return (
    <div css={PostTemplate}>
      <Helmet>
        <html lang="en" />
        <title>{post.frontmatter.title}</title>

        <meta name="description" content={post.excerpt} />
        <meta property="og:site_name" content={siteUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={siteUrl + props.pathContext.slug} />
        {post.frontmatter.image && post.frontmatter.image.childImageSharp && (
          <meta
            property="og:image"
            content={`${siteUrl}${post.frontmatter.image.childImageSharp.fluid.src}`}
          />
        )}
        <meta property="article:published_time" content={post.fields.date} />

        {post.frontmatter.tags && (
          <meta property="article:tag" content={post.frontmatter.tags[0]} />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:url" content={siteUrl + props.pathContext.slug} />
        {post.frontmatter.image && post.frontmatter.image.childImageSharp && (
          <meta
            name="twitter:image"
            content={`${siteUrl}${post.frontmatter.image.childImageSharp.fluid.src}`}
          />
        )}
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="@rheajt" />
        <meta name="twitter:label2" content="Filed under" />
        {post.frontmatter.tags && (
          <meta name="twitter:data2" content={post.frontmatter.tags[0]} />
        )}
        {width && <meta property="og:image:width" content={width} />}
        {height && <meta property="og:image:height" content={height} />}
      </Helmet>

      <Layout>
        <Paper elevation={3}>
          <main className="site-main">
            <Typography variant="h2" gutterBottom>
              {post.frontmatter.title}
            </Typography>

            {renderAst(post.htmlAst)}
          </main>
        </Paper>
      </Layout>
    </div>
  );
};

export default PageTemplate;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      htmlAst
      excerpt
      timeToRead
      fields {
        date(formatString: "D MMMM YYYY")
        slug
      }
      frontmatter {
        title
        # userDate: date(formatString: "D MMMM YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 3720) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const PostTemplate = css`
  .site-main {
    background: #fff;
    padding: 4vw;
  }
`;

export const PostFull = css`
  position: relative;
  z-index: 50;
`;

export const NoImage = css`
  .post-full-content {
    padding-top: 0;
  }

  .post-full-content:before,
  .post-full-content:after {
    display: none;
  }
`;

export const PostFullHeader = styled.header`
  margin: 0 auto;
  padding: 6vw 3vw 3vw;
  max-width: 1040px;
  text-align: center;

  @media (max-width: 500px) {
    padding: 14vw 3vw 10vw;
  }
`;

export const PostFullTitle = styled.h1`
  margin: 0;
  color: ${setLightness('0.05', 'grey')};
  @media (max-width: 500px) {
    font-size: 2.9rem;
  }
`;

export const outer = css`
  position: relative;
  padding: 0 4vw;
`;

export const inner = css`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`;

export const SiteMain = css`
  z-index: 100;
  flex-grow: 1;
  background-color: white;
  padding: 4rem;
`;
