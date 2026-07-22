import { A } from "@solidjs/router";
import { createResource, Show, For } from "solid-js";
import { styled } from "solid-styled-components";
import { fetchPosts, type SanityPost } from "~/lib/sanity";

const HOME_POST_LIMIT = 4;

export const ProjectsSection = () => {
    const [state] = createResource(async () => {
        try {
            return {
                posts: await fetchPosts(HOME_POST_LIMIT),
                error: null as Error | null,
            };
        } catch (error) {
            return { posts: [] as SanityPost[], error: error as Error };
        }
    });
    const hasError = () => !!state()?.error;
    const hasPosts = () => (state()?.posts ?? []).length > 0;

    return (
        <StyledSection>
            <h2 class="section-title">Latest Projects</h2>
            <Show when={state.loading}>
                <p style={{ "text-align": "center" }}>Loading...</p>
            </Show>
            <Show when={hasError()}>
                <p style={{ "text-align": "center" }}>
                    Projects are temporarily unavailable.
                </p>
            </Show>
            <Show when={hasPosts()}>
                <div class="grid">
                    <For each={state()?.posts}>
                        {(post: SanityPost) => (
                            <A href={`/projects/${post.slug.current}`} class="card">
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
                                            alt={post.imageAlt ?? post.title}
                                            loading="lazy"
                                        />
                                    </div>
                                </Show>
                                <div class="card-body">
                                    <time dateTime={post.publishedAt}>
                                        {formatPostDate(post.publishedAt)}
                                    </time>
                                    <h3>{post.title}</h3>
                                    <Show when={post.summary}>
                                        <p>{post.summary}</p>
                                    </Show>
                                </div>
                            </A>
                        )}
                    </For>
                </div>
                <div class="cta">
                    <A href="/projects" class="view-all">
                        View All Projects
                    </A>
                </div>
            </Show>
        </StyledSection>
    );
};

function formatPostDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
}

const StyledSection = styled.section`
    max-width: var(--layout-width);
    margin: 0 auto var(--spacing-16, 4rem) auto;
    padding: 0 var(--spacing-4, 1rem);

    .section-title {
        text-align: center;
        font-family: var(--fontFamily-display);
        font-size: var(--fontSize-5, 1.5rem);
        margin-bottom: var(--spacing-10, 2.5rem);
        position: relative;

        &::after {
            content: "";
            display: block;
            width: 48px;
            height: 3px;
            background: var(--color-primary);
            margin: var(--spacing-3, 0.75rem) auto 0;
            border-radius: 2px;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: var(--spacing-8, 2rem);
    }

    .card {
        background: rgba(255, 255, 255, 0.85);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease;
        height: 100%;
        display: flex;
        flex-direction: column;

        /* graph-paper inset grid */
        background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        background-size: 24px 24px;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            border-color: var(--color-primary);
        }
    }

    .card-image {
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background: #eef6ff;
        display: grid;
        place-items: center;

        &.placeholder {
            padding: var(--spacing-6, 1.5rem);
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
    }

    .card:hover .card-image img {
        transform: scale(1.05);
    }

    .card-body {
        padding: var(--spacing-6, 1.5rem);
        flex: 1;

        h3 {
            margin: 0 0 var(--spacing-2, 0.5rem) 0;
            font-size: var(--fontSize-2, 1.1rem);
            font-family: var(--fontFamily-display);
            color: var(--color-heading);
        }

        time {
            display: block;
            color: var(--color-text-light, #666);
            font-size: var(--fontSize-0, 0.875rem);
            margin-bottom: var(--spacing-2, 0.5rem);
        }

        p {
            margin: 0;
            font-size: var(--fontSize-0, 0.875rem);
            color: var(--color-text-light, #666);
            line-height: var(--lineHeight-relaxed, 1.65);
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }

    .cta {
        text-align: center;
        margin-top: var(--spacing-10, 2.5rem);
    }

    .view-all {
        display: inline-block;
        padding: 0.65em 2em;
        font-family: var(--fontFamily-sans);
        font-size: var(--fontSize-1, 1rem);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: 4px;
        text-decoration: none;
        transition:
            background 180ms ease,
            color 180ms ease;

        &:hover {
            background: var(--color-primary);
            color: #fff;
        }
    }
`;
