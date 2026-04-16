import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Loader } from "~/components/loader";

describe("Loader", () => {
    it("renders the loader element", () => {
        const { container } = render(() => <Loader />);
        expect(container.querySelector(".load-circle")).toBeInTheDocument();
    });
});
