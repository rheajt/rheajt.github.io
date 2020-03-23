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
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/styles';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
  WeiboShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TwitterIcon,
  WeiboIcon,
  WhatsappIcon,
} from 'react-share';
const PageTemplate = props => {
  const classes = useStyles();

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
    <div>
      <Helmet>
        <html lang="en" />
        <title>{post.frontmatter.title}</title>

        <meta name="description" content={post.excerpt} />
        <meta property="og:site_name" content={siteUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={siteUrl + props.pageContext.slug} />
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
        <meta name="twitter:url" content={siteUrl + props.pageContext.slug} />
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
          <main className={classes.siteMain}>
            <div className={classes.postButtons}>
              <div>
                <Button variant="outlined" color="primary">
                  <ArrowBackIosIcon /> Back
                </Button>
              </div>

              <div>
                <EmailShareButton url={siteUrl + props.pageContext.slug}>
                  <EmailIcon size={36} />
                </EmailShareButton>
                <FacebookShareButton url={siteUrl + props.pageContext.slug}>
                  <FacebookIcon size={36} />
                </FacebookShareButton>
                <LinkedinShareButton url={siteUrl + props.pageContext.slug}>
                  <LinkedinIcon size={36} />
                </LinkedinShareButton>
                <PinterestShareButton url={siteUrl + props.pageContext.slug}>
                  <PinterestIcon size={36} />
                </PinterestShareButton>
                <RedditShareButton url={siteUrl + props.pageContext.slug}>
                  <RedditIcon size={36} />
                </RedditShareButton>
                <TwitterShareButton url={siteUrl + props.pageContext.slug}>
                  <TwitterIcon size={36} />
                </TwitterShareButton>
                <WeiboShareButton url={siteUrl + props.pageContext.slug}>
                  <WeiboIcon size={36} />
                </WeiboShareButton>
                <WhatsappShareButton url={siteUrl + props.pageContext.slug}>
                  <WhatsappIcon size={36} />
                </WhatsappShareButton>
              </div>
            </div>

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

const useStyles = makeStyles({
  siteMain: {
    background: '#fff',
    padding: '4vw',
  },
  postButtons: {
    margin: '2rem 0',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
  },
});
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
