import type { JSX } from "solid-js";
import { styled } from "solid-styled-components";

type SectionProps = {
    children: JSX.Element;
    className?: string;
    id?: string;
    style?: JSX.CSSProperties;
};

export const Section = (props: SectionProps) => {
    return (
        <StyledSection
            class={props.className}
            id={props.id}
            style={props.style}
        >
            {props.children}
        </StyledSection>
    );
};

const StyledSection = styled.section`
    padding: var(--spacing-12) var(--spacing-5);
    margin: 0 auto;
    max-width: var(--layout-width);

    @media (max-width: 768px) {
        padding: var(--spacing-10) var(--spacing-4);
    }
`;
