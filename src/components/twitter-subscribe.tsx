import React from "react";
import { Helmet } from "react-helmet";

export const TwitterSubscribe: React.FC = () => {
    return (
        <>
            <Helmet>
                <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charSet="utf-8"
                ></script>
            </Helmet>
            <a
                href="https://twitter.com/rheajt?ref_src=twsrc%5Etfw"
                className="twitter-follow-button"
                data-size="large"
                data-show-count="false"
            >
                Follow @rheajt
            </a>
        </>
    );
};
