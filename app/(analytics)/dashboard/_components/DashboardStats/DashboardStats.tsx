"use client";
import React from "react";

type Props = {};

const DashboardStats = (props: Props) => {
    const Stats = [
        {
            title: "total transactions",
            amount: "100",
        },
        {
            title: "total revenue",
            amount: "N" + "900,000",
            settle: "No of Settlement",
            settleNumber: "100",
        },
        {
            title: "merchants",
            amount: "10",
        },
        {
            title: "total revenue",
            amount: "N" + "100,000",
        },
        {
            title: "failed settlement",
            amount: "10",
        },
    ];
    return (
        <div>
            <div className="flex flex-wrap justify-center md:justify-normal h-[6.5rem] sm:h-[7.6rem] gap-4">
                {Stats.map((stats, index) => {
                    return (
                        <div
                            key={index}
                            className=" bg-white rounded-md py-3 px-4 h-full w-[8rem] sm:min-w-[175px] border-[2.066px] border-solid border-[#ECEEF6]"
                        >
                            <h1 className="text-[#343434] font-bold mb-1 capitalize text-xs sm:text-base">
                                {stats.title}
                            </h1>
                            <p className="font-bold text-[#232323] text-xl sm:text-3xl mb-2">
                                {stats.amount}
                            </p>
                            <p className="text-[#ECECEC] flex text-[8px] sm:text-xs">
                                {stats.settle}{" "}
                                <span className="text-green-600 bg-green-200 font-semibold">
                                    {" "}
                                    {stats.settleNumber}
                                </span>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DashboardStats;
