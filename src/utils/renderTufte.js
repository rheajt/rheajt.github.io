export default function renderTufte(ast) {
    return {
        ...ast,
        children: [
            {
                tagName: 'section',
                type: 'element',
                children: parseASTChildren(ast.children),
            },
        ],
    };
}
function parseASTChildren(children) {
    return children.map(child => {
        if (child.tagName === 'iframe') {
            return {
                type: 'element',
                tagName: 'figure',
                properties: {
                    className: ['iframe-wrapper', 'fullwidth'],
                },
                children: [child],
            };
        }

        if (child.tagName === 'img') {
            return {
                type: 'element',
                tagName: 'figure',
                properties: {},
                children: [child],
            };
        }

        return child;
    });
}
