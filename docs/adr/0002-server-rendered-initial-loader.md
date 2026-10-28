# The initial page loader is server-rendered and fails open without JavaScript

## Context

The overlay was removed in commit b27aa6e1a because it blocked the whole page on every load. The site owner asked for it back as the first-impression moment.

## Decision

The overlay is rendered once at the app root, so it is part of the server-rendered HTML and appears before hydration. After mount it adds a `ready` class on the next animation frame, the CSS fades it out over 0.4s, and the component removes itself from the DOM when the fade ends, with a 700ms timer as a fallback in case `transitionend` never fires. Because prerendered pages such as the static 404 never hydrate, the overlay also hides itself through CSS after 4s, and the entry client removes it explicitly on the static-not-found path.

## Why

A loader that only appears after hydration misses the first impression. A loader that can stay covered when JavaScript never runs would hide the page from real users and from crawlers.

## Consequences

Every route pays the overlay once, so the fade has to stay short. The CSS delay and the JS fade timeout are separate values, and both have to stay short and must not outlive the page content.

## Rejected alternatives

Removing the overlay again repeats b27aa6e1a and gives up the first impression. Keeping the loader client-only removes the pre-hydration moment the overlay exists for.
