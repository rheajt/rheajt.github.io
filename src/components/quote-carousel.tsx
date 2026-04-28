import { createSignal, onMount, onCleanup, For, createEffect } from "solid-js";
import { styled } from "solid-styled-components";
import Blockquote from "./blockquote";
import { BarCanvas } from "./bar-canvas";

interface Quote {
    author: string;
    position: string;
    excerpt?: string;
}
interface Props {
    quotes: Quote[];
}

export const QuoteCarousel = (props: Props) => {
    let ref: HTMLDivElement | undefined;
    const [dims, setDims] = createSignal({ width: 800, height: 240 });
    const [activeIndex, setActiveIndex] = createSignal(0);

    createEffect(() => {
        const node = ref;
        if (!node) return;
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
            onCleanup(() => {
                ro.disconnect();
                window.removeEventListener("resize", update);
            });
        } else {
            window.addEventListener("resize", update);
            onCleanup(() => window.removeEventListener("resize", update));
        }
    });

    onMount(() => {
        const interval = setInterval(() => {
            setActiveIndex(i => (i + 1) % (props.quotes.length || 1));
        }, 5000);
        onCleanup(() => clearInterval(interval));
    });

    return (
        <StyledCarousel ref={ref}>
            <BarCanvas width={dims().width} height={dims().height} />
            <div class="carousel-inner">
                <For each={props.quotes}>
                    {(quote, idx) => (
                        <div
                            class={
                                activeIndex() === idx()
                                    ? "slide active"
                                    : "slide"
                            }
                        >
                            <Blockquote quote={quote} />
                        </div>
                    )}
                </For>
            </div>
        </StyledCarousel>
    );
};

const StyledCarousel = styled.div`
    position: relative;
    overflow: hidden;
    isolation: isolate;
    min-height: 240px;

    .carousel-inner {
        position: relative;
        z-index: 1;
        display: grid;
        place-items: center;
        padding: 2rem 0;
    }

    .slide {
        grid-area: 1 / 1;
        width: 100%;
        display: flex;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.5s ease;
        background: transparent;
    }

    .slide.active {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    blockquote {
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 1rem;
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
        backdrop-filter: blur(4px);
    }
`;
