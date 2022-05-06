import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ProjectFrontmatter } from "../types/ProjectFrontmatter";

const ProjectCard: React.FC<{ project: ProjectFrontmatter }> = ({ project }) => {
    console.log({project});
    const image = getImage(project.frontmatter.image);
    return (
        <div className="project-card">
            {image && <div className="image">
                <GatsbyImage image={image} alt={project.frontmatter.title} />
            </div>}
            <p>{project.frontmatter.title}</p>
        </div>
    );
};

export default ProjectCard;
