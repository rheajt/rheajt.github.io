const u = require('unist-builder');
const map = require('unist-util-map');
const { selectAll } = require('unist-util-select');
const toString = require('mdast-util-to-string');

module.exports = (props, opts) => {
    console.log('props', props);
    //const markdownAST = props.markdownAST;

    //const mapped = map(markdownAST, node => {
        //if (node.type === 'code') {
            //return node;
        //}

        //if (node.type === 'html' && node.value.includes('<iframe')) {
            //return makeFigure(node);
        //}

        //if (node.type === 'paragraph') {
            //return makeSection(node);
        //}

        //return node;
    //});

    //console.log(JSON.stringify(mapped, null, 2));

    //return u('html', [mapped]);
    //return mapped;
};

function makeArticle(node) {
    const text = toString(node);
    node.type = 'html';
    node.value = `<article>${text}</article>`.trim();
    return node;
}

function makeFigure(node) {
    const text = toString(node);
    node.type = 'html';
    node.value = `<figure class="iframe-wrapper fullwidth">${text}</figure>`.trim();
    return node;
}

function makeSection(node) {
    const text = toString(node);
    node.type = 'html';
    node.value = `
    <section>${text}</section>
    `.trim();

    return node;
}
