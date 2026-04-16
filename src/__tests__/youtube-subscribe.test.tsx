import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import YoutubeSubscribe from "~/components/youtube-subscribe";

describe("YoutubeSubscribe", () => {
    it("renders youtube subscribe widget", () => {
        const { container } = render(() => (
            <YoutubeSubscribe channelId="UCtest123" />
        ));
        const widget = container.querySelector(".g-ytsubscribe");
        expect(widget).toBeInTheDocument();
        expect(widget?.getAttribute("data-channelid")).toBe("UCtest123");
    });
});
