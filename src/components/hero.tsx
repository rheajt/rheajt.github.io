import { StaticImage } from "gatsby-plugin-image";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Canvas } from "./canvas";
import { CloudTech } from "./cloud-tech";

const useRefDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const [dimensions, setDimensions] = useState({ width: 800, height: 300 });

    React.useEffect(() => {
        const node = ref.current;
        if (!node) {
            const w =
                typeof window !== "undefined"
                    ? Math.round(window.innerWidth)
                    : 800;
            setDimensions({ width: w, height: 300 });
            return;
        }
        const update = () => {
            const boundingRect = node.getBoundingClientRect();
            const { height } = boundingRect;
            const width =
                typeof window !== "undefined"
                    ? Math.round(window.innerWidth)
                    : Math.round(boundingRect.width);
            setDimensions({
                width,
                height: Math.round(height),
            });
        };

        update();

        if (typeof ResizeObserver !== "undefined") {
            const ro = new ResizeObserver(update);
            ro.observe(node);
            const onResizeWindow = () => update();
            window.addEventListener("resize", onResizeWindow);
            return () => {
                ro.disconnect();
                window.removeEventListener("resize", onResizeWindow);
            };
        } else {
            window.addEventListener("resize", update);
            return () => window.removeEventListener("resize", update);
        }
    }, [ref]);

    return dimensions;
};

export const Hero = () => {
    const refContainer = useRef<HTMLDivElement | null>(null);
    const dimensions = useRefDimensions(refContainer);

    return (
        <StyledHero>
            <Canvas width={dimensions.width} height={dimensions.height} />
            <div className="container" ref={refContainer}>
                <div className="columns">
                    <div className="image">
                        <StaticImage
                            formats={["auto", "webp", "avif"]}
                            src="../../content/img/jordan-rhea-header.png"
                            quality={95}
                            alt="jordan rhea header"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className="caption">
                        <h1>I am Jordan Rhea</h1>
                        <h6>
                            and I build software for <br />
                            <CloudTech />
                        </h6>
                    </div>
                </div>
            </div>
        </StyledHero>
    );
};

const StyledHero = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;

    .container {
        clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
        border-bottom: 1px solid lightgray;
        padding-bottom: 3em;
        padding-top: 3em;

        .image {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .columns {
        margin: 0 auto;
        max-width: 800px;
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        z-index: 1;
    }

    @media (min-width: 768px) {
        .columns {
            grid-template-columns: 1fr 1fr;
        }
    }

    .caption {
        font-family: var(--fontFamily-sans);
        font-weight: var(--fontWeight-extraBold);
        text-align: center;
        padding-top: 50px;

        h1 {
            margin: 15px 0;
            font-weight: 900;
            letter-spacing: 1px;
        }

        h6 {
            font-size: 22px;

            b {
                font-weight: 400;
            }
        }
    }
`;
