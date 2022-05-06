import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

interface Props {
    data: any;
    location: Location;
}

const TermsPage: React.FC<Props> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Terms of Service Page" />
            <h1>Terms of Service</h1>
            <p>My terms of service are pretty basic: I want to provide a service!</p>
        </Layout>
    );
};

export default TermsPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
