import {
    FaBrandsGithub,
    FaBrandsLinkedin,
    FaBrandsYoutube,
} from "solid-icons/fa";
import { styled } from "~/lib/styled";
import { GithubSubscribe } from "./github-subscribe";
import YoutubeSubscribe from "./youtube-subscribe";

export const ContactIcons = () => {
    return (
        <StyledContainer>
            <h3>Social Links</h3>
            <div class="contact-icons">
                <div class="icon-container" data-label="YouTube">
                    <a
                        class="profile-link"
                        href="https://youtube.com/jordanrhea"
                        aria-label="Jordan Rhea on YouTube"
                    >
                        <div class="icon">
                            <span class="label">
                                <FaBrandsYoutube />
                            </span>
                        </div>
                        <p class="description">
                            I turned my learning into a channel that some people
                            have found useful. Come and join!
                        </p>
                    </a>
                    <div>
                        <YoutubeSubscribe channelId="UCwqNP1r17-2xJFweoACbW8g" />
                    </div>
                </div>
                <div class="icon-container" data-label="GitHub">
                    <a
                        class="profile-link"
                        href="https://github.com/rheajt"
                        aria-label="Jordan Rhea on GitHub"
                    >
                        <div class="icon">
                            <span class="label">
                                <FaBrandsGithub />
                            </span>
                        </div>
                        <p class="description">
                            Github is where I share the code
                        </p>
                    </a>
                    <div>
                        <GithubSubscribe />
                    </div>
                </div>
                <a
                    class="icon-container"
                    href="https://linkedin.com/in/rheajt"
                    data-label="LinkedIn"
                >
                    <div class="icon">
                        <span class="label">
                            <FaBrandsLinkedin />
                        </span>
                    </div>
                    <p class="description">
                        More information about what I do is on LinkedIn
                    </p>
                </a>
            </div>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    margin: 0 auto;
    padding-block: 3em;
    a {
        color: var(--color-text);
        text-decoration: none;
    }
    @media (max-width: 768px) {
        padding-block: 2em;
    }
    .contact-icons {
        margin-top: 1em;
        margin-bottom: 1em;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
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
        position: relative;
        &::after {
            content: attr(data-label);
            font-weight: 700;
            visibility: hidden;
            display: block;
            height: 0;
            overflow: hidden;
            pointer-events: none;
        }
        .icon {
            text-align: center;
            font-size: 3em;
        }
        .label {
            font-weight: 400;
            transition: font-weight 0.05s linear;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        &:hover .label {
            font-weight: 700;
        }
        .description {
            flex: 1;
        }
        &:hover {
            background-color: white;
            border: 1px solid lightgray;
        }
    }
    .profile-link {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`;
