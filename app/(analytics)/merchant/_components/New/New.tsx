import React from "react"
import { TableComponent } from "@/components/Table/Table"
import { merchantNewCol, merchantNewRow } from "@/Utils/constants"

type Props = {}

const New = (props: Props) => {
  return (
    <div>
      <TableComponent columns={merchantNewCol} rows={merchantNewRow} />
    </div>
  )
}

export default New
