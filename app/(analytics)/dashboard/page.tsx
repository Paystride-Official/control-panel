"use client";
import React from "react";
import DashboardStats from "./_components/DashboardStats/DashboardStats";
import Chart from "./_components/Chart/AreaChart/AreaChart";
import { dashboardCol, dashboardRow } from "@/Utils/constants";
import { TableComponent } from "@/components/Table/Table";
import BChart from "./_components/Chart/BarChart/BarChart";
import PChart from "./_components/Chart/PieChart/PieChart";
import AChart from "./_components/Chart/AreaChart/AreaChart";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-col gap-7 sm:gap-5">
      {/* <BChart />
            <PChart /> */}

      <DashboardStats />

      <div className="bg-white rounded-md border-[2.066px] border-solid border-[#ECEEF6] p-4">
        <AChart />
      </div>
      <div className="bg-white rounded-md border-[2.066px] border-solid border-[#ECEEF6] px-5 pt-5 pb-2">
        <h1 className="text-[17px] sm:text-xl font-bold mb-2 ml-2">
          Recent Transaction
        </h1>
        <TableComponent rows={dashboardRow} columns={dashboardCol} />
      </div>
    </div>
  );
};

export default Dashboard;
