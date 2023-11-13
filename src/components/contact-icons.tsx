import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import styled from "styled-components";
import { GithubSubscribe } from "./github-subscribe";
import YoutubeSubscribe from "./youtube-subscribe";

export const ContactIcons: React.FC = () => {
	return (
		<StyledContainer>
			<h3>Social Links</h3>
			<div className="contact-icons">
				<a
					className="icon-container"
					href="https://youtube.com/jordanrhea"
				>
					<div className="icon">
						<FaYoutube />
					</div>

					<p className="description">
						I turned my learning into a channel that some people
						have found useful. Come and join! <br />
					</p>

					<div>
						<YoutubeSubscribe
							channelId="UCwqNP1r17-2xJFweoACbW8g"
							layout="default"
							count="default"
						/>
					</div>
				</a>

				<a className="icon-container" href="">
					<div className="icon">
						<FaGithub />
					</div>

					<p className="description">
						Github is where I share the code
					</p>

					<div>
						<GithubSubscribe />
					</div>
				</a>

				<a className="icon-container" href="">
					<div className="icon">
						<FaLinkedin />
					</div>

					<p className="description">
						More information about what I do is on LinkedIn
					</p>
				</a>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
    margin: 0 auto;
    max-width: 800px;
    padding: 3em 0.25em;

    a {
        color: var(--color-text);
        text-decoration: none;
    }

    @media (max-width: 768px) {
        padding: 2em 0.25em;
        max-width: var(--maxWidth-sm);
    }
    .contact-icons {
        margin-top: 1em;
        margin-bottom: 1em;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        grid-gap: 1em;
        justify-content: space-between;
        justify-items: center;
    }

    .icon-container {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        max-width: 320px;
        padding: 1em;
        transition: all 300ms;
        text-align: center;

        .icon {
            text-align: center;
            font-size: 3em;
        }

        .description {
            flex: 1;
        }

        &:hover {
            background-color: white;
            border: 1px solid lightgray;
        }
    }
`;
