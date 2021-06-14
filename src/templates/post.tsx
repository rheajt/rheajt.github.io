import { graphql, PageProps } from 'gatsby';
import React from 'react';
import rehypeReact from 'rehype-react';

import { renderTufte } from '../utils';
import { Layout, Seo, ShareButtons } from '../components';
import Warning from '../components/Warning';
import { isDate } from 'date-fns';
import { format, isAfter, isBefore } from 'date-fns/esm';

interface PostPageProps extends PageProps {
    data: {
        markdownRemark: {
            html: string;
            htmlAst: string;
            excerpt: string;
            timeToRead: string;
            fields: {
                date: string;
                slug: string;
            };
            frontmatter: {
                title: string;
                tags: string;
                image: {
                    childImageSharp: {
                        fluid: {
                            sizes: any;
                            aspectRatio: any;
                            src: string;
                        };
                    };
                };
            };
        };
        site: {
            siteMetadata: {
                siteUrl: string;
            };
        };
    };
}

const PageTemplate: React.FC<PostPageProps> = (props) => {
    const { siteUrl } = props.data.site.siteMetadata;
    const post = props.data.markdownRemark;

    let width = '';
    let height = '';

    const slug = post.fields.slug || '';

    if (post.frontmatter.image && post.frontmatter.image.childImageSharp) {
        width = post.frontmatter.image.childImageSharp.fluid.sizes
            .split(', ')[1]
            .split('px')[0];
        height = String(
            Number(width) /
                post.frontmatter.image.childImageSharp.fluid.aspectRatio
        );
    }

    //@ts-ignore
    const renderAst = new rehypeReact({
        createElement: React.createElement,
        Fragment: React.Fragment,
    }).Compiler;

    const html = renderAst(renderTufte(post.htmlAst));

    const hasImage = () =>
        post.frontmatter.image && post.frontmatter.image.childImageSharp
            ? post.frontmatter.image.childImageSharp.fluid.src
            : '';

    const meta = [
        { name: 'description', content: post.excerpt },
        { property: 'og:site_name', content: siteUrl },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: post.frontmatter.title },
        { property: 'og:description', content: post.excerpt },
        { property: 'og:url', content: siteUrl + '/' + slug },
        {
            property: 'og:image',
            content: hasImage(),
        },
        { property: 'article:published_time', content: post.fields.date },
        { property: 'article:tag', content: post.frontmatter.tags[0] },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: post.frontmatter.title },
        { property: 'twitter:description', content: post.excerpt },
        { property: 'twitter:url', content: siteUrl + '/' + slug },
        {
            property: 'twitter:image',
            content: hasImage(),
        },
        { property: 'twitter:label1', content: 'Written by' },
        { property: 'twitter:data1', content: '@rheajt' },
        { property: 'twitter:label2', content: 'Filed under' },
        { property: 'twitter:data2', content: post.frontmatter.tags[0] },
    ];

    if (width) {
        meta.push({ property: 'og:image:width', content: width });
    }

    if (height) {
        meta.push({ property: 'og:image:height', content: height });
    }

    const postDate = new Date(post.fields.date);
    const yearAgo = new Date().setFullYear(new Date().getFullYear() - 1);
    const isOld = isAfter(yearAgo, postDate);

    return (
        <Layout>
            <Seo
                lang="en"
                title={post.frontmatter.title}
                description={post.excerpt}
                meta={meta}
            />

            {isOld && (
                <Warning
                    date={postDate}
                    url={siteUrl + '/' + slug}
                    title={post.frontmatter.title}
                />
            )}

            <h3>{format(new Date(post.fields.date), 'MMMM dd, yyyy')}</h3>
            <h1>{post.frontmatter.title}</h1>

            <ShareButtons
                url={siteUrl + '/' + slug}
                title={post.frontmatter.title}
                description={post.excerpt}
            />

            {html}

            <div>
                <p>
                    More from jordan at{' '}
                    <a href="https://twitter.com/rheajt">@rheajt</a>
                </p>
            </div>
        </Layout>
    );
};

export default PageTemplate;

export const query = graphql`
    query ($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            htmlAst
            excerpt
            timeToRead
            fields {
                date
                slug
            }
            frontmatter {
                title
                tags
                image {
                    childImageSharp {
                        fluid(maxWidth: 3720) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`;
