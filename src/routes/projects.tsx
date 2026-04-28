import { createResource, For, Show, Suspense } from "solid-js";
import { styled } from "solid-styled-components";
import Layout from "~/components/layout";
import Seo from "~/components/seo";
import { Section } from "~/components/section";
import { fetchPosts, type SanityPost } from "~/lib/sanity";
import { Loader } from "~/components/loader";

export default function Projects() {
    const [state] = createResource(async () => {
        try {
            return { posts: await fetchPosts(), error: null as Error | null };
        } catch (error) {
            return { posts: [], error: error as Error };
        }
    });
    const hasError = () => !!state()?.error;
    const hasPosts = () => (state()?.posts ?? []).length > 0;

    return (
        <Suspense fallback={<Loader />}>
            <Layout>
                <Seo title="Projects" />
                <Section>
                    <h1>Projects</h1>
                    <Show when={hasError()}>
                        <p>Failed to load projects. Please try again later.</p>
                    </Show>
                    <Show when={hasPosts()}>
                        <ProjectGrid>
                            <For each={state()?.posts}>
                                {(post: SanityPost) => (
                                    <ProjectCard>
                                        <Show
                                            when={post.imageUrl}
                                            fallback={
                                                <div class="card-image placeholder">
                                                    <span>{post.title}</span>
                                                </div>
                                            }
                                        >
                                            <div class="card-image">
                                                <img
                                                    src={post.imageUrl}
                                                    alt={
                                                        post.imageAlt ??
                                                        post.title
                                                    }
                                                    loading="lazy"
                                                />
                                            </div>
                                        </Show>
                                        <div class="card-body">
                                            <time dateTime={post.publishedAt}>
                                                {formatPostDate(
                                                    post.publishedAt,
                                                )}
                                            </time>
                                            <h3>{post.title}</h3>
                                            <Show when={post.summary}>
                                                <p>{post.summary}</p>
                                            </Show>
                                            <Show
                                                when={
                                                    post.tags &&
                                                    post.tags.length > 0
                                                }
                                            >
                                                <div class="tags">
                                                    <For each={post.tags}>
                                                        {tag => (
                                                            <span class="tag">
                                                                {tag.label}
                                                            </span>
                                                        )}
                                                    </For>
                                                </div>
                                            </Show>
                                        </div>
                                    </ProjectCard>
                                )}
                            </For>
                        </ProjectGrid>
                    </Show>
                    <Show when={!state.loading && !hasError() && !hasPosts()}>
                        <p>No projects found.</p>
                    </Show>
                </Section>
            </Layout>
        </Suspense>
    );
}

function formatPostDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
}

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--spacing-8);
    margin-top: var(--spacing-8);
`;

const ProjectCard = styled.div`
    background: #fff;
    border: 1px solid var(--color-accent);
    border-radius: 4px;
    overflow: hidden;
    color: inherit;
    text-decoration: none;
    transition:
        transform 150ms ease,
        box-shadow 150ms ease;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    }

    .card-image {
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background: #eef6ff;
        display: grid;
        place-items: center;

        &.placeholder {
            padding: var(--spacing-6);
            color: var(--color-primary);
            font-family: var(--fontFamily-display);
            font-weight: 700;
            text-align: center;
            background-image:
                linear-gradient(
                    to right,
                    rgba(40, 53, 151, 0.08) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    rgba(40, 53, 151, 0.08) 1px,
                    transparent 1px
                );
            background-size: 18px 18px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.4s ease;
        }

        &:hover img {
            transform: scale(1.05);
        }
    }

    .card-body {
        padding: var(--spacing-6);
        flex: 1;

        h3 {
            margin-top: 0;
            margin-bottom: var(--spacing-3);
            font-size: var(--fontSize-3);
        }

        time {
            display: block;
            color: var(--color-text-light);
            font-size: var(--fontSize-0);
            margin-bottom: var(--spacing-2);
        }

        p {
            font-size: var(--fontSize-0);
            color: var(--color-text-light);
            margin-bottom: var(--spacing-4);
        }
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-2);
    }

    .tag {
        font-size: 0.75rem;
        padding: 0.15em 0.5em;
        background: rgba(40, 53, 151, 0.08);
        color: var(--color-primary);
        border-radius: 3px;
        font-weight: 500;
    }
`;
