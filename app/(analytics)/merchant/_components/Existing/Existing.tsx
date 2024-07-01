import React from "react"
import { TableComponent } from "@/components/Table/Table"
import { merchantExistingCol, merchantExistingRow } from "@/Utils/constants"

type Props = {}

const Existing = (props: Props) => {
  return (
    <div>
      <TableComponent
        columns={merchantExistingCol}
        rows={merchantExistingRow}
      />
    </div>
  )
}

export default Existing
