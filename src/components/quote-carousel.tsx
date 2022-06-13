import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Carousel from "react-simply-carousel";

export const QuoteCarousel: React.FC = ({ children }) => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    return (
        <Carousel
            updateOnItemClick
            containerProps={{
                style: {
                    width: "100%",
                    justifyContent: "space-between",
                },
            }}
            activeSlideIndex={activeSlide}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
                children: <FaArrowCircleRight />,
                style: {
                    width: 30,
                    height: 60,
                    alignSelf: "center",
                    backgroundColor: "transparent",
                    border: 0,
                    fontSize: 30,
                },
            }}
            backwardBtnProps={{
                children: <FaArrowCircleLeft />,
                style: {
                    width: 30,
                    height: 60,
                    alignSelf: "center",
                    backgroundColor: "transparent",
                    border: 0,
                    fontSize: 30,
                    transform: `translateX(-.5em)`,
                },
            }}
            itemsToShow={1}
            speed={200}
        >
            {children}
        </Carousel>
    );
};
