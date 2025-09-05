import { StaticImage } from "gatsby-plugin-image";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Canvas } from "./canvas";
import { CloudTech } from "./cloud-tech";

const useRefDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const [dimensions, setDimensions] = useState({ width: 800, height: 300 });

    React.useEffect(() => {
        if (ref.current) {
            const { current } = ref;
            const boundingRect = current.getBoundingClientRect();
            const { width, height } = boundingRect;

            console.log({ width, height });
            setDimensions({
                width: Math.round(width),
                height: Math.round(height),
            });
        }
    }, [ref]);

    return dimensions;
};

export const Hero = () => {
    // const refContainer = useRef<HTMLDivElement>(null);
    // const dimensions = useRefDimensions(refContainer);

    return (
        <StyledHero>
            <div className="container">
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

        .columns {
            margin: 0 auto;
            max-width: 800px;
            display: grid;
            grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
            .columns {
                grid-template-columns: 1fr 1fr;
            }
        }
    }

    .caption {
        font-family: var(--fontFamily-sans);
        text-align: center;
        padding-top: 50px;
        color: white;
        -webkit-text-stroke: 1px black;
        -webkit-text-fill-color: transparent;

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
