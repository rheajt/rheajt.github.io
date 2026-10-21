import { createSignal, onCleanup, onMount } from "solid-js";

/** Start static on server and during hydration; subscribe only after mounting. */
export function createReducedMotion() {
    const [reduced, setReduced] = createSignal(true);
    onMount(() => {
        if (!window.matchMedia) {
            setReduced(false);
            return;
        }
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduced(query.matches);
        update();
        query.addEventListener("change", update);
        onCleanup(() => query.removeEventListener("change", update));
    });
    return reduced;
}
