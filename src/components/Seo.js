import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

export function SEO({ description, lang, meta, title }) {
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
            ]}
        />
    );
}
