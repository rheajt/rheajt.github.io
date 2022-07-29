import React from "react";
import TextTransition, { presets } from "react-text-transition";

const texts = [
    { name: "Microsoft Office 365", color: "#01A6F0" },
    { name: "Google Workspaces", color: "#EA4335" },
];

export const CloudTech: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex(index => index + 1),
            6000 // every 6 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <span className="cloud-text">
            <TextTransition springConfig={presets.wobbly}>
                <span style={{ color: texts[index % texts.length].color }}>
                    {texts[index % texts.length].name}
                </span>
            </TextTransition>
        </span>
    );
};
