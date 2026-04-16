import { For, Show, Switch, Match } from "solid-js";
import type { JSX } from "solid-js";

interface Block {
  _type: string;
  _key?: string;
  style?: string;
  children?: any[];
  markDefs?: any[];
  listItem?: string;
  asset?: { url?: string };
  altText?: string;
}

function renderSpan(span: any, markDefs: any[] = []): JSX.Element {
  let text: JSX.Element = span.text || "";
  if (span.marks && span.marks.length > 0) {
    for (const markKey of span.marks) {
      if (markKey === "strong") text = <strong>{text}</strong>;
      else if (markKey === "em") text = <em>{text}</em>;
      else if (markKey === "code") text = <code>{text}</code>;
      else {
        const def = markDefs.find((d: any) => d._key === markKey);
        if (def && def._type === "link") {
          const isExternal = /^https?:\/\//.test(def.href || "");
          text = <a href={def.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer noopener" : undefined}>{text}</a>;
        }
      }
    }
  }
  return text;
}

function renderBlock(block: Block): JSX.Element {
  if (block._type === "image") {
    return <Show when={block.asset?.url}><img src={block.asset!.url} alt={block.altText || ""} style={{ "max-width": "100%" }} /></Show>;
  }

  if (block._type !== "block") return null as unknown as JSX.Element;

  const children = (
    <For each={block.children || []}>
      {(child) => renderSpan(child, block.markDefs)}
    </For>
  );

  return (
    <Switch fallback={<p>{children}</p>}>
      <Match when={block.style === "h1"}><h1>{children}</h1></Match>
      <Match when={block.style === "h2"}><h2>{children}</h2></Match>
      <Match when={block.style === "h3"}><h3>{children}</h3></Match>
      <Match when={block.style === "h4"}><h4>{children}</h4></Match>
      <Match when={block.style === "blockquote"}><blockquote>{children}</blockquote></Match>
      <Match when={block.style === "normal" || !block.style}><p>{children}</p></Match>
    </Switch>
  );
}

export const PortableText = (props: { value: any }) => {
  const blocks = () => (Array.isArray(props.value) ? props.value : []);
  return <For each={blocks()}>{(block) => renderBlock(block)}</For>;
};
