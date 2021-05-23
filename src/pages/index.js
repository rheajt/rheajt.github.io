import { Layout, SEO } from 'components';
import React from 'react';

const IndexPage = ({ data }) => {
    console.log(data.header.childImageSharp);
    return (
        <Layout>
            <SEO />
            <section>
                <h1>Jordan Rhea</h1>
                <h3>Solutions Development</h3>

                <figure>
                    <img src={data.header.childImageSharp.fixed.src} alt="jordans face" />
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
