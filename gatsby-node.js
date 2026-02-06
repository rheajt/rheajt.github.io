const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { getYoutubeId } = require("./utils/getYoutubeId");
const { getCategory } = require("./utils/getCategory");

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    // Define a template for blog post
    const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
    const projectPage = path.resolve(`./src/templates/project-page.tsx`);
    const flashcardPage = path.resolve(`./src/templates/flashcards-page.tsx`);
    const languageLearningPage = path.resolve(
        `./src/templates/language-learning-page.tsx`,
    );

    const postNodes = await graphql(`
        {
            allSanityPost(
                filter: { slug: { current: { ne: null } } }
                sort: { publishedAt: DESC }
                limit: 1000
            ) {
                nodes {
                    id
                    slug {
                        current
                    }
                }
            }
        }
    `);

    if (postNodes.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            postNodes.errors,
        );
        return;
    }

    const posts = postNodes.data.allSanityPost.nodes;

    if (posts.length > 0) {
        posts.forEach((post, index) => {
            const previousPostId = index === 0 ? null : posts[index - 1].id;
            const nextPostId =
                index === posts.length - 1 ? null : posts[index + 1].id;

            createPage({
                path: "/blog/" + post.slug.current,
                component: blogPost,
                context: {
                    id: post.id,
                    previousPostId,
                    nextPostId,
                },
            });
        });
    }

    const isDev = process.env.NODE_ENV !== "production";
    const projectNodes = await graphql(`
        {
            allMarkdownRemark(
                filter: { fields: { category: { eq: "project" } } }
                limit: 1000
            ) {
                nodes {
                    id
                    fields {
                        slug
                    }
                }
            }
        }
    `);

    const projects = projectNodes.data.allMarkdownRemark.nodes;

    if (projects.length > 0) {
        projects.forEach(post => {
            createPage({
                path: "/projects/" + post.fields.slug,
                component: projectPage,
                context: {
                    id: post.id,
                },
            });
        });
    }

    const lessonNodes = await graphql(`
        query tb {
            allGoogleLessonsSheet(sort: { lesson: DESC }) {
                nodes {
                    date
                    lesson
                }
            }
        }
    `);

    const lessons = lessonNodes.data.allGoogleLessonsSheet.nodes;

    if (lessons.length > 0) {
        lessons.forEach(lesson => {
            createPage({
                path: "/language-learning/lesson" + lesson.lesson,
                component: languageLearningPage,
                context: {
                    id: lesson.id,
                    lesson: lesson.lesson,
                },
            });
            createPage({
                path:
                    "/language-learning/lesson" + lesson.lesson + "/flashcards",
                component: flashcardPage,
                context: {
                    id: lesson.id,
                    lesson: lesson.lesson,
                },
            });
        });
    }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        // console.log(node.frontmatter.title);
        const value = createFilePath({ node, getNode });
        const [dt, slug] = value.slice(1).split("___");

        let isDraft = false;
        if (node.frontmatter.draft && node.frontmatter.draft === true) {
            isDraft = true;
        }

        createNodeField({
            name: `draft`,
            node,
            value: isDraft,
        });

        createNodeField({
            name: `slug`,
            node,
            value: slug,
        });

        createNodeField({
            name: `date`,
            node,
            value: new Date(dt),
        });

        createNodeField({
            name: `thumbnail`,
            node,
            value: getYoutubeId(node.frontmatter.youtube),
        });

        createNodeField({
            name: `category`,
            node,
            value: getCategory(node.fileAbsolutePath),
        });
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    const typeDefs = `
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
      github: String
      linkedin: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
        draft: Boolean
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
        draft: Boolean
      slug: String
      date: Date
      thumbnail: String
        category: String
    }
  `;
    createTypes(typeDefs);
};
