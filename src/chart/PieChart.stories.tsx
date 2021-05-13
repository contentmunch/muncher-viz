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
        {title: "First", value: 60, isSelected: true, legend: "First (23: 60%)"},
        {title: "Second", value: 1, isSelected: false},
        {title: "Third", value: 5, isSelected: false},
    ]);
    const handleButtonClicked = () => {
        const currentData = [...pieData];
        currentData[1].value = currentData[1].value === 1 ? 10 : 1;
        setPieData(currentData);
    };
    const handleOnClick = (index: number) => {
        const currentData = [...pieData];
        if (currentData[index].isSelected) {
            currentData[index].isSelected = false;
            setSelectedIndex(-1);
        } else {
            currentData.forEach(value => {
                value.isSelected = false;
            });
            setSelectedIndex(index);
            currentData[index].isSelected = true;
        }
        setPieData(currentData);
    };

    return (
        <>
            <PieChart data={pieData} onClick={handleOnClick} valueFormatter={(num) => {
                return num + "%";
            }} withLegend={true}/>
            <button onClick={handleButtonClicked}>Change Data</button>
            {selectedIndex !== -1 ? <p>Selected: {pieData[selectedIndex].title}</p> : ""}
        </>
    );
};

export const Default = Template.bind({});