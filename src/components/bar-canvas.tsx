import { createEffect, onCleanup } from "solid-js";
import { styled } from "solid-styled-components";

type Bar = {
    prev: number;
    target: number;
    start: number;
    duration: number;
    color: string;
};
type Props = { width: number; height: number; id?: string };

const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const MAX_DPR = 2;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const randomColor = (alpha = 0.9) => {
    const r = Math.floor(Math.random() * 200) + 30;
    const g = Math.floor(Math.random() * 200) + 30;
    const b = Math.floor(Math.random() * 200) + 30;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const BarCanvas = (props: Props) => {
    let canvasRef: HTMLCanvasElement | undefined;
    let barsRef: Bar[] = [];
    let rafRef: number | null = null;
    let dprRef = 1;
    let lastFrame = 0;
    let isVisible = true;

    const stopAnimation = () => {
        if (rafRef) cancelAnimationFrame(rafRef);
        rafRef = null;
    };

    createEffect(() => {
        const width = props.width;
        const height = props.height;
        if (!width || !height) return;
        if (typeof window === "undefined") return;

        const canvas = canvasRef;
        if (!canvas) return;

        if (navigator.userAgent.toLowerCase().includes("jsdom")) return;

        let ctx: CanvasRenderingContext2D | null = null;
        try {
            ctx = canvas.getContext("2d");
        } catch {
            return;
        }
        if (!ctx) return;
        const context = ctx;

        stopAnimation();

        const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
        dprRef = dpr;
        const cssW = width,
            cssH = height;

        canvas.style.width = `${cssW}px`;
        canvas.style.height = `${cssH}px`;
        canvas.width = Math.max(1, Math.floor(cssW * dpr));
        canvas.height = Math.max(1, Math.floor(cssH * dpr));

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);

        const padding = { left: 24, right: 24, top: 12, bottom: 12 };
        const numBars = Math.max(4, Math.floor(cssW / 60));
        const gap = Math.max(6, Math.round(cssW / 200));
        const available =
            cssW - padding.left - padding.right - gap * (numBars - 1);
        const barW = Math.max(6, Math.floor(available / numBars));

        const now = performance.now();
        const maxBarHeight = Math.max(1, cssH - padding.top - padding.bottom);
        barsRef = Array.from({ length: numBars }).map((_, index) => {
            const previous = barsRef[index];
            const h = previous?.target ?? Math.random() * maxBarHeight;
            return {
                prev: h,
                target: h,
                start: now,
                duration: 1200 + Math.random() * 800,
                color: randomColor(0.9),
            } as Bar;
        });

        const gridLines: number[] = [];
        const step = Math.max(20, Math.floor(maxBarHeight / 6));
        for (let y = padding.top; y <= cssH - padding.bottom; y += step) {
            gridLines.push(y + 0.5);
        }

        const totalWidth = numBars * barW + (numBars - 1) * gap;
        const startX =
            padding.left +
            Math.max(0, (cssW - padding.left - padding.right - totalWidth) / 2);

        const scheduleTargets = () => {
            const tNow = performance.now();
            for (let i = 0; i < barsRef.length; i++) {
                const b = barsRef[i];
                const elapsed = Math.max(0, tNow - b.start);
                const t = Math.min(
                    1,
                    b.duration > 0 ? elapsed / b.duration : 1,
                );
                const curr = b.prev + (b.target - b.prev) * easeOutCubic(t);
                b.prev = curr;
                b.target = Math.random() * maxBarHeight;
                b.start = tNow;
                b.duration = 1800 + Math.random() * 1200;
                if (Math.random() > 0.6) b.color = randomColor(0.9);
            }
        };

        const interval = window.setInterval(scheduleTargets, 3000);

        const draw = () => {
            const nowDraw = performance.now();
            rafRef = requestAnimationFrame(draw);

            if (!isVisible || document.visibilityState === "hidden") return;
            if (nowDraw - lastFrame < FRAME_INTERVAL) return;
            lastFrame = nowDraw;

            context.setTransform(1, 0, 0, 1, 0, 0);
            context.scale(dprRef, dprRef);
            context.clearRect(0, 0, cssW, cssH);

            context.save();
            context.globalAlpha = 0.06;
            context.strokeStyle = "#000";
            context.lineWidth = 1;
            for (const y of gridLines) {
                context.beginPath();
                context.moveTo(padding.left, y);
                context.lineTo(cssW - padding.right, y);
                context.stroke();
            }
            context.restore();

            for (let i = 0; i < barsRef.length; i++) {
                const b = barsRef[i];
                const elapsed = Math.max(0, nowDraw - b.start);
                const t = Math.min(
                    1,
                    b.duration > 0 ? elapsed / b.duration : 1,
                );
                const h = b.prev + (b.target - b.prev) * easeOutCubic(t);
                const x = startX + i * (barW + gap);
                const y = cssH - padding.bottom - h;

                context.fillStyle = b.color;
                context.fillRect(x, y, barW, h);

                const sweep = Math.sin(nowDraw / 800 + i) * 0.5 + 0.5;
                context.globalAlpha = 0.15 * sweep;
                context.fillStyle = "#ffffff";
                context.fillRect(x, y, barW * 0.6, Math.max(2, h * 0.2));

                context.globalAlpha = 0.6 * (1 - h / maxBarHeight);
                context.fillStyle = "rgba(255,255,255,0.6)";
                context.fillRect(x, y, barW, Math.min(6, h));
                context.globalAlpha = 1;
            }
        };

        const observer =
            typeof IntersectionObserver !== "undefined"
                ? new IntersectionObserver(([entry]) => {
                      isVisible = entry?.isIntersecting ?? true;
                  })
                : null;
        observer?.observe(canvas);

        rafRef = requestAnimationFrame(draw);

        onCleanup(() => {
            observer?.disconnect();
            stopAnimation();
            clearInterval(interval);
        });
    });

    return <StyledCanvas id={props.id ?? "bar-canvas"} ref={canvasRef} />;
};

const StyledCanvas = styled.canvas`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    pointer-events: none;
    opacity: 0.18;
    background: transparent;
    width: 100vw;
`;

export default BarCanvas;
