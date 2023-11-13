import React from "react";
import { graphql, Link } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { ProjectPage, ProjectPageProps } from "../types/ProjectPage";
import { StyledContainer } from "../components/StyledContainer";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
                id
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

			<StyledContainer>
				<Bio />

				<StyledProjectCards>
					{projects.map((p: any) => {
						return <ProjectCard key={p.id} project={p} />;
					})}
				</StyledProjectCards>
			</StyledContainer>
		</Layout>
	);
};

export default Projects;

const StyledProjectCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 1em;

    a {
        color: var(--color-text);
        text-decoration: none;
    }

    .project-card {
        display: flex;
        flex-direction: column;
        align-items: space-between;
        background-color: white;
        text-align: center;
        border: 1px solid lightgray;
        height: 100%;
        min-height: 320px;
        overflow: hidden;
        transition: all 150ms ease-in;

        &:hover {
            transform: scale(1.05);
        }

        .description {
            display: flex;
            flex-direction: column;
            align-items: space-between;
            padding: 1em;
        }
    }
`;

const ProjectCard: React.FC<{ project: ProjectPage }> = ({ project }) => {
	const image = getImage(project.frontmatter.image);

	return (
		<Link to={`/projects/${project.fields.slug}`}>
			<div className="project-card">
				{image && (
					<div className="image">
						<GatsbyImage
							image={image}
							alt={project.frontmatter.title}
						/>
					</div>
				)}
				<div className="description">
					<h6>{project.frontmatter.title}</h6>
					<p>{project.excerpt}</p>
				</div>
			</div>
		</Link>
	);
};
