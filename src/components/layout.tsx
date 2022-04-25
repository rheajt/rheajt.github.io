import * as React from "react";
// import { Link } from "gatsby"
import Header from "./header";

const Layout: React.FC<{ location: any; title: string }> = ({
    location,
    children,
}) => {
    const rootPath = `/`;
    const isRootPath = location.pathname === rootPath;

    return (
        <div className="global-wrapper" data-is-root-path={isRootPath}>
            <Header />

            <main>{children}</main>

            <footer>
                © {new Date().getFullYear()}{" "}
                <a href="https://jordanrhea.com">jordan rhea</a>
            </footer>
        </div>
    );
};

export default Layout;
