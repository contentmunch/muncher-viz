import React, {useState} from "react";
import {Meta, Story} from "@storybook/react";
import {BarChartProps, StackedBarChart} from "./StackedBarChart";
import {FieldValue, StackedBarChartData} from "./data/StackedBarChartData";

export default {
    title: "Chart/Stacked Bar Chart",
    component: StackedBarChart
} as Meta;


const Template: Story<BarChartProps> = (args) => {
    const initValue: FieldValue[][] = [[
        {
            "title": "Cape Dutch Villas",
            "renewal": 62,
            "new": 34,
            "extension": 0,
            "empty": 4
        },
        {
            "title": "Covenanter Hill",
            "renewal": 66,
            "new": 23,
            "extension": 11,
            "empty": 0
        },
        {
            "title": "HighGrove",
            "renewal": 70,
            "new": 20,
            "extension": 8,
            "empty": 2
        },
        {
            "title": "MeadowCreek",
            "renewal": 80,
            "new": 7,
            "extension": 6,
            "empty": 7
        },
        {
            "title": "Scholars Quad",
            "renewal": 90,
            "new": 2,
            "extension": 2,
            "empty": 6
        },
        {
            "title": "Scholars Rooftop",
            "renewal": 62.5,
            "new": 20,
            "extension": 7,
            "empty": 10.5
        }
    ],
        [
            {
                "title": "Cape Dutch Villas",
                "renewal": 43,
                "new": 22,
                "extension": 0,
                "empty": 35
            },
            {
                "title": "Covenanter Hill",
                "renewal": 56,
                "new": 33,
                "extension": 1,
                "empty": 10
            },
            {
                "title": "HighGrove",
                "renewal": 60,
                "new": 30,
                "extension": 8,
                "empty": 2
            },
            {
                "title": "MeadowCreek",
                "renewal": 70,
                "new": 17,
                "extension": 6,
                "empty": 7
            },
            {
                "title": "Scholars Quad",
                "renewal": 80,
                "new": 12,
                "extension": 2,
                "empty": 6
            },
            {
                "title": "Scholars Rooftop",
                "renewal": 52.5,
                "new": 30,
                "extension": 7,
                "empty": 10.5
            },
            {
                "title": "Porto Flats",
                "renewal": 62.5,
                "new": 20,
                "extension": 7,
                "empty": 10.5
            },
            {
                "title": "Verona Park",
                "renewal": 32.5,
                "new": 50,
                "extension": 7,
                "empty": 10.5
            }
        ]
    ];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [barData, setBarData] = useState<StackedBarChartData>({
        stackFields: ["renewal", "new", "extension", "empty"],
        titleField: "title",
        values: initValue[0]
    });

    const handleButtonClicked = () => {
        const currentIndex = selectedIndex === 0 ? 1 : 0;
        setBarData({
            ...barData, values: initValue[currentIndex]
        });
        setSelectedIndex(currentIndex);
    };

    return (
        <>
            <StackedBarChart
                dataFormatter={(num => num + "%")}
                data={barData}
                colorRange={["#af7aa1", "#e15759", "#59a14f", "#f28e2c", "#4e79a7"]}
            />
            <button onClick={handleButtonClicked}>Change Data</button>
        </>
    );
};

export const Default = Template.bind({});