import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const GitHubStats: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!width || !svgRef.current) return;

    // Clear previous render
    d3.select(svgRef.current).selectAll("*").remove();

    // Configuration
    const cellSize = 12;
    const cellGap = 3;
    const weeks = 52;
    const days = 7;
    const height = (cellSize + cellGap) * days + 20; // 20px padding

    // Mock Data Generation (Simulating the user's graph)
    const now = new Date();
    const data = [];
    for (let i = 0; i < weeks * days; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() - (weeks * days - i));
      
      // Randomize intensity based on "recent activity" bias seen in image
      let level = 0;
      const random = Math.random();
      
      // More activity in recent months (last 30% of data)
      if (i > (weeks * days) * 0.7) {
         if (random > 0.4) level = Math.floor(Math.random() * 4) + 1;
      } else {
         if (random > 0.8) level = Math.floor(Math.random() * 3);
      }

      data.push({ date, level });
    }

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("font-family", "Inter, sans-serif");

    const g = svg.append("g");

    // Calculate columns needed to fit width, or scroll if too small
    // For this responsive design, we'll try to fit as many weeks as possible or scroll
    const availableWeeks = Math.floor(width / (cellSize + cellGap));
    
    // Draw cells
    g.selectAll("rect")
      .data(data.slice(-(availableWeeks * 7))) // Show what fits
      .enter()
      .append("rect")
      .attr("x", (d, i) => Math.floor(i / 7) * (cellSize + cellGap))
      .attr("y", (d, i) => (i % 7) * (cellSize + cellGap))
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("rx", 2)
      .attr("ry", 2)
      .attr("fill", (d) => {
        switch (d.level) {
          case 1: return "#0e4429";
          case 2: return "#006d32";
          case 3: return "#26a641";
          case 4: return "#39d353";
          default: return "#161b22"; // Empty dark cell
        }
      })
      .append("title")
      .text((d) => `${d.date.toDateString()}: ${d.level > 0 ? 'Contribuições' : 'Sem contribuições'}`);

      // Optional: Add month labels logic here if needed, keeping it simple for "Clean" look

  }, [width]);

  return (
    <div className="w-full mt-12 mb-8 border border-slate-700 rounded-lg p-4 bg-[#0d1117]" ref={containerRef}>
      <h3 className="text-sm font-medium text-slate-400 mb-4">286 contribuições no último ano</h3>
      <div className="overflow-x-auto">
        <svg ref={svgRef} className="block mx-auto"></svg>
      </div>
      <div className="flex items-center justify-end gap-2 mt-4 text-xs text-slate-500">
        <span>Menos</span>
        <div className="w-3 h-3 bg-[#161b22] rounded-sm"></div>
        <div className="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
        <div className="w-3 h-3 bg-[#006d32] rounded-sm"></div>
        <div className="w-3 h-3 bg-[#26a641] rounded-sm"></div>
        <div className="w-3 h-3 bg-[#39d353] rounded-sm"></div>
        <span>Mais</span>
      </div>
    </div>
  );
};

export default GitHubStats;