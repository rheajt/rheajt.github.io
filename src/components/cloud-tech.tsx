import { createSignal, createEffect, onCleanup } from "solid-js";
import { createReducedMotion } from "~/utils/reduced-motion";
import { styled } from "~/lib/styled";

const texts = [
    { name: "Microsoft Office 365", color: "#01A6F0" },
    { name: "Google Workspaces", color: "#EA4335" },
];

export const CloudTech = () => {
    const [index, setIndex] = createSignal(0);
    const [visible, setVisible] = createSignal(true);
    const reducedMotion = createReducedMotion();

    createEffect(() => {
        setVisible(true);
        if (reducedMotion()) return;
        let timeout: ReturnType<typeof setTimeout> | undefined;
        const intervalId = setInterval(() => {
            setVisible(false);
            timeout = setTimeout(() => {
                setIndex(i => i + 1);
                setVisible(true);
            }, 300);
        }, 6000);
        onCleanup(() => {
            clearInterval(intervalId);
            clearTimeout(timeout);
        });
    });

    const current = () => texts[index() % texts.length];

    return (
        <StyledCloudText>
            <span
                class={visible() ? "text-visible" : "text-hidden"}
                style={{ color: current().color }}
            >
                {current().name}
            </span>
        </StyledCloudText>
    );
};

const StyledCloudText = styled.span`
    display: flex;
    justify-content: center;
    padding: 0.5em 0;
    font-family: "Space Grotesk", var(--fontFamily-sans);
    font-weight: 600;
    font-size: var(--fontSize-3);

    span {
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
    }
    .text-visible {
        opacity: 1;
        transform: translateY(0);
    }
    .text-hidden {
        opacity: 0;
        transform: translateY(-10px);
    }
    @media (prefers-reduced-motion: reduce) {
        span {
            transition: none;
        }
    }
`;
