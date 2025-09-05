import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type Point = { x: number; y: number };

type Line = {
    points: Point[];
    color: string;
    rgb: { r: number; g: number; b: number };
    start: number;
    duration: number;
};

type CanvasProps = {
    height: number;
    width: number;
};

export const Canvas = ({ width, height }: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const linesRef = useRef<Line[]>([]);
    const rafRef = useRef<number | null>(null);
    const timeoutRef = useRef<number | null>(null);
    const dprRef = useRef<number>(1);

    useEffect(() => {
        if (!width || !height) return;
        const canvas =
            canvasRef.current ??
            (document.getElementById(
                "graph-paper",
            ) as HTMLCanvasElement | null);
        if (!canvas) return;
        canvasRef.current = canvas;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        dprRef.current = dpr;
        const cssWidth = width;
        const cssHeight = height;

        canvas.style.width = `${cssWidth}px`;
        canvas.style.height = `${cssHeight}px`;
        canvas.width = Math.max(1, Math.floor(cssWidth * dpr));
        canvas.height = Math.max(1, Math.floor(cssHeight * dpr));

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);

        // reset and prepare lines
        linesRef.current = [];

        const padding = 12;
        const pointsFor = (w: number) => Math.max(4, Math.floor(w / 80));

        const createLine = (delay = 0) => {
            const count = pointsFor(cssWidth);
            const pts: Point[] = Array.from({ length: count }).map((_, i) => {
                const x =
                    padding + (i / (count - 1)) * (cssWidth - padding * 2);
                const y =
                    cssHeight -
                    (Math.random() * (cssHeight - padding * 2) + padding);
                return { x, y };
            });
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const color = `rgba(${r}, ${g}, ${b}, 0.95)`;
            const line: Line = {
                points: pts,
                color,
                rgb: { r, g, b },
                start: performance.now() + delay,
                duration: Math.max(1000, (pts.length - 1) * 1000),
            };
            linesRef.current.push(line);
            // if adding this line exceeds 10, remove the oldest so max is 10
            if (linesRef.current.length > 10) {
                linesRef.current.shift();
            }
            return line;
        };

        // start first line, then schedule subsequent lines every 6s
        createLine();
        const scheduleNext = () => {
            timeoutRef.current = window.setTimeout(() => {
                createLine();
                scheduleNext();
            }, 6000) as unknown as number;
        };
        scheduleNext();

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        // draw loop
        const draw = () => {
            const now = performance.now();
            // reset transform and scale for devicePixelRatio
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dprRef.current, dprRef.current);
            ctx.clearRect(0, 0, cssWidth, cssHeight);

            for (const line of linesRef.current) {
                const pts = line.points;
                const elapsed = now - line.start;
                const progress = Math.max(
                    0,
                    Math.min(1, elapsed / line.duration),
                );
                const xMax = padding + progress * (cssWidth - padding * 2);

                // path up to xMax
                ctx.beginPath();
                ctx.moveTo(pts[0].x, pts[0].y);
                for (let i = 1; i < pts.length; i++) {
                    if (pts[i].x <= xMax) {
                        ctx.lineTo(pts[i].x, pts[i].y);
                    } else {
                        const x0 = pts[i - 1].x;
                        const y0 = pts[i - 1].y;
                        const x1 = pts[i].x;
                        const y1 = pts[i].y;
                        const frac = (xMax - x0) / (x1 - x0);
                        const y = y0 + frac * (y1 - y0);
                        ctx.lineTo(xMax, y);
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

                // draw points up to xMax with size animation and shimmer
                for (let i = 0; i < pts.length; i++) {
                    const p = pts[i];
                    // compute reveal time for this node
                    const nodeRel = (p.x - padding) / (cssWidth - padding * 2);
                    const nodeRevealTime = line.start + nodeRel * line.duration;
                    const nodeElapsed = now - nodeRevealTime;
                    if (nodeElapsed < 0) break;

                    // animate size: each node animates for ~1s
                    const tNode = Math.max(0, Math.min(1, nodeElapsed / 1000));
                    const scaleFactor = 0.8;
                    const baseRadius = 3 * scaleFactor;
                    const maxRadius = 7 * scaleFactor;
                    const rAnim =
                        baseRadius +
                        (maxRadius - baseRadius) * easeOutCubic(tNode);

                    // shimmer: stronger at reveal, then subtle oscillation

                    const shimmerOsc =
                        0.4 + 0.6 * Math.abs(Math.sin((now + i * 150) / 300));
                    const shimmerAlpha = Math.max(
                        0,
                        (1 - tNode) * 0.8 + 0.12 * shimmerOsc,
                    );
                    const glowRadius = rAnim * 4;

                    const { r, g, b } = line.rgb;

                    // glow gradient
                    const grad = ctx.createRadialGradient(
                        p.x,
                        p.y,
                        0,
                        p.x,
                        p.y,
                        glowRadius,
                    );
                    grad.addColorStop(
                        0,
                        `rgba(${r}, ${g}, ${b}, ${Math.min(0.7, shimmerAlpha)})`,
                    );
                    grad.addColorStop(
                        0.6,
                        `rgba(${r}, ${g}, ${b}, ${Math.min(0.18, shimmerAlpha * 0.3)})`,
                    );
                    grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

                    ctx.save();
                    ctx.globalCompositeOperation = "lighter";
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();

                    // main node
                    ctx.beginPath();
                    ctx.fillStyle = line.color;
                    ctx.arc(p.x, p.y, rAnim, 0, Math.PI * 2);
                    ctx.fill();

                    // small white highlight to enhance shimmer
                    const highlightAlpha =
                        0.35 * (1 - tNode) +
                        0.12 * Math.abs(Math.sin(now / 200 + i));
                    if (highlightAlpha > 0.02) {
                        ctx.beginPath();
                        ctx.fillStyle = `rgba(255,255,255,${Math.min(0.6, highlightAlpha)})`;
                        ctx.arc(
                            p.x - rAnim * 0.3,
                            p.y - rAnim * 0.3,
                            Math.max(1, rAnim * 0.4),
                            0,
                            Math.PI * 2,
                        );
                        ctx.fill();
                    }
                }
            }

            rafRef.current = requestAnimationFrame(draw);
        };

        rafRef.current = requestAnimationFrame(draw);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
        };
    }, [width, height]);

    return (
        <StyledCanvas
            ref={canvasRef}
            id="graph-paper"
            width={width}
            height={height}
        />
    );
};

const StyledCanvas = styled.canvas<{ width: number; height: number }>`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    pointer-events: none;
    opacity: 0.25;
    background: transparent;
    width: 100vw;
    height: ${props => props.height}px;
`;
