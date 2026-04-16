import { Title, Meta } from "@solidjs/meta";
import { Show, For } from "solid-js";
import { siteMetadata } from "../../site-config";

interface SeoProps {
  description?: string;
  lang?: string;
  meta?: { name?: string; property?: string; content: string }[];
  title?: string;
  image?: string;
}

export default function Seo(props: SeoProps) {
  const description = () => props.description || siteMetadata.description;
  const title = () => props.title || "jordanrhea.com";
  const defaultTitle = siteMetadata.title;
  const fullTitle = () => defaultTitle ? `${title()} | ${defaultTitle}` : title();

  return (
    <>
      <Title>{fullTitle()}</Title>
      <Meta name="description" content={description()} />
      <Meta property="og:title" content={title()} />
      <Meta property="og:description" content={description()} />
      <Meta property="og:type" content="website" />
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:creator" content={siteMetadata.social?.twitter || ""} />
      <Meta name="twitter:title" content={title()} />
      <Meta name="twitter:description" content={description()} />
      <Show when={props.image}>
        <Meta property="og:image" content={props.image!} />
        <Meta name="twitter:image" content={props.image!} />
      </Show>
      <For each={props.meta || []}>
        {(m) => (
          <Show when={m.name || m.property}>
            <Meta {...(m.name ? { name: m.name } : {})} {...(m.property ? { property: m.property } : {})} content={m.content} />
          </Show>
        )}
      </For>
    </>
  );
}
