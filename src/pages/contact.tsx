import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Layout from "../components/layout";
import Seo from "../components/seo";
import YoutubeSubscribe from "../components/youtube-subscribe";

interface Props {
    location: Location;
}

const ContactPage: React.FC<Props> = ({ location }) => {
    const siteTitle = "jordanrhea.com";

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="Contact" />

            <form className="contact-form">
                <input placeholder="Your name" />
                <input placeholder="Your email" />
                <select>
                    <option>Google</option>
                    <option>Microsoft</option>
                </select>
                <textarea></textarea>
            </form>

            <a className="icon-container" href="https://youtube.com/jordanrhea">
                <div className="icon">
                    <FaYoutube />
                </div>

                <p>
                    I turned my learning into a channel that some people have
                    found useful. Come and join! <br />
                    <YoutubeSubscribe
                        channelId="UCwqNP1r17-2xJFweoACbW8g"
                        layout="default"
                        count="default"
                    />
                </p>
            </a>

            <a className="icon-container" href="https://twitter.com/rheajt">
                <div className="icon">
                    <FaTwitter />
                </div>

                <p className="description">Twitter is a place I go sometimes</p>
            </a>

            <a className="icon-container" href="">
                <div className="icon">
                    <FaGithub />
                </div>

                <p className="description">Github is where I share the code</p>
            </a>

            <a className="icon-container" href="">
                <div className="icon">
                    <FaLinkedin />
                </div>

                <p className="description">
                    More information about what I do is on LinkedIn
                </p>
            </a>
        </Layout>
    );
};

export default ContactPage;
