import React from "react";
import { styled } from "styled-components";
import { Quote } from "../pages";

const Blockquote: React.FC<{ quote: Quote }> = ({ quote }) => {
	return (
		<StyledBlockquote>
			<p>{quote.excerpt}</p>
			<span className="author">
				<b>{quote.author}</b> <br />
				{quote.position}
			</span>
		</StyledBlockquote>
	);
};

export default Blockquote;

const StyledBlockquote = styled.blockquote`
    padding: 0.5em 10px 3em;
    max-width: 400px;
    margin: 0 auto;

    &:before {
        color: var(--text-primary);
        content: open-quote;
        font-size: 4em;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
    }

    &:after {
        color: transparent;
        content: close-quote;
        font-size: 4em;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
    }

    > p {
        display: inline;
        font-style: normal;
    }

    span.author {
        display: block;
        text-align: right;
    }

    @media (max-width: 368px) {
        max-width: 300px;
    }
`;
