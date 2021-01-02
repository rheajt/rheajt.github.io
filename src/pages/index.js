import Img from 'gatsby-image';
import { Layout, SEO } from 'components';
import React from 'react';

const IndexPage = ({ data }) => {
    console.log(data);
    return (
        <Layout centered>
            <section>
                <SEO />
                <div>
                    <Img
                        fluid={data.header.childImageSharp.fluid}
                        alt="header image"
                    />
                </div>
                <h1>jordan rhea</h1>
            </section>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        header: file(name: { eq: "jordan-rhea-header" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
