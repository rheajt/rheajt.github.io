import { useParams } from "@solidjs/router";
import { createResource, Show, Suspense } from "solid-js";
import Layout from "~/components/layout";
import { Loader } from "~/components/loader";
import { PortableText } from "~/components/portable-text";
import Seo from "~/components/seo";
import { Section } from "~/components/section";
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
                    <Show when={post()} fallback={<NotFound />}>
                        {project => <ProjectContent post={project()} />}
                    </Show>
                }
            >
                <RouteFailure />
            </Show>
        </Suspense>
    );

    function ProjectContent(props: { post: SanityPost }) {
        return (
            <Layout>
                <Seo
                    title={props.post.seo?.title ?? props.post.title}
                    description={description()}
                    image={image()}
                    canonical={canonical()}
                    type="article"
                />
                <Section>
                    <article>
                        <h1>{props.post.title}</h1>
                        <Show when={props.post.publishedAt}>
                            <time dateTime={props.post.publishedAt}>
                                {formatPostDate(props.post.publishedAt)}
                            </time>
                        </Show>
                        <Show when={props.post.summary}>
                            <p>{props.post.summary}</p>
                        </Show>
                        <Show when={props.post.imageUrl}>
                            <img
                                src={props.post.imageUrl}
                                alt={props.post.imageAlt ?? props.post.title}
                            />
                        </Show>
                        <PortableText value={props.post.body} />
                    </article>
                </Section>
            </Layout>
        );
    }
}

function RouteFailure() {
    return (
        <Layout>
            <Section>
                <h1>Unable to load project</h1>
                <p>Please try again later.</p>
            </Section>
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
