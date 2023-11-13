import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
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

            headerImage: imageSharp(
                resize: { originalName: { eq: "jordanrhea-header.png" } }
            ) {
                resize {
                    src
                }
            }
        }
    `);
	return {
		...data.site.siteMetadata,
		headerImageSrc: data.headerImage.resize.src,
	};
};
