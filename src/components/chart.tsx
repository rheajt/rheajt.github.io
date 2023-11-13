import React from "react";
import { styled } from "styled-components";

const StyledFullWidthComponent = styled.div`
    width: 100%;
    background-image: linear-gradient(lightgray 1px, transparent 1px),
        linear-gradient(90deg, lightgray 1px, transparent 1px);
    background-size: 20px 20px;
`;
const FullWidthComponent = () => {
	return (
		<StyledFullWidthComponent>
			{/* Your content goes here */}
		</StyledFullWidthComponent>
	);
};
export default FullWidthComponent;
