import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

type LinkButtonProps = {
	pathname?: string;
	href: string;
	label: string;
};
export function LinkButton({
	pathname = "",
	href = "",
	label = "",
}: LinkButtonProps) {
	if (href.startsWith("http")) {
		return (
			<StyledLinkButtons>
				<a
					className={`page-button sans ${pathname.includes(href) && "active"
						}`}
					href={href}
				>
					{label}
				</a>
			</StyledLinkButtons>
		);
	}

	return (
		<StyledLinkButtons>
			<Link
				className={`page-button sans ${pathname.includes(href) && "active"
					}`}
				to={href}
			>
				{label}
			</Link>
		</StyledLinkButtons>
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
            $purple: var(--color-primary);
            background-color: lighten(#283597, 10%);
            // background-color: lightgray;
        }
    }
`;
