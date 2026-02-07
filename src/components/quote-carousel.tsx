import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide as Slide } from "@splidejs/react-splide";
import Blockquote from "./blockquote";
import BarCanvas from "./bar-canvas";
import { Quote } from "../pages";

interface Props {
    quotes: Quote[];
}

export const QuoteCarousel: React.FC<Props> = ({ quotes }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [dims, setDims] = useState({ width: 800, height: 240 });

    useEffect(() => {
        const node = ref.current;
        if (!node) {
            // setDims({
            //     width:
            //         typeof window !== "undefined"
            //             ? Math.round(window.innerWidth)
            //             : 800,
            //     height: 240,
            // });
            return;
        }

        const update = () => {
            const rect = node.getBoundingClientRect();
            setDims({
                width:
                    typeof window !== "undefined"
                        ? Math.round(window.innerWidth) - 15
                        : Math.round(rect.width) - 15,
                height: Math.round(rect.height),
            });
        };

        update();

        if (typeof ResizeObserver !== "undefined") {
            const ro = new ResizeObserver(update);
            ro.observe(node);
            window.addEventListener("resize", update);
            return () => {
                ro.disconnect();
                window.removeEventListener("resize", update);
            };
        } else {
            window.addEventListener("resize", update);
            return () => window.removeEventListener("resize", update);
        }
    }, [ref]);

    return (
        <div ref={ref} style={{ position: "relative" }}>
            <BarCanvas width={dims.width} height={dims.height} />
            <Splide
                aria-label="Project quotes"
                style={{
                    boxSizing: "border-box",
                    padding: "2rem 0",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {quotes.map((quote, idx: number) => (
                    <Slide key={quote.author + idx}>
                        <Blockquote quote={quote} />
                    </Slide>
                ))}
            </Splide>
        </div>
    );
};
