import { useLocation } from "@solidjs/router";
import type { JSX } from "solid-js";
import { Footer } from "./footer";
import { BasicHeader, Header } from "./header";

export default function Layout(props: { children: JSX.Element }) {
  const location = useLocation();
  return (
    <div>
      <Header pathname={location.pathname} />
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
