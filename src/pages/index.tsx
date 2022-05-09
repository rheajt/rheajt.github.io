import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import ProjectCard from "../components/project-card";
// import { ProjectFrontmatter } from "../types/ProjectFrontmatter";

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
    const projects = data.projects.nodes;
    // const blog = data.blog.nodes;

    // const projectKeywords = projects
    //     .map((p: ProjectFrontmatter) => {
    //         return p.frontmatter.tags;
    //     })
    //     .flat();

    // const blogTags = blog
    //     .map((b: any) => {
    //         return b.frontmatter.tags;
    //     })
    //     .flat();

    // console.log({ projectKeywords, blogTags });

    return (
        <Layout location={location} title={siteTitle}>
            <Seo
                title="jordanrhea.com"
                image={
                    data.site.siteMetadata.siteUrl +
                    "/static/blackboard-bg-shadow.jpg"
                }
            />

            <div className="hero">
                <StaticImage
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                    src="../../content/img/jordan-rhea-header.png"
                    quality={95}
                    alt="jordan rhea header"
                />
                <h1>
                    Build your own tools with the technology you already use
                </h1>
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
                siteUrl
            }
        }

        projects: allMarkdownRemark(
            filter: { fields: { category: { eq: "project" } } }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    tags
                    image {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                }
                fields {
                    slug
                }
                excerpt
            }
        }

        blog: allMarkdownRemark(
            filter: { fields: { category: { eq: "blog" } } }
        ) {
            nodes {
                id
                frontmatter {
                    tags
                    categories
                }
                fields {
                    slug
                }
            }
        }
    }
`;
