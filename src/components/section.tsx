import type { JSX } from "solid-js";

type SectionProps = {
    children: JSX.Element;
    className?: string;
    id?: string;
    style?: JSX.CSSProperties;
};

export const Section = (props: SectionProps) => {
    return (
        <section
            class={["layout-section", props.className]
                .filter(Boolean)
                .join(" ")}
            id={props.id}
            style={props.style}
        >
            {props.children}
        </section>
    );
};
