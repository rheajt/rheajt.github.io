import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import quotes from "../../content/data/quotes.json";

export interface Quote {
    author: string;
    email: string;
    position: string;
    employer: string;
    text: string;
    excerpt: string;
}

const Home: React.FC<{ data: any; location: any }> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `jordanrhea.com`;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="jordanrhea.com" />

            <div style={{ maxWidth: 450 }}>
                <StaticImage
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                    src="../../content/img/jordan-rhea-header.png"
                    quality={95}
                    alt="jordan rhea header"
                />
            </div>

            <h2 style={{ margin: `0 0 2rem` }}>
                Jordan Rhea. <small>Systems and Data Consultant</small>
            </h2>

            <p>
                Extending the capabilities of <b>Office 365</b> and{" "}
                <b>Google Workspaces</b>
                so that your team makes the most of your systems. Background in
                education with a future in development.
            </p>

            <h3>Testimonials</h3>
            {quotes.map((quote: Quote) => {
                return (
                    <blockquote key={quote.author}>
                        <p>{quote.excerpt}</p>
                        <span className="author">
                            <b>{quote.author}</b> <br />
                            {quote.position} at {quote.employer}
                        </span>
                    </blockquote>
                );
            })}
        </Layout>
    );
};

export default Home;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
