const publicationDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
});

export function formatPublishedDate(value?: string | null): string | undefined {
    if (typeof value !== "string" || !value.trim()) return undefined;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return undefined;
    return publicationDateFormatter.format(date);
}
