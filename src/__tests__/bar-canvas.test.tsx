import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import { BarCanvas } from "~/components/bar-canvas";

describe("BarCanvas", () => {
    it("renders canvas element", () => {
        const { container } = render(() => (
            <BarCanvas width={400} height={200} />
        ));
        const canvas = container.querySelector("canvas");
        expect(canvas).toBeInTheDocument();
    });

    it("renders with custom id", () => {
        const { container } = render(() => (
            <BarCanvas width={400} height={200} id="my-bar-canvas" />
        ));
        const canvas = container.querySelector("#my-bar-canvas");
        expect(canvas).toBeInTheDocument();
    });

    it("uses default id when not specified", () => {
        const { container } = render(() => (
            <BarCanvas width={400} height={200} />
        ));
        const canvas = container.querySelector("#bar-canvas");
        expect(canvas).toBeInTheDocument();
    });
});
