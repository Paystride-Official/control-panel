import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarProps,
} from "recharts";

const data = [
    {
        name: "Jan",
        uv: 45,
        amt: 2400,
    },
    {
        name: "Feb",
        uv: 85,
        amt: 2210,
    },
    {
        name: "Mar",
        uv: 55,
        amt: 2290,
    },
    {
        name: "Apr",
        uv: 60,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "May",
        uv: 90,
        amt: 2181,
    },
    {
        name: "Jun",
        uv: 63,
        amt: 2500,
    },
    {
        name: "Jul",
        uv: 100,
        amt: 2100,
    },
    {
        name: "Aug",
        uv: 76,
        amt: 2100,
    },
    {
        name: "Sep",
        uv: 70,
        amt: 2100,
    },
    {
        name: "Oct",
        uv: 100,
        amt: 2100,
    },
    {
        name: "Nov",

        amt: 2100,
    },
    {
        name: "Dec",

        amt: 2100,
    },
];

export default function BChart() {
    return (
        <div className="h-[12rem] sm:h-[19rem]" style={{ width: "100%" }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 5,
                        left: -25,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />

                    <XAxis dataKey="name" axisLine={false} tickLine={false} />

                    <YAxis axisLine={false} tickLine={false} />

                    {/* <Tooltip /> */}

                    <Bar
                        type="monotone"
                        dataKey="uv"
                        stroke="transparent"
                        fill="red"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
