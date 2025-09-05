import styled from "styled-components";

export const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding: 6em 0.25em;

    @media (max-width: 768px) {
        padding: 2em 0.25em;
        max-width: var(--maxWidth-sm);
    }
`;
