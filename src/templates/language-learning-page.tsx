import * as React from "react";
import { graphql } from "gatsby";
import { Section } from "../components/section";
import Layout from "../components/layout";
import Seo from "../components/seo";
import styled from "styled-components";

export const pageQuery = graphql`
    query fileById($id: String!) {
        file(id: { eq: $id }) {
            name
            lesson: childHanziJson {
                notes {
                    line_index
                    chars {
                        hanzi
                        pinyin
                    }
                }
                vocabulary {
                    chinese
                    pinyin
                    english
                    category
                    part_of_speech
                }
            }
        }
    }
`;

type Line = {
    line_index: number;
    line_text: string;
    chars: [
        {
            pinyin: string;
            hanzi: string;
        },
    ];
};
export default function ChineseLessonPage(props: any) {
    const [update, setUpdate] = React.useState<string | undefined>(undefined);
    const { notes, vocabulary } = props.data.file.lesson;

    async function handleClick() {
        // get the selected text
        const q = getSelection()?.toString();
        console.log(q, vocabulary);
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
                        {notes.map((line: Line, index: number) => (
                            <p key={`line-index-${index}`}>
                                {line.chars.map((charObj, charIndex) => (
                                    <React.Fragment
                                        key={`character-index-${charIndex}`}
                                    >
                                        <ruby>
                                            {charObj.hanzi}
                                            {charObj.pinyin && (
                                                <rt>{charObj.pinyin}</rt>
                                            )}
                                        </ruby>
                                    </React.Fragment>
                                ))}
                            </p>
                        ))}
                    </div>
                    <div className="updates">
                        <button onClick={handleClick}>click me</button>
                        <p>{update}</p>

                        {vocabulary.map((word: any, wordIndex: number) => (
                            <div
                                key={`vocab-index-${wordIndex}`}
                                title={word.english}
                            >
                                <ruby>
                                    {word.chinese}
                                    {word.pinyin && <rt>{word.pinyin}</rt>}
                                </ruby>
                            </div>
                        ))}
                    </div>
                </StyledStuff>
            </Section>
        </Layout>
    );
}

const StyledStuff = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    padding: 4rem 0;

    p {
        margin: 0.6em 0;
        font-size: 1.25rem;
    }
    ruby {
        ruby-position: over;
        ruby-align: center;
    }
    rt {
        font-size: 0.7em;
        color: #444;
    }
    .note {
        font-size: 0.95rem;
        color: #666;
        margin-bottom: 1rem;
    }
`;
