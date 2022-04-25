import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

interface Quote {
    author: string;
    email: string;
    position: string;
    employer: string;
    text: string;
}

const quotes: Quote[] = [
    {
        author: "Leo D",
        email: "aaaa@email.com",
        position: "King of the World",
        employer: "The Titanic",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        author: "Johnny Depp",
        email: "bbbbb@email.com",
        position: "Hollywood Actor",
        employer: "Pirates of the Caribbean",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        author: "Johnny Depp",
        email: "bbbbb@email.com",
        position: "Hollywood Actor",
        employer: "Pirates of the Caribbean",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
];
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
                Jordan Rhea. Systems and Data Consultant
            </h2>

            <p>
                Extending the capabilities of{" "}
                <div>
                    <b>Office 365</b> and <b>Google Workspaces</b>
                </div>
                so that your team makes the most of your systems.
            </p>

            <h3>Testimonials</h3>
            {quotes.map(quote => {
                return (
                    <blockquote>
                        <p>{quote.text}</p>
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
