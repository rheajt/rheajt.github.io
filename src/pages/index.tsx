import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const Home: React.FC<{ data: any; location: any }> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="jordanrhea.com" />

            <div style={{ maxWidth: 450 }}>
                <StaticImage
                    layout="fullWidth"
                    formats={["auto", "webp", "avif"]}
                    src="../../content/img/jordan-rhea-header.png"
                    // width={400}
                    // height={400}
                    quality={95}
                    alt="jordan rhea header"
                />
            </div>

            <p style={{ margin: `2rem 0 1rem 0` }}>My name is</p>
            <h1 style={{ margin: `0 0 2rem` }}>Jordan Rhea</h1>
            <p>
                I use web technology to build solutions to problems. Primarily
                written in Typescript to automate tasks that slow people down.
            </p>
            <p>
                This site is primarily a scratch pad for me to jot things down
                as I learn them, do them, or build them. I also used to{" "}
                <a href="https://youtube.com/jordanrhea">
                    post things on YouTube.
                </a>
            </p>
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
