import { createSignal, onMount } from "solid-js";
import { styled } from "solid-styled-components";

export const Loader = () => {
  const [fadeOut, setFadeOut] = createSignal("");
  onMount(() => {
    setTimeout(() => setFadeOut("fade-out"), 700);
  });
  return (
    <StyledLoader class={fadeOut()}>
      <div class="load-circle"></div>
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #111;
  z-index: 9999999999999;

  &.fade-out {
    opacity: 0;
    width: 0;
    height: 0;
    transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;
  }

  .load-circle {
    margin: 50vh auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 10px solid #111;
    border-top: 10px solid var(--color-primary);
    -webkit-animation: rotate 1.2s infinite linear;
    animation: rotate 1.2s infinite linear;
  }

  @-webkit-keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
