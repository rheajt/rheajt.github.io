import React from "react";
import { Helmet } from "react-helmet";

export const GithubSubscribe: React.FC = () => {
    return (
        <>
            <Helmet>
                <script
                    async
                    defer
                    src="https://buttons.github.io/buttons.js"
                ></script>
            </Helmet>
            <a
                className="github-button"
                href="https://github.com/rheajt"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-size="large"
                data-show-count="true"
                aria-label="Follow @rheajt on GitHub"
            >
                Follow @rheajt
            </a>
        </>
    );
};
