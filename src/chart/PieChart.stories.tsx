import React from "react";
import {Meta, Story} from "@storybook/react";
import {PieChart, PieChartProps} from "./PieChart";

export default {
    title: "chart/Pie Chart",
    component: PieChart
} as Meta;


const Template: Story<PieChartProps> = (args) => <PieChart {...args}/>;

export const Default = Template.bind({});
Default.args = {
    data: [
        {title: "First", value: 100},
        {title: "Second", value: 25}
    ]
};
