import { createHandler, StartServer } from "@solidjs/start/server";
import { registerStyledAssets } from "~/lib/styled-server";

export default createHandler(
    () => {
        const page = (
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
                            {assets}
                        </head>
                        <body>
                            <div id="app">{children}</div>
                            {scripts}
                        </body>
                    </html>
                )}
            />
        );
        registerStyledAssets();
        return page;
    },
    { mode: "async" },
);
