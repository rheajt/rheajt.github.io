import { A, useNavigate } from "@solidjs/router";
import { createSignal, onMount, onCleanup, For, Show } from "solid-js";
import { styled } from "solid-styled-components";
import { LinkButton } from "./link-button";
import { links } from "../utils/links";

export const BasicHeader = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div class="container">
        <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
          <img src="/content/img/jr-icon.png" width={36} height={36} alt="jordan rhea header" />
        </div>
      </div>
    </StyledHeader>
  );
};

export const Header = (props: { pathname: string; showLinks?: boolean }) => {
  const [openDropdown, setOpenDropdown] = createSignal<string | null>(null);
  const showLinks = () => props.showLinks !== false;

  onMount(() => {
    function handleResize() {
      if (window.innerWidth > 768) setOpenDropdown(null);
    }
    window.addEventListener("resize", handleResize);
    onCleanup(() => window.removeEventListener("resize", handleResize));
  });

  return (
    <StyledHeader>
      <div class="container">
        <A href="/">
          <img src="/content/img/jr-icon.png" width={36} height={36} alt="jordan rhea header" />
        </A>
        <nav class={showLinks() ? "" : "is-hidden"}>
          <div class="page-links">
            <For each={links}>
              {(link: any) => {
                const hasChildren = Array.isArray(link.children) && link.children.length > 0;
                const isActive = () => props.pathname.includes(link.to) || (hasChildren && link.children.some((c: any) => props.pathname.includes(c.to)));

                return (
                  <Show when={hasChildren} fallback={
                    <A data-label={link.name} class={`page-link sans ${isActive() ? "active" : ""}`} href={`/${link.to}`} onClick={() => setOpenDropdown(null)}>
                      <span class="label">{link.name}</span>
                    </A>
                  }>
                    <div class={`page-link-with-dropdown ${isActive() ? "active" : ""} ${openDropdown() === link.to ? "is-open" : ""}`}>
                      <A data-label={link.name} class={`page-link sans ${isActive() ? "active" : ""}`} href={`/${link.to}`}
                        onClick={(e) => {
                          if (window.innerWidth <= 768) {
                            if (openDropdown() === link.to) { setOpenDropdown(null); return; }
                            e.preventDefault();
                            setOpenDropdown(link.to);
                          }
                        }}>
                        <span class="label">{link.name}</span>
                      </A>
                      <div class="dropdown">
                        <For each={link.children}>
                          {(child: any) => (
                            <A href={`/${child.to}`} class={`dropdown-item sans ${props.pathname.includes(child.to) ? "active" : ""}`} onClick={() => setOpenDropdown(null)}>
                              <span class="label">{child.name}</span>
                            </A>
                          )}
                        </For>
                      </div>
                    </div>
                  </Show>
                );
              }}
            </For>
          </div>
          <LinkButton pathname={props.pathname} href="/contact" label="Contact" />
        </nav>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 1em;

  .container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  nav.is-hidden { display: none; }

  a {
    background: none;
    text-decoration: none;
    color: var(--color-text);
  }

  nav {
    display: flex;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    justify-content: space-between;
    width: 100%;
    margin-left: 1em;

    a {
      padding: 0 1em;
      display: inline-block;
      position: relative;
      transition: font-weight 0.5s linear;

      &::after {
        content: attr(data-label);
        font-weight: 700;
        visibility: hidden;
        display: block;
        height: 0;
        overflow: hidden;
        pointer-events: none;
      }

      .label {
        font-weight: 400;
        transition: font-weight 0.05s linear;
      }

      &:hover .label { font-weight: 700; }
      &.active .label { font-weight: 700; }
    }

    .page-links {
      display: flex;
      align-items: center;
    }

    .page-link-with-dropdown {
      position: relative;
      display: flex;
      align-content: center;
    }

    .dropdown {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      position: absolute;
      top: 100%;
      left: 100%;
      transform: translateX(-50%) translateY(6px);
      background: var(--color-background, #fff);
      border-radius: 4px;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
      min-width: 180px;
      padding: 0.25em 0;
      z-index: 10;
      transition: opacity 160ms ease, transform 160ms ease;
    }

    .page-link-with-dropdown:hover .dropdown,
    .page-link-with-dropdown .dropdown:hover,
    .page-link-with-dropdown.is-open .dropdown {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translateX(-50%) translateY(0);
    }

    .dropdown-item {
      display: block;
      padding: 0.5em 1em;
      text-decoration: none;
      color: var(--color-text);
      white-space: nowrap;
    }

    .dropdown-item:hover { background: rgba(0, 0, 0, 0.04); }
  }
`;
