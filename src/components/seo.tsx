import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
    description?: string;
    lang?: string;
    meta?: { name?: string; property?: string; content: string }[];
    title?: string;
    image?: string;
}

const Seo: React.FC<Props> = ({
    description = "",
    lang = "en",
    meta = [],
    title = "jordanrhea.com",
    image,
}) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                    social {
                        twitter
                    }
                }
            }
        }
    `);

    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata?.title;
    const fullTitle = defaultTitle ? `${title} | ${defaultTitle}` : title;

    const baseMeta = [
        <meta name="description" content={metaDescription} key="description" />,
        <meta name="language" content={lang} key="language" />,
        <meta property="og:title" content={title} key="og:title" />,
        <meta
            property="og:description"
            content={metaDescription}
            key="og:description"
        />,
        <meta property="og:type" content="website" key="og:type" />,
        <meta name="twitter:card" content="summary" key="twitter:card" />,
        <meta
            name="twitter:creator"
            content={site.siteMetadata?.social?.twitter || ""}
            key="twitter:creator"
        />,
        <meta name="twitter:title" content={title} key="twitter:title" />,
        <meta
            name="twitter:description"
            content={metaDescription}
            key="twitter:description"
        />,
    ];

    const imageMeta = image
        ? [
              <meta property="og:image" content={image} key="og:image" />,
              <meta name="twitter:image" content={image} key="twitter:image" />,
          ]
        : [];

    const additionalMeta = meta.map((m, i) => {
        if (m.name)
            return (
                <meta
                    name={m.name}
                    content={m.content}
                    key={`meta-name-${m.name}-${i}`}
                />
            );
        if (m.property)
            return (
                <meta
                    property={m.property}
                    content={m.content}
                    key={`meta-prop-${m.property}-${i}`}
                />
            );
        return null;
    });

    return (
        <head>
            <title>{fullTitle}</title>
            {baseMeta}
            {imageMeta}
            {additionalMeta}
        </head>
    );
};

export default Seo;
