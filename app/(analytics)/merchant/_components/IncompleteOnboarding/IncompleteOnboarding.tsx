import React from "react"
import { TableComponent } from "@/components/Table/Table"
import { merchantIncompleteCol, merchantIncompleteRow } from "@/Utils/constants"

type Props = {}

const IncompleteOnboarding = (props: Props) => {
  return (
    <div>
      <TableComponent
        columns={merchantIncompleteCol}
        rows={merchantIncompleteRow}
      />
    </div>
  )
}

export default IncompleteOnboarding
