import { describe, expect, it } from "vitest";
import { render } from "@solidjs/testing-library";
import TwitterSubscribe from "~/components/twitter-subscribe";

describe("TwitterSubscribe script ownership", () => {
    it("removes only its own script and injects a fresh script on remount", () => {
        const scriptSrc = "https://platform.twitter.com/widgets.js";
        const existingScript = document.createElement("script");
        existingScript.src = scriptSrc;
        document.head.appendChild(existingScript);
        const scripts = () =>
            Array.from(
                document.head.querySelectorAll<HTMLScriptElement>(
                    `script[src="${scriptSrc}"]`,
                ),
            );
        const first = render(() => <TwitterSubscribe username="first-user" />);
        let second: ReturnType<typeof render> | undefined;

        try {
            expect(scripts()).toHaveLength(2);
            const firstScript = scripts().find(
                script => script !== existingScript,
            )!;
            expect(firstScript.async).toBe(true);

            first.unmount();
            expect(firstScript.isConnected).toBe(false);
            expect(scripts()).toEqual([existingScript]);

            second = render(() => <TwitterSubscribe username="second-user" />);
            expect(scripts()).toHaveLength(2);
            const secondScript = scripts().find(
                script => script !== existingScript,
            )!;
            expect(secondScript).not.toBe(firstScript);
            expect(secondScript.async).toBe(true);
            expect(
                second.getByRole("link", { name: "Follow @second-user" }),
            ).toHaveAttribute("href", "https://twitter.com/second-user");

            second.unmount();
            expect(secondScript.isConnected).toBe(false);
            expect(scripts()).toEqual([existingScript]);
        } finally {
            first.unmount();
            second?.unmount();
            existingScript.remove();
        }
    });
});
