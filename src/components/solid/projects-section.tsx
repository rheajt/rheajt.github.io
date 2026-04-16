import { A } from "@solidjs/router";
import { Show, For } from "solid-js";
import { styled } from "solid-styled-components";

interface Project { id: string; title: string; slug: string; excerpt: string; imageUrl?: string; tags?: string[]; }
interface Props { projects?: Project[]; }

export const ProjectsSection = (props: Props) => {
  return (
    <Show when={props.projects && props.projects.length > 0}>
      <StyledProjectsSection>
        <div class="container">
          <h4>Projects</h4>
          <div class="row">
            <For each={props.projects}>
              {(p) => (
                <StyledItem>
                  <A href={`/projects/${p.slug}`}>
                    <Show when={p.imageUrl}>
                      <div class="img-post"><img src={p.imageUrl} alt={p.title} /></div>
                    </Show>
                    <div class="cont-post">
                      <span class="tag">{p.title}</span>
                      <p>{p.excerpt}</p>
                    </div>
                  </A>
                </StyledItem>
              )}
            </For>
          </div>
        </div>
      </StyledProjectsSection>
    </Show>
  );
};

const StyledProjectsSection = styled.section`
  margin: 0 auto 4rem auto; max-width: 1080px;
  h4 { text-align: center; }
  .row { display: flex; flex-wrap: wrap; justify-content: space-around; align-items: stretch; }
`;

const StyledItem = styled.div`
  max-width: 350px; flex: 1 1 350px; align-self: stretch; box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.05); display: flex; flex-direction: column;
  &:hover { border: 1px solid var(--color-primary); }
  a { color: var(--color-text); text-decoration: none; display: flex; flex-direction: column; height: 100%; }
  .img-post { position: relative; overflow: hidden; background-color: #eef6ff; flex: 0 0 auto; width: 100%; margin-top: 0; &:hover img { transform: scale(1.2, 1.2); } img { width: 100%; display: block; transition: all 0.5s; } }
  .cont-post { padding: 30px 15px; background: #fff; display: flex; flex-direction: column; flex: 1 1 auto; .tag { margin-bottom: 15px; color: #999; font-weight: 700; } p { margin-bottom: 0.75rem; } }
`;
