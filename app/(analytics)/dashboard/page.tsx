import React from "react";
import { AnalyticsCardProps } from "@/types/types";
import CreditCard from "@/components/Cards/CreditCard/CreditCard";
import AnalyticsCard from "@/components/Cards/AnalyticsCard/AnalyticsCard";
import Image from "next/image";
import Folder from "@/components/Cards/assets/Folder.svg";
import File from "@/components/Cards/assets/File.svg";
import Cart from "@/components/Cards/assets/Cart.svg";
import Arrowdown from "@/app/(analytics)/dashboard/assets/arrowDownSlim.svg";
import AChart from "@/components/Chart/AreaChart/AreaChart";

type Props = {};

const Dashboard = (props: Props) => {
  const dashboardAnalytics: AnalyticsCardProps[] = [
    {
      title: "Transaction",
      amount: "$50,000",
      profit: "+55%",
      icon: Folder,
    },
    {
      title: "Failed Settlement",
      amount: "2",
      icon: File,
    },
    {
      title: "All Merchant",
      amount: "3,052",
      icon: Cart,
    },
  ];

  return (
    <div className="">
      <div className="flex flex-wrap gap-5">
        <CreditCard />
        <div className="rounded-xl flex flex-col justify-evenly items-center bg-white size-[11rem] shadow-sm">
          <div className="bg-[#091F8E] p-3 rounded-xl">
            <Image src={Folder} alt="Folder" width="26" height="26" />
          </div>

          <div className="font-bold text-center">
            <p className="text-lg leading-6">%Commission</p>
            <p className="text-[#A0AEC0] text-xs">Profit</p>
          </div>
          <div className="">
            <hr className="bg-gradient-to-r from-[#e0e1e200] via-[#E0E1E2] to-[#e0e1e20d] w-full h-[1.5px] border-transparent" />
            <p className="font-bold text-lg leading-6">$2,000,000</p>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex gap-5 items-center mb-2">
          <h1 className="text-[#718096] font-bold text-sm">Today</h1>
          <Image src={Arrowdown} alt="Dropdown" width={7} />
        </div>
        <AnalyticsCard pageAnalytics={dashboardAnalytics} />
      </div>

      <div className="bg-white rounded-xl mt-16 p-5">
        <h1 className="text-[#2D3748] font-bold text-[22px]">Transaction</h1>
        <div className="flex float-end gap-5 items-center">
          <h1 className="text-[#718096] font-bold text-sm">Today</h1>
          <Image src={Arrowdown} alt="Dropdown" width={7} />
        </div>
        <div className="mt-20">
          <AChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
