import * as React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { format } from "date-fns";

interface Props {
    data: any;
    location: Location;
}

interface Project {
    fields: {
        slug: string;
        date: string;
    };
    frontmatter: {
        title: string;
    };
}

const Projects: React.FC<Props> = ({ data, location }) => {
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
            <ol style={{ listStyle: `none` }}>
                {projects.map((project: Project) => {
                    const title =
                        project.frontmatter.title || project.fields.slug;

                    return (
                        <li key={project.fields.slug}>
                            <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                            >
                                <header>
                                    <h2>
                                        <Link
                                            to={project.fields.slug}
                                            itemProp="url"
                                        >
                                            <span itemProp="headline">
                                                {title}
                                            </span>
                                        </Link>
                                    </h2>
                                    <small>
                                        {format(
                                            new Date(project.fields.date),
                                            "PPP"
                                        )}
                                    </small>
                                </header>
                            </article>
                        </li>
                    );
                })}
            </ol>
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
                }
            }
        }
    }
`;
