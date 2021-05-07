import React, {RefObject, useEffect} from "react";
import * as d3 from "d3";
import {PieArcDatum} from "d3";
import "./assets/PieChart.scss";
import {ChartData} from "./data/ChartData";

export const PieChart: React.FC<PieChartProps> = ({data}) => {
    const ref: RefObject<SVGSVGElement> = React.createRef();
    const viewBox = "-50 -50 100 100";
    const radius = 50;
    const pie = d3.pie<ChartData>().padAngle(0.005).sort(null).value(d => d.value);
    const arc = d3.arc<PieArcDatum<ChartData>>().innerRadius(0).outerRadius(radius - 1);
    const pieData = pie(data);
    const color = d3
        .scaleOrdinal()
        .domain(
            (d3.extent(data, (d) => {
                return d.title
            }) as unknown) as string
        )
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

    const draw = () => {
        const svg = d3.select(ref.current)
            .attr("viewBox", viewBox);

        svg.selectAll("path")
            .data(pieData)
            .join("path")
            .attr("fill", d => color(d.data.title) as string)
            .attr("d", arc)
            .append("title").text(d => `${d.data.title}: ${d.data.value.toLocaleString()}`);

        svg.append("g")
            .classed("text", true)
            .attr("text-anchor", "middle")
            .selectAll("text")
            .data(pieData)
            .join("text")
            .attr("transform", d => `translate(${arc.centroid(d)})`)
            .call(text => text.append("tspan")
                .attr("y", "-0.4em")
                .text(d => d.data.title))
    };

    useEffect(() => {
        draw();
    }, []);
    return (
        <svg ref={ref} className="muncher-pie-chart"/>
    );

};


export interface PieChartProps {
    data: ChartData[];
}