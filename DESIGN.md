---
name: Jordan Rhea
description: A practical, clear technical notebook for education and technology work.
colors:
    primary: "#283597"
    text: "#2e353f"
    text-light: "#4f5969"
    heading: "#1a202c"
    paper: "#fbfbf8"
    accent: "#d1dce5"
    white: "#ffffff"
    nav-line: "#d9dce8"
typography:
    display:
        fontFamily: '"Space Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        fontSize: "2.488rem"
        fontWeight: 700
        lineHeight: 1.25
        letterSpacing: "-0.025em"
    body:
        fontFamily: 'Work Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        fontSize: "1rem"
        fontWeight: 400
        lineHeight: 1.875
rounded:
    nav: "2px"
    tag: "3px"
    card: "4px"
spacing:
    grid: "1.5rem"
    1: "0.375rem"
    2: "0.75rem"
    4: "1.5rem"
    6: "2.25rem"
components:
    nav-link:
        backgroundColor: "{colors.paper}"
        textColor: "{colors.text}"
        rounded: "{rounded.nav}"
        padding: "8px 12px"
        height: "44px"
    nav-contact:
        backgroundColor: "{colors.primary}"
        textColor: "{colors.white}"
        rounded: "{rounded.nav}"
        padding: "8px 16px"
        height: "44px"
    project-card:
        backgroundColor: "{colors.white}"
        textColor: "{colors.text}"
        rounded: "{rounded.card}"
        padding: "1.5rem"
---

# Design System: Jordan Rhea

## Overview

**Creative North Star: "The Quiet Technical Notebook"**

This is a practical, clear visual system: a pale graph-paper ground, restrained deep-blue signals, and structured content that makes education and technology work easy to scan. Space Grotesk gives headings a distinct geometric voice; Work Sans keeps longer reading comfortable. The mood is capable and approachable without relying on decorative effects to create personality.

The design stays mostly flat. Fine borders, spacing, typography, and small state changes provide structure, while occasional soft shadows distinguish an open navigation panel or an interactive card. The same foundation supports the portfolio and its project-focused pages; the separate School Data Solutions identity remains its own brand rather than a visual synonym.

**Key Characteristics:**

- Pale graph-paper canvas and a consistent 24px rhythm.
- Deep blue used as a focused navigation and emphasis color.
- Geometric display headings paired with readable sans-serif body copy.
- Border-led components with restrained, state-driven depth.

## Colors

The palette pairs a deep, slightly muted blue with cool dark text and a warm near-white paper surface.

### Primary

- **Notebook Blue**: the principal accent for navigation, emphasis, blockquote markers, and focus states.

### Neutral

- **Graph Paper**: the warm near-white page surface, carrying a subtle repeating grid.
- **Working Ink**: the default body-text color.
- **Soft Ink**: secondary text such as dates and supporting copy.
- **Heading Ink**: the dark neutral used for most headings.
- **Pale Rule**: a blue-gray divider and card-border color.
- **Card White**: the surface for project cards.

## Typography

**Display Font:** Space Grotesk (with system sans-serif fallbacks)
**Body Font:** Work Sans (with system sans-serif fallbacks)

**Character:** Space Grotesk adds a crisp, geometric signature to headings and brand text. Work Sans carries paragraphs and interface text with a quieter, practical rhythm.

### Hierarchy

- **Display** (700, 2.488rem, 1.25): large page and hero headings; the main heading uses the upper step of the type scale.
- **Headline** (700, 2.488rem, 1.25): primary page heading; heading letter spacing is tightened to -0.025em.
- **Title** (600, 1.728rem, 1.25): section and card headings, stepping down through the same 1.2 scale.
- **Body** (400, 1rem, 1.875): paragraphs and long-form reading.
- **Label** (400, 0.833rem): compact dates and supporting metadata; navigation uses 13px text.

## Layout

The shared route shell is centered and capped at 64rem, with fluid side gutters that range from 1rem to 1.5rem. The broader prose wrapper uses a 56rem maximum. Spacing steps follow a 24px base grid, with quarter-grid increments available for finer adjustments. The shell reduces vertical padding on narrower screens; at 720px, navigation becomes a compact sticky header with a safe-area top inset, hides the work row, and changes its Pages panel to a single-column, in-flow layout. Project cards use an auto-fitting grid with a 280px minimum column width.

## Elevation & Depth

Depth is mostly flat and border-led, with a small number of soft shadows used to clarify interactive elevation rather than decorate every surface. The navigation frame carries a very faint shadow; its open panel has a stronger shadow on wide screens and removes it on mobile. Linked project cards lift slightly and gain a soft shadow on hover. This description is based on source inspection; rendered output was not browser-checked.

### Shadow Vocabulary

- **Navigation frame** (`0 4px 16px #28359706`): barely visible separation around the masthead.
- **Open navigation panel** (`0 16px 32px #20284714`): separates the expanded panel from page content; omitted on mobile.
- **Interactive project card** (`0 6px 20px rgba(0, 0, 0, 0.08)`): appears with a small upward lift on hover.

## Shapes

Forms are predominantly square-cornered. Navigation controls use a restrained 2px radius, project tags 3px, and project cards 4px. Thin blue-gray borders frame navigation and cards; imagery is clipped to the card’s rectangular edge.

## Components

### Buttons

- **Shape:** nearly square corners (2px on the main navigation controls).
- **Primary:** the Contact link is a deep-blue block with white text and 16px horizontal padding.
- **Hover / Focus:** hover deepens the contact blue; keyboard focus uses a 2px blue outline offset by 3px.
- **Navigation toggle:** outlined at rest, with a solid blue background and white text while expanded.

### Cards / Containers

- **Corner Style:** gently softened corners (4px).
- **Background:** white cards against the graph-paper page.
- **Shadow Strategy:** border at rest; linked cards lift 2px and gain a soft shadow on hover.
- **Border:** 1px pale blue-gray.
- **Internal Padding:** 1.5rem for project-card content.

### Navigation

- **Style:** a framed, paper-colored masthead with a 3px blue top rule, compact sans-serif links, and a clear brand lockup.
- **States:** links gain a faint blue wash and blue text on hover; the current page uses the same treatment with semibold weight. Controls preserve a visible keyboard focus outline.
- **Responsive:** the compact mobile header stays visible while scrolling; the work row is hidden, and Projects and School Data Solutions are available in the single-column Pages panel. Desktop work links remain visible.

### Tags

- **Style:** compact blue-tinted chips with blue text, medium weight, and softly rounded corners.

## Do's and Don'ts

### Do:

- **Do** use the graph-paper surface as a subtle backdrop, not as a substitute for clear content hierarchy.
- **Do** reserve Notebook Blue for navigation, focus, and meaningful emphasis.
- **Do** keep most surfaces flat and use borders to establish structure.
- **Do** retain the Space Grotesk and Work Sans role pairing and the 24px spacing rhythm.

### Don't:

- **Don't** spread shadows across every component; the incumbent uses them selectively for interactive depth.
- **Don't** treat the distinct School Data Solutions identity as interchangeable with the portfolio brand.
