import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { GithubSubscribe } from "./github-subscribe";
import { TwitterSubscribe } from "./twitter-subscribe";
import YoutubeSubscribe from "./youtube-subscribe";

export const ContactIcons: React.FC = () => {
    return (
        <>
            <h3>Social Links</h3>
            <div className="contact-icons">
                <a
                    className="icon-container"
                    href="https://youtube.com/jordanrhea"
                >
                    <div className="icon">
                        <FaYoutube />
                    </div>

                    <p>
                        I turned my learning into a channel that some people
                        have found useful. Come and join! <br />
                    </p>
                    <YoutubeSubscribe
                        channelId="UCwqNP1r17-2xJFweoACbW8g"
                        layout="default"
                        count="default"
                    />
                </a>

                <a className="icon-container" href="https://twitter.com/rheajt">
                    <div className="icon">
                        <FaTwitter />
                    </div>

                    <p className="description">
                        Twitter is a place I go sometimes
                    </p>
                    <TwitterSubscribe />
                </a>

                <a className="icon-container" href="">
                    <div className="icon">
                        <FaGithub />
                    </div>

                    <p className="description">
                        Github is where I share the code
                    </p>
                    <GithubSubscribe />
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
        </>
    );
};
