import { beforeEach, describe, expect, it, vi } from "vitest";
import { downloadResumePdf } from "~/utils/resume-pdf";
import type { ResumeData } from "~/utils/yaml";

const pdf = vi.hoisted(() => {
    const state = { font: "", style: "", size: 0, page: 1 };
    const measurements: Array<{
        value: string;
        font: string;
        style: string;
        size: number;
    }> = [];
    const drawings: Array<{
        lines: string[];
        x: number;
        y: number;
        size: number;
        page: number;
    }> = [];
    const doc = {
        setFont: vi.fn((font: string, style: string) => {
            state.font = font;
            state.style = style;
        }),
        setFontSize: vi.fn((size: number) => {
            state.size = size;
        }),
        setTextColor: vi.fn(),
        setDrawColor: vi.fn(),
        setLineWidth: vi.fn(),
        line: vi.fn<(x1: number, y1: number, x2: number, y2: number) => void>(),
        setProperties: vi.fn(),
        getTextWidth: vi.fn((value: string) => value.length * 5),
        textWithLink: vi.fn(),
        splitTextToSize: vi.fn((value: string) => {
            measurements.push({ value, ...state });
            return value.split("\n");
        }),
        text: vi.fn((value: string | string[], x: number, y: number) => {
            drawings.push({
                lines: typeof value === "string" ? [value] : [...value],
                x,
                y,
                size: state.size,
                page: state.page,
            });
        }),
        addPage: vi.fn(() => {
            state.page += 1;
        }),
        save: vi.fn(),
    };
    return { doc, state, measurements, drawings };
});

vi.mock("jspdf", () => ({
    jsPDF: vi.fn(function () {
        return pdf.doc;
    }),
}));

const resume: ResumeData = {
    name: "Test Person",
    headline: "Developer",
    tagline: "",
    location: "Richmond",
    links: [{ label: "Website", url: "https://example.com" }],
    summary: ["Summary bullet"],
    experience: [
        {
            role: "Developer",
            organization: "Example",
            location: "Remote",
            period: "2020–present",
            highlights: ["Experience bullet"],
        },
    ],
    projects: ["Example project"],
    skills: ["TypeScript"],
    background: ["Background bullet"],
    sourceNotes: [],
};

beforeEach(() => {
    vi.clearAllMocks();
    Object.assign(pdf.state, { font: "", style: "", size: 0, page: 1 });
    pdf.measurements.length = 0;
    pdf.drawings.length = 0;
});

describe("resume PDF", () => {
    it("sets Times normal 10 before measuring every bullet", async () => {
        await downloadResumePdf(resume);

        const bullets = pdf.measurements.filter(measurement =>
            measurement.value.endsWith("bullet"),
        );
        expect(bullets).toHaveLength(3);
        for (const measurement of bullets) {
            expect(measurement).toMatchObject({
                font: "times",
                style: "normal",
                size: 10,
            });
        }
        pdf.doc.splitTextToSize.mock.calls.forEach(([value], index) => {
            if (!value.endsWith("bullet")) return;
            const previousMeasurement =
                pdf.doc.splitTextToSize.mock.invocationCallOrder[index - 1] ??
                0;
            const measurement =
                pdf.doc.splitTextToSize.mock.invocationCallOrder[index];
            for (const setter of [pdf.doc.setFont, pdf.doc.setFontSize]) {
                expect(
                    setter.mock.invocationCallOrder.some(
                        order =>
                            order > previousMeasurement && order < measurement,
                    ),
                ).toBe(true);
            }
        });
        expect(pdf.doc.save).toHaveBeenCalledWith("test-person-resume.pdf");
        expect(pdf.doc.textWithLink).toHaveBeenCalledWith(
            "Website",
            expect.any(Number),
            expect.any(Number),
            { url: "https://example.com" },
        );
    });

    it.each(["bullet", "text"])(
        "splits oversized %s blocks across printable pages without losing lines",
        async kind => {
            const lines = Array.from(
                { length: 125 },
                (_, index) => `${kind} line ${index}`,
            );
            await downloadResumePdf({
                ...resume,
                summary: kind === "bullet" ? [lines.join("\n")] : [],
                projects: kind === "text" ? [lines.join("\n")] : [],
                experience: [],
                skills: [],
                background: [],
            });

            const chunks = pdf.drawings.filter(drawing =>
                drawing.lines.some(line => line.startsWith(`${kind} line `)),
            );
            expect(
                new Set(chunks.map(chunk => chunk.page)).size,
            ).toBeGreaterThan(1);
            expect(chunks.flatMap(chunk => chunk.lines)).toEqual(lines);
            for (const drawing of pdf.drawings) {
                expect(drawing.y).toBeGreaterThanOrEqual(48);
                // jsPDF's unchanged default multiline leading is 1.15 × font size.
                const lastBaseline =
                    drawing.y +
                    (drawing.lines.length - 1) * drawing.size * 1.15;
                expect(lastBaseline + drawing.size * 0.25).toBeLessThanOrEqual(
                    744,
                );
            }
            for (const [, y1, , y2] of pdf.doc.line.mock.calls) {
                expect(y1).toBeGreaterThanOrEqual(48);
                expect(y2).toBeLessThanOrEqual(744);
            }
            if (kind === "bullet") {
                const markers = pdf.drawings.filter(drawing =>
                    drawing.lines.includes("•"),
                );
                expect(markers).toHaveLength(1);
                expect(markers[0]).toMatchObject({
                    x: 48,
                    y: chunks[0].y,
                    page: chunks[0].page,
                });
                expect(chunks.every(chunk => chunk.x === 60)).toBe(true);
            }
        },
    );
});
