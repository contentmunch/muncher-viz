import React, {useState} from "react";
import {Meta, Story} from "@storybook/react";
import {PieChart, PieChartProps} from "./PieChart";
import {ChartData} from "./data/ChartData";

export default {
    title: "chart/Pie Chart",
    component: PieChart
} as Meta;


const Template: Story<PieChartProps> = (args) => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [pieData, setPieData] = useState<ChartData[]>([
        {title: "First", value: 100, isSelected: true},
        {title: "Second", value: 20, isSelected: false},
        {title: "Third", value: 40, isSelected: false},
    ]);
    const handleButtonClicked = () => {
        const currentData = [...pieData];
        currentData[1].value = currentData[1].value === 20 ? 40 : 20;
        setPieData(currentData);
    };
    const handleOnClick = (index: number) => {
        const currentData = [...pieData];
        currentData.forEach(value => {
            value.isSelected = false;
        });
        setSelectedIndex(index);
        currentData[index].isSelected = true;
        setPieData(currentData);
    };

    return (
        <>
            <PieChart data={pieData} onClick={handleOnClick}/>
            <button onClick={handleButtonClicked}>Change Data</button>
            <p>selected: {pieData[selectedIndex].title}</p>
        </>
    );
};

export const Default = Template.bind({});