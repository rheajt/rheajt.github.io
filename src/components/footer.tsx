import { A } from "@solidjs/router";
import { styled } from "~/lib/styled";
import { layoutShell } from "./layout-shell";

export const Footer = () => {
    return (
        <StyledFooter>
            <div class="container">
                <div>
                    © {new Date().getFullYear()}{" "}
                    <a href="https://jordanrhea.com">jordan rhea</a>
                </div>
                <div class="legals">
                    <A href="/privacy">privacy</A>
                    <A href="/terms">terms</A>
                </div>
            </div>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: var(--color-primary);
    padding: var(--spacing-10) 0;
    color: white;

    a,
    a:hover {
        color: white;
        text-decoration: none;
        margin-right: 1em;
    }

    .container {
        ${layoutShell}
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: var(--spacing-3);
    }
`;
