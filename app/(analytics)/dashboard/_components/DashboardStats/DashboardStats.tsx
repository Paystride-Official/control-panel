"use client";
import React from "react";
import classNames from "classnames";

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
            description: "No of Settlement",
            count: "100",
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
            <div className="flex flex-wrap justify-center md:justify-normal gap-4">
                {Stats.map((stats, index) => {
                    return (
                        <div
                            key={index}
                            className=" bg-white rounded-md py-3 px-4 h-[6.5rem] sm:h-[7.6rem] w-[8rem] sm:min-w-[175px] border-[2.066px] border-solid border-[#ECEEF6]"
                        >
                            <h1 className="text-[#343434] font-bold mb-1 capitalize text-xs sm:text-base">
                                {stats.title}
                            </h1>
                            <p className="font-bold text-[#232323] text-xl sm:text-3xl mb-2">
                                {stats.amount}
                            </p>
                            <div className="flex justify-between items-center">
                                <p className="text-[#949494] text-[8px] sm:text-xs tracking-[0.145px]">
                                    {stats.description}
                                </p>
                                <div
                                    className={classNames({
                                        "px-1 sm:px-2 rounded-[50px] bg-[#23c10a26]":
                                            stats.count,
                                    })}
                                >
                                    <p className="text-green-700 font-semibold text-[9px] sm:text-sm">
                                        {" "}
                                        {stats.count}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DashboardStats;
