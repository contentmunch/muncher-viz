import React from "react";
import { StackedBarChartData } from "./data/StackedBarChartData";
export declare const StackedBarChart: React.FC<BarChartProps>;
export interface BarChartProps {
    data: StackedBarChartData;
    comparisonData?: StackedBarChartData;
    toPercentage?: boolean;
    colorRange?: string[];
    withLegend?: boolean;
}
