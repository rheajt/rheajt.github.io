import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ProjectFrontmatter {
    id: string;
    excerpt: string;
    frontmatter: {
        title: string;
        image: IGatsbyImageData;
    };
    fields: {
        slug: string;
    };
}
