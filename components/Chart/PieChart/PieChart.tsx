import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type ColorProps = {
    color: string;
};

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
];
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const sector = [
    { col: "#0088FE", section: "rice" },
    { col: "#00C49F", section: "BEANS" },
    { col: "#FFBB28", section: "porrgui" },
    { col: "#FF8042", section: "hscbgfg" },
];

export default function PChart() {
    return (
        <div className="w-full h-[25rem] flex">
            <ResponsiveContainer className="bg-red-400">
                <PieChart>
                    <Tooltip />
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={90}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % colors.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col justify-center">
                {sector.map((color, index) => (
                    <div key={index} className="flex">
                        <ColorItem color={color.col} />
                        <p>{color.section}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const ColorItem: React.FunctionComponent<ColorProps> = ({ color }) => (
    <div className="w-5 h-5" style={{ backgroundColor: color }}></div>
);
