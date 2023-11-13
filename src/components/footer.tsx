import { Link } from "gatsby";
import React from "react";
import { styled } from "styled-components";
export const Footer = () => {
	return (
		<StyledFooter>
			<div className="container">
				<div>
					© {new Date().getFullYear()}{" "}
					<a href="https://jordanrhea.com">jordan rhea</a>
				</div>

				{/*isBrowser && (
                    <PopupWidget
                        url="https://calendly.com/jordan-rhea/30min"
                        rootElement={document.getElementById("___gatsby")!}
                        text="Let's talk solutions!"
                        textColor="#ffffff"
                        color="#283597"
                    />
                )*/}

				<div className="legals">
					<Link to="/privacy">privacy</Link>
					<Link to="/terms">terms</Link>
				</div>
			</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
    background-color: var(--color-primary);
    padding: 3em;
    color: white;

    a,
    a:hover {
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
