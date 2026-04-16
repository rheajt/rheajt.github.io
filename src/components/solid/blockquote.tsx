import { styled } from "solid-styled-components";

interface Quote { author: string; position: string; excerpt?: string; }

const Blockquote = (props: { quote: Quote }) => {
  return (
    <StyledBlockquote>
      <p>{props.quote.excerpt}</p>
      <span class="author">
        <b>{props.quote.author}</b> <br />
        {props.quote.position}
      </span>
    </StyledBlockquote>
  );
};

export default Blockquote;

const StyledBlockquote = styled.blockquote`
  padding: 0.5em 10px 3em;
  max-width: 400px;
  margin: 0 auto;

  &:before { color: var(--text-primary); content: open-quote; font-size: 4em; line-height: 0.1em; margin-right: 0.25em; vertical-align: -0.4em; }
  &:after { color: transparent; content: close-quote; font-size: 4em; line-height: 0.1em; margin-right: 0.25em; vertical-align: -0.4em; }
  > p { display: inline; font-style: normal; }
  span.author { display: block; text-align: right; }
  @media (max-width: 368px) { max-width: 300px; }
`;
