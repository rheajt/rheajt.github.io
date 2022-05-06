import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

interface Props {
    data: any;
    location: Location;
}

const PrivacyPage: React.FC<Props> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Privacy Page" />
            <h1>Privacy Page</h1>
            <p>Privacy is important. I care about yours. I am not storing any of your personal information.</p>
        </Layout>
    );
};

export default PrivacyPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
