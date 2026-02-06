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
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: `j1m85hw2`,
                dataset: `production`,
                // a token with read permissions is required
                // if you have a private dataset
                // token: process.env.SANITY_TOKEN,

                // If the Sanity GraphQL API was deployed using `--tag <name>`,
                // use `graphqlTag` to specify the tag name. Defaults to `default`.
                graphqlTag: "experiment",
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                ],
                web: [
                    {
                        name: `Patrick Hand`,
                        file: `https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap`,
                    },
                    {
                        name: "Work Sans",
                        file: `https://fonts.googleapis.com/css2?family=Work+Sans&display=swap`,
                    },
                    {
                        name: "Iansui",
                        file: `https://fonts.googleapis.com/css2?family=Iansui&display=swap`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
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
            resolve: "gatsby-source-google-spreadsheets",
            options: {
                spreadsheetId: "1tJvDMO8ATqcR6KhXBYxO_Ygb9P9KXECBqEhk8JOh7pc",
                credentials: require("./googlesheets-creds.json"),
            },
        },
        {
            resolve: "gatsby-source-google-spreadsheets",
            options: {
                spreadsheetId: "14K-Z_rRR4wRQoXirCnAnsYZ9xI-Sdqh8o66N474g1SI",
                credentials: require("./googlesheets-creds.json"),
            },
        },
        // {
        //     resolve: `gatsby-transformer-json`,
        //     options: {
        //         typeName: `HanziJson`, // a fixed string
        //     },
        // },
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
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: ["G-QQSFP9F2G4"],
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
    ],
};
