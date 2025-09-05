import * as React from "react";
import Layout from "../../components/layout";
import { Section } from "../../components/section";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

export const pageQuery = graphql`
    query {
        allFile(filter: { sourceInstanceName: { eq: "lessons" } }) {
            nodes {
                id
                name
            }
        }
    }
`;
export default function ChineseLanguageLearningPage({ data }: any) {
    const pages = data.allFile.nodes;
    return (
        <Layout location={location} title="About">
            <Seo title="Chinese Language Learning" />
            <Section>
                <h1>Chinese Language Learning</h1>

                <ul>
                    {pages.map((page: any) => (
                        <li key={page.id}>
                            <a href={`/language-learning/${page.name}`}>
                                Lesson {page.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </Section>
        </Layout>
    );
}
