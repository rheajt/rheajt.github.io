import React from "react";
import TextTransition, { presets } from "react-text-transition";

const texts = ["Microsoft Office 365", "Google Workspaces"];

export const CloudTech: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex(index => index + 1),
            6000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <span className="cloud-text">
            <TextTransition
                text={texts[index % texts.length]}
                springConfig={presets.wobbly}
            />
        </span>
    );
};
