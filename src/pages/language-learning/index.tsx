import React from "react";
import Layout from "../../components/layout";
import { Section } from "../../components/section";
import Seo from "../../components/seo";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import PartsOfSpeech from "./partsOfSpeech";

export const pageQuery = graphql`
    query {
        allGoogleLessonsSheet(sort: { lesson: DESC }) {
            nodes {
                id
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
                <h1>Using Spreadsheets to Optimize Language Learning</h1>

                <p>
                    <b>My “Zhongwen” Workbook</b>{" "}
                    <a href="https://docs.google.com/spreadsheets/d/1tJvDMO8ATqcR6KhXBYxO_Ygb9P9KXECBqEhk8JOh7pc/edit?usp=sharing">
                        View the spreadsheet here
                    </a>
                </p>
                <p>
                    I’ve been studying Chinese via tutoring and taking tons of
                    notes. But raw notes pile up faster than I can review them,
                    and a lot get forgotten. To fix that, I created a
                    spreadsheet I call Zhongwen. It helps me turn scattered
                    notes into something I can use, track, and improve over
                    time. Here’s how it works — and how you might adapt it for
                    your own languages/studies.
                </p>

                <TwoColumn>
                    <LeftColumn>
                        <DictionaryRow>
                            <DictionaryLink to="/language-learning/dictionary">
                                Dictionary
                            </DictionaryLink>
                        </DictionaryRow>

                        <LessonsList>
                            {pages.map((page: any) => (
                                <li key={page.id}>
                                    <LessonLink
                                        to={`/language-learning/lesson${page.lesson}`}
                                    >
                                        Lesson {page.lesson} from {page.date}
                                    </LessonLink>
                                </li>
                            ))}
                        </LessonsList>
                    </LeftColumn>

                    <RightColumn>
                        <PartsOfSpeech />
                    </RightColumn>
                </TwoColumn>
            </Section>
        </Layout>
    );
}

const DictionaryRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 1rem 0 1.25rem 0;
`;

const DictionaryLink = styled(Link)`
    display: inline-block;
    padding: 0.55rem 0.95rem;
    background: var(--color-primary);
    color: #fff;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 6px 18px rgba(40, 53, 151, 0.12);
    transition:
        transform 120ms ease,
        box-shadow 120ms ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(40, 53, 151, 0.14);
    }
`;

const TwoColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 2rem;
    align-items: start;
    margin-top: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

const LeftColumn = styled.div``;

const RightColumn = styled.div`
    min-height: 160px;
`;

const LessonsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.5rem;
`;

const LessonLink = styled(Link)`
    display: block;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    color: var(--color-text);
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.04);
    transition:
        background 120ms ease,
        color 120ms ease,
        transform 120ms ease;

    &:hover {
        background: rgba(40, 53, 151, 0.06);
        color: var(--color-primary);
        transform: translateX(3px);
    }
`;
