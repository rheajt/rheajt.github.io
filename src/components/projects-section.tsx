import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { ProjectPage } from "../types/ProjectPage";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "gatsby";

type Props = {
	projects: ProjectPage[];
};

export const ProjectsSection = (props: Props) => {
	return (
		<StyledProjectsSection>
			<div className="container">
				<div className="section-head">
					<h4>Projects</h4>
				</div>

				<div className="row">
					{props.projects.map(p => {
						const image = getImage(p.frontmatter.image);
						return (
							<StyledItem key={p.id}>
								{image && (
									<div className="img-post">
										<a href="#">
											<GatsbyImage
												image={image}
												alt={p.frontmatter.title}
											/>
										</a>
									</div>
								)}
								<div className="cont-post">
									<a href="#">
										<span className="tag">
											{p.frontmatter.title}
										</span>
									</a>
									<a href="#">
										<h6>{p.fields.date}</h6>
									</a>

									<p>{p.excerpt}</p>

									<span className="read-more-btn">
										<Link to={`/projects/${p.fields.slug}`}>
											Read More <FaLongArrowAltRight />
										</Link>
									</span>
								</div>
							</StyledItem>
						);
					})}
				</div>
			</div>
		</StyledProjectsSection>
	);
};

const StyledProjectsSection = styled.section`
    margin: 0 auto;
    max-width: 800px;

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const StyledItem = styled.div`
    max-width: 225px;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.05);

    a {
        color: var(--color-text);
        text-decoration: none;
    }

    .img-post {
        position: relative;
        overflow: hidden;

        &:hover img {
            transform: scale(1.2, 1.2);
        }

        img {
            transition: all 0.5s;
        }
    }

    .cont-post {
        padding: 30px 15px;
        background: #fff;

        .tag {
            margin-bottom: 15px;
            color: #999;
            font-weight: 700;
        }

        h6 {
            font-size: 18px;
            margin-bottom: 15px;
        }

        .read-more-btn {
            margin-top: 30px;
            font-size: 12px;
            font-weight: 700;
            color: var(--color-primary);
            text-transform: uppercase;
            display: flex;
            align-items: center;
            transition: transform 0.5s;

            &:hover {
                transform: translate(5px);
            }
        }
    }
`;
