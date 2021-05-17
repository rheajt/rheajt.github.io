const path = require('path');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `jordanrhea.com`,
        description: `Jordan Rhea Portfolio Site`,
        author: `Jordan Rhea`,
        siteUrl: 'https://jordanrhea.com/',
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, 'src', 'images'),
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: path.join(__dirname, 'content'),
            },
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-flow`,
        `gatsby-plugin-react-helmet`,
        'gatsby-transformer-json',
        'gatsby-transformer-yaml',
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                    'gatsby-remark-abbr',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1170,
                            quality: 90,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './src',
                aliases: {
                    components: './components',
                    containers: './containers',
                    images: './images',
                    state: './state',
                    styles: './styles',
                    utils: './utils',
                    static: {
                        root: './public',
                        alias: './static',
                    },
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jordan Rhea Portfolio`,
                short_name: `Jordan Rhea`,
                start_url: `/`,
                background_color: `black`,
                theme_color: `black`,
                display: `minimal-ui`,
                icon: `src/images/jr-icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-71835937-1',
                head: true,
                anonymize: true,
                respectDNT: true,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(({ node }) => {
                                return {
                                    ...node.frontmatter,
                                    description: node.excerpt,
                                    date: node.fields.date,
                                    url:
                                        site.siteMetadata.siteUrl +
                                        node.fields.slug,
                                    guid:
                                        site.siteMetadata.siteUrl +
                                        node.fields.slug,
                                    custom_elements: [
                                        {
                                            'content:encoded': node.html,
                                            tags: node.frontmatter.tags,
                                            categories:
                                                node.frontmatter.categories,
                                        },
                                    ],
                                };
                            });
                        },
                        query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [fields___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                        date
                      }
                      frontmatter {
                        title
                      }
                    }
                  }
                }
              }
            `,
                        output: '/rss.xml',
                        title: 'jordanrhea.com',
                    },
                ],
            },
        },
    ],
};
