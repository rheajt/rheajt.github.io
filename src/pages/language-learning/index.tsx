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
                childHanziJson {
                    vocabulary {
                        part_of_speech
                        category
                    }
                }
            }
        }
    }
`;
export default function ChineseLanguageLearningPage({ data, location }: any) {
    const pages = data.allFile.nodes;
    const formatName = (name: string) => {
        // match lesson followed by digits (e.g. lesson01)
        const m = name.match(/^lesson(\d+)$/i);
        if (m) return `Lesson ${m[1]}`;

        // fallback: insert a space before trailing numbers and capitalize first letter
        const withSpace = name.replace(
            /([a-zA-Z]+)(\d+)/,
            (_m, letters, nums) => `${letters} ${nums}`,
        );
        return withSpace.charAt(0).toUpperCase() + withSpace.slice(1);
    };
    return (
        <Layout location={location} title="About">
            <Seo title="Chinese Language Learning" />
            <Section>
                <h1>Chinese Language Learning</h1>

                <ul>
                    {pages.map((page: any) => {
                        const categories = page.childHanziJson.vocabulary
                            .map((v: any) => v.category)
                            .filter(
                                (c: string, i: number, arr: string[]) =>
                                    c && arr.indexOf(c) === i,
                            )
                            .join(", ");
                        return (
                            <li key={page.id}>
                                <a href={`/language-learning/${page.name}`}>
                                    {formatName(page.name)}
                                </a>

                                <p>{categories}</p>
                            </li>
                        );
                    })}
                </ul>
            </Section>
        </Layout>
    );
}
