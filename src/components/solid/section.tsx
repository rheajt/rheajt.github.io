import type { JSX } from "solid-js";
import { styled } from "solid-styled-components";

type SectionProps = { children: JSX.Element; className?: string; id?: string; style?: JSX.CSSProperties; };

export const Section = (props: SectionProps) => {
  return (
    <StyledSection class={props.className} id={props.id} style={props.style}>
      {props.children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding: 3em 0;
  margin: 0 auto;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 5em 0.5em;
    max-width: var(--maxWidth-sm);
  }
`;
