import { describe, expect, it } from "vitest";
import { formatPublishedDate } from "~/utils/formatPublishedDate";

describe("formatPublishedDate", () => {
    it.each([undefined, null, "", "not-a-date", "2024-13-50"])(
        "omits an absent or invalid date: %s",
        date => {
            expect(formatPublishedDate(date)).toBeUndefined();
        },
    );

    it("preserves the long English date display using UTC", () => {
        expect(formatPublishedDate("2024-01-01")).toBe("January 1, 2024");
        expect(formatPublishedDate("2024-01-01T00:30:00Z")).toBe(
            "January 1, 2024",
        );
        expect(formatPublishedDate("2024-01-01T23:30:00-02:00")).toBe(
            "January 2, 2024",
        );
    });
});
