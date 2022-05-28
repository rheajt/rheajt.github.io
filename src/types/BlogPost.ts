import { IGatsbyImageData } from "gatsby-plugin-image";

export interface BlogPostProps {
    data: BlogPostData;
    location: Location;
}

export interface BlogPostData {
    site: {
        siteMetadata: {
            siteUrl: string;
            title: string;
        };
    };
    markdownRemark: {
        id: string;
        excerpt: string;
        html: string;
        htmlAst: string;
        frontmatter: {
            title: string;
            date: string;
            description: string;
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
    previous: {
        fields: {
            slug: string;
        };
        frontmatter: {
            title: string;
        };
    };
    next: {
        fields: {
            slug: string;
        };
        frontmatter: {
            title: string;
        };
    };
}
