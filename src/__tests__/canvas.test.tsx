import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import { Canvas } from "~/components/canvas";

describe("Canvas", () => {
    it("renders canvas element", () => {
        const { container } = render(() => <Canvas width={800} height={300} />);
        const canvas = container.querySelector("canvas");
        expect(canvas).toBeInTheDocument();
    });

    it("has the graph-paper id", () => {
        const { container } = render(() => <Canvas width={800} height={300} />);
        const canvas = container.querySelector("#graph-paper");
        expect(canvas).toBeInTheDocument();
    });
});
