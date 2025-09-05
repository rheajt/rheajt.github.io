import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { QuoteCarousel } from "../components/quote-carousel";
import { ProjectPage } from "../types/ProjectPage";
import { Loader } from "../components/loader";
import { Hero } from "../components/hero";
import { Section } from "../components/section";
import { ProjectsSection } from "../components/projects-section";
import { LinkButton } from "../components/link-button";

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

            <Loader />

            <Hero />

            <Section>
                <p>
                    As a dedicated data software consultant specializing in
                    educational institutions, I bring a unique blend of
                    technical expertise and a profound understanding of the
                    needs of schools and educators. <b>PSISJS</b> is a support
                    service with customization options for PowerSchool SIS.
                </p>

                <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <LinkButton label="PSISJS" href="https://psisjs.com" />
                </div>

                <p>
                    My role involves crafting innovative solutions that harness
                    the power of data to optimize school operations. That is why
                    I created School Data Solutions, a data software consulting
                    company that specializes in educational institutions.
                </p>

                <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                >
                    <LinkButton
                        label="School Data Solutions"
                        href="https://schooldata.solutions"
                    />
                </div>

                <p>
                    My ability to bridge the gap between technology and
                    education ensures seamless integration of data software,
                    empowering schools to make informed choices for improved
                    student outcomes. Your commitment to transforming
                    educational landscapes establishes you as a key player in
                    shaping the future of learning.
                </p>
                <p>
                    Extending the capabilities of <b>Office 365</b> and{" "}
                    <b>Google Workspaces</b> so that your team makes the most of
                    your systems. Background in education with a future in
                    development.
                </p>
            </Section>

            <QuoteCarousel quotes={quotes} />

            <ProjectsSection projects={projects} />
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
