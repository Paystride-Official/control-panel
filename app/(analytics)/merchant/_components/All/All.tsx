import React from "react"
import { TableComponent } from "@/components/Table/Table"
import { merchantAllCol, merchantAllRow } from "@/Utils/constants"

type Props = {}

const All = (props: Props) => {
  return (
    <div>
      <TableComponent columns={merchantAllCol} rows={merchantAllRow} />
    </div>
  )
}

export default All
