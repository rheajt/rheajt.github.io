import { useParams, A } from "@solidjs/router";
import { createResource, Show, Suspense, For } from "solid-js";
import { styled } from "solid-styled-components";
import Layout from "~/components/layout";
import { Loader } from "~/components/loader";
import { PortableText } from "~/components/portable-text";
import Seo from "~/components/seo";
import NotFound from "~/routes/[...404]";
import { fetchPostBySlug, type SanityPost } from "~/lib/sanity";
import { siteMetadata } from "~/site-config";

export default function ProjectDetail() {
    const params = useParams();
    const [post] = createResource(
        () => params.slug,
        slug => fetchPostBySlug(slug),
    );
    const canonical = () => `${siteMetadata.siteUrl}/projects/${params.slug}`;
    const description = () => post()?.seo?.description ?? post()?.summary;
    const image = () => post()?.seo?.imageUrl ?? post()?.imageUrl;

    return (
        <Suspense fallback={<Loader />}>
            <Show
                when={post.error}
                fallback={
                    <Show
                        when={post()}
                        fallback={
                            <Show when={!post.loading}>
                                <NotFound />
                            </Show>
                        }
                    >
                        {project => <ProjectContent post={project()} />}
                    </Show>
                }
            >
                <RouteFailure />
            </Show>
        </Suspense>
    );

    function ProjectContent(props: { post: SanityPost }) {
        const hasDateOrCategory = () =>
            !!(props.post.publishedAt || props.post.category);

        return (
            <Layout>
                <Seo
                    title={props.post.seo?.title ?? props.post.title}
                    description={description()}
                    image={image()}
                    canonical={canonical()}
                    type="article"
                />
                <ArticleContainer>
                    <ContextNav>
                        <ContextLink href="/projects">
                            ← Back to projects
                        </ContextLink>
                    </ContextNav>

                    <ArticleHero>
                        <Show when={hasDateOrCategory()}>
                            <div class="metadata">
                                <Show when={props.post.publishedAt}>
                                    <time dateTime={props.post.publishedAt}>
                                        {formatPostDate(props.post.publishedAt)}
                                    </time>
                                </Show>
                                <Show
                                    when={
                                        props.post.publishedAt &&
                                        props.post.category
                                    }
                                >
                                    <span class="divider">•</span>
                                </Show>
                                <Show when={props.post.category}>
                                    <span class="category">
                                        {props.post.category}
                                    </span>
                                </Show>
                            </div>
                        </Show>
                        <h1 class="title">{props.post.title}</h1>
                        <Show when={props.post.summary}>
                            <p class="dek">{props.post.summary}</p>
                        </Show>
                    </ArticleHero>

                    <Show when={props.post.imageUrl}>
                        <HeroImage>
                            <img
                                src={props.post.imageUrl}
                                alt={props.post.imageAlt ?? props.post.title}
                                class="hero-img"
                            />
                        </HeroImage>
                    </Show>

                    <ArticleBody>
                        <PortableText value={props.post.body} />
                    </ArticleBody>

                    <Show when={props.post.tags && props.post.tags.length > 0}>
                        <ArticleFooter>
                            <div class="tags">
                                <For each={props.post.tags}>
                                    {tag => (
                                        <span class="tag">{tag.label}</span>
                                    )}
                                </For>
                            </div>
                        </ArticleFooter>
                    </Show>
                </ArticleContainer>
            </Layout>
        );
    }
}

function RouteFailure() {
    return (
        <Layout>
            <NotFoundContainer>
                <ContextLink href="/projects">← Back to projects</ContextLink>
                <div class="content">
                    <h1>Unable to load project</h1>
                    <p>Please try again later.</p>
                    <A href="/projects" class="btn">
                        View all projects
                    </A>
                </div>
            </NotFoundContainer>
        </Layout>
    );
}

function formatPostDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
}

const ArticleContainer = styled.article`
    max-width: var(--layout-width);
    margin: 0 auto;
    padding: var(--spacing-12) 0 var(--spacing-20);

    @media (max-width: 768px) {
        padding: var(--spacing-12) 1em var(--spacing-12);
    }
`;

const ContextNav = styled.nav`
    margin-bottom: var(--spacing-10);
`;

const ContextLink = styled(A)`
    color: var(--color-text-light);
    text-decoration: none;
    font-size: var(--fontSize-1);
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
        color: var(--color-primary);
    }
`;

const ArticleHero = styled.header`
    margin-bottom: var(--spacing-10);

    .metadata {
        display: flex;
        align-items: center;
        gap: var(--spacing-3);
        margin-bottom: var(--spacing-6);
        font-family: var(--font-heading);
        font-size: var(--fontSize-1);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-primary);

        .divider {
            color: var(--color-accent);
        }

        .category {
            color: var(--color-text-light);
        }
    }

    .title {
        font-size: clamp(var(--fontSize-6), 5vw, var(--fontSize-8, 3.583rem));
        line-height: 1.1;
        margin-bottom: var(--spacing-6);
        letter-spacing: -0.03em;
        max-width: 20ch;
    }

    .dek {
        font-size: var(--fontSize-3);
        line-height: 1.5;
        color: var(--color-text-light);
        max-width: 35ch;
    }
`;

const HeroImage = styled.figure`
    margin: 0 0 var(--spacing-12);

    img.hero-img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        display: block;
    }
`;

const ArticleBody = styled.div`
    max-width: 65ch;
    margin: 0 auto;
    font-size: var(--fontSize-2);
    line-height: 1.7;

    p {
        margin-bottom: var(--spacing-6);
    }

    h2 {
        font-size: var(--fontSize-5);
        margin-top: var(--spacing-12);
        margin-bottom: var(--spacing-5);
    }

    h3 {
        font-size: var(--fontSize-4);
        margin-top: var(--spacing-8);
        margin-bottom: var(--spacing-4);
    }

    ul,
    ol {
        margin-bottom: var(--spacing-6);
        padding-left: var(--spacing-6);
    }

    li {
        margin-bottom: var(--spacing-2);
    }

    blockquote {
        border-left: 4px solid var(--color-primary);
        padding-left: var(--spacing-4);
        margin-left: 0;
        margin-right: 0;
        margin-bottom: var(--spacing-6);
        font-style: italic;
        color: var(--color-text-light);
    }

    figure {
        margin: var(--spacing-10) 0;

        img {
            border-radius: 8px;
            width: 100%;
            height: auto;
        }

        figcaption {
            padding: var(--spacing-3) 0;
            font-size: var(--fontSize-0);
            color: var(--color-text-light);
            text-align: center;
        }
    }
`;

const ArticleFooter = styled.footer`
    max-width: 65ch;
    margin: var(--spacing-12) auto 0;
    padding-top: var(--spacing-8);
    border-top: 1px solid var(--color-accent);

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-3);
    }

    .tag {
        font-size: var(--fontSize-0);
        padding: var(--spacing-1) var(--spacing-3);
        background: rgba(40, 53, 151, 0.08);
        color: var(--color-primary);
        border-radius: 20px;
        font-weight: 500;
    }
`;

const NotFoundContainer = styled.div`
    max-width: var(--layout-width);
    margin: 0 auto;
    padding: var(--spacing-10) 1em;
    min-height: 60vh;
    display: flex;
    flex-direction: column;

    .content {
        margin: auto 0;

        h1 {
            font-size: var(--fontSize-6);
            margin-bottom: var(--spacing-4);
            color: var(--color-heading-black);
        }

        p {
            font-size: var(--fontSize-3);
            color: var(--color-text-light);
            margin-bottom: var(--spacing-8);
        }

        .btn {
            display: inline-block;
            background: var(--color-primary);
            color: #fff;
            padding: var(--spacing-3) var(--spacing-6);
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.2s;

            &:hover {
                transform: translateY(-2px);
            }
        }
    }
`;
