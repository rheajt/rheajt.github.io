// Horizontal geometry only: each wrapper keeps its own vertical rhythm.
// --layout-width includes padding (the global reset uses border-box).
export const layoutShell = `
    box-sizing: border-box;
    width: 100%;
    max-width: var(--layout-width);
    margin-inline: auto;
    padding-inline: var(--layout-gutter);
`;
