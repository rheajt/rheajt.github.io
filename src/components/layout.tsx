import { Link } from "gatsby";
import * as React from "react";
import { ReactNode } from "react";
import { PopupWidget } from "react-calendly";
import { Header } from "./header";

export interface Location {
    pathname: string;
    search: string;
    hash: string;
}

const Layout: React.FC<{
    children: ReactNode;
    location: Location;
    title: string;
}> = ({ location, children }) => {
    const rootPath = `/`;
    const isRootPath = location.pathname === rootPath;
    const isBrowser = typeof window !== "undefined";

    return (
        <div className="global-wrapper" data-is-root-path={isRootPath}>
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
