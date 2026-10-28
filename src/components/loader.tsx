import { createSignal, onCleanup, onMount, Show } from "solid-js";
import "./loader.scss";

type LoaderProps = {
    dismissOnMount?: boolean;
    label?: string;
};

export const Loader = (props: LoaderProps = {}) => {
    const [ready, setReady] = createSignal(false);
    const [dismissed, setDismissed] = createSignal(false);

    onMount(() => {
        if (!props.dismissOnMount) return;

        const frame = requestAnimationFrame(() => setReady(true));
        // Fail-safe in case transitionend never fires.
        const fallback = setTimeout(() => setDismissed(true), 700);

        onCleanup(() => {
            cancelAnimationFrame(frame);
            clearTimeout(fallback);
        });
    });

    return (
        <Show when={!dismissed()}>
            <div
                classList={{
                    "page-loader": true,
                    "page-loader--initial": props.dismissOnMount,
                    ready: ready(),
                }}
                role="status"
                aria-live="polite"
                onTransitionEnd={() => {
                    if (props.dismissOnMount) setDismissed(true);
                }}
            >
                <div class="page-loader__spinner" aria-hidden="true" />
                <span class="page-loader__label">
                    {props.label ?? "Loading…"}
                </span>
            </div>
        </Show>
    );
};
