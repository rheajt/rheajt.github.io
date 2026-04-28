import { styled } from "solid-styled-components";

export const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: var(--layout-width);
    padding: var(--spacing-12) var(--spacing-4);

    @media (max-width: 768px) {
        padding: var(--spacing-8) var(--spacing-4);
    }
`;
