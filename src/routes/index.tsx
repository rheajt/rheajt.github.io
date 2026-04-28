import Layout from "~/components/layout";
import Seo from "~/components/seo";
import { Loader } from "~/components/loader";
import { Hero } from "~/components/hero";
import { Section } from "~/components/section";
import { styled } from "solid-styled-components";
import { siteMetadata } from "~/site-config";
import { ProjectsSection } from "~/components/projects-section";
import { QuoteCarousel } from "~/components/quote-carousel";
import { quotes } from "~/utils/yaml";

export default function Home() {
    return (
        <Layout>
            <Seo
                title="jordanrhea.com"
                image={
                    siteMetadata.siteUrl + "/content/img/jordanrhea-header.png"
                }
            />
            <Loader />
            <Hero />
            <Section>
                <MissionStatement>
                    Connecting data systems in education — building tools that
                    help schools work smarter with the platforms they already
                    use.
                </MissionStatement>

                <p>
                    As a dedicated data software consultant specializing in
                    educational institutions, I bring a unique blend of
                    technical expertise and a profound understanding of the
                    needs of schools and educators.
                </p>

                <p>
                    My role involves crafting innovative solutions that harness
                    the power of data to optimize school operations. From
                    customization options for PowerSchool SIS to full-service
                    data consulting through School Data Solutions, I help
                    institutions make the most of their systems.
                </p>

                <p>
                    My ability to bridge the gap between technology and
                    education ensures seamless integration of data software,
                    empowering schools to make informed choices for improved
                    student outcomes.
                </p>

                <p>
                    Extending the capabilities of <b>Office 365</b> and{" "}
                    <b>Google Workspaces</b> so that your team makes the most of
                    your systems.
                </p>
                <MissionStatement>
                    Background in education with a future in development.
                </MissionStatement>
            </Section>
            <QuoteCarousel quotes={quotes} />
            <ProjectsSection />
        </Layout>
    );
}

const MissionStatement = styled.p`
    font-family: var(--fontFamily-display);
    font-size: var(--fontSize-3);
    font-weight: 500;
    line-height: var(--lineHeight-normal);
    color: var(--color-heading);
    border-left: 3px solid var(--color-primary);
    padding-left: var(--spacing-6);
    margin-bottom: var(--spacing-10);
`;
