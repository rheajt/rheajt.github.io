import { mount, StartClient } from "@solidjs/start/client";

export const hasStaticNotFoundMarker = () =>
    Boolean(document.querySelector("[data-static-404]"));

export function mountClient() {
    if (hasStaticNotFoundMarker()) {
        return;
    }

    return mount(() => <StartClient />, document.getElementById("app")!);
}

export default mountClient();
