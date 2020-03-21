import React from 'react';
import { select, scaleBand, axisBottom, axisLeft, scaleLinear } from 'd3';

function CurvedLineChart() {
  const containerRef = React.useRef();
  const svgRef = React.useRef();
  const [data, setData] = React.useState([25, 30, 45, 60, 20, 65, 75]);

  React.useEffect(() => {
    const { offsetHeight: h, offsetWidth: w } = containerRef.current;
    const svg = select(svgRef.current)
      .attr('height', h)
      .attr('width', w);

    const padding = 20;

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
      .style('transform', `translate(${padding}px, ${h - padding}px)`)
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg
      .select('.y-axis')
      .style('transform', `translateX(${padding}px)`)
      .call(yAxis);

    //start drawing bars
    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      // .attr('transform-origin', 'bottom')
      .attr('x', (d, ind) => xScale(ind) + padding)
      .attr('width', xScale.bandwidth())
      .transition()
      .attr('y', yScale)
      .attr('height', d => h - yScale(d) - padding);
  }, [data]);

  return (
    <div ref={containerRef} style={{ height: 400 }}>
      <svg ref={svgRef} style={{ overflow: 'visible' }}>
        <g className="x-axis"></g>
        <g className="y-axis"></g>
      </svg>
      <button onClick={() => setData(data.map(d => d + 5))}>Increase</button>
    </div>
  );
}

export default CurvedLineChart;
