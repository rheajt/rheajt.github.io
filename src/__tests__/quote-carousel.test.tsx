import { expect, it } from "vitest";
import source from "~/components/quote-carousel.tsx?raw";

it("places the reduced-motion override after the normal slide transition", () => {
    const normalTransition = source.indexOf("transition: opacity 0.5s ease;");
    const reducedMotion = source.indexOf("@media (prefers-reduced-motion: reduce)");
    expect(normalTransition).toBeGreaterThan(-1);
    expect(reducedMotion).toBeGreaterThan(normalTransition);
    expect(source.slice(reducedMotion)).toMatch(/\.slide\s*\{\s*transition: none;/);
});
