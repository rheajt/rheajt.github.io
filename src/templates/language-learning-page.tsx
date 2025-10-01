import * as React from "react";
import { graphql, Link } from "gatsby";
import { Section } from "../components/section";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

export const pageQuery = graphql`
    query lesson($lesson: Int!) {
        allGoogleTutoringSheet(filter: { lesson: { eq: $lesson } }) {
            nodes {
                chinese
                pinyin
                partOfSpeech
                english
                category
            }
        }
    }
`;

type LessonTopic = {
    chinese: string;
    pinyin?: string;
    partOfSpeech?: string;
    english: string;
    category?: string;
};
export default function ChineseLessonPage(props: any) {
    const [update, setUpdate] = React.useState<string | undefined>(undefined);
    const notes = props.data.allGoogleTutoringSheet.nodes;

    async function handleClick() {
        // get the selected text
        const q = getSelection()?.toString();
        setUpdate(q);
    }

    return (
        <Layout location={props.location} title="About">
            <Seo
                title={`Language Learning Notes from ${props.pageContext.id}`}
            />
            <Section>
                <StyledStuff>
                    <div className="notes">
                        {notes.map((line: LessonTopic, index: number) => (
                            <p key={`line-index-${index}`}>
                                <ruby>
                                    {line.chinese}
                                    {line.pinyin && <rt>{line.pinyin}</rt>}
                                </ruby>
                            </p>
                        ))}

                        <Link
                            className="flashcard-button"
                            to={`${props.location.pathname}flashcards`}
                            onClick={handleClick}
                        >
                            Flashcards
                        </Link>
                    </div>
                </StyledStuff>
            </Section>
        </Layout>
    );
}

const StyledStuff = styled.div`
    display: grid;
    padding: 4rem 0;

    p {
        margin: 0.6em 0;
        font-size: 1.25rem;
    }
    ruby {
        font-family: Iansui;
        ruby-position: over;
        ruby-align: center;
    }
    rt {
        font-size: 0.7em;
        color: #444;
    }

    .updates {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        align-items: flex-start;
    }

    .flashcard-button {
        display: inline-block;
        padding: 0.5rem 0.9rem;
        background: var(--color-primary);
        color: #fff;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        box-shadow: 0 6px 18px rgba(40, 53, 151, 0.12);
        transition:
            transform 120ms ease,
            box-shadow 120ms ease;
    }
    .flashcard-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(40, 53, 151, 0.16);
    }
    .flashcard-button:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(40, 53, 151, 0.08);
    }

    .note {
        font-size: 0.95rem;
        color: #666;
        margin-bottom: 1rem;
    }
`;
