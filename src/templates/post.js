import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout, ShareButtons } from 'components';
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
        <section>
          <h1>{post.frontmatter.title}</h1>

          {renderAst(post.htmlAst)}
        </section>
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