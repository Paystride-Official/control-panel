"use client";
import React from "react";
import { barChartData } from "@/Utils/constants";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BChart() {
  return (
    <div className="h-[12rem] sm:h-[19rem]" style={{ width: "100%" }}>
      <ResponsiveContainer>
        <BarChart layout="vertical" height={350} data={barChartData}>
          <defs>
            <linearGradient id="colorBar" x1="1" y1="1" x2="0" y2="0">
              <stop offset="50%" stopColor="#091F8EEF" stopOpacity={0.5} />
              <stop offset="90%" stopColor="#091F8E50" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <XAxis
            axisLine={false}
            tickLine={false}
            type="number"
            display="none"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            dataKey="location"
            type="category"
            tick={{ fontSize: 12, fill: "#CBD5E0", fontWeight: "bold" }}
          />
          <Tooltip />
          <Bar
            type="monotone"
            dataKey="uv"
            stroke="transparent"
            fillOpacity={1}
            fill="url(#colorBar)"
            label={{ position: "right" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
