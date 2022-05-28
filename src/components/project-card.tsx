import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { ProjectPage } from "../types/ProjectPage";

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

export default ProjectCard;
