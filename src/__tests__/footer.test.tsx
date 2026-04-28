import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { Router, Route } from "@solidjs/router";
import { Footer } from "~/components/footer";

function renderInRouter(ui: () => any) {
    return render(() => <Router root={() => ui()}>{[]}</Router>);
}

describe("Footer", () => {
    it("renders copyright text", () => {
        renderInRouter(() => <Footer />);
        const year = new Date().getFullYear().toString();
        expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
    });

    it("renders privacy link", () => {
        renderInRouter(() => <Footer />);
        expect(screen.getByText("privacy")).toBeInTheDocument();
    });

    it("renders terms link", () => {
        renderInRouter(() => <Footer />);
        expect(screen.getByText("terms")).toBeInTheDocument();
    });

    it("renders jordan rhea link", () => {
        renderInRouter(() => <Footer />);
        const link = screen.getByText("jordan rhea");
        expect(link).toBeInTheDocument();
        expect(link.closest("a")).toHaveAttribute(
            "href",
            "https://jordanrhea.com",
        );
    });
});
