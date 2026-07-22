import { afterEach, describe, expect, it, vi } from "vitest";
import { links } from "~/utils/links";
import { buildMapboxSrc } from "~/utils/buildMapboxSrc";
import { siteMetadata } from "~/site-config";
import type { PokerSeat } from "~/utils/pokerReducer";
import { reducer, initialState } from "~/utils/pokerReducer";

describe("links", () => {
    it("exports an array of link objects", () => {
        expect(Array.isArray(links)).toBe(true);
        expect(links.length).toBeGreaterThan(0);
    });

    it("has Projects link", () => {
        const projects = links.find(l => l.name === "Projects");
        expect(projects).toBeDefined();
        expect(projects?.to).toBe("projects");
    });

    it("has About link with children", () => {
        const about = links.find(l => l.name === "About");
        expect(about).toBeDefined();
        expect(about?.children).toBeDefined();
        expect(about?.children?.length).toBeGreaterThan(0);
    });

    it("About has Language Learning child", () => {
        const about = links.find(l => l.name === "About");
        const ll = about?.children?.find(
            (c: any) => c.name === "Language Learning",
        );
        expect(ll).toBeDefined();
        expect(ll?.to).toBe("language-learning");
    });
});

describe("buildMapboxSrc", () => {
    afterEach(() => {
        vi.unstubAllEnvs();
    });

    it("returns no URL without a Mapbox token", () => {
        vi.stubEnv("VITE_MAPBOX_TOKEN", "");
        expect(buildMapboxSrc()).toBeUndefined();
    });

    it("accepts custom options", () => {
        const url = buildMapboxSrc({
            theme: "light-v10",
            lat: 0,
            lng: 0,
            zoom: 5,
            token: "test-token",
        });
        expect(url).toContain("https://api.mapbox.com");
        expect(url).toContain("light-v10");
        expect(url).toContain("access_token=test-token");
        expect(url).toContain("test-token");
    });
});

describe("siteMetadata", () => {
    it("has title", () => {
        expect(siteMetadata.title).toBe("jordan rhea");
    });

    it("has author info", () => {
        expect(siteMetadata.author.name).toBe("jordan rhea");
        expect(siteMetadata.author.summary).toBeDefined();
    });

    it("has social links", () => {
        expect(siteMetadata.social.twitter).toBe("rheajt");
        expect(siteMetadata.social.github).toBe("rheajt");
        expect(siteMetadata.social.linkedin).toBe("rheajt");
        expect(siteMetadata.social.youtube).toBe("jordanrhea");
    });

    it("has siteUrl", () => {
        expect(siteMetadata.siteUrl).toBe("https://jordanrhea.com");
    });
});

describe("pokerReducer", () => {
    it("has initial state with one seat", () => {
        expect(initialState.seats.length).toBe(1);
        expect(initialState.seats[0].name).toBe("");
    });

    it("adds a seat", () => {
        const state = { ...initialState, seats: [...initialState.seats] };
        const result = reducer(state, { type: "add_seat" });
        expect(result.seats.length).toBe(2);
    });

    it("updates a seat name", () => {
        const state = {
            ...initialState,
            seats: [{ name: "Old", hero: false, in: 0 } as PokerSeat],
        };
        const result = reducer(state, {
            type: "update_seat",
            payload: { seatIdx: 0, update: { name: "New" } },
        });
        expect(result.seats[0].name).toBe("New");
    });

    it("updates a seat hero status", () => {
        const state = {
            ...initialState,
            seats: [{ name: "Test", hero: false, in: 0 } as PokerSeat],
        };
        const result = reducer(state, {
            type: "update_seat",
            payload: { seatIdx: 0, update: { hero: true } },
        });
        expect(result.seats[0].hero).toBe(true);
    });

    it("returns same state for unknown action", () => {
        const state = { ...initialState };
        const result = reducer(state, {
            type: "unknown" as any,
        });
        expect(result).toEqual(state);
    });
});
