import * as React from "react";
import { graphql } from "gatsby";
import { Section } from "../components/section";
import Layout, { SimpleLayout } from "../components/layout";
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

export default function FlashcardsPage(props: any) {
    const { vocabulary } = props.data.file.lesson;

    async function handleClick() {
        // get the selected text
        const q = getSelection()?.toString();
        console.log(q, vocabulary);
    }
    return (
        <SimpleLayout>
            <Seo title={`Flashcards from ${props.pageContext.id}`} />
            <Section></Section>
        </SimpleLayout>
    );
}
