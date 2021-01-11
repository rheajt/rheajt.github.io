import Img from 'gatsby-image';
import { Layout, SEO } from 'components';
import React from 'react';

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <SEO />
            <section>
                <h1>Jordan Rhea</h1> <h2>Web Development</h2>
                <figure>
                    <Img
                        fixed={data.header.childImageSharp.fixed}
                        alt="header image"
                    />
                </figure>
            </section>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        header: file(name: { eq: "jordan-rhea-header" }) {
            childImageSharp {
                fixed(width: 400) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;
