import { FaBrandsGithub, FaBrandsLinkedin, FaBrandsYoutube } from "solid-icons/fa";
import { styled } from "solid-styled-components";
import { GithubSubscribe } from "./github-subscribe";
import YoutubeSubscribe from "./youtube-subscribe";

export const ContactIcons = () => {
  return (
    <StyledContainer>
      <h3>Social Links</h3>
      <div class="contact-icons">
        <a class="icon-container" href="https://youtube.com/jordanrhea" data-label="YouTube">
          <div class="icon"><span class="label"><FaBrandsYoutube /></span></div>
          <p class="description">I turned my learning into a channel that some people have found useful. Come and join!</p>
          <div><YoutubeSubscribe channelId="UCwqNP1r17-2xJFweoACbW8g" /></div>
        </a>
        <a class="icon-container" href="https://github.com/rheajt" data-label="GitHub">
          <div class="icon"><span class="label"><FaBrandsGithub /></span></div>
          <p class="description">Github is where I share the code</p>
          <div><GithubSubscribe /></div>
        </a>
        <a class="icon-container" href="https://linkedin.com/in/rheajt" data-label="LinkedIn">
          <div class="icon"><span class="label"><FaBrandsLinkedin /></span></div>
          <p class="description">More information about what I do is on LinkedIn</p>
        </a>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 0 auto; max-width: 800px; padding: 3em 0.25em;
  a { color: var(--color-text); text-decoration: none; }
  @media (max-width: 768px) { padding: 2em 0.25em; max-width: var(--maxWidth-sm); }
  .contact-icons { margin-top: 1em; margin-bottom: 1em; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); grid-gap: 1em; justify-content: space-between; justify-items: center; }
  .icon-container {
    display: flex; flex-direction: column; text-decoration: none; max-width: 320px; padding: 1em; transition: all 300ms; text-align: center; position: relative;
    &::after { content: attr(data-label); font-weight: 700; visibility: hidden; display: block; height: 0; overflow: hidden; pointer-events: none; }
    .icon { text-align: center; font-size: 3em; }
    .label { font-weight: 400; transition: font-weight 0.05s linear; display: inline-flex; align-items: center; justify-content: center; }
    &:hover .label { font-weight: 700; }
    .description { flex: 1; }
    &:hover { background-color: white; border: 1px solid lightgray; }
  }
`;
