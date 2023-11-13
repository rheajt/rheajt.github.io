import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Blockquote from "../components/blockquote";
import Share from "../components/share";
import { ContactForm } from "../components/contact-form";
import { StyledContainer } from "../components/StyledContainer";
import { styled } from "styled-components";

interface Props {
	data: Data;
	location: Location;
}

interface Data {
	site: {
		siteMetadata: {
			siteUrl: string;
			title: string;
		};
	};
	markdownRemark: {
		id: string;
		html: string;
		excerpt: string;
		frontmatter: {
			title: string;
			message: string;
			tags: string[];
			quote: {
				author: string;
				text: string;
				employer: string;
				position: string;
				excerpt: string;
				email?: string;
			};
			image: {
				publicURL: string;
				childImageSharp: {
					gatsbyImageData: IGatsbyImageData;
				};
			};
		};
		fields: {
			date: string;
			thumbnail: string;
			slug: string;
		};
	};
}

const ProjectPageTemplate: React.FC<Props> = ({ data, location }) => {
	const project = data.markdownRemark;
	const siteTitle = data.site.siteMetadata?.title || `Title`;

	const url =
		data.site.siteMetadata.siteUrl + "/projects/" + project.fields.slug;

	let image = undefined;

	if (project.frontmatter.image) {
		image =
			data.site.siteMetadata?.siteUrl +
			project.frontmatter.image.publicURL;
	} else if (project.fields.thumbnail) {
		image = project.fields.thumbnail;
	}

	return (
		<Layout location={location} title={siteTitle}>
			<Seo
				title={project.frontmatter.title}
				description={project.excerpt}
				image={image}
			/>

			<StyledContainer>
				<StyledProjectImage>
					<GatsbyImage
						image={
							project.frontmatter.image.childImageSharp
								.gatsbyImageData
						}
						alt="project image"
					/>

					<div
						style={{
							position: "sticky",
							top: "20px",
							display: "flex",
							alignItems: "center",
						}}
					>
						<h1 itemProp="headline" style={{ flex: 1 }}>
							{project.frontmatter.title}
						</h1>
						<Share url={url} />
					</div>
				</StyledProjectImage>

				{project.frontmatter.quote && (
					<section>
						<Blockquote quote={project.frontmatter.quote} />
					</section>
				)}

				<section
					dangerouslySetInnerHTML={{ __html: project.html }}
					itemProp="articleBody"
				/>

				<ContactForm
					data={{
						topic: project.frontmatter.tags.length
							? project.frontmatter.tags.join(" ")
							: "",
						message: project.frontmatter.message
							? project.frontmatter.message
							: "",
					}}
				/>

				<hr />

				<footer>
					<Bio />
				</footer>
			</StyledContainer>
		</Layout>
	);
};

export default ProjectPageTemplate;

export const projectsQuery = graphql`
    query ProjectPagesById($id: String!) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        markdownRemark(id: { eq: $id }) {
            id
            html
            excerpt
            frontmatter {
                title
                message
                image {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                    }
                }
                tags
                quote {
                    author
                    position
                    employer
                    text
                    excerpt
                }
            }
            fields {
                date
                thumbnail
                slug
            }
        }
    }
`;

const StyledProjectImage = styled.div`
    margin-top: var(--spacing-8);
`;
