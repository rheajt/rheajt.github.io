import * as React from "react";
import { PopupWidget } from "react-calendly";
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
            <PopupWidget
                url="https://calendly.com/jordanrhea/30min"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.querySelector("body") as HTMLElement}
                text="LET'S TALK"
                textColor="#ffffff"
                color="#00a2ff"
            />

            <footer>
                © {new Date().getFullYear()}{" "}
                <a href="https://jordanrhea.com">jordan rhea</a>
            </footer>
        </div>
    );
};

export default Layout;
