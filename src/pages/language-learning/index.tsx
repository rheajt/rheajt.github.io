import * as React from "react";
import Layout from "../../components/layout";
import { Section } from "../../components/section";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

export const pageQuery = graphql`
    query {
        allGoogleLessonsSheet(sort: { lesson: DESC }) {
            nodes {
                date
                lesson
            }
        }
    }
`;

export default function ChineseLanguageLearningPage({ data, location }: any) {
    const pages = data.allGoogleLessonsSheet.nodes;
    return (
        <Layout location={location} title="About">
            <Seo title="Chinese Language Learning" />
            <Section>
                <h1>Chinese Language Learning</h1>

                <p>
                    I am learning Chinese. Here are notes from my lessons and
                    some flashcards so I can study on the go.
                </p>

                <ul>
                    {pages.map((page: any) => {
                        return (
                            <li key={page.id}>
                                <a
                                    href={`/language-learning/lesson${page.lesson}`}
                                >
                                    Lesson {page.lesson} from {page.date}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </Section>
        </Layout>
    );
}
