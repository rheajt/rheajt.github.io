import { Layout, SEO } from 'components';
import React from 'react';

const IndexPage = ({ data }) => {
    console.log(data.header.childImageSharp);
    return (
        <Layout title="jordanrhea.com">
            <SEO />
            <section>
                <h1>Jordan Rhea</h1>
                <h3>Cloud Solutions Development</h3>

                <figure>
                    <img src={data.header.childImageSharp.fixed.src} alt="jordans face" />
                </figure>
            </section>

            <section>
                <p>I am doing a fairly haphazard job of documenting the different projects that I work on.</p>
                <p>Sometimes it is a project in Google Workspaces. Sometimes it is a project in Office 365</p>
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
