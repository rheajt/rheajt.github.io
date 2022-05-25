import React from "react";
import { Quote } from "../pages";

const Blockquote: React.FC<{ quote: Quote }> = ({ quote }) => {
    return (
        <blockquote style={{ maxWidth: 340 }}>
            <p>{quote.excerpt}</p>
            <span className="author">
                <b>{quote.author}</b> <br />
                {quote.position}
            </span>
        </blockquote>
    );
};

export default Blockquote;
