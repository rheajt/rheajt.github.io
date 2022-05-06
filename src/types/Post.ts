export interface Post {
    excerpt: string;
    fields: {
        date: string;
        slug: string;
    };
    frontmatter: {
        title: string;
        description: string;
        date: string;
    };
}
