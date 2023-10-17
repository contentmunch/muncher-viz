import React, {useState} from "react";
import "./assets/PiechartPlayground.scss"
import {PieChartData} from "../../components/pieChart/data/PieChartData.ts";
import {PieChart} from "../../components/pieChart/PieChart.tsx";

export const PiechartPlayground: React.FC<PiechartPlaygroundProps> = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [pieData, setPieData] = useState<PieChartData[]>([
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
        <div className="pie-chart">
            <PieChart data={pieData} onClick={handleOnClick} valueFormatter={(num) => {
                return num + "%";
            }} withLegend={true}/>
            <button onClick={handleButtonClicked}>Change Data</button>
            {selectedIndex !== -1 ? <p>Selected: {pieData[selectedIndex].title}</p> : ""}
        </div>
    );
}

export interface PiechartPlaygroundProps {

}
