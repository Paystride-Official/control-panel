"use client";
import React from "react";
import DashboardStats from "./_components/DashboardStats/DashboardStats";
import Chart from "./_components/AreaChart/AreaChart";
import { dashboardCol, dashboardRow } from "@/Utils/constants";
import { TableComponent } from "@/components/Table/Table";

type Props = {};

const Dashboard = (props: Props) => {
    return (
        <div className="relative">
            <DashboardStats />

            <Chart />

            <TableComponent rows={dashboardRow} columns={dashboardCol} />
        </div>
    );
};

export default Dashboard;
