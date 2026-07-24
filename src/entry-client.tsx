/// <reference types="vinxi/types/client" />
import { mount, StartClient } from "@solidjs/start/client";

export const hasStaticNotFoundMarker = () =>
    Boolean(document.querySelector("[data-static-404]"));

export function mountClient() {
    if (hasStaticNotFoundMarker()) {
        document.getElementById("page-loader")?.remove();
        return;
    }

    return mount(() => <StartClient />, document.getElementById("app")!);
}

export default mountClient();
