import React, { useEffect } from "react";
import styled from "styled-components";
import rough from "roughjs";

type CanvasProps = {
	height: number;
	width: number;
};

export const Canvas = (props: CanvasProps) => {
	useEffect(() => {
		// if (props.width === 0 || props.height === 0) return;
		// 10 numbers between 100 and 300
		const columnWidth = 100;
		console.log("column width", columnWidth);
		const numbers = Array.from(
			{ length: Math.ceil(props.width / columnWidth) },
			() => Math.floor(Math.random() * (props.height - 110) + 100)
		);

		// create a color scale array
		const colorScale = ["red", "yellow", "green"];
		console.log("drawing canvas", numbers.length);

		const canvas = document.getElementById(
			"graph-paper"
		)! as HTMLCanvasElement;
		const ctx = canvas.getContext("2d")!;
		ctx.clearRect(0, 0, props.width, props.height);
		const rc = rough.canvas(canvas);

		numbers.forEach((num, idx) => {
			const color = colorScale[idx % colorScale.length];
			rc.rectangle(
				columnWidth * idx,
				props.height - num,
				columnWidth,
				num,
				{
					roughness: 2.8,
					fill: color,
				}
			);
		});
	}, [props]);

	return (
		<StyledCanvas
			id="graph-paper"
			height={props.height}
			width={props.width}
		/>
	);
};

const StyledCanvas = styled.canvas`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    background-color: #fffff8;
    background-size: 2rem 2rem;
    background-image: radial-gradient(circle, #340b54, rgba(0, 0, 0, 0) 1px);
    position: absolute;
    opacity: 0.3;
    top: 0;
    z-index: -1;
`;
