"use client";
import React from "react";
import { areaChartData } from "@/Utils/constants";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AChart() {
  return (
    <div className="h-[12rem] sm:h-[19rem]" style={{ width: "100%" }}>
      <ResponsiveContainer>
        <AreaChart
          data={areaChartData}
          margin={{
            top: 5,
            right: 5,
            left: -25,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#091F8E89" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#091F8E00" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="name" axisLine={false} tickLine={false} />

          <YAxis axisLine={false} tickLine={false} />

          <Tooltip />

          <Area
            type="natural"
            dataKey="uv"
            stroke="#091F8E"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
