import { onMount } from "solid-js";

const YoutubeSubscribe = (props: { channelId: string }) => {
  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
    document.head.appendChild(script);
  });
  return <div class="g-ytsubscribe" data-channelid={props.channelId} data-layout="default" data-count="default"></div>;
};

export default YoutubeSubscribe;
