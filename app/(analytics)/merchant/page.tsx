import React from "react";
import { dashboardCol, dashboardRow } from "@/Utils/constants";
import { TableComponent } from "@/components/Table/Table";

type Props = {};

const Merchant = (props: Props) => {
  return (
    <div>
      <h1>Merchant Page</h1>
      <TableComponent rows={dashboardRow} columns={dashboardCol} />
    </div>
  );
};

export default Merchant;
