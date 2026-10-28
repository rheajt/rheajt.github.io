import { createResource, For, Show, Suspense } from "solid-js";
import { styled } from "~/lib/styled";
import Layout from "~/components/layout";
import Seo from "~/components/seo";
import { Section } from "~/components/section";
import { fetchPosts, type SanityPost } from "~/lib/sanity";
import { ProjectCard } from "~/components/project-card";
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
                                    <ProjectCard
                                        post={post}
                                        href={`/projects/${post.slug.current}`}
                                    />
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

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
    gap: var(--spacing-8);
    margin-top: var(--spacing-8);
`;
