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
            "renewal": 16,
            "new": 7,
            "extension": 1,
            "vacant": 2,
            "total": 26
        },
        {
            "title": "Covenanter Hill",
            "renewal": 99,
            "new": 96,
            "extension": 1,
            "vacant": 1,
            "total": 197
        },
        {
            "title": "HighGrove",
            "renewal": 23,
            "new": 22,
            "extension": 1,
            "vacant": 2,
            "total": 48
        },
        {
            "title": "MeadowCreek",
            "renewal": 154,
            "new": 74,
            "extension": 1,
            "vacant": 4,
            "total": 233
        },
        {
            "title": "Scholars Quad",
            "renewal": 36,
            "new": 36,
            "extension": 0,
            "vacant": 2,
            "total": 74
        },
        {
            "title": "Scholars Rooftop",
            "renewal": 5,
            "new": 8,
            "extension": 0,
            "vacant": 0,
            "total": 13
        }
    ],
        [
            {
                "title": "Cape Dutch Villas",
                "renewal": 43,
                "new": 22,
                "extension": 0,
                "vacant": 35,
                "total": 126
            },
            {
                "title": "Covenanter Hill",
                "renewal": 56,
                "new": 33,
                "extension": 1,
                "vacant": 10,
                "total": 100
            },
            {
                "title": "HighGrove",
                "renewal": 60,
                "new": 30,
                "extension": 8,
                "vacant": 2,
                "total": 100
            },
            {
                "title": "MeadowCreek",
                "renewal": 70,
                "new": 17,
                "extension": 6,
                "vacant": 7,
                "total": 100
            },
            {
                "title": "Scholars Quad",
                "renewal": 80,
                "new": 12,
                "extension": 2,
                "vacant": 6,
                "total": 100
            },
            {
                "title": "Scholars Rooftop",
                "renewal": 52.5,
                "new": 30,
                "extension": 7,
                "vacant": 10.5,
                "total": 100
            },
            {
                "title": "Porto Flats",
                "renewal": 62.5,
                "new": 20,
                "extension": 7,
                "vacant": 10.5,
                "total": 100
            },
            {
                "title": "Verona Park",
                "renewal": 32.5,
                "new": 50,
                "extension": 7,
                "vacant": 10.5,
                "total": 100
            }
        ]
    ];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [toPercent, setToPercent] = useState(true);
    const [barData, setBarData] = useState<StackedBarChartData>({
        stackFields: ["renewal", "new", "extension", "vacant"],
        totalField: "total",
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
    const togglePercent = () => {
        setToPercent(!toPercent);
    }
    return (
        <>
            <StackedBarChart
                data={barData}
                toPercentage={toPercent}
            />
            <button onClick={togglePercent}>{toPercent ? "To Data" : "To Percent"}</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleButtonClicked}>Change Data</button>
        </>
    );
};

export const Default = Template.bind({});