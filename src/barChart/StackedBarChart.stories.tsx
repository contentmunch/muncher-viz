import React, {useState} from "react";
import {Meta, Story} from "@storybook/react";
import {BarChartProps, StackedBarChart} from "./StackedBarChart";
import {FieldValue, StackedBarChartData} from "./data/StackedBarChartData";

export default {
    title: "Chart/Stacked Bar Chart",
    component: StackedBarChart
} as Meta;


const Template: Story<BarChartProps> = (args) => {


    const initValue: FieldValue[][] = [
        [{
            "Title": "Scholars Rooftop",
            "Renewal": 8,
            "New": 5,
            "Extension": 0,
            "Vacant": 0,
            "Total": 13
        }, {
            "Title": "Scholars Rock",
            "Renewal": 50,
            "New": 44,
            "Extension": 0,
            "Vacant": 0,
            "Total": 94
        }, {
            "Title": "Huntington Gardens",
            "Renewal": 25,
            "New": 4,
            "Extension": 0,
            "Vacant": 4,
            "Total": 33
        }, {
            "Title": "Covenanter Hill",
            "Renewal": 114,
            "New": 79,
            "Extension": 0,
            "Vacant": 3,
            "Total": 196
        }, {
            "Title": "MeadowCreek",
            "Renewal": 165,
            "New": 56,
            "Extension": 2,
            "Vacant": 6,
            "Total": 229
        }, {
            "Title": "Scholars Quad",
            "Renewal": 40,
            "New": 29,
            "Extension": 0,
            "Vacant": 3,
            "Total": 72
        }, {
            "Title": "Cov Affordable",
            "Renewal": 7,
            "New": 2,
            "Extension": 0,
            "Vacant": 2,
            "Total": 11
        }, {
            "Title": "Porto Flats",
            "Renewal": 25,
            "New": 15,
            "Extension": 0,
            "Vacant": 6,
            "Total": 46
        }, {
            "Title": "Cape Dutch Villas",
            "Renewal": 20,
            "New": 3,
            "Extension": 0,
            "Vacant": 1,
            "Total": 24
        }, {
            "Title": "Verona Park",
            "Renewal": 5,
            "New": 2,
            "Extension": 0,
            "Vacant": 1,
            "Total": 8
        }, {
            "Title": "HighGrove",
            "Renewal": 36,
            "New": 15,
            "Extension": 0,
            "Vacant": 7,
            "Total": 58
        }, {
            "Title": "SummerHouse",
            "Renewal": 67,
            "New": 58,
            "Extension": 0,
            "Vacant": 5,
            "Total": 130
        }],
        [
            {
                "Title": "Cape Dutch Villas",
                "Renewal": 16,
                "New": 7,
                "Extension": 1,
                "Vacant": 2,
                "Total": 26
            },
            {
                "Title": "Covenanter Hill",
                "Renewal": 99,
                "New": 96,
                "Extension": 1,
                "Vacant": 1,
                "Total": 197
            },
            {
                "Title": "HighGrove",
                "Renewal": 23,
                "New": 22,
                "Extension": 1,
                "Vacant": 2,
                "Total": 48
            },
            {
                "Title": "MeadowCreek",
                "Renewal": 154,
                "New": 74,
                "Extension": 1,
                "Vacant": 4,
                "Total": 233
            },
            {
                "Title": "Scholars Quad",
                "Renewal": 36,
                "New": 36,
                "Extension": 0,
                "Vacant": 2,
                "Total": 74
            },
            {
                "Title": "Scholars Rooftop",
                "Renewal": 5,
                "New": 8,
                "Extension": 0,
                "Vacant": 0,
                "Total": 13
            }
        ],
        [
            {
                "Title": "Cape Dutch Villas",
                "Renewal": 43,
                "New": 22,
                "Extension": 0,
                "Vacant": 35,
                "Total": 126
            },
            {
                "Title": "Covenanter Hill",
                "Renewal": 56,
                "New": 33,
                "Extension": 1,
                "Vacant": 10,
                "Total": 100
            },
            {
                "Title": "HighGrove",
                "Renewal": 60,
                "New": 30,
                "Extension": 8,
                "Vacant": 2,
                "Total": 100
            },
            {
                "Title": "MeadowCreek",
                "Renewal": 70,
                "New": 17,
                "Extension": 6,
                "Vacant": 7,
                "Total": 100
            },
            {
                "Title": "Scholars Quad",
                "Renewal": 80,
                "New": 12,
                "Extension": 2,
                "Vacant": 6,
                "Total": 100
            },
            {
                "Title": "Scholars Rooftop",
                "Renewal": 52.5,
                "New": 30,
                "Extension": 7,
                "Vacant": 10.5,
                "Total": 100
            },
            {
                "Title": "Porto Flats",
                "Renewal": 62.5,
                "New": 20,
                "Extension": 7,
                "Vacant": 10.5,
                "Total": 100
            },
            {
                "Title": "Verona Park",
                "Renewal": 32.5,
                "New": 50,
                "Extension": 7,
                "Vacant": 10.5,
                "Total": 100
            }
        ],
        [
            {
                "Title": "Cape Dutch Villas",
                "Renewal": 43,
                "New": 22,
                "Extension": 0,
                "Vacant": 35,
                "Total": 126
            }

        ],
        [
            {
                "Title": "Cape Dutch Villas",
                "Renewal": 43,
                "New": 22,
                "Extension": 0,
                "Vacant": 35,
                "Total": 126
            },
            {
                "Title": "Covenanter Hill",
                "Renewal": 56,
                "New": 33,
                "Extension": 1,
                "Vacant": 10,
                "Total": 100
            }
        ]
    ];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [toPercent, setToPercent] = useState(true);
    const [withLegend, setWithLegend] = useState(true);
    const [barData, setBarData] = useState<StackedBarChartData>({
        "titleField": "Title",
        "totalField": "Total",
        "stackFields": ["Renewal", "New", "Extension", "Vacant"],
        "values": initValue[0]
    });

    const handleButtonClicked = () => {
        const currentIndex = (selectedIndex + 1) % initValue.length;
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
                withLegend={withLegend}
            />
            <button onClick={togglePercent}>{toPercent ? "To Data" : "To Percent"}</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleButtonClicked}>Change Data</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => {
                setWithLegend(!withLegend);
            }}>{withLegend ? "Without Legend" : "With Legend"}
            </button>
        </>
    );
};

export const Default = Template.bind({});

const ComparisonTemplate: Story<BarChartProps> = (args) => {

        const [toPercent, setToPercent] = useState(true);
        const [withLegend, setWithLegend] = useState(true);
        const barData: StackedBarChartData = {
            "titleField": "Title",
            "totalField": "Total",
            "stackFields": ["Renewal", "New", "Extension", "Vacant"],
            "titleSeparator": ":",
            "values": [{
                "Title": "Scholars Rooftop:(06-12-20)",
                "Renewal": 8,
                "New": 5,
                "Extension": 0,
                "Vacant": 0,
                "Total": 13
            }, {
                "Title": "Scholars Rock:(06-12-20)",
                "Renewal": 50,
                "New": 44,
                "Extension": 0,
                "Vacant": 0,
                "Total": 94
            }, {
                "Title": "Huntington Gardens:(06-12-20)",
                "Renewal": 25,
                "New": 4,
                "Extension": 0,
                "Vacant": 4,
                "Total": 33
            }, {
                "Title": "Covenanter Hill:(06-12-20)",
                "Renewal": 114,
                "New": 79,
                "Extension": 0,
                "Vacant": 3,
                "Total": 196
            }, {
                "Title": "MeadowCreek:(06-12-20)",
                "Renewal": 165,
                "New": 56,
                "Extension": 2,
                "Vacant": 6,
                "Total": 229
            }, {
                "Title": "Scholars Quad:(06-12-20)",
                "Renewal": 40,
                "New": 29,
                "Extension": 0,
                "Vacant": 3,
                "Total": 72
            }, {
                "Title": "Cov Affordable:(06-12-20)",
                "Renewal": 7,
                "New": 2,
                "Extension": 0,
                "Vacant": 2,
                "Total": 11
            }, {
                "Title": "Porto Flats:(06-12-20)",
                "Renewal": 25,
                "New": 15,
                "Extension": 0,
                "Vacant": 6,
                "Total": 46
            }, {
                "Title": "Cape Dutch Villas:(06-12-20)",
                "Renewal": 20,
                "New": 3,
                "Extension": 0,
                "Vacant": 1,
                "Total": 24
            }
                , {
                    "Title": "Verona Park:(06-12-20)",
                    "Renewal": 5,
                    "New": 2,
                    "Extension": 0,
                    "Vacant": 1,
                    "Total": 8
                }, {
                    "Title": "HighGrove:(06-12-20)",
                    "Renewal": 36,
                    "New": 15,
                    "Extension": 0,
                    "Vacant": 7,
                    "Total": 58
                }, {
                    "Title": "SummerHouse:(06-12-20)",
                    "Renewal": 67,
                    "New": 58,
                    "Extension": 0,
                    "Vacant": 5,
                    "Total": 130
                }]
        };
        const comparisonBarData: StackedBarChartData = {
            "titleField": "Title",
            "totalField": "Total",
            "stackFields": ["Renewal", "New", "Extension", "Vacant"],
            "titleSeparator": ":",
            "values": [
                {
                    "Title": "Scholars Rooftop:(06-12-21)",
                    "Renewal": 5,
                    "New": 8,
                    "Extension": 0,
                    "Vacant": 0,
                    "Total": 13
                },
                // {
                //     "Title": "Scholars Rock:(06-12-21)",
                //     "Renewal": 50,
                //     "New": 44,
                //     "Extension": 0,
                //     "Vacant": 0,
                //     "Total": 94
                // } ,
                {
                    "Title": "Huntington Gardens:(06-12-21)",
                    "Renewal": 15,
                    "New": 14,
                    "Extension": 0,
                    "Vacant": 4,
                    "Total": 33
                }, {
                    "Title": "Covenanter Hill:(06-12-21)",
                    "Renewal": 14,
                    "New": 179,
                    "Extension": 0,
                    "Vacant": 3,
                    "Total": 196
                }, {
                    "Title": "MeadowCreek:(06-12-21)",
                    "Renewal": 65,
                    "New": 156,
                    "Extension": 2,
                    "Vacant": 6,
                    "Total": 229
                }, {
                    "Title": "Scholars Quad:(06-12-21)",
                    "Renewal": 20,
                    "New": 49,
                    "Extension": 0,
                    "Vacant": 3,
                    "Total": 72
                }, {
                    "Title": "Cov Affordable:(06-12-21)",
                    "Renewal": 2,
                    "New": 7,
                    "Extension": 0,
                    "Vacant": 2,
                    "Total": 11
                }, {
                    "Title": "Porto Flats:(06-12-21)",
                    "Renewal": 15,
                    "New": 25,
                    "Extension": 0,
                    "Vacant": 6,
                    "Total": 46
                }, {
                    "Title": "Cape Dutch Villas:(06-12-21)",
                    "Renewal": 10,
                    "New": 13,
                    "Extension": 0,
                    "Vacant": 1,
                    "Total": 24
                }, {
                    "Title": "Verona Park:(06-12-21)",
                    "Renewal": 2,
                    "New": 5,
                    "Extension": 0,
                    "Vacant": 1,
                    "Total": 8
                }, {
                    "Title": "HighGrove:(06-12-21)",
                    "Renewal": 26,
                    "New": 25,
                    "Extension": 0,
                    "Vacant": 7,
                    "Total": 58
                }, {
                    "Title": "SummerHouse:(06-12-21)",
                    "Renewal": 58,
                    "New": 65,
                    "Extension": 0,
                    "Vacant": 7,
                    "Total": 130
                }]
        };
        const togglePercent = () => {
            setToPercent(!toPercent);
        }
        return (
            <>
                <StackedBarChart
                    data={barData}
                    comparisonData={comparisonBarData}
                    toPercentage={toPercent}
                    withLegend={withLegend}
                />
                <button onClick={togglePercent}>{toPercent ? "To Data" : "To Percent"}</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => {
                    setWithLegend(!withLegend);
                }}>{withLegend ? "Without Legend" : "With Legend"}
                </button>
            </>
        );
    }
;

export const Comparison = ComparisonTemplate.bind(
    {}
);