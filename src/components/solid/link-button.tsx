import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { styled } from "solid-styled-components";

type LinkButtonProps = { pathname?: string; href: string; label: string; };

export function LinkButton(props: LinkButtonProps) {
  const pathname = () => props.pathname ?? "";
  const href = () => props.href ?? "";
  const label = () => props.label ?? "";

  return (
    <Show when={!href().startsWith("http")} fallback={
      <StyledLinkButtons>
        <a class={`page-button sans ${pathname().includes(href()) ? "active" : ""}`} href={href()}>{label()}</a>
      </StyledLinkButtons>
    }>
      <StyledLinkButtons>
        <A class={`page-button sans ${pathname().includes(href()) ? "active" : ""}`} href={href()}>{label()}</A>
      </StyledLinkButtons>
    </Show>
  );
}

const StyledLinkButtons = styled.div`
  .page-button {
    background: none;
    border: none;
    padding: 0.5em 1em;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-decoration: none;
    color: white;
    font-size: inherit;
    font-weight: bold;
    font-family: inherit;
    border: 1px solid lightgray;
    border-radius: 3px;
    background-color: var(--color-primary);

    &:hover {
      background-color: #3a4ab0;
    }
  }
`;
