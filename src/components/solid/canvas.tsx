import { createEffect, onCleanup } from "solid-js";
import { styled } from "solid-styled-components";

type Point = { x: number; y: number };
type Line = { points: Point[]; color: string; rgb: { r: number; g: number; b: number }; start: number; duration: number; };
type CanvasProps = { height: number; width: number; };

export const Canvas = (props: CanvasProps) => {
  let canvasRef: HTMLCanvasElement | undefined;
  let linesRef: Line[] = [];
  let rafRef: number | null = null;
  let timeoutRef: number | null = null;
  let dprRef = 1;

  createEffect(() => {
    const width = props.width;
    const height = props.height;
    if (!width || !height) return;
    const canvas = canvasRef ?? (document.getElementById("graph-paper") as HTMLCanvasElement | null);
    if (!canvas) return;
    canvasRef = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    dprRef = dpr;
    const cssWidth = width;
    const cssHeight = height;

    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;
    canvas.width = Math.max(1, Math.floor(cssWidth * dpr));
    canvas.height = Math.max(1, Math.floor(cssHeight * dpr));

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    linesRef = [];

    const padding = 12;
    const pointsFor = (w: number) => Math.max(4, Math.floor(w / 80));

    const createLine = (delay = 0) => {
      const count = pointsFor(cssWidth);
      const pts: Point[] = Array.from({ length: count }).map((_, i) => {
        const x = padding + (i / (count - 1)) * (cssWidth - padding * 2);
        const y = cssHeight - (Math.random() * (cssHeight - padding * 2) + padding);
        return { x, y };
      });
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const color = `rgba(${r}, ${g}, ${b}, 0.95)`;
      const line: Line = { points: pts, color, rgb: { r, g, b }, start: performance.now() + delay, duration: Math.max(1000, (pts.length - 1) * 1000) };
      linesRef.push(line);
      if (linesRef.length > 10) linesRef.shift();
      return line;
    };

    createLine();
    const scheduleNext = () => {
      timeoutRef = window.setTimeout(() => { createLine(); scheduleNext(); }, 6000) as unknown as number;
    };
    scheduleNext();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const draw = () => {
      const now = performance.now();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dprRef, dprRef);
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      for (const line of linesRef) {
        const pts = line.points;
        const elapsed = now - line.start;
        const progress = Math.max(0, Math.min(1, elapsed / line.duration));
        const xMax = padding + progress * (cssWidth - padding * 2);

        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          if (pts[i].x <= xMax) { ctx.lineTo(pts[i].x, pts[i].y); }
          else {
            const x0 = pts[i - 1].x, y0 = pts[i - 1].y, x1 = pts[i].x, y1 = pts[i].y;
            const frac = (xMax - x0) / (x1 - x0);
            ctx.lineTo(xMax, y0 + frac * (y1 - y0));
            break;
          }
        }

        ctx.save();
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.globalAlpha = 0.95;
        ctx.stroke();
        ctx.restore();

        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          const nodeRel = (p.x - padding) / (cssWidth - padding * 2);
          const nodeRevealTime = line.start + nodeRel * line.duration;
          const nodeElapsed = now - nodeRevealTime;
          if (nodeElapsed < 0) break;

          const tNode = Math.max(0, Math.min(1, nodeElapsed / 1000));
          const scaleFactor = 0.8;
          const baseRadius = 3 * scaleFactor;
          const maxRadius = 7 * scaleFactor;
          const rAnim = baseRadius + (maxRadius - baseRadius) * easeOutCubic(tNode);

          const shimmerOsc = 0.4 + 0.6 * Math.abs(Math.sin((now + i * 150) / 300));
          const shimmerAlpha = Math.max(0, (1 - tNode) * 0.8 + 0.12 * shimmerOsc);
          const glowRadius = rAnim * 4;
          const { r, g, b } = line.rgb;

          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
          grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${Math.min(0.7, shimmerAlpha)})`);
          grad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${Math.min(0.18, shimmerAlpha * 0.3)})`);
          grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          ctx.beginPath();
          ctx.fillStyle = line.color;
          ctx.arc(p.x, p.y, rAnim, 0, Math.PI * 2);
          ctx.fill();

          const highlightAlpha = 0.35 * (1 - tNode) + 0.12 * Math.abs(Math.sin(now / 200 + i));
          if (highlightAlpha > 0.02) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,255,255,${Math.min(0.6, highlightAlpha)})`;
            ctx.arc(p.x - rAnim * 0.3, p.y - rAnim * 0.3, Math.max(1, rAnim * 0.4), 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      rafRef = requestAnimationFrame(draw);
    };

    rafRef = requestAnimationFrame(draw);

    onCleanup(() => {
      if (timeoutRef) { clearTimeout(timeoutRef); timeoutRef = null; }
      if (rafRef) { cancelAnimationFrame(rafRef); rafRef = null; }
    });
  });

  return <StyledCanvas ref={canvasRef} id="graph-paper" width={props.width} height={props.height} />;
};

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  pointer-events: none;
  opacity: 0.25;
  background: transparent;
  width: 100vw;
`;
