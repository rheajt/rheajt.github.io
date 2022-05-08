import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import ProjectCard from "../components/project-card";
import Blockquote from "../components/blockquote";

export interface Quote {
    author: string;
    email?: string;
    position: string;
    employer: string;
    text: string;
    excerpt?: string;
}

const Home: React.FC<{ data: any; location: any }> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `jordanrhea.com`;
    const projects = data.allMarkdownRemark.nodes;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="jordanrhea.com" />

            <div className="hero">
                <StaticImage
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                    src="../../content/img/jordan-rhea-header.png"
                    quality={95}
                    alt="jordan rhea header"
                />
                <h1>Build your own tools with the technology you already use</h1>
            </div>

            <h2 style={{ margin: `0 0 2rem` }}>
                Jordan Rhea. <small>Systems and Data Consultant</small>
            </h2>

            <p>
                Extending the capabilities of <b>Office 365</b> and{" "}
                <b>Google Workspaces</b>
                so that your team makes the most of your systems. Background in
                education with a future in development.
            </p>

            <h3>Projects</h3>

            <div className="project-cards">
                {projects.map((p: any) => {
                    return <ProjectCard key={p.id} project={p} />;
                })}
            </div>
        </Layout>
    );
};

export default Home;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }

        allMarkdownRemark(filter: { fields: { category: { eq: "project" } } }) {
            nodes {
                id
                frontmatter {
                    title
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                            )
                        }
                    }
                }
                fields {
                    slug
                }
                excerpt
            }
        }
    }
`;
