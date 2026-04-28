import { createSignal, onMount, type JSX } from "solid-js";
import { Footer } from "./footer";
import { BasicHeader, Header } from "./header";

export default function Layout(props: { children: JSX.Element }) {
    const [pathname, setPathname] = createSignal("");

    onMount(() => setPathname(window.location.pathname));

    return (
        <div>
            <Header pathname={pathname()} />
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
