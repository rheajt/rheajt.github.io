import { Link } from "gatsby";
import * as React from "react";
import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
// import { PopupWidget } from "react-calendly";
import { Header } from "./header";

export interface Location {
	pathname: string;
	search: string;
	hash: string;
}

const GlobalStyles = createGlobalStyle`
*,
:after,
:before {
    box-sizing: border-box;
}

html {
    line-height: var(--lineHeight-normal);
    font-size: var(--fontSize-root);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fffff8;
    background-size: 2rem 2rem;
    background-image: radial-gradient(circle, #340b54, rgba(0, 0, 0, 0) 1px);
}

body {
    font-family: var(--font-body);
    font-size: var(--fontSize-1);
    color: var(--color-text);
}

:root {
    --maxWidth-none: "none";
    --maxWidth-xs: 20rem;
    --maxWidth-sm: 24rem;
    --maxWidth-md: 28rem;
    --maxWidth-lg: 32rem;
    --maxWidth-xl: 36rem;
    --maxWidth-2xl: 42rem;
    --maxWidth-3xl: 48rem;
    --maxWidth-4xl: 56rem;
    --maxWidth-full: "100%";
    --maxWidth-wrapper: var(--maxWidth-2xl);
    --spacing-px: "1px";
    --spacing-0: 0;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-8: 2rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-32: 8rem;
    --fontFamily-cursive: Patrick Hand, cursive;
    --fontFamily-sans: Work Sans, system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
    --fontFamily-serif: "Merriweather", "Georgia", Cambria, "Times New Roman",
        Times, serif;
    --font-body: var(--fontFamily-sans);
    --font-heading: var(--fontFamily-cursive);
    --fontWeight-normal: 400;
    --fontWeight-medium: 500;
    --fontWeight-semibold: 600;
    --fontWeight-bold: 700;
    --fontWeight-extrabold: 800;
    --fontWeight-black: 900;
    --fontSize-root: 16px;
    --lineHeight-none: 1;
    --lineHeight-tight: 1.1;
    --lineHeight-normal: 1.5;
    --lineHeight-relaxed: 1.625;
    /* 1.200 Minor Third Type Scale */
    --fontSize-0: 0.833rem;
    --fontSize-1: 1rem;
    --fontSize-2: 1.2rem;
    --fontSize-3: 1.44rem;
    --fontSize-4: 1.728rem;
    --fontSize-5: 2.074rem;
    --fontSize-6: 2.488rem;
    --fontSize-7: 2.986rem;
    --color-primary: #283597;
    --color-text: #2e353f;
    --color-text-light: #4f5969;
    --color-heading: #1a202c;
    --color-heading-black: black;
    --color-accent: #d1dce5;
}
`;

const Layout: React.FC<{
	children: ReactNode;
	location: Location;
	title: string;
}> = ({ location, children }) => {
	const rootPath = `/`;
	const isRootPath = location.pathname === rootPath;
	const isBrowser = typeof window !== "undefined";

	return (
		<div>
			<GlobalStyles />
			<Header pathname={location.pathname} />

			<main>{children}</main>

			<footer>
				<div>
					© {new Date().getFullYear()}{" "}
					<a href="https://jordanrhea.com">jordan rhea</a>
				</div>

				{/*isBrowser && (
                    <PopupWidget
                        url="https://calendly.com/jordan-rhea/30min"
                        rootElement={document.getElementById("___gatsby")!}
                        text="Let's talk solutions!"
                        textColor="#ffffff"
                        color="#283597"
                    />
                )*/}

				<div className="legals">
					<Link to="/privacy">privacy</Link>
					<Link to="/terms">terms</Link>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
