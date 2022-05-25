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

const Share: React.FC<{ url: string }> = ({ url }) => {
    return (
        <ul className="share-icons">
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
        </ul>
    );
};

export default Share;
