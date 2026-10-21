import { type JSX } from "solid-js";
import { useLocation } from "@solidjs/router";
import { Footer } from "./footer";
import { BasicHeader, Header } from "./header";

export default function Layout(props: {
    children: JSX.Element;
    header?: JSX.Element;
}) {
    const location = useLocation();

    return (
        <div>
            {props.header ?? <Header pathname={location.pathname} />}
            <main>{props.children}</main>
            <Footer />
        </div>
    );
}

export function SimpleLayout(props: { children: JSX.Element }) {
    return (
        <div>
            <BasicHeader />
            <main>{props.children}</main>
        </div>
    );
}
