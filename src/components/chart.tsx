import { styled } from "solid-styled-components";

const StyledFullWidthComponent = styled.div`
    width: 100%;
    background-image:
        linear-gradient(lightgray 1px, transparent 1px),
        linear-gradient(90deg, lightgray 1px, transparent 1px);
    background-size: 20px 20px;
`;

const FullWidthComponent = () => {
    return <StyledFullWidthComponent />;
};

export default FullWidthComponent;
