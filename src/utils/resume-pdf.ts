import type { ResumeData } from "~/utils/yaml";

const margin = 48;
const pageWidth = 612;
const pageHeight = 792;
const contentWidth = pageWidth - margin * 2;

export async function downloadResumePdf(resume: ResumeData) {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ unit: "pt", format: "letter" });
    let y = margin;

    const ensureSpace = (height: number) => {
        if (y + height <= pageHeight - margin) return;
        doc.addPage();
        y = margin;
    };

    const text = (
        value: string,
        x: number,
        options: {
            size?: number;
            style?: "normal" | "bold" | "italic";
            color?: [number, number, number];
            maxWidth?: number;
            lineHeight?: number;
        } = {},
    ) => {
        const {
            size = 10,
            style = "normal",
            color = [35, 35, 35],
            maxWidth = contentWidth,
            lineHeight = size * 1.35,
        } = options;
        doc.setFont("times", style);
        doc.setFontSize(size);
        doc.setTextColor(...color);
        const lines = doc.splitTextToSize(value, maxWidth) as string[];
        ensureSpace(lines.length * lineHeight);
        doc.text(lines, x, y);
        y += lines.length * lineHeight;
    };

    const section = (title: string) => {
        ensureSpace(28);
        y += 8;
        doc.setDrawColor(25, 25, 25);
        doc.setLineWidth(0.75);
        doc.line(margin, y, pageWidth - margin, y);
        y += 14;
        text(title.toUpperCase(), margin, {
            size: 10,
            style: "bold",
            color: [25, 25, 25],
        });
    };

    const bullet = (value: string) => {
        const bulletWidth = 12;
        const lines = doc.splitTextToSize(
            value,
            contentWidth - bulletWidth,
        ) as string[];
        ensureSpace(lines.length * 13.5);
        doc.setFont("times", "normal");
        doc.setFontSize(10);
        doc.setTextColor(35, 35, 35);
        doc.text("•", margin, y);
        doc.text(lines, margin + bulletWidth, y);
        y += lines.length * 13.5;
    };

    const linkedHeaderLinks = () => {
        const separator = " | ";
        doc.setFont("times", "normal");
        doc.setFontSize(10);
        doc.setTextColor(40, 65, 150);

        const labelWidths = resume.links.map(link =>
            doc.getTextWidth(link.label),
        );
        const separatorWidth = doc.getTextWidth(separator);
        const totalWidth =
            labelWidths.reduce((total, width) => total + width, 0) +
            separatorWidth * Math.max(0, resume.links.length - 1);
        let x = Math.max(margin, (pageWidth - totalWidth) / 2);

        resume.links.forEach((link, index) => {
            doc.textWithLink(link.label, x, y, { url: link.url });
            x += labelWidths[index];
            if (index < resume.links.length - 1) {
                doc.setTextColor(75, 75, 75);
                doc.text(separator, x, y);
                x += separatorWidth;
                doc.setTextColor(40, 65, 150);
            }
        });

        y += 18;
    };

    doc.setProperties({
        title: `${resume.name} Resume`,
        subject: resume.headline,
        author: resume.name,
    });

    doc.setFont("times", "bold");
    doc.setFontSize(24);
    doc.setTextColor(20, 20, 20);
    doc.text(resume.name, pageWidth / 2, y, { align: "center" });
    y += 20;

    doc.setFont("times", "normal");
    doc.setFontSize(10);
    doc.setTextColor(75, 75, 75);
    doc.text(resume.headline, pageWidth / 2, y, { align: "center" });
    y += 14;
    linkedHeaderLinks();

    section("Summary");
    resume.summary.forEach(bullet);

    section("Experience");
    resume.experience.forEach(job => {
        ensureSpace(42);
        text(job.role, margin, { size: 11, style: "bold", lineHeight: 13 });
        text(`${job.organization} — ${job.location} | ${job.period}`, margin, {
            size: 10,
            style: "italic",
            color: [75, 75, 75],
            lineHeight: 13,
        });
        job.highlights.forEach(bullet);
        y += 4;
    });

    section("Selected Projects");
    text(resume.projects.join(" • "), margin, { size: 10 });

    section("Skills");
    text(resume.skills.join(" • "), margin, { size: 10 });

    section("Background");
    resume.background.forEach(bullet);

    doc.save(`${resume.name.toLowerCase().replaceAll(" ", "-")}-resume.pdf`);
}
