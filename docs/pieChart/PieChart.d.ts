import React from "react";
import { PieChartData } from "./data/PieChartData";
export declare const PieChart: React.FC<PieChartProps>;
export interface PieChartProps {
    data: PieChartData[];
    withLegend?: boolean;
    legendTitle?: string;
    onClick?: (index: number) => void;
    valueFormatter?: (num: number, index: number) => string;
    colorRange?: string[];
}
