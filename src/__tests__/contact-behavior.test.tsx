import { afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@solidjs/testing-library";
import { ContactForm } from "~/components/contact-form";
import { ContactIcons } from "~/components/contact-icons";

const validData = {
    your_name: "Jordan",
    your_email: "jordan@example.com",
    message: "A useful message about school data. ".repeat(10),
};

afterEach(() => vi.unstubAllGlobals());

describe("contact interactions", () => {
    it("associates visible field labels with their controls", () => {
        render(() => <ContactForm />);
        expect(screen.getByLabelText("Name")).toHaveAttribute(
            "name",
            "your_name",
        );
        expect(screen.getByLabelText("Email")).toHaveAttribute("type", "email");
        expect(screen.getByLabelText(/Send me a message/).tagName).toBe(
            "TEXTAREA",
        );
    });

    it("does not enable sending a whitespace-only message", () => {
        render(() => (
            <ContactForm data={{ ...validData, message: " ".repeat(250) }} />
        ));
        expect(screen.getByRole("button", { name: "Send" })).toBeDisabled();
    });

    it("blocks invalid submissions, prevents duplicate requests and exposes failures", async () => {
        let finish!: (response: Response) => void;
        const fetchMock = vi.fn(
            () =>
                new Promise<Response>(resolve => {
                    finish = resolve;
                }),
        );
        vi.stubGlobal("fetch", fetchMock);
        const { container } = render(() => <ContactForm data={validData} />);
        const form = container.querySelector("form")!;
        const email = screen.getByPlaceholderText("Email");
        fireEvent.input(email, { target: { value: "not-an-email" } });
        fireEvent.submit(form);
        expect(fetchMock).not.toHaveBeenCalled();
        fireEvent.input(email, { target: { value: validData.your_email } });
        fireEvent.submit(form);
        fireEvent.submit(form);
        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(screen.getByRole("button", { name: /Sending/ })).toBeDisabled();
        finish({ ok: false } as Response);
        await waitFor(() =>
            expect(screen.getByRole("alert")).toHaveTextContent(/try again/i),
        );
        expect(screen.getByRole("button", { name: "Send" })).toBeEnabled();
    });

    it("removes subscription scripts when the page unmounts", () => {
        const { unmount } = render(() => <ContactIcons />);
        const scripts = [
            ...document.head.querySelectorAll(
                'script[src="https://buttons.github.io/buttons.js"], script[src="https://apis.google.com/js/platform.js"]',
            ),
        ];
        expect(scripts).toHaveLength(2);
        unmount();
        expect(scripts.every(script => !script.isConnected)).toBe(true);
    });

    it("loads one fresh script per widget across repeated page visits", () => {
        const selector =
            'script[src="https://buttons.github.io/buttons.js"], script[src="https://apis.google.com/js/platform.js"]';
        for (let visit = 0; visit < 3; visit++) {
            const { unmount } = render(() => <ContactIcons />);
            const scripts = [...document.head.querySelectorAll(selector)];
            expect(scripts).toHaveLength(2);
            expect(
                new Set(scripts.map(script => script.getAttribute("src"))).size,
            ).toBe(2);
            unmount();
            expect(document.head.querySelectorAll(selector)).toHaveLength(0);
        }
    });

    it("announces success only when the endpoint accepts the message", async () => {
        vi.stubGlobal(
            "fetch",
            vi.fn().mockResolvedValue({
                ok: true,
                json: async () => ({ status: "done" }),
            }),
        );
        const { container } = render(() => <ContactForm data={validData} />);
        fireEvent.submit(container.querySelector("form")!);
        await waitFor(() =>
            expect(screen.getByRole("status")).toHaveTextContent("Sent!"),
        );
    });

    it("aborts an outstanding submission when leaving the page", () => {
        const fetchMock = vi.fn(() => new Promise<Response>(() => {}));
        vi.stubGlobal("fetch", fetchMock);
        const { container, unmount } = render(() => (
            <ContactForm data={validData} />
        ));
        fireEvent.submit(container.querySelector("form")!);
        const signal = (
            fetchMock.mock.calls[0] as unknown as [string, RequestInit]
        )[1].signal!;
        expect(signal.aborted).toBe(false);
        unmount();
        expect(signal.aborted).toBe(true);
    });
});
