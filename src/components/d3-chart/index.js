import React from 'react';
import { select, scaleBand, axisBottom, axisLeft, scaleLinear } from 'd3';
import useWindowSize from '../../hooks/useWindowSize';

function CurvedLineChart() {
  const containerRef = React.useRef();
  const svgRef = React.useRef();
  const [data, setData] = React.useState([25, 30, 45, 60, 20, 65, 75]);
  const size = useWindowSize();

  React.useEffect(() => {
    const { offsetHeight: h, offsetWidth: w } = containerRef.current;
    let svg = select(svgRef.current)
      .attr('height', h)
      .attr('width', w);
    applyPencilFilterTextures(svg);

    const padding = 40;

    const xScale = scaleBand()
      .domain(data.map((_, ind) => ind))
      .range([0, w - padding])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 100])
      .range([h - padding, 0]);

    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .select('.x-axis')
      .attr('filter', 'url(#pencilTexture4)')
      .style('transform', `translate(${padding}px, ${h - padding}px)`)
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg
      .select('.y-axis')
      .attr('filter', 'url(#pencilTexture4)')
      .style('transform', `translateX(${padding}px)`)
      .call(yAxis);

    //start drawing bars
    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (d, ind) => xScale(ind) + padding)
      .attr('width', xScale.bandwidth())
      .transition()
      .attr('y', yScale)
      .attr('transform-origin', 'bottom')
      .attr('filter', 'url(#pencilTexture4)')
      .attr('fill', 'rgba(230, 54, 41)')
      .attr('stroke', '#6e6a69')
      .attr('stroke-width', '.5')
      .attr('height', d => h - yScale(d) - padding);
  }, [data]);

  return (
    <div
      ref={containerRef}
      style={{
        height: size.height,
        width: size.width,
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 0,
      }}>
      <svg ref={svgRef} style={{ overflow: 'visible' }}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
      {/* <button onClick={() => setData(data.map(d => d + 5))}>Increase</button> */}
    </div>
  );
}

export default CurvedLineChart;

function applyPencilFilterTextures(svg) {
  const defs = svg.append('defs');
  var roughPaper = defs.append('filter');
  roughPaper
    .attr('x', '0%')
    .attr('y', '0%')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('filterUnits', 'objectBoundingBox')
    .attr('id', 'roughPaper');
  roughPaper
    .append('feTurbulence')
    .attr('type', 'fractalNoise')
    .attr('baseFrequency', '128')
    .attr('numOctaves', '1')
    .attr('result', 'noise');
  var diffLight = roughPaper.append('feDiffuseLighting');
  diffLight
    .attr('in', 'noise')
    .attr('lighting-color', 'white')
    .attr('surfaceScale', '1')
    .attr('result', 'diffLight');
  diffLight
    .append('feDistantLight')
    .attr('azimuth', '45')
    .attr('elevation', '55');
  roughPaper
    .append('feGaussianBlur')
    .attr('in', 'diffLight')
    .attr('stdDeviation', '0.75')
    .attr('result', 'dlblur');
  roughPaper
    .append('feComposite')
    .attr('operator', 'aritmetic')
    .attr('k1', '1.2')
    .attr('k2', '0')
    .attr('k3', '0')
    .attr('k4', '0')
    .attr('in', 'dlblur')
    .attr('in2', 'SourceGraphic')
    .attr('result', 'out');

  var pencilTexture = defs
    .append('filter')
    .attr('x', '-2%')
    .attr('y', '-2%')
    .attr('width', '104%')
    .attr('height', '104%')
    .attr('filterUnits', 'objectBoundingBox')
    .attr('id', 'PencilTexture');
  pencilTexture
    .append('feTurbulence')
    .attr('type', 'fractalNoise')
    .attr('baseFrequency', '1.2')
    .attr('numOctaves', '3')
    .attr('result', 'noise');
  pencilTexture
    .append('feDisplacementMap')
    .attr('xChannelSelector', 'R')
    .attr('yChannelSelector', 'G')
    .attr('scale', '3')
    .attr('in', 'SourceGraphic')
    .attr('result', 'newSource');

  var pencilTexture2 = defs
    .append('filter')
    .attr('x', '0%')
    .attr('y', '0%')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('filterUnits', 'objectBoundingBox')
    .attr('id', 'pencilTexture2');
  pencilTexture2
    .append('feTurbulence')
    .attr('type', 'fractalNoise')
    .attr('baseFrequency', 2)
    .attr('numOctaves', 5)
    .attr('stitchTiles', 'stitch')
    .attr('result', 'f1');
  pencilTexture2
    .append('feColorMatrix')
    .attr('type', 'matrix')
    .attr('values', '0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5')
    .attr('result', 'f2');
  pencilTexture2
    .append('feComposite')
    .attr('operator', 'in')
    .attr('in2', 'f2')
    .attr('in', 'SourceGraphic')
    .attr('result', 'f3');

  var pencilTexture3 = defs
    .append('filter')
    .attr('x', '0%')
    .attr('y', '0%')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('filterUnits', 'objectBoundingBox')
    .attr('id', 'pencilTexture3');
  pencilTexture3
    .append('feTurbulence')
    .attr('type', 'fractalNoise')
    .attr('baseFrequency', 0.5)
    .attr('numOctaves', 5)
    .attr('stitchTiles', 'stitch')
    .attr('result', 'f1');
  pencilTexture3
    .append('feColorMatrix')
    .attr('type', 'matrix')
    .attr('values', '0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5')
    .attr('result', 'f2');
  pencilTexture3
    .append('feComposite')
    .attr('operator', 'in')
    .attr('in2', 'f2b')
    .attr('in', 'SourceGraphic')
    .attr('result', 'f3');
  pencilTexture3
    .append('feTurbulence')
    .attr('type', 'fractalNoise')
    .attr('baseFrequency', 1.2)
    .attr('numOctaves', 3)
    .attr('result', 'noise');
  pencilTexture3
    .append('feDisplacementMap')
    .attr('xChannelSelector', 'R')
    .attr('yChannelSelector', 'G')
    .attr('scale', 2.5)
    .attr('in', 'f3')
    .attr('result', 'f4');
  var pencilTexture4 = defs
    .append('filter')
    .attr('x', '-20%')
    .attr('y', '-20%')
    .attr('width', '140%')
    .attr('height', '140%')
    .attr('filterUnits', 'objectBoundingBox')
    .attr('id', 'pencilTexture4');
  pencilTexture4
    .append('feTurbulence')
    .attr('type', 'fractalNoise')
    .attr('baseFrequency', 0.03)
    .attr('numOctaves', 3)
    .attr('seed', 1)
    .attr('result', 'f1');
  pencilTexture4
    .append('feDisplacementMap')
    .attr('xChannelSelector', 'R')
    .attr('yChannelSelector', 'G')
    .attr('scale', 5)
    .attr('in', 'SourceGraphic')
    .attr('in2', 'f1')
    .attr('result', 'f4');
  pencilTexture4
    .append('feTurbulence')
    .attr('type', 'fractalNoise')
    .attr('baseFrequency', 0.03)
    .attr('numOctaves', 3)
    .attr('seed', 10)
    .attr('result', 'f2');
  pencilTexture4
    .append('feDisplacementMap')
    .attr('xChannelSelector', 'R')
    .attr('yChannelSelector', 'G')
    .attr('scale', 5)
    .attr('in', 'SourceGraphic')
    .attr('in2', 'f2')
    .attr('result', 'f5');
  pencilTexture4
    .append('feTurbulence')
    .attr('type', 'fractalNoise')
    .attr('baseFrequency', 1.2)
    .attr('numOctaves', 2)
    .attr('seed', 100)
    .attr('result', 'f3');
  pencilTexture4
    .append('feDisplacementMap')
    .attr('xChannelSelector', 'R')
    .attr('yChannelSelector', 'G')
    .attr('scale', 3)
    .attr('in', 'SourceGraphic')
    .attr('in2', 'f3')
    .attr('result', 'f6');
  pencilTexture4
    .append('feBlend')
    .attr('mode', 'multiply')
    .attr('in2', 'f4')
    .attr('in', 'f5')
    .attr('result', 'out1');
  pencilTexture4
    .append('feBlend')
    .attr('mode', 'multiply')
    .attr('in', 'out1')
    .attr('in2', 'f6')
    .attr('result', 'out2');
}
