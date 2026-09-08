import { createResource, createSignal, For, Show, Suspense } from "solid-js";
import { styled } from "solid-styled-components";
import Layout from "~/components/layout";
import { LinkButton } from "~/components/link-button";
import Seo from "~/components/seo";
import { Section } from "~/components/section";
import { fetchPosts, type SanityPost } from "~/lib/sanity";

const projectTags = (project: SanityPost) => [
    ...new Set(
        (project.tags ?? [])
            .map(tag => tag?.label?.trim())
            .filter((label): label is string => !!label),
    ),
];

export default function SchoolDataSolutions() {
    const [state] = createResource(async () => {
        try {
            return {
                posts: await fetchPosts(undefined, "schooldata.solutions"),
                error: false,
            };
        } catch {
            return { posts: [] as SanityPost[], error: true };
        }
    });
    const [tag, setTag] = createSignal<string | null>(null);
    const tags = () =>
        [...new Set((state()?.posts ?? []).flatMap(projectTags))].sort();
    const filteredProjects = () =>
        (state()?.posts ?? []).filter(
            project => tag() === null || projectTags(project).includes(tag()!),
        );

    return (
        <Layout>
            <Seo
                title="School Data Solutions"
                description="School workflow projects for scheduling, ManageBac imports, staff information, and Google Sheets prototypes."
            />
            <Page>
                <Section className="intro">
                    <p class="eyebrow">
                        School operations · Data · Development
                    </p>
                    <div class="intro-bottom">
                        <div>
                            <p class="lead">
                                Practical tools for the work behind the school
                                day.
                            </p>
                            <p class="intro-copy">
                                I build tools for school teams working with
                                schedules, imports, and everyday information.
                                Here are examples across PowerSchool, ManageBac,
                                Google Workspace, and Microsoft 365.
                            </p>
                            <aside class="aside">
                                <span class="eyebrow">
                                    A focused starting point
                                </span>
                                <p>
                                    Start with the task. Work with the systems.
                                    Build what’s needed.
                                </p>
                            </aside>
                            <div class="actions">
                                <a
                                    class="primary-link"
                                    href="#project-highlights"
                                >
                                    Explore projects{" "}
                                    <span aria-hidden="true">↓</span>
                                </a>
                                <a
                                    class="text-link"
                                    href="#start-a-conversation"
                                >
                                    Discuss your school’s needs{" "}
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </div>
                        <div class="hero-heading">
                            <img
                                class="brand-logo"
                                src="/school-data-solutions-new-logo.png"
                                alt="School Data Solutions logo"
                                width="1947"
                                height="808"
                            />
                        </div>
                    </div>
                </Section>

                <Section id="project-highlights" className="projects">
                    <p class="eyebrow">Selected work</p>
                    <h2>Tools for school workflows</h2>
                    <p>Project highlights from School Data Solutions.</p>
                    <Suspense
                        fallback={
                            <p class="project-message" role="status">
                                Loading projects…
                            </p>
                        }
                    >
                        <Show when={state()?.error}>
                            <p class="project-message" role="alert">
                                Projects couldn’t be loaded. Please try again
                                later, or get in touch below.
                            </p>
                        </Show>
                        <Show
                            when={
                                !state()?.error && state()?.posts.length === 0
                            }
                        >
                            <p class="project-message" role="status">
                                No project highlights are available yet. Get in
                                touch below to discuss your school’s needs.
                            </p>
                        </Show>
                        <Show when={(state()?.posts.length ?? 0) > 0}>
                            <Show when={tags().length > 0}>
                                <div
                                    class="filters"
                                    role="group"
                                    aria-label="Filter projects by tag"
                                >
                                    <button
                                        type="button"
                                        aria-pressed={tag() === null}
                                        aria-controls="project-list"
                                        onClick={() => setTag(null)}
                                    >
                                        All
                                    </button>
                                    <For each={tags()}>
                                        {item => (
                                            <button
                                                type="button"
                                                aria-pressed={tag() === item}
                                                aria-controls="project-list"
                                                onClick={() => setTag(item)}
                                            >
                                                {item}
                                            </button>
                                        )}
                                    </For>
                                </div>
                            </Show>
                            <p
                                class="result-count"
                                role="status"
                                aria-live="polite"
                                aria-atomic="true"
                            >
                                {filteredProjects().length}{" "}
                                {filteredProjects().length === 1
                                    ? "project"
                                    : "projects"}{" "}
                                · {tag() ?? "All projects"}
                            </p>
                            <div id="project-list" class="project-grid">
                                <For each={filteredProjects()}>
                                    {project => (
                                        <article class="project-card">
                                            <Show when={project.imageUrl}>
                                                <img
                                                    class="project-image"
                                                    src={project.imageUrl}
                                                    alt={
                                                        project.imageAlt ??
                                                        project.title
                                                    }
                                                    loading="lazy"
                                                />
                                            </Show>
                                            <Show
                                                when={
                                                    projectTags(project)
                                                        .length > 0
                                                }
                                            >
                                                <p class="platform-label">
                                                    {projectTags(project).join(
                                                        " / ",
                                                    )}
                                                </p>
                                            </Show>
                                            <h3>{project.title}</h3>
                                            <Show when={project.summary}>
                                                <p>{project.summary}</p>
                                            </Show>
                                        </article>
                                    )}
                                </For>
                            </div>
                        </Show>
                    </Suspense>
                </Section>

                <Section id="start-a-conversation" className="contact-section">
                    <div class="contact-panel">
                        <div>
                            <p class="eyebrow">Let’s talk</p>
                            <h2>What’s taking up your team’s time?</h2>
                            <p>
                                Tell me about the task and the systems you use.
                                We can discuss whether a focused tool would
                                help.
                            </p>
                        </div>
                        <LinkButton
                            href="/contact"
                            label="Start a conversation"
                        />
                    </div>
                </Section>
            </Page>
        </Layout>
    );
}

const Page = styled.div`
    padding-top: var(--spacing-16);

    .intro {
        padding-top: var(--spacing-12);
    }
    .hero-heading {
        min-width: 0;
    }
    .brand-logo {
        display: block;
        width: 100%;
        height: auto;
    }
    .eyebrow,
    .platform-label,
    .result-count {
        font-family: var(--fontFamily-mono);
        font-size: var(--fontSize-0);
    }
    .eyebrow {
        color: var(--color-primary);
        margin-bottom: var(--spacing-3);
    }
    h1 {
        font-size: clamp(3rem, 8vw, 5.5rem);
        line-height: 1.06;
        margin: 0 0 var(--spacing-6);
    }
    h1 span {
        color: var(--color-primary);
    }
    h2 {
        margin-top: 0;
    }
    .intro-bottom {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 40%;
        gap: var(--spacing-8);
        align-items: start;
    }
    .lead {
        font-family: var(--font-heading);
        font-size: var(--fontSize-3);
        line-height: 1.5;
        margin-bottom: var(--spacing-3);
    }
    .intro-copy {
        max-width: 38rem;
    }
    .actions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-4);
    }
    .primary-link {
        display: inline-flex;
        gap: var(--spacing-4);
        padding: 0.75rem 1rem;
        background: var(--color-primary);
        color: white;
        border-radius: 3px;
        text-decoration: none;
        font-weight: 600;
    }
    .primary-link:hover {
        background: #3a4ab0;
    }
    .text-link {
        color: var(--color-primary);
        text-underline-offset: 4px;
        padding: 0.75rem 0;
    }
    .note {
        border-left: 2px solid var(--color-primary);
        padding: var(--spacing-4);
        background: rgba(255, 255, 255, 0.65);
    }
    .note p {
        font-family: var(--font-heading);
        font-size: var(--fontSize-2);
        margin: var(--spacing-3) 0 0;
    }
    .projects {
        border-top: 1px solid var(--color-accent);
    }
    section[id] {
        scroll-margin-top: var(--spacing-5);
    }
    .filters {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-2);
    }
    .filters button {
        min-height: 44px;
        padding: 0.6rem 1rem;
        border: 1px solid var(--color-accent);
        border-radius: 3px;
        background: #fbfbf8;
        color: var(--color-text);
        font: inherit;
        cursor: pointer;
    }
    .filters button:hover {
        border-color: var(--color-primary);
    }
    .filters button[aria-pressed="true"] {
        background: var(--color-primary);
        color: white;
        border-color: var(--color-primary);
    }
    a:focus-visible,
    button:focus-visible {
        outline: 3px solid var(--color-primary);
        outline-offset: 4px;
    }
    .result-count {
        color: var(--color-text-light);
        margin: var(--spacing-4) 0;
    }
    .project-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--spacing-4);
        align-items: start;
    }
    .project-card {
        background: #fbfbf8;
        border: 1px solid var(--color-accent);
        border-top: 3px solid var(--color-primary);
        padding: var(--spacing-4);
    }
    .platform-label {
        color: var(--color-primary);
        margin-bottom: var(--spacing-3);
    }
    .project-card h3 {
        font-size: var(--fontSize-3);
        margin: 0 0 var(--spacing-3);
    }
    .project-card {
        overflow-wrap: anywhere;
    }
    .project-card > :last-child {
        margin-bottom: 0;
    }
    .project-image {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 10;
        object-fit: contain;
        background: #fff;
        margin-bottom: var(--spacing-4);
    }
    .project-message {
        border-left: 2px solid var(--color-primary);
        background: #fbfbf8;
        padding: var(--spacing-4);
    }
    .contact-section {
        padding-top: 0;
    }
    .contact-panel {
        border: 1px solid var(--color-accent);
        background: #eef0f9;
        padding: var(--spacing-6);
        display: flex;
        align-items: center;
        gap: var(--spacing-6);
    }
    .contact-panel > div:first-child {
        flex: 1;
    }
    .contact-panel h2 {
        font-size: var(--fontSize-4);
    }
    .contact-panel p:last-child {
        margin-bottom: 0;
    }
    .contact-panel .page-button {
        display: inline-block;
        text-align: center;
    }
    @media (max-width: 700px) {
        .intro-bottom,
        .project-grid {
            grid-template-columns: 1fr;
        }
        .intro {
            padding-top: var(--spacing-8);
        }
        .brand-logo {
            max-width: 24rem;
            margin-inline: auto;
        }
        .note {
            padding: var(--spacing-3) var(--spacing-4);
        }
        .contact-panel {
            flex-direction: column;
            align-items: flex-start;
            padding: var(--spacing-4);
        }
    }
`;
