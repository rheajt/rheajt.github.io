import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import FullWidthComponent from "~/components/chart";

describe("Chart (FullWidthComponent)", () => {
    it("renders a div element", () => {
        const { container } = render(() => <FullWidthComponent />);
        expect(container.querySelector("div")).toBeInTheDocument();
    });
});
