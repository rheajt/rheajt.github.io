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
    sanityPost: {
        id: string;
        title: string;
        publishedAt: string;
        slug: {
            current: string;
        };
        image?: {
            altText?: string;
            asset?: {
                url?: string;
            };
        };
        body: any;
    };
    previous?: {
        slug: {
            current: string;
        };
        title: string;
    } | null;
    next?: {
        slug: {
            current: string;
        };
        title: string;
    } | null;
}
