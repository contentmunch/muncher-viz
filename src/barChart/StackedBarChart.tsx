import React, {RefObject, useCallback, useEffect} from "react";
import * as d3 from "d3";
import "./assets/StackedBarChart.scss";
import {FieldValue, StackedBarChartData} from "./data/StackedBarChartData";

export const StackedBarChart: React.FC<BarChartProps> = (
    {data, colorRange, toPercentage, withLegend, legendTitle}) => {
    const svgRef: RefObject<SVGSVGElement> = React.createRef();
    const legendRef: RefObject<SVGSVGElement> = React.createRef();
    const draw = useCallback(() => {
        const barHeight = 30;
        const margin = {top: 0, right: 10, bottom: 40, left: 110};
        const viewBoxWidth = 580;
        const viewBox = `0 0 ${viewBoxWidth} ${data.values.length * (barHeight) + data.stackFields.length * 20}`;

        const height = data.values.length * barHeight;
        const width = viewBoxWidth - margin.left - margin.right;
        const defaultColorRange = ["#4e79a7", "#59a14f", "#f28e2c", "#e15759", "#261759", "#acd643", "#daf2dc"];
        const numberToPercent = (d: number, total: number) => toPercentage ? d / total * 100 : d;
        const percentToNumber = (percent: number, total: number) => toPercentage ? (percent * total / 100).toFixed(0) : percent;
        const fieldTotal = (fieldValue: FieldValue): number => {
            if (toPercentage) {
                let percentTotal: number = 0;
                data.stackFields.forEach(field => {
                    percentTotal += numberToPercent(+fieldValue[field], +fieldValue[data.totalField]);
                });
                return percentTotal;
            } else
                return +fieldValue[data.totalField];
        };
        const formatData = (num: number): string => toPercentage ? num.toFixed(0) + "%" : num.toString();
        const maxValue = (): number => {
            const max = d3.max(data.values, d => fieldTotal(d));
            return max === undefined ? 0 : +max.toFixed(0);
        };
        const stackData = d3.stack<any>().keys(data.stackFields)
            .value((d, key) => {
                return numberToPercent(d[key], d[data.totalField]);
            });

        const y = d3.scaleBand()
            .rangeRound([0, height])
            .paddingInner(0.2)
            .align(0.1)
            .domain(data.values.map(d => d[data.titleField] as string));

        const x = d3.scaleLinear()
            .rangeRound([0, width])
            .domain([0, maxValue()]).nice();

        const z = d3.scaleOrdinal()
            .range(colorRange ? colorRange : defaultColorRange)
            .domain(data.stackFields);

        const colorToStackField = (color: string | undefined | null): string => {
            if (color === undefined || color === null) return "";
            const index = colorRange ? colorRange.findIndex(value => value === color) : defaultColorRange.findIndex(value => value === color);
            return index > -1 && index < data.stackFields.length ? data.stackFields[index] : "";
        }

        const svg = d3.select(svgRef.current)
            .attr("viewBox", viewBox);

        svg.selectAll("g").remove();

        const barChart = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const g = barChart.append("g")
            .selectAll("g")
            .data(stackData(data.values))
            .join("g")
            .attr("fill-opacity", 0.9);

        const fill = g.attr("fill", d => z(d.key) as string);

        const bar = fill.selectAll("rect")
            .data(d => d)
            .enter();

        bar.append("rect")
            .classed("bar-rectangle", true)
            .attr("y", d => {
                return y(d.data[data.titleField]) as number;
            })
            .attr("x", d => x(d[0]))
            .attr("width", d => x(d[1]) - x(d[0]))
            .attr("height", y.bandwidth())
            .append("title").text((d, i, group) => {
            const fillColor = group[i].parentNode?.parentElement?.getAttribute("fill");
            const stackField = colorToStackField(fillColor);
            const value = d[1] - d[0];

            return `${stackField}: ${toPercentage ? formatData(value) : ""} (${percentToNumber(value, d.data[data.totalField])} of ${d.data[data.totalField]})`;
        });
        bar.append("text")
            .text((d, i, group) => {
                const value = d[1] - d[0];
                const width = x(d[1]) - x(d[0]);
                const percentText = `${formatData(value)} (${percentToNumber(value, d.data[data.totalField])} of ${d.data[data.totalField]})`;
                const numberText = `${value} of ${d.data[data.totalField]}`;
                if (toPercentage)
                    return width > 80 ? percentText : "";
                return width > 50 ? numberText : "";
            })
            .classed("bar-text", true)
            .attr("y", d => {
                return y(d.data[data.titleField]) as number + barHeight / 2;
            })
            .attr("text-anchor", "end")
            .attr("x", d => {
                const width = x(d[1]) - x(d[0]);
                return x(d[0]) + width - 5;
            });

        barChart.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0,0)")
            .call(d3.axisLeft(y).tickSizeOuter(0));

        barChart.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickFormat(x => formatData(x.valueOf())))
        if (withLegend) {


            const legendViewBox = `0 0 45 ${data.stackFields.length * 20}`;
            const chartLegend = d3.select(legendRef.current).attr("viewBox", legendViewBox);
            chartLegend.selectAll("g").remove();
            chartLegend.selectAll("text").remove();

            chartLegend.attr("text-anchor", "end");
            const legend = chartLegend.selectAll("g")
                .data(data.stackFields.slice())
                .join("g")
                .attr("transform", (d, i) => "translate(" + margin.right + "," + (i * 7) + ")");


            legend.append("rect")
                .attr("fill-opacity", 0.9)
                .attr("x",  28)
                .attr("width", 6)
                .attr("height", 6)
                .attr("fill", d => z(d) as string);

            legend.append("text")
                .attr("x",  26)
                .attr("dy", "0.24rem")
                .text(d => d);
        }

    }, [svgRef, legendRef, data.stackFields, data.values, data.titleField, data.totalField, colorRange, toPercentage]);

    useEffect(() => {
        draw();
    }, [draw]);
    return (
        <div className="muncher-bar-chart">
            <svg ref={svgRef} className="svg-bar-chart"/>
            {withLegend ?
                <svg className="svg-bar-chart-legend" ref={legendRef}>

                </svg>

                : ""}
        </div>
    );

};


export interface BarChartProps {
    data: StackedBarChartData;
    toPercentage?: boolean;
    colorRange?: string[];
    legendTitle?: string;
    withLegend?: boolean;
}