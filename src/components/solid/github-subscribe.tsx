import { onMount } from "solid-js";

export const GithubSubscribe = () => {
  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  });
  return <a class="github-button" href="https://github.com/rheajt" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Follow @rheajt on GitHub">Follow @rheajt</a>;
};
