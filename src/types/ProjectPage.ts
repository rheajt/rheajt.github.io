import { IGatsbyImageData } from "gatsby-plugin-image";

export interface ProjectPageProps {
    data: any;
    location: Location;
}

export interface ProjectPage {
    id: string;
    excerpt: string;
    fields: {
        slug: string;
        date: string;
    };
    frontmatter: {
        title: string;
        image: IGatsbyImageData;
        tags: string[];
    };
}
