import { onMount } from "solid-js";

const TwitterSubscribe = (props: { username: string }) => {
  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.head.appendChild(script);
  });
  return <a href={`https://twitter.com/${props.username}`} class="twitter-follow-button" data-show-count="false">Follow @{props.username}</a>;
};

export default TwitterSubscribe;
