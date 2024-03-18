import AnalyticsCard from "@/components/Cards/AnalyticsCard/AnalyticsCard"
import React from "react"
import Folder from "@/components/Cards/assets/Folder.svg"
import File from "@/components/Cards/assets/File.svg"
import { AnalyticsCardProps } from "@/types/types"
import { TableComponent } from "@/components/Table/Table"
import { settlementsCol, settlementsRow } from "@/Utils/constants"

type Props = {}

const Settlements = (props: Props) => {
  const settlementAnalytics: AnalyticsCardProps[] = [
    {
      title: "Settlements",
      amount: "$89,000",
      profit: "+55%",
      icon: Folder,
    },
    {
      title: "No of Settlement",
      amount: "3,052",
      icon: File,
    },
  ]

  return (
    <div>
      <AnalyticsCard pageAnalytics={settlementAnalytics} />
      <div className="bg-white mt-4 min-h-[62vh] rounded-xl py-3 px-5">
        <TableComponent columns={settlementsCol} rows={settlementsRow} />
      </div>
    </div>
  )
}

export default Settlements
