import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ProjectFrontmatter {
    frontmatter: {
        title: string;
        image: IGatsbyImageData;
    };
    excerpt: string;
}
