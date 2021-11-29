import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const BlogIndex: React.FC<{ data: any; location: any; }> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    if (posts.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <Seo title="All posts" />
                <Bio />
                <p>
                    No blog posts found.
                </p>
            </Layout>
        )
    }

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="jordanrhea.com" />
            <StaticImage
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../../content/img/jordan-rhea-header.png"
                width={350}
                height={350}
                quality={95}
                alt="jordan rhea header"
            />

            <h1>Jordan Rhea</h1>
        </Layout>
    )
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
