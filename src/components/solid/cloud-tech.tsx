import { createSignal, onMount, onCleanup } from "solid-js";
import { styled } from "solid-styled-components";

const texts = [
  { name: "Microsoft Office 365", color: "#01A6F0" },
  { name: "Google Workspaces", color: "#EA4335" },
];

export const CloudTech = () => {
  const [index, setIndex] = createSignal(0);
  const [visible, setVisible] = createSignal(true);

  onMount(() => {
    const intervalId = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(i => i + 1);
        setVisible(true);
      }, 300);
    }, 6000);
    onCleanup(() => clearInterval(intervalId));
  });

  const current = () => texts[index() % texts.length];

  return (
    <StyledCloudText>
      <span class={visible() ? "text-visible" : "text-hidden"} style={{ color: current().color }}>
        {current().name}
      </span>
    </StyledCloudText>
  );
};

const StyledCloudText = styled.span`
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
  font-family: var(--fontFamily-sans);

  span {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .text-visible { opacity: 1; transform: translateY(0); }
  .text-hidden { opacity: 0; transform: translateY(-10px); }
`;
