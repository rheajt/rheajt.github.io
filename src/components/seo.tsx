import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql, HeadProps } from "gatsby";

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
	const { site } = useStaticQuery(
		graphql`
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
        `
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata?.title;

	if (image) {
		const content = image;
		meta = [
			...meta,
			{
				property: `og:image`,
				content,
			},
			{
				name: `twitter:image`,
				content,
			},
		];
	}

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
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
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata?.social?.twitter || ``,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				...meta,
			]}
		/>
	);
};

export default Seo;
