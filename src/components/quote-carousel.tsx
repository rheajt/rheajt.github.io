import React from "react";
import { Splide, SplideSlide as Slide } from "@splidejs/react-splide";
import Blockquote from "./blockquote";
import { Quote } from "../pages";

interface Props {
    quotes: Quote[];
}

export const QuoteCarousel: React.FC<Props> = ({ quotes }) => {
    return (
        <Splide aria-label="Project quotes">
            {quotes.map((quote, idx: number) => (
                <Slide key={quote.author + idx}>
                    <Blockquote quote={quote} />
                </Slide>
            ))}
        </Splide>
    );
};
