import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import { styled } from "~/lib/styled";
import type { SanityPost } from "~/lib/sanity";
import { formatPublishedDate } from "~/utils/formatPublishedDate";

export function ProjectCard(props: { post: SanityPost; href?: string }) {
    const content = () => (
        <>
            <Show
                when={props.post.imageUrl}
                fallback={
                    <div class="card-image placeholder">
                        <span>{props.post.title}</span>
                    </div>
                }
            >
                <div class="card-image">
                    <img
                        src={props.post.imageUrl}
                        alt={props.post.imageAlt ?? props.post.title}
                        loading="lazy"
                    />
                </div>
            </Show>
            <div class="card-body">
                <Show when={formatPublishedDate(props.post.publishedAt)}>
                    {date => (
                        <time dateTime={props.post.publishedAt ?? undefined}>
                            {date()}
                        </time>
                    )}
                </Show>
                <h3>{props.post.title}</h3>
                <Show when={props.post.summary}>
                    <p>{props.post.summary}</p>
                </Show>
                <Show when={props.post.tags?.length}>
                    <div class="tags">
                        <For each={props.post.tags}>
                            {tag => <span class="tag">{tag.label}</span>}
                        </For>
                    </div>
                </Show>
            </div>
        </>
    );

    return (
        <Show when={props.href} fallback={<Card>{content()}</Card>}>
            {href => (
                <Card as={A} href={href()}>
                    {content()}
                </Card>
            )}
        </Show>
    );
}

const Card = styled.article<{ href?: string }>`
    background: #fff;
    border: 1px solid var(--color-accent);
    border-radius: 4px;
    overflow: hidden;
    min-width: 0;
    overflow-wrap: anywhere;
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;

    &[href] {
        transition:
            transform 150ms ease,
            box-shadow 150ms ease;
    }
    &[href]:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    }
    &[href]:focus-visible {
        outline: 3px solid var(--color-primary);
        outline-offset: 4px;
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
        }
    }
    &[href] .card-image img {
        transition: transform 0.4s ease;
    }
    &[href] .card-image:hover img {
        transform: scale(1.05);
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
