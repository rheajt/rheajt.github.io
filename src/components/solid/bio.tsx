import { Show } from "solid-js";
import { styled } from "solid-styled-components";
import { FaBrandsGithub, FaBrandsLinkedin, FaBrandsTwitter, FaBrandsYoutube } from "solid-icons/fa";
import { siteMetadata } from "../../site-config";

const Bio = () => {
  const author = siteMetadata.author;
  const social = siteMetadata.social;

  return (
    <StyledBio>
      <img class="bio-avatar" src="/content/img/avatar-image.png" width={50} height={50} alt="jordan rhea wearing a hoodie" style={{ "border-radius": "100%" }} />
      <Show when={author?.name}>
        <div>
          Written by <strong>{author.name}</strong> {author?.summary || null}{" "}
          <div class="social-links">
            <a href={`https://twitter.com/${social.twitter}`} data-label="Twitter"><span class="label"><FaBrandsTwitter /></span></a>
            <a href={`https://linkedin.com/in/${social.linkedin}`} data-label="LinkedIn"><span class="label"><FaBrandsLinkedin /></span></a>
            <a href={`https://youtube.com/${social.youtube}`} data-label="YouTube"><span class="label"><FaBrandsYoutube /></span></a>
            <a href={`https://github.com/${social.github}`} data-label="GitHub"><span class="label"><FaBrandsGithub /></span></a>
          </div>
        </div>
      </Show>
    </StyledBio>
  );
};

export default Bio;

const StyledBio = styled.div`
  display: flex;
  margin-top: var(--spacing-16);
  margin-bottom: var(--spacing-16);
  a {
    color: var(--color-text);
    text-decoration: none;
    display: inline-block;
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
    .label { font-weight: 400; transition: font-weight 0.05s linear; display: inline-flex; align-items: center; justify-content: center; }
    &:hover .label { font-weight: 700; }
  }
  p { margin-bottom: var(--spacing-0); }
  .bio-avatar { margin-right: var(--spacing-4); margin-bottom: var(--spacing-0); min-width: 50px; border-radius: 100%; }
`;
