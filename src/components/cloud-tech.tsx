import React from "react";
import TextTransition, { presets } from "react-text-transition";
import styled from "styled-components";

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
		<StyledCloudText>
			<TextTransition springConfig={presets.wobbly}>
				<span style={{ color: texts[index % texts.length].color }}>
					{texts[index % texts.length].name}
				</span>
			</TextTransition>
		</StyledCloudText>
	);
};

const StyledCloudText = styled.span`
    display: flex;
    justify-content: center;
    padding: 0.5em 0;
    font-family: var(--fontFamily-sans);
`;
