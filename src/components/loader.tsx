import { onMount } from "solid-js";

/**
 * Dismisses the server-rendered #page-loader overlay once its root-level
 * hydration component has mounted.
 * The loader markup and styles live in entry-server.tsx so they render instantly
 * in the initial HTML — no FOUC possible.
 */
export const Loader = () => {
    onMount(() => {
        const el = document.getElementById("page-loader");
        if (!el) return;
        // Small delay so the first paint is styled before we fade out
        requestAnimationFrame(() => {
            el.classList.add("ready");
            // Remove from DOM after the fade transition completes
            el.addEventListener("transitionend", () => el.remove(), {
                once: true,
            });
        });
    });

    // Renders nothing — the visible loader is in entry-server.tsx
    return null;
};
