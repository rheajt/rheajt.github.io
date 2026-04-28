/// <reference types="vinxi/types/server" />
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossorigin=""
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    {/* Inline critical loader styles — renders before any JS or CSS-in-JS */}
                    <style
                        innerHTML={`
                        #page-loader {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: #111;
                            z-index: 2147483647;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: opacity 0.4s ease;
                        }
                        #page-loader.ready {
                            opacity: 0;
                            pointer-events: none;
                        }
                        #page-loader .spinner {
                            width: 44px;
                            height: 44px;
                            border-radius: 50%;
                            border: 4px solid rgba(255,255,255,0.1);
                            border-top-color: #283597;
                            animation: loader-spin 0.9s linear infinite;
                        }
                        @keyframes loader-spin {
                            to { transform: rotate(360deg); }
                        }
                    `}
                    />
                    {assets}
                </head>
                <body>
                    {/* Server-rendered loader — visible immediately, no JS needed */}
                    <div id="page-loader">
                        <div class="spinner"></div>
                    </div>
                    <div id="app">{children}</div>
                    {scripts}
                </body>
            </html>
        )}
    />
));
