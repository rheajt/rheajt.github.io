import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <div class="container">
        <div>© {new Date().getFullYear()} <a href="https://jordanrhea.com">jordan rhea</a></div>
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
  padding: 3em;
  color: white;

  a, a:hover {
    color: white;
    text-decoration: none;
    margin-right: 1em;
  }

  .container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
  }
`;
