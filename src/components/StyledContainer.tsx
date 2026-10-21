import { styled } from "~/lib/styled";
import { layoutShell } from "./layout-shell";

export const StyledContainer = styled.div`
    ${layoutShell}
    padding-block: var(--spacing-12);

    @media (max-width: 768px) {
        padding-block: var(--spacing-8);
    }
`;
