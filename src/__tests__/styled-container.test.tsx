import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { StyledContainer } from "~/components/StyledContainer";

describe("StyledContainer", () => {
    it("renders children content", () => {
        render(() => (
            <StyledContainer>
                <p>Container content</p>
            </StyledContainer>
        ));
        expect(screen.getByText("Container content")).toBeInTheDocument();
    });

    it("renders as a div element", () => {
        const { container } = render(() => (
            <StyledContainer>
                <span>Test</span>
            </StyledContainer>
        ));
        expect(container.querySelector("div")).toBeInTheDocument();
    });
});
