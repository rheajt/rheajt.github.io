module.exports = {
    siteMetadata: {
        title: `jordan rhea`,
        author: {
            name: `jordan rhea`,
            summary: `Building tools and connecting systems`,
        },
        description: `Education focused systems developer, building tools and connecting services such as Powerschool and Managebac to Microsoft Office 365 and Google Workspaces`,
        siteUrl: `https://jordanrhea.com`,
        social: {
            twitter: `rheajt`,
            github: `rheajt`,
            linkedin: `rheajt`,
            youtube: `jordanrhea`,
        },
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/projects`,
                name: `projects`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/content/img`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "G-QQSFP9F2G4",

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: "gatsby" },

                // Specify optional GTM environment details.
                // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
                // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
                // dataLayerName: "YOUR_DATA_LAYER_NAME",

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                routeChangeEventName: "gatsby-route-change",
                // Defaults to false
                enableWebVitalsTracking: true,
                // Defaults to https://www.googletagmanager.com
                // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-QQSFP9F2G4",
                    "AW-956369982", // Google Ads / Adwords / AW
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    // exclude: ["/preview/**", "/do-not-track/me/too/"],
                    // Defaults to https://www.googletagmanager.com
                    // origin: "YOUR_SELF_HOSTED_ORIGIN",
                },
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
                            return allMarkdownRemark.nodes.map(node => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url:
                                        site.siteMetadata.siteUrl +
                                        node.fields.slug,
                                    guid:
                                        site.siteMetadata.siteUrl +
                                        node.fields.slug,
                                    custom_elements: [
                                        { "content:encoded": node.html },
                                    ],
                                });
                            });
                        },
                        query: `
                          {
                            allMarkdownRemark(
                                filter: {fields: {category: { eq: "blog"}}}
                                sort: { order: DESC, fields: [frontmatter___date] },
                            ) {
                              nodes {
                                excerpt
                                html
                                fields {
                                  slug
                                }
                                frontmatter {
                                  title
                                  date
                                }
                              }
                            }
                          }
                        `,
                        output: "/rss.xml",
                        title: "jordanrhea.com RSS feed",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `jordanrhea.com`,
                short_name: `jordanrhea.com`,
                start_url: `/`,
                background_color: `#000`,
                theme_color: `#000`,
                display: `minimal-ui`,
                icon: `content/img/jr-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `http-jordanrhea-com`,
            },
        },
    ],
};
