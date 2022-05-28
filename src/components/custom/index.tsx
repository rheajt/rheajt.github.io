import React from "react";
import rehypeReact from "rehype-react";
import Counter from "./counter";

// @ts-ignore
export const renderAst = new rehypeReact({
    createElement: React.createElement,
    // @ts-ignore
    components: { counter: Counter },
}).Compiler;
