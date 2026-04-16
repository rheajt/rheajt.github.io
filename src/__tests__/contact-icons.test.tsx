import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { ContactIcons } from "~/components/contact-icons";

describe("ContactIcons", () => {
    it("renders social links heading", () => {
        render(() => <ContactIcons />);
        expect(screen.getByText("Social Links")).toBeInTheDocument();
    });

    it("renders YouTube link", () => {
        const { container } = render(() => <ContactIcons />);
        const ytLink = container.querySelector(
            'a[href="https://youtube.com/jordanrhea"]',
        );
        expect(ytLink).toBeInTheDocument();
    });

    it("renders GitHub link", () => {
        const { container } = render(() => <ContactIcons />);
        const ghLink = container.querySelector(
            'a[href="https://github.com/rheajt"]',
        );
        expect(ghLink).toBeInTheDocument();
    });

    it("renders LinkedIn link", () => {
        const { container } = render(() => <ContactIcons />);
        const liLink = container.querySelector(
            'a[href="https://linkedin.com/in/rheajt"]',
        );
        expect(liLink).toBeInTheDocument();
    });

    it("renders descriptions for each platform", () => {
        render(() => <ContactIcons />);
        expect(
            screen.getByText(/I turned my learning into a channel/),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Github is where I share the code/),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/More information about what I do/),
        ).toBeInTheDocument();
    });
});
