import * as React from "react";
import { PortableText as PortableTextReact } from "@portabletext/react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

type SanityImage = {
    altText?: string;
    asset?: {
        url?: string;
        gatsbyImageData?: IGatsbyImageData;
    };
};

const components = {
    types: {
        image: ({ value }: { value: SanityImage }) => {
            const gatsbyImage = getImage(value?.asset?.gatsbyImageData ?? null);

            if (gatsbyImage) {
                return (
                    <GatsbyImage
                        image={gatsbyImage}
                        alt={value?.altText || ""}
                    />
                );
            }

            if (value?.asset?.url) {
                return <img src={value.asset.url} alt={value?.altText || ""} />;
            }

            return null;
        },
    },
    marks: {
        link: ({
            value,
            children,
        }: {
            value?: { href?: string };
            children: any;
        }) => {
            const href = value?.href || "";
            const isExternal = /^https?:\/\//.test(href);
            const rel = isExternal ? "noreferrer noopener" : undefined;
            const target = isExternal ? "_blank" : undefined;

            return (
                <a href={href} rel={rel} target={target}>
                    {children}
                </a>
            );
        },
    },
};

export const PortableText = ({ value }: { value: any }) => {
    return <PortableTextReact value={value} components={components} />;
};
