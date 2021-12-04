import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const Chart = ({ width = 600, height = 600, data }) => {
  const barChart = useRef();

  useEffect(() => {
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = d3.select(barChart.current);
    svg.attr('width', width);
    svg.attr('height', height);

    let g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    // Continue with implementation. Don't forget the tooltip
    var tooltip = d3.select("body").append("div").attr("class", "toolTip").attr("position", "absolute");

    g.selectAll(".rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d) { return x(d.name); })
        .attr("y", function(d) { return y(d.stock); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return iheight - y(d.stock); })
        .attr("fill", "blue")/*.on("mouseover", function (d) {
          tooltip
              .style("visibility", "visble")
              .text((d.name) + "<br>" + (d.stock))
        })*/
        .on("mousemove", function(e, d){
          console.log(`tooltip ${d.name} | ${d.stock}`);
          tooltip
              .style("left", e.pageX - 25 + "px")
              .style("top", e.pageY - 25 + "px")
              .style("display", "inline-block")
              .text((d.name) + " " + (d.stock));
        });
        //.on("mouseout", function(d){ tooltip.style("display", "none");});

    g.append("g").classed("y--axis", true).call(d3.axisLeft(y));
  });

  return (
    <div id='chartArea'>
      <svg ref={barChart}></svg>
    </div>
  );
};
