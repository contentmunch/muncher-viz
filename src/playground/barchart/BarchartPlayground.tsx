import React, {useState} from "react";
import {StackedBarChartData} from "../../components/barChart/data/StackedBarChartData.ts";
import {StackedBarChart} from "../../components/barChart/StackedBarChart.tsx";

export const BarchartPlayground: React.FC = () => {
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
