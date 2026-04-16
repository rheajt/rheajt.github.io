import { describe, it, expect } from "vitest";
import { render, screen } from "@solidjs/testing-library";
import { ContactForm } from "~/components/contact-form";

describe("ContactForm", () => {
    it("renders name input", () => {
        render(() => <ContactForm />);
        expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    });

    it("renders email input", () => {
        render(() => <ContactForm />);
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    });

    it("renders submit button", () => {
        render(() => <ContactForm />);
        expect(screen.getByText("Send")).toBeInTheDocument();
    });

    it("submit button is initially disabled", () => {
        render(() => <ContactForm />);
        const button = screen.getByText("Send");
        expect(button).toBeDisabled();
    });

    it("renders newsletter checkbox", () => {
        const { container } = render(() => <ContactForm />);
        const checkbox = container.querySelector(
            "#isNewsletter",
        ) as HTMLInputElement;
        expect(checkbox).toBeInTheDocument();
        expect(checkbox.checked).toBe(true);
    });

    it("renders anonymous checkbox", () => {
        const { container } = render(() => <ContactForm />);
        const checkbox = container.querySelector(
            "#isAnonymous",
        ) as HTMLInputElement;
        expect(checkbox).toBeInTheDocument();
        expect(checkbox.checked).toBe(true);
    });

    it("renders message textarea", () => {
        const { container } = render(() => <ContactForm />);
        const textarea = container.querySelector("textarea");
        expect(textarea).toBeInTheDocument();
    });
});
