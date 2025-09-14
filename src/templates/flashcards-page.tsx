import * as React from "react";
import { graphql } from "gatsby";
import { Section } from "../components/section";
import { SimpleLayout } from "../components/layout";
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
    part_of_speech?: string;
    english: string;
    category?: string;
};

export default function FlashcardsPage(props: any) {
    const vocabulary = props.data.allGoogleTutoringSheet.nodes;

    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
        <SimpleLayout>
            <Seo title={`Flashcards from ${props.pageContext.id}`} />

            <Section>
                <Container>
                    <CardArea>
                        {vocabulary && vocabulary.length > 0 ? (
                            <Flashcard item={vocabulary[currentIndex]} />
                        ) : (
                            <div>No vocabulary</div>
                        )}
                    </CardArea>

                    <NavRow>
                        <NavButton
                            onClick={() => {
                                if (!vocabulary || vocabulary.length === 0)
                                    return;
                                const newIndex =
                                    (currentIndex - 1 + vocabulary.length) %
                                    vocabulary.length;
                                setCurrentIndex(newIndex);
                            }}
                            aria-label="Previous card"
                        >
                            Prev
                        </NavButton>

                        <Counter>
                            {currentIndex + 1} / {vocabulary?.length || 0}
                        </Counter>

                        <NavButton
                            onClick={() => {
                                if (!vocabulary || vocabulary.length === 0)
                                    return;
                                const newIndex =
                                    (currentIndex + 1) % vocabulary.length;
                                setCurrentIndex(newIndex);
                            }}
                            aria-label="Next card"
                        >
                            Next
                        </NavButton>
                    </NavRow>
                </Container>
            </Section>
        </SimpleLayout>
    );
}

const Flashcard = ({ item }: { item: LessonTopic }) => {
    const [isFlipped, setIsFlipped] = React.useState<boolean>(false);

    const playChinese = (text: string) => {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) {
            console.warn("SpeechSynthesis not supported");
            return;
        }

        if (!text) return;

        try {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text || "");
            utterance.lang = "zh-CN";
            utterance.rate = 0.75;
            window.speechSynthesis.speak(utterance);
        } catch (err) {
            console.warn("TTS error", err);
        }
    };

    return (
        <CardOuter>
            <CardInner
                flipped={isFlipped.toString()}
                onClick={() => setIsFlipped(prev => !prev)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsFlipped(prev => !prev);
                    }
                }}
            >
                <CardFront>
                    <SpeakerButton
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation();
                            e.preventDefault();
                            playChinese(item.chinese);
                        }}
                        aria-label="Play pronunciation"
                        title="Play pronunciation"
                    >
                        🔊
                    </SpeakerButton>

                    <ChineseText>{item.chinese}</ChineseText>
                    <PinyinText>{item.pinyin}</PinyinText>
                </CardFront>

                <CardBack>
                    <EnglishText>{item.english}</EnglishText>
                    {item.part_of_speech && <POS>{item.part_of_speech}</POS>}
                </CardBack>
            </CardInner>
        </CardOuter>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
    gap: 16px;
`;

const NavRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const NavButton = styled.button`
    padding: 6px 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    background: #fff;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const CardArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Counter = styled.div`
    font-size: 0.9rem;
    color: #666;
`;

const CardOuter = styled.div`
    perspective: 1000px;
`;

const CardInner = styled.div<{ flipped: string }>`
    width: 360px;
    height: 500px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform: ${({ flipped }) =>
        flipped === "true" ? "rotateY(180deg)" : "none"};
    cursor: pointer;
`;

const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    border-radius: 8px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    padding: 12px;
`;

const CardFront = styled(CardFace)`
    background: #fff;
`;

const CardBack = styled(CardFace)`
    background: #f7f7f7;
    transform: rotateY(180deg);
`;

const ChineseText = styled.div`
    font-family: Iansui;
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 4rem;
`;

const PinyinText = styled.div`
    margin-top: 1rem;
    font-size: 1rem;
    color: #555;
`;

const EnglishText = styled.div`
    font-size: 1rem;
    color: #222;
`;

const POS = styled.div`
    font-size: 0.8rem;
    color: #666;
    margin-top: 8px;
`;

const SpeakerButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 120ms ease;
    &:hover {
        transform: translateY(-2px);
    }
`;
