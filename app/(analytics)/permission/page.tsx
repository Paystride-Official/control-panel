import React from "react"
import AnalyticsCard from "@/components/Cards/AnalyticsCard/AnalyticsCard"
import Fix from "@/components/Cards/assets/Fix.svg"
import { AnalyticsCardProps } from "@/types/types"
import { TableComponent } from "@/components/Table/Table"
import { permissionCol, permissionRow } from "@/Utils/constants"

type Props = {}

const Permission = (props: Props) => {
  const permissionAnalytics: AnalyticsCardProps[] = [
    {
      title: "User",
      amount: "2",
      icon: Fix,
    },
  ]

  return (
    <div>
      <AnalyticsCard pageAnalytics={permissionAnalytics} />
      <div className="bg-white mt-4 min-h-[62vh] rounded-xl py-3 px-5">
        <TableComponent columns={permissionCol} rows={permissionRow} />
      </div>
    </div>
  )
}

export default Permission
