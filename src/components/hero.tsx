import { createSignal, createEffect, onCleanup } from "solid-js";
import { styled } from "solid-styled-components";
import { Canvas } from "./canvas";
import { CloudTech } from "./cloud-tech";

export const Hero = () => {
  let refContainer: HTMLDivElement | undefined;
  const [dimensions, setDimensions] = createSignal({ width: 800, height: 300 });

  createEffect(() => {
    const node = refContainer;
    const update = () => {
      if (!node) {
        const w = typeof window !== "undefined" ? Math.round(window.innerWidth) : 800;
        setDimensions({ width: w, height: 300 });
        return;
      }
      const rect = node.getBoundingClientRect();
      const width = typeof window !== "undefined" ? Math.round(window.innerWidth) : Math.round(rect.width);
      setDimensions({ width, height: Math.round(rect.height) });
    };
    update();
    if (typeof window !== "undefined") {
      if (typeof ResizeObserver !== "undefined" && node) {
        const ro = new ResizeObserver(update);
        ro.observe(node);
        window.addEventListener("resize", update);
        onCleanup(() => { ro.disconnect(); window.removeEventListener("resize", update); });
      } else {
        window.addEventListener("resize", update);
        onCleanup(() => window.removeEventListener("resize", update));
      }
    }
  });

  return (
    <StyledHero>
      <Canvas width={dimensions().width} height={dimensions().height} />
      <div class="container" ref={refContainer}>
        <div class="columns">
          <div class="image">
            <img src="/content/img/jordan-rhea-header.png" width={250} height={250} alt="jordan rhea header" style={{ "max-width": "100%", height: "auto" }} />
          </div>
          <div class="caption">
            <h1>I am Jordan Rhea</h1>
            <h6>and I build software for <br /><CloudTech /></h6>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  .container {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
    border-bottom: 1px solid lightgray;
    padding-bottom: 3em;
    padding-top: 3em;

    .image {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .columns {
    margin: 0 auto;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 768px) {
    .columns { grid-template-columns: 1fr 1fr; }
  }

  .caption {
    font-family: var(--fontFamily-sans);
    font-weight: var(--fontWeight-extraBold);
    text-align: center;
    padding-top: 50px;

    h1 { margin: 15px 0; font-weight: 900; letter-spacing: 1px; }
    h6 { font-size: 22px; b { font-weight: 400; } }
  }
`;
