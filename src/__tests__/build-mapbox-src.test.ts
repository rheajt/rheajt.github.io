import { afterEach, describe, expect, it, vi } from "vitest";
import { buildMapboxSrc } from "~/utils/buildMapboxSrc";

afterEach(() => vi.unstubAllEnvs());

describe("Mapbox static coordinates", () => {
    it("emits custom longitude before latitude", () => {
        expect(
            buildMapboxSrc({
                theme: "light-v10",
                lat: 51.5074,
                lng: -0.1278,
                zoom: 9,
                token: "test-token",
            }),
        ).toBe(
            "https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-0.1278,51.5074,9,0/500x400?access_token=test-token",
        );
    });

    it("preserves the existing default Richmond location", () => {
        vi.stubEnv("VITE_MAPBOX_TOKEN", "environment-token");
        expect(buildMapboxSrc()).toBe(
            "https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-77.4469,37.5628,11.64,0/500x400?access_token=environment-token",
        );
    });

    it("returns no URL without a token", () => {
        vi.stubEnv("VITE_MAPBOX_TOKEN", "");
        expect(buildMapboxSrc()).toBeUndefined();
    });
});
