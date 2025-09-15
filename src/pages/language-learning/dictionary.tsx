import * as React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/layout";
import { Section } from "../../components/section";
import Seo from "../../components/seo";

export const pageQuery = graphql`
    query allWordsQuery {
        allGoogleTutoringSheet {
            nodes {
                id
                chinese
                pinyin
                partOfSpeech
                english
                lesson
                category
            }
        }
    }
`;

type Word = {
    id: string;
    chinese: string;
    pinyin?: string;
    partOfSpeech?: string;
    english: string;
    lesson: number;
    category?: string;
};

export default function ChineseLanguageDictionaryPage({ data, location }: any) {
    const [filter, setFilter] = React.useState<string>("");
    return (
        <Layout
            location={location}
            title="Chinese Language Learning Dictionary"
        >
            <Seo title="Chinese Language Learning Dictionary" />
            <Section>
                <SearchRow>
                    <SearchInput
                        type="text"
                        value={filter}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFilter(e.target.value)
                        }
                        placeholder="Filter words..."
                        aria-label="Filter words"
                    />
                </SearchRow>

                <CardsGrid>
                    {(data.allGoogleTutoringSheet.nodes || [])
                        .filter((word: Word) => {
                            if (!filter) return true;
                            const lowerFilter = filter.toLowerCase();
                            return (
                                (word.chinese &&
                                    word.chinese
                                        .toLowerCase()
                                        .includes(lowerFilter)) ||
                                (word.pinyin &&
                                    word.pinyin
                                        .toLowerCase()
                                        .includes(lowerFilter)) ||
                                (word.english &&
                                    word.english
                                        .toLowerCase()
                                        .includes(lowerFilter)) ||
                                (word.partOfSpeech &&
                                    word.partOfSpeech
                                        .toLowerCase()
                                        .includes(lowerFilter)) ||
                                (word.category &&
                                    word.category
                                        .toLowerCase()
                                        .includes(lowerFilter))
                            );
                        })
                        .map((word: Word) => {
                            return <WordCard key={word.id} word={word} />;
                        })}
                </CardsGrid>
            </Section>
        </Layout>
    );
}

function WordCard({ word }: { word: Word }) {
    return (
        <CardLink to={`/language-learning/lesson${word.lesson}`}>
            <CardTop>
                <Chinese>{word.chinese}</Chinese>
                {word.pinyin && <Pinyin>{word.pinyin}</Pinyin>}
            </CardTop>

            <English>{word.english}</English>

            <Meta>
                <LessonBadge>Lesson {word.lesson}</LessonBadge>
                {word.partOfSpeech && <Category>{word.partOfSpeech}</Category>}
            </Meta>
        </CardLink>
    );
}

const CardLink = styled(Link)`
    display: block;
    padding: 12px 16px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.03);
    margin: 0.5rem 0;
    text-decoration: none;
    color: inherit;
    transition:
        transform 140ms ease,
        box-shadow 140ms ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
    }
`;

const CardTop = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
`;

const Chinese = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
`;

const Pinyin = styled.div`
    font-size: 0.95rem;
    color: #555;
`;

const English = styled.div`
    margin-top: 0.5rem;
    color: #333;
`;

const Meta = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;

const LessonBadge = styled.span`
    background: var(--color-accent);
    color: var(--color-text);
    padding: 0.2rem 0.5rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
`;

const Category = styled.span`
    font-size: 0.8rem;
    color: #666;
`;

const SearchRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const SearchInput = styled.input`
    width: 100%;
    max-width: 560px;
    padding: 0.6rem 0.9rem;
    border-radius: 8px;
    border: 1px solid lightgray;
    font-size: 1rem;
    transition:
        box-shadow 120ms ease,
        border-color 120ms ease;
    &:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 6px 18px rgba(40, 53, 151, 0.06);
    }
`;

const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 0.75rem;
`;
