import React from "react";
import {
	EmailShareButton,
	LinkedinShareButton,
	RedditShareButton,
	TwitterShareButton,
	EmailIcon,
	LinkedinIcon,
	RedditIcon,
	TwitterIcon,
} from "react-share";
import { styled } from "styled-components";

const Share: React.FC<{ url: string }> = ({ url }) => {
	return (
		<StyledShareIcons>
			<li>
				<EmailShareButton url={url}>
					<EmailIcon size={30} />
				</EmailShareButton>
			</li>
			<li>
				<LinkedinShareButton url={url}>
					<LinkedinIcon size={30} />
				</LinkedinShareButton>
			</li>
			<li>
				<TwitterShareButton url={url}>
					<TwitterIcon size={30} />
				</TwitterShareButton>
			</li>
			<li>
				<RedditShareButton url={url}>
					<RedditIcon size={30} />
				</RedditShareButton>
			</li>
		</StyledShareIcons>
	);
};

export default Share;

const StyledShareIcons = styled.ul`
    transform: none;
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: row;

    li {
        padding: 0;
        margin: 0;
    }
`;
