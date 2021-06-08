import React, {RefObject, useCallback, useEffect} from "react";
import * as d3 from "d3";
import "./assets/BarChart.scss";
import {StackedBarChartData} from "./data/StackedBarChartData";

export const StackedBarChart: React.FC<BarChartProps> = (
    {data, colorRange, dataFormatter}) => {
    const svgRef: RefObject<SVGSVGElement> = React.createRef();

    const draw = useCallback(() => {
        const margin = {top: 40, right: 120, bottom: 30, left: 100};
        const viewBox = "0 0 550 500";
        const height = data.values.length * 50;
        const width = 550 - margin.left - margin.right;

        const maxValue = (): number => {
            const max = d3.max(data.values, d => {
                let total: number = 0;
                data.stackFields.forEach(field => {
                    total += +d[field];
                });
                return total;
            });
            return max === undefined ? 0 : max;
        };
        const stackData = d3.stack<any>().keys(data.stackFields).value((d, key) => d[key]);

        const y = d3.scaleBand()
            .rangeRound([0, height])
            .paddingInner(0.3)
            .align(0.1)
            .domain(data.values.map(d => d[data.titleField] as string));

        const x = d3.scaleLinear()
            .rangeRound([0, width])
            .domain([0, maxValue()]).nice();

        const z = d3.scaleOrdinal()
            .range(colorRange ? colorRange : ["#af7aa1", "#e15759", "#59a14f", "#f28e2c", "#4e79a7"])
            .domain(data.stackFields);

        const svg = d3.select(svgRef.current)
            .attr("viewBox", viewBox);

        svg.selectAll("g").remove();

        const barChart = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const fill = barChart.append("g")
            .selectAll("g")
            .data(stackData(data.values))
            .enter().append("g")
            .attr("fill", d => z(d.key) as string);
        fill.append("title").text((d, i) => {
            const barValue = d[i][1] - d[i][0];
            return `${d.key} (${dataFormatter ? dataFormatter(barValue) : barValue})`;
        });

        fill.selectAll("rect")
            .data(d => d)
            .enter().append("rect")
            .classed("bar-rectangle", true)
            .attr("y", d => {
                return y(d.data[data.titleField]) as number;
            })
            .attr("x", d => x(d[0]))
            .attr("width", d => x(d[1]) - x(d[0]))
            .attr("height", y.bandwidth())

        barChart.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0,0)")
            .call(d3.axisLeft(y).tickSizeOuter(0));

        barChart.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickFormat(x => dataFormatter ? dataFormatter(x.valueOf()) : `${x}`))

        const legend = barChart.append("g")
            .classed("legend", true)
            .attr("text-anchor", "end")
            .selectAll("g")
            .data(data.stackFields.slice().reverse())
            .enter().append("g")
            .attr("transform", (d, i) => "translate(120," + (i * 20) + ")");

        legend.append("rect")
            .attr("x", width - 19)
            .attr("width", 19)
            .attr("height", 19)
            .attr("fill", d => z(d) as string);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9.5)
            .attr("dy", "0.32rem")
            .text(d => d);
    }, [svgRef, data.stackFields, data.values, data.titleField, colorRange, dataFormatter]);

    useEffect(() => {
        draw();
    }, [draw]);
    return (
        <div className="muncher-bar-chart">
            <svg ref={svgRef} className="svg-bar-chart"/>
        </div>
    );

};


export interface BarChartProps {
    data: StackedBarChartData;
    colorRange?: string[];
    dataFormatter?: (num: number) => string;
}