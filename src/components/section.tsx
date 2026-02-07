import React from "react";
import { styled } from "styled-components";

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
};

export const Section = (props: SectionProps) => {
    return (
        <StyledSection
            className={props.className}
            id={props.id}
            style={props.style}
        >
            {props.children}
        </StyledSection>
    );
};

const StyledSection = styled.section`
    padding: 3em 0;
    margin: 0 auto;
    max-width: 800px;
    // min-height: 87vh;

    @media (max-width: 768px) {
        padding: 5em 0.5em;
        max-width: var(--maxWidth-sm);
    }
`;
