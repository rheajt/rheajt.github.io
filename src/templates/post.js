import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';
import { setLightness } from 'polished';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Layout } from 'components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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

  console.log(post);
  return (
    <div css={PostTemplate}>
      <Helmet>
        <html lang="eng" />
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
          <main id="site-main" className="site-main" css={[SiteMain, outer]}>
            <div css={inner}>
              {/* TODO: no-image css tag? */}
              {/* <article css={[PostFull, !post.frontmatter.image && NoImage]}> */}
              <PostFullHeader>
                {/* <PostFullMeta>
                  <PostFullMetaDate dateTime={post.fields.date}>
                    {post.frontmatter.userDate}
                  </PostFullMetaDate>
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                    <>
                      <DateDivider>/</DateDivider>
                      <Link
                        to={`/${_.kebabCase(post.frontmatter.tags[0])}/`}>
                        {post.frontmatter.tags[0]}
                      </Link>
                    </>
                  )}
                </PostFullMeta> */}
                {/* <PostFullTitle>{post.frontmatter.title}</PostFullTitle> */}
              </PostFullHeader>

              {post.frontmatter.image &&
                post.frontmatter.image.childImageSharp && (
                  <PostFullImage>
                    <Img
                      style={{ height: '100%' }}
                      fluid={post.frontmatter.image.childImageSharp.fluid}
                    />
                  </PostFullImage>
                )}

              <Typography variant="h2" gutterBottom>
                {post.frontmatter.title}
              </Typography>
              <div
                css={PostTemplate}
                dangerouslySetInnerHTML={{ __html: post.html }}
              />

              {/* The big email subscribe modal content */}
              {/* {config.showSubscribe && <Subscribe title={config.title} />} */}
              {/* </article> */}
            </div>
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
    padding-bottom: 4vw;
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

const PostFullMeta = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 1.2rem;
    line-height: 1.3em;
  }
`;

export const PostFullTitle = styled.h1`
  margin: 0;
  color: ${setLightness('0.05', 'grey')};
  @media (max-width: 500px) {
    font-size: 2.9rem;
  }
`;

const PostFullImage = styled.figure`
  margin: 0 -10vw -165px;
  height: 800px;
  background: lightgrey center center;
  background-size: cover;
  border-radius: 5px;

  @media (max-width: 1170px) {
    margin: 0 -4vw -100px;
    height: 600px;
    border-radius: 0;
  }

  @media (max-width: 800px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    margin-bottom: 4vw;
    height: 350px;
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
  padding-bottom: 3rem;
`;
