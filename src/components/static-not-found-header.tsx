import { For } from "solid-js";
import { standalonePages } from "./navigation-data";
import "./navigation.scss";

// The static 404 intentionally does not hydrate. Keep recovery entirely native.
export const StaticNotFoundHeader = () => (
    <header class="site-navigation static-not-found-navigation">
        <div class="nav-shell">
            <div class="nav-masthead">
                <a class="nav-brand" href="/" aria-label="Jordan Rhea — Home">
                    <img
                        src="/content/img/jr-icon.png"
                        width="36"
                        height="36"
                        alt=""
                    />
                    <span>
                        Jordan Rhea<small>Education & technology</small>
                    </span>
                </a>
                <nav class="static-recovery-links" aria-label="Page recovery">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a class="nav-contact" href="/contact">
                        Contact
                    </a>
                </nav>
            </div>
            <details class="static-more-pages">
                <summary>More pages</summary>
                <nav aria-label="More pages">
                    <a href="/school-data-solutions">School Data Solutions</a>
                    <For each={standalonePages}>
                        {page => <a href={page.href}>{page.label}</a>}
                    </For>
                    <a href="/schedule">Schedule a meeting</a>
                    <a href="/poker">Poker</a>
                    <a href="/language-learning/dictionary">Dictionary</a>
                </nav>
            </details>
        </div>
    </header>
);
