import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

interface Meta {
    name?: string;
    property?: string;
    content?: string;
}

export const Seo: React.FC<{
    description?: string;
    lang?: string;
    meta?: Meta[];
    title?: string;
}> = ({
    description = '',
    lang = 'en',
    meta = [],
    title = 'jordanrhea.com',
}) => {
    const siteMetadata = useSiteMetadata();
    const metaDescription = description || siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                ...meta,
            ]}
        />
    );
};
