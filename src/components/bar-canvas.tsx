import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type Bar = {
    prev: number;
    target: number;
    start: number;
    duration: number;
    color: string;
};

type Props = {
    width: number;
    height: number;
    id?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const randomColor = (alpha = 0.9) => {
    const r = Math.floor(Math.random() * 200) + 30; // avoid too-dark
    const g = Math.floor(Math.random() * 200) + 30;
    const b = Math.floor(Math.random() * 200) + 30;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const BarCanvas: React.FC<Props> = ({
    width,
    height,
    id = "bar-canvas",
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const barsRef = useRef<Bar[]>([]);
    const rafRef = useRef<number | null>(null);
    const tickRef = useRef<number | null>(null);
    const dprRef = useRef<number>(1);

    useEffect(() => {
        if (!width || !height) return;
        if (typeof window === "undefined") return;

        const canvas =
            canvasRef.current ??
            (document.getElementById(id) as HTMLCanvasElement | null);
        if (!canvas) return;
        canvasRef.current = canvas;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        dprRef.current = dpr;

        const cssW = width;
        const cssH = height;

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

        // initialize bars
        const now = performance.now();
        barsRef.current = Array.from({ length: numBars }).map(() => {
            const h = Math.random() * (cssH - padding.top - padding.bottom);
            return {
                prev: h,
                target: h,
                start: now,
                duration: 1200 + Math.random() * 800,
                color: randomColor(0.9),
            } as Bar;
        });

        // update targets periodically
        const scheduleTargets = () => {
            const tNow = performance.now();
            for (let i = 0; i < barsRef.current.length; i++) {
                const b = barsRef.current[i];
                // compute current height
                const elapsed = Math.max(0, tNow - b.start);
                const t = Math.min(
                    1,
                    b.duration > 0 ? elapsed / b.duration : 1,
                );
                const curr = b.prev + (b.target - b.prev) * easeOutCubic(t);
                b.prev = curr;
                b.target =
                    Math.random() * (cssH - padding.top - padding.bottom);
                b.start = tNow;
                b.duration = 1800 + Math.random() * 1200;
                // occasionally change color
                if (Math.random() > 0.6) b.color = randomColor(0.9);
            }
        };

        // set initial schedule: change every 3s
        let interval = window.setInterval(scheduleTargets, 3000);

        const draw = () => {
            const nowDraw = performance.now();
            // device pixel scaling
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dprRef.current, dprRef.current);

            // subtle background grid
            ctx.clearRect(0, 0, cssW, cssH);

            // optional faint grid lines
            ctx.save();
            ctx.globalAlpha = 0.06;
            ctx.strokeStyle = "#000";
            ctx.lineWidth = 1;
            const step = Math.max(
                20,
                Math.floor((cssH - padding.top - padding.bottom) / 6),
            );
            for (let y = padding.top; y <= cssH - padding.bottom; y += step) {
                ctx.beginPath();
                ctx.moveTo(padding.left, y + 0.5);
                ctx.lineTo(cssW - padding.right, y + 0.5);
                ctx.stroke();
            }
            ctx.restore();

            const totalWidth = numBars * barW + (numBars - 1) * gap;
            let startX =
                padding.left +
                Math.max(
                    0,
                    (cssW - padding.left - padding.right - totalWidth) / 2,
                );

            for (let i = 0; i < barsRef.current.length; i++) {
                const b = barsRef.current[i];
                const elapsed = Math.max(0, nowDraw - b.start);
                const t = Math.min(
                    1,
                    b.duration > 0 ? elapsed / b.duration : 1,
                );
                const h = b.prev + (b.target - b.prev) * easeOutCubic(t);

                const x = startX + i * (barW + gap);
                const y = cssH - padding.bottom - h;

                // draw main bar
                ctx.save();
                ctx.fillStyle = b.color;
                // slight vertical gradient for depth
                const g = ctx.createLinearGradient(
                    x,
                    y,
                    x,
                    cssH - padding.bottom,
                );
                g.addColorStop(0, b.color);
                g.addColorStop(1, "rgba(0,0,0,0.06)");
                ctx.fillStyle = g;
                ctx.fillRect(x, y, barW, h);
                ctx.restore();

                // shimmer overlay: moving light sweep
                ctx.save();
                const sweep = Math.sin(nowDraw / 800 + i) * 0.5 + 0.5; // 0..1
                ctx.globalAlpha = 0.15 * sweep;
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(x, y, barW * 0.6, Math.max(2, h * 0.2));
                ctx.restore();

                // small top highlight
                ctx.save();
                ctx.globalAlpha =
                    0.6 * (1 - h / (cssH - padding.top - padding.bottom));
                ctx.fillStyle = "rgba(255,255,255,0.6)";
                ctx.fillRect(x, y, barW, Math.min(6, h));
                ctx.restore();
            }

            rafRef.current = requestAnimationFrame(draw);
        };

        rafRef.current = requestAnimationFrame(draw);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
            clearInterval(interval);
        };
    }, [width, height, id]);

    // console.log("Rendering BarCanvas", { width, height });
    return <StyledCanvas id={id} ref={canvasRef} />;
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
    height: ${props => props.height}px;
`;

export default BarCanvas;
