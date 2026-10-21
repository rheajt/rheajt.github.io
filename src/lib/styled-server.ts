import { Dynamic, useAssets } from "solid-js/web";
import { extractCss } from "solid-styled-components";
import { getRequestStyleSheet, type RequestStyleSheet } from "./styled";

// Goober supports request targets at runtime, but its declarations omit them.
const extractTargetCss = extractCss as (sheet: RequestStyleSheet) => string;

export function registerStyledAssets() {
    const sheet = getRequestStyleSheet();
    if (sheet.assetsRegistered) return;
    sheet.assetsRegistered = true;
    useAssets(() =>
        Dynamic({
            component: "style",
            id: "_goober",
            // Goober reuses the browser style element's first text node.
            innerHTML: extractTargetCss(sheet) || " ",
        }),
    );
}
