const path = require('path');
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

const POSTS_DIRECTORY = 'posts';
const SLUG_SEPARATOR = '___';

const getYoutubeId = url => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    // Sometimes, optional fields tend to get not picked up by the GraphQL
    // interpreter if not a single content uses it. Therefore, we're putting them
    // through `createNodeField` so that the fields still exist and GraphQL won't
    // trip up. An empty string is still required in replacement to `null`.
    switch (node.internal.type) {
        case 'MarkdownRemark': {
            const { permalink, layout, primaryTag } = node.frontmatter;
            const { relativePath } = getNode(node.parent);
            const filePath = createFilePath({ node, getNode });
            const isPost = ~filePath.indexOf(POSTS_DIRECTORY);
            const separatorExists = ~filePath.indexOf(SLUG_SEPARATOR);

            let slug = permalink;
            let prefix;
            let date;

            if (separatorExists && isPost) {
                const separatorPosition = filePath.indexOf(SLUG_SEPARATOR);
                const slugBeginning = separatorPosition + SLUG_SEPARATOR.length;
                slug =
                    separatorPosition === 1
                        ? null
                        : `${filePath.substring(slugBeginning)}`;
                prefix = filePath.substring(7, separatorPosition);

                if (prefix) {
                    let [year, month, day] = prefix.split('-');

                    date = new Date(+year, +month - 1, +day);
                }
            } else {
                slug = filePath;
                prefix = '';
            }

            if (!slug) {
                slug = `/${relativePath.replace('.md', '')}/`;
            }

            if (node.frontmatter.youtube) {
                createNodeField({
                    node,
                    name: 'youtubeId',
                    value: getYoutubeId(node.frontmatter.youtube) || '',
                });
            }

            //create default draft nodes for non-existant
            if (!node.frontmatter.draft) {
                createNodeField({
                    node,
                    name: 'draft',
                    value: false,
                });
            } else {
                createNodeField({
                    node,
                    name: 'draft',
                    value: true,
                });
            }

            // // Used to generate URL to view this content.
            createNodeField({
                node,
                name: 'slug',
                value: slug || '',
            });

            // Used to determine a page layout.
            createNodeField({
                node,
                name: 'layout',
                value: layout || '',
            });

            createNodeField({
                node,
                name: 'primaryTag',
                value: primaryTag || '',
            });

            createNodeField({
                node,
                name: 'date',
                value: date || '',
            });
        }
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allMarkdownRemark(
                limit: 2000
                sort: { fields: [fields___date], order: ASC }
            ) {
                edges {
                    node {
                        excerpt
                        timeToRead
                        frontmatter {
                            title
                            tags
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 3720) {
                                        aspectRatio
                                        base64
                                        sizes
                                        src
                                        srcSet
                                    }
                                }
                            }
                        }
                        fields {
                            layout
                            slug
                            date
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        console.error(result.errors);
        throw new Error(result.errors);
    }

    // Create post pages
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node }, index) => {
        const { slug } = node.fields;
        const prev = index === 0 ? null : posts[index - 1].node;
        const next = index === posts.length - 1 ? null : posts[index + 1].node;

        createPage({
            path: slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                slug,
                prev,
                next,
                primaryTag: node.frontmatter.tags
                    ? node.frontmatter.tags[0]
                    : '',
            },
        });
    });
};

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    const config = getConfig();
    if (stage.startsWith('develop') && config.resolve) {
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-dom': '@hot-loader/react-dom',
        };
    }

    // adds sourcemaps for tsx in dev mode
    if (stage === `develop` || stage === `develop-html`) {
        actions.setWebpackConfig({
            devtool: 'eval-source-map',
        });
    }
};
