import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ProjectFrontmatter {
    id: string;
    excerpt: string;
    frontmatter: {
        title: string;
        image: IGatsbyImageData;
        tags: string[];
    };
    fields: {
        slug: string;
    };
}
