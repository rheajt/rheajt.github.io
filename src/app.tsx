// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type ParentProps, Suspense } from "solid-js";
import { Loader } from "~/components/loader";
import "./styles/style.scss";

export function AppRoot(props: ParentProps) {
    return (
        <MetaProvider>
            <Title>jordan rhea</Title>
            <Loader />
            <Suspense>{props.children}</Suspense>
        </MetaProvider>
    );
}

export default function App() {
    return (
        <Router root={AppRoot}>
            <FileRoutes />
        </Router>
    );
}
