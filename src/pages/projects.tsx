import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
// import { format } from "date-fns";
import { ProjectPageProps } from "../types/ProjectPage";
import ProjectCard from "../components/project-card";

const Projects: React.FC<ProjectPageProps> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const projects = data.allMarkdownRemark.nodes;

    if (projects.length === 0) {
        return (
            <Layout location={location} title={siteTitle}>
                <Seo title="All posts" />
                <Bio />
                <p>No blog posts found.</p>
            </Layout>
        );
    }

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="All Projects" />

            <Bio />

            <div className="project-cards">
                {projects.map((p: any) => {
                    return <ProjectCard key={p.id} project={p} />;
                })}
            </div>
        </Layout>
    );
};

export default Projects;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: { fields: { category: { eq: "project" } } }
            sort: { fields: [fields___date], order: DESC }
        ) {
            nodes {
                fields {
                    slug
                    date
                }
                frontmatter {
                    title
                    image {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                }
                excerpt
            }
        }
    }
`;
