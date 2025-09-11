export const formatName = (name: string) => {
    // match lesson followed by digits (e.g. lesson01)
    const m = name.match(/^lesson(\d+)$/i);
    if (m) return `Lesson ${m[1]}`;

    // fallback: insert a space before trailing numbers and capitalize first letter
    const withSpace = name.replace(
        /([a-zA-Z]+)(\d+)/,
        (_m, letters, nums) => `${letters} ${nums}`,
    );
    return withSpace.charAt(0).toUpperCase() + withSpace.slice(1);
};
