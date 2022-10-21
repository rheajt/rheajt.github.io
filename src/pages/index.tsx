import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import ProjectCard from "../components/project-card";
import { CloudTech } from "../components/cloud-tech";
import Blockquote from "../components/blockquote";
import { QuoteCarousel } from "../components/quote-carousel";
import { ProjectPage } from "../types/ProjectPage";

export interface Quote {
    author: string;
    email?: string;
    position: string;
    employer: string;
    text: string;
    excerpt?: string;
}

const Home: React.FC<{ data: any; location: any }> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `jordanrhea.com`;
    const projects: ProjectPage[] = data.projects.nodes;
    const headerImageSrc = data.headerImage.resize.src;

    const quotes = projects.reduce<Quote[]>((acc, p) => {
        if (p.frontmatter.quote) {
            acc.push(p.frontmatter.quote);
        }
        return acc;
    }, []);

    return (
        <Layout location={location} title={siteTitle}>
            <Seo
                title="jordanrhea.com"
                image={data.site.siteMetadata.siteUrl + headerImageSrc}
            />

            <div className="hero">
                <StaticImage
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                    src="../../content/img/jordan-rhea-header.png"
                    quality={95}
                    height={100}
                    alt="jordan rhea header"
                />
                <div>
                    <h1>
                        Jordan Rhea. <small>EDU Developer</small>
                    </h1>
                    <h2>
                        Build your own tech solutions with <br />{" "}
                        <div style={{ paddingTop: "1em" }}>
                            <CloudTech />
                        </div>
                    </h2>
                </div>
            </div>

            <p>
                Extending the capabilities of <b>Office 365</b> and{" "}
                <b>Google Workspaces</b> so that your team makes the most of
                your systems. Background in education with a future in
                development.
            </p>

            <QuoteCarousel quotes={quotes} />

            <h3>Projects</h3>

            <p>
                I have done a number of different projects. Learn more about
                them below
            </p>

            <div className="project-cards">
                {projects.map((p: any) => {
                    return <ProjectCard key={p.id} project={p} />;
                })}
            </div>
        </Layout>
    );
};

export default Home;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }

        headerImage: imageSharp(
            resize: { originalName: { eq: "jordanrhea-header.png" } }
        ) {
            resize {
                src
            }
        }

        projects: allMarkdownRemark(
            filter: { fields: { category: { eq: "project" } } }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    tags
                    image {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                    quote {
                        author
                        email
                        employer
                        excerpt
                        position
                        text
                    }
                }
                fields {
                    slug
                }
                excerpt
            }
        }

        blog: allMarkdownRemark(
            filter: { fields: { category: { eq: "blog" } } }
        ) {
            nodes {
                id
                frontmatter {
                    tags
                    categories
                }
                fields {
                    slug
                }
            }
        }
    }
`;
