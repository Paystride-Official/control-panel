"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import { TableComponent } from "@/components/Table/Table";
import AnalyticsCard from "@/components/Cards/AnalyticsCard/AnalyticsCard";
import Folder from "@/components/Cards/assets/Folder.svg";
import Cart from "@/components/Cards/assets/Cart.svg";
import File from "@/components/Cards/assets/File.svg";
import { AnalyticsCardProps } from "@/types/types";
import { transactionCol, transactionRow } from "@/Utils/constants";
import { getAllTransaction } from "../_slice/api";

type Props = {};

const Transaction = (props: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["transactionAnalytics"],
    queryFn: getAllTransaction,
  });

  const transactionAnalytics: AnalyticsCardProps[] = [
    {
      title: "Transaction",
      amount: "$53,000",
      profit: "+55%",
      icon: Folder,
    },
    {
      title: "Highest Transaction/Merchant",
      amount: "200/Ajebo",
      icon: Cart,
    },
    {
      title: "No of Transactions",
      amount: data?.success.count,
      icon: File,
    },
  ];

  return (
    <div>
      <AnalyticsCard pageAnalytics={transactionAnalytics} />
      <div className="bg-white mt-4 min-h-[62vh] rounded-xl py-3 px-5">
        <TableComponent columns={transactionCol} rows={transactionRow} />
      </div>
    </div>
  );
};

export default Transaction;
