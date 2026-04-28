import { For } from "solid-js";
import { styled } from "solid-styled-components";
import { FaSolidFilePdf } from "solid-icons/fa";
import Layout from "~/components/layout";
import Seo from "~/components/seo";
import { Section } from "~/components/section";
import { getResumeData } from "~/utils/yaml";
import { downloadResumePdf } from "~/utils/resume-pdf";

const resume = getResumeData();

export default function Resume() {
    return (
        <Layout>
            <Seo title="Resume" />
            <Section>
                <ResumePage>
                    <header class="resume-hero">
                        <button
                            class="download-button"
                            type="button"
                            onClick={() => downloadResumePdf(resume)}
                        >
                            <FaSolidFilePdf aria-hidden="true" />
                            Download PDF
                        </button>
                        <p class="eyebrow">Resume</p>
                        <h1>{resume.name}</h1>
                        <p class="headline">{resume.headline}</p>
                        <p class="tagline">{resume.tagline}</p>
                        <p class="location">{resume.location}</p>
                        <div class="links">
                            <For each={resume.links}>
                                {link => (
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {link.label}
                                    </a>
                                )}
                            </For>
                        </div>
                    </header>

                    <ResumeSection title="Summary">
                        <For each={resume.summary}>{item => <p>{item}</p>}</For>
                    </ResumeSection>

                    <ResumeSection title="Experience">
                        <div class="timeline">
                            <For each={resume.experience}>
                                {job => (
                                    <article class="job">
                                        <div>
                                            <h3>{job.role}</h3>
                                            <p class="meta">
                                                {job.organization} ·{" "}
                                                {job.location} · {job.period}
                                            </p>
                                        </div>
                                        <ul>
                                            <For each={job.highlights}>
                                                {highlight => (
                                                    <li>{highlight}</li>
                                                )}
                                            </For>
                                        </ul>
                                    </article>
                                )}
                            </For>
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Selected Projects">
                        <div class="pill-list">
                            <For each={resume.projects}>
                                {project => <span>{project}</span>}
                            </For>
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Skills">
                        <div class="pill-list compact">
                            <For each={resume.skills}>
                                {skill => <span>{skill}</span>}
                            </For>
                        </div>
                    </ResumeSection>

                    <ResumeSection title="Background">
                        <ul>
                            <For each={resume.background}>
                                {item => <li>{item}</li>}
                            </For>
                        </ul>
                    </ResumeSection>

                    <ResumeSection title="Source Notes">
                        <ul class="source-notes">
                            <For each={resume.sourceNotes}>
                                {note => <li>{note}</li>}
                            </For>
                        </ul>
                    </ResumeSection>
                </ResumePage>
            </Section>
        </Layout>
    );
}

const ResumeSection = (props: { title: string; children: any }) => (
    <section class="resume-section">
        <h2>{props.title}</h2>
        {props.children}
    </section>
);

const ResumePage = styled.div`
    .resume-hero {
        position: relative;
        border-left: 3px solid var(--color-primary);
        padding-left: var(--spacing-6);
        margin-bottom: var(--spacing-12);
    }

    .download-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: center;
        border: 1px solid var(--color-primary);
        border-radius: 999px;
        background: var(--color-primary);
        color: #fff;
        cursor: pointer;
        font: inherit;
        font-weight: 700;
        padding: 0.5rem 1rem;
        margin-bottom: var(--spacing-4);
        transition:
            background 160ms ease,
            transform 160ms ease;

        &:hover {
            background: #3a4ab0;
            transform: translateY(-1px);
        }
    }

    .eyebrow,
    .meta,
    .location,
    .source-notes {
        color: var(--color-text-light);
    }

    .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: var(--fontSize-0);
        margin-bottom: var(--spacing-2);
    }

    h1 {
        margin-bottom: var(--spacing-3);
    }

    .headline {
        font-family: var(--fontFamily-display);
        font-size: var(--fontSize-3);
        color: var(--color-heading);
        margin-bottom: var(--spacing-3);
    }

    .tagline {
        margin-bottom: var(--spacing-2);
    }

    .links,
    .pill-list {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-3);
    }

    .links a,
    .pill-list span {
        border: 1px solid var(--color-primary);
        border-radius: 999px;
        padding: 0.35rem 0.75rem;
        text-decoration: none;
    }

    .links a {
        color: var(--color-primary);
    }

    .resume-section {
        margin-bottom: var(--spacing-12);
    }

    .timeline {
        display: grid;
        gap: var(--spacing-8);
    }

    .job {
        border-bottom: 1px solid var(--color-border, rgba(0, 0, 0, 0.1));
        padding-bottom: var(--spacing-6);
    }

    .job:last-child {
        border-bottom: 0;
    }

    .job h3 {
        margin-bottom: var(--spacing-2);
    }

    .compact {
        gap: var(--spacing-2);
    }

    .compact span {
        font-size: var(--fontSize-0);
    }
`;
