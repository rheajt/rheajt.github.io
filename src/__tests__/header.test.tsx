import { describe, it, expect } from "vitest";
import {
    fireEvent,
    render,
    screen,
    waitFor,
    within,
} from "@solidjs/testing-library";
import {
    createMemoryHistory,
    MemoryRouter,
    useLocation,
} from "@solidjs/router";
import { createSignal, type JSX } from "solid-js";
import { Header, BasicHeader } from "~/components/header";
import { getResumeLinks } from "~/utils/yaml";

const standalonePages = [
    { name: "Home", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "About", href: "/about" },
    { name: "Language Learning", href: "/language-learning" },
    { name: "Vexillology", href: "/vexillology" },
];

function renderInRouter(ui: () => JSX.Element, url = "/") {
    const history = createMemoryHistory();
    history.set({ value: url, replace: true });
    const result = render(() => (
        <MemoryRouter history={history} root={() => ui()}>
            {[]}
        </MemoryRouter>
    ));
    return { ...result, history };
}

function getDisclosure() {
    const trigger = screen.getByRole("button", { name: "Pages", exact: true });
    const id = trigger.getAttribute("aria-controls");
    expect(id).toBeTruthy();
    const panel = document.getElementById(id!);
    expect(panel).toBeInTheDocument();
    return { trigger, panel: panel! };
}

describe("Header", () => {
    it("renders the production brand and both work destinations without a variant", () => {
        renderInRouter(() => <Header pathname="/" />);
        const brand = screen.getByRole("link", { name: "Jordan Rhea — Home" });
        expect(brand).toHaveAttribute("href", "/");
        expect(brand.querySelector("img")).toHaveAttribute(
            "src",
            "/content/img/jr-icon.png",
        );
        const work = within(screen.getByRole("navigation", { name: "Work" }));
        expect(
            work.getByRole("link", { name: "School Data Solutions" }),
        ).toHaveAttribute("href", "/school-data-solutions");
        expect(work.getByRole("link", { name: "Projects" })).toHaveAttribute(
            "href",
            "/projects",
        );
        expect(work.getAllByRole("link")).toHaveLength(2);
        expect(
            screen.getByRole("button", { name: "Pages", exact: true }),
        ).toHaveAttribute("aria-expanded", "false");
    });

    it("keeps every standalone destination mounted but hidden while Pages is closed", () => {
        renderInRouter(() => <Header pathname="/" />);
        const { panel } = getDisclosure();
        expect(panel).not.toBeVisible();
        for (const page of standalonePages) {
            const link = panel.querySelector(`a[href="${page.href}"]`);
            expect(link).toBeInTheDocument();
            expect(link).toHaveTextContent(page.name);
            expect(
                screen.queryByRole("link", { name: page.name, exact: true }),
            ).not.toBeInTheDocument();
        }
    });

    it("toggles the same mounted Pages panel and exposes all standalone links", () => {
        renderInRouter(() => <Header pathname="/" />);
        const { trigger, panel } = getDisclosure();
        fireEvent.click(trigger);
        expect(trigger).toHaveAttribute("aria-expanded", "true");
        expect(panel).toBeVisible();
        for (const page of standalonePages) {
            expect(
                within(panel).getByRole("link", {
                    name: page.name,
                    exact: true,
                }),
            ).toHaveAttribute("href", page.href);
        }
        fireEvent.click(trigger);
        expect(trigger).toHaveAttribute("aria-expanded", "false");
        expect(panel).not.toBeVisible();
        expect(document.getElementById(panel.id)).toBe(panel);
    });

    it("provides five accessible SVG social links in both connection areas without changing resume links", () => {
        const resumeLinks = getResumeLinks().map(link => ({ ...link }));
        expect(resumeLinks).toHaveLength(4);
        expect(resumeLinks.map(link => link.label)).toEqual([
            "LinkedIn",
            "GitHub",
            "YouTube",
            "Strava",
        ]);
        renderInRouter(() => <Header pathname="/" />);
        const { trigger, panel } = getDisclosure();
        const banner = screen.getByRole("banner");
        const header = within(banner);
        const connections = [
            ...resumeLinks.map(link => ({ name: link.label, href: link.url })),
            { name: "Letterboxd", href: "https://boxd.it/bz8UB" },
        ];
        fireEvent.click(trigger);
        expect(panel).toBeVisible();
        expect(banner.querySelectorAll('a[href^="https://"]')).toHaveLength(10);
        expect(panel.querySelectorAll('a[href^="https://"]')).toHaveLength(5);
        for (const connection of connections) {
            const panelLink = within(panel).getByRole("link", {
                name: connection.name,
                exact: true,
                hidden: true,
            });
            const wideLinks = header
                .getAllByRole("link", {
                    name: connection.name,
                    exact: true,
                    hidden: true,
                })
                .filter(link => !panel.contains(link));
            expect(wideLinks).toHaveLength(1);
            for (const link of [panelLink, wideLinks[0]]) {
                expect(link.tagName).toBe("A");
                expect(link).toHaveAccessibleName(connection.name);
                expect(link).toHaveAttribute("aria-label", connection.name);
                expect(link).toHaveAttribute("title", connection.name);
                expect(link).toHaveAttribute("href", connection.href);
                expect(link).toHaveAttribute("target", "_blank");
                expect(link.getAttribute("rel")?.split(/\s+/)).toContain(
                    "noreferrer",
                );
                const svg = link.querySelector("svg");
                expect(svg).toBeInTheDocument();
                expect(svg).toHaveAttribute("aria-hidden", "true");
                expect(svg).toHaveAttribute("focusable", "false");
                // SVG metadata is not visible brand text; no text or arrow outside the icon.
                const content = link.cloneNode(true) as HTMLElement;
                content.querySelectorAll("svg").forEach(icon => icon.remove());
                expect(content.textContent?.trim()).toBe("");
            }
        }
        expect(getResumeLinks()).toEqual(resumeLinks);
    });

    it("keeps Contact as a separate text-only internal link in both connection areas", () => {
        renderInRouter(() => <Header pathname="/" />);
        const { trigger, panel } = getDisclosure();
        fireEvent.click(trigger);
        const contacts = within(screen.getByRole("banner")).getAllByRole(
            "link",
            { name: "Contact", exact: true, hidden: true },
        );
        expect(contacts).toHaveLength(2);
        expect(contacts.filter(link => panel.contains(link))).toHaveLength(1);
        expect(contacts.filter(link => !panel.contains(link))).toHaveLength(1);
        for (const contact of contacts) {
            expect(contact.tagName).toBe("A");
            expect(contact).toHaveAttribute("href", "/contact");
            expect(contact).not.toHaveAttribute("target");
            expect(contact).toHaveTextContent(/^Contact$/);
            expect(contact.querySelector("svg")).not.toBeInTheDocument();
        }
    });

    it("closes Pages on Escape and restores focus to its trigger", () => {
        renderInRouter(() => <Header pathname="/" />);
        const { trigger, panel } = getDisclosure();
        fireEvent.click(trigger);
        within(panel)
            .getByRole("link", { name: "Resume", exact: true })
            .focus();
        fireEvent.keyDown(document.activeElement!, { key: "Escape" });
        expect(trigger).toHaveAttribute("aria-expanded", "false");
        expect(panel).not.toBeVisible();
        expect(trigger).toHaveFocus();
    });

    it("ignores inside pointer presses and closes Pages on an outside pointerdown", () => {
        renderInRouter(() => <Header pathname="/" />);
        const { trigger, panel } = getDisclosure();
        fireEvent.click(trigger);
        fireEvent.pointerDown(
            within(panel).getByRole("link", { name: "Resume", exact: true }),
        );
        expect(trigger).toHaveAttribute("aria-expanded", "true");
        fireEvent.pointerDown(document.body);
        expect(trigger).toHaveAttribute("aria-expanded", "false");
        expect(panel).not.toBeVisible();
    });

    it("closes Pages when a destination is selected and navigates without a variant", async () => {
        const { history } = renderInRouter(() => <Header pathname="/" />);
        const { trigger, panel } = getDisclosure();
        fireEvent.click(trigger);
        fireEvent.click(
            within(panel).getByRole("link", { name: "About", exact: true }),
        );
        await waitFor(() => expect(history.get()).toBe("/about"));
        expect(trigger).toHaveAttribute("aria-expanded", "false");
        expect(panel).not.toBeVisible();
    });

    it("closes Pages when navigation happens outside the disclosure", async () => {
        const { history } = renderInRouter(() => {
            const location = useLocation();
            return <Header pathname={location.pathname} />;
        });
        const { trigger, panel } = getDisclosure();
        fireEvent.click(trigger);
        history.set({ value: "/resume" });
        await waitFor(() =>
            expect(trigger).toHaveAttribute("aria-expanded", "false"),
        );
        expect(panel).not.toBeVisible();
    });

    it("updates aria-current from the reactive pathname prop for work and standalone pages", () => {
        const [pathname, setPathname] = createSignal("/school-data-solutions");
        renderInRouter(() => <Header pathname={pathname()} />);
        const school = screen.getByRole("link", {
            name: "School Data Solutions",
        });
        const projects = screen.getByRole("link", {
            name: "Projects",
            exact: true,
        });
        expect(school).toHaveAttribute("aria-current", "page");
        expect(projects).not.toHaveAttribute("aria-current", "page");
        setPathname("/projects");
        expect(school).not.toHaveAttribute("aria-current", "page");
        expect(projects).toHaveAttribute("aria-current", "page");

        const { trigger, panel } = getDisclosure();
        fireEvent.click(trigger);
        const about = within(panel).getByRole("link", {
            name: "About",
            exact: true,
        });
        const language = within(panel).getByRole("link", {
            name: "Language Learning",
        });
        const home = within(panel).getByRole("link", {
            name: "Home",
            exact: true,
        });
        setPathname("/about");
        expect(projects).not.toHaveAttribute("aria-current", "page");
        expect(about).toHaveAttribute("aria-current", "page");
        expect(language).not.toHaveAttribute("aria-current", "page");
        expect(home).not.toHaveAttribute("aria-current", "page");
        setPathname("/language-learning");
        expect(about).not.toHaveAttribute("aria-current", "page");
        expect(language).toHaveAttribute("aria-current", "page");
        setPathname("/");
        expect(language).not.toHaveAttribute("aria-current", "page");
        expect(home).toHaveAttribute("aria-current", "page");
    });

    it("renders only the brand when showLinks is false", () => {
        renderInRouter(() => <Header pathname="/" showLinks={false} />);
        expect(screen.getAllByRole("link", { hidden: true })).toEqual([
            screen.getByRole("link", { name: "Jordan Rhea — Home" }),
        ]);
        expect(
            screen.queryByRole("navigation", { hidden: true }),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole("button", { hidden: true }),
        ).not.toBeInTheDocument();
    });

    it("ignores variant=B and has no prototype controls, variant links, or arrow switching", () => {
        const { history } = renderInRouter(
            () => <Header pathname="/" />,
            "/?variant=B",
        );
        const { trigger, panel } = getDisclosure();
        expect(
            screen.queryByRole("complementary", {
                name: /Navigation prototype controls/i,
                hidden: true,
            }),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole("button", {
                name: /navigation variant/i,
                hidden: true,
            }),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByText(/Navigation preview/i),
        ).not.toBeInTheDocument();
        expect(
            screen.queryByRole("button", { name: /Explore|Close/ }),
        ).not.toBeInTheDocument();
        for (const link of screen.getAllByRole("link", { hidden: true })) {
            expect(link.getAttribute("href")).not.toMatch(/[?&]variant=/);
        }
        for (const key of ["ArrowLeft", "ArrowRight"]) {
            const event = new KeyboardEvent("keydown", {
                key,
                bubbles: true,
                cancelable: true,
            });
            window.dispatchEvent(event);
            expect(event.defaultPrevented).toBe(false);
            expect(history.get()).toBe("/?variant=B");
            expect(trigger).toHaveAttribute("aria-expanded", "false");
            expect(panel).not.toBeVisible();
        }
    });
});

describe("BasicHeader", () => {
    it("renders its existing logo image and alt", () => {
        renderInRouter(() => <BasicHeader />);
        const img = screen.getByAltText("jordan rhea header");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "/content/img/jr-icon.png");
    });
});
