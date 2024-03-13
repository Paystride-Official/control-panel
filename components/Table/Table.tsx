"use client";
import React from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { NewUser, column, row } from "@/types/types";

type TableProps = {
  columns: NewUser[] | undefined;
  rows: row[];
};

export function TableComponent({ rows, columns }: TableProps) {
  const renderCell = React.useCallback((column: column, columnKey: any) => {
    switch (columnKey) {
      case "name":
        return (
          <div>
            <p className="text-[#21272A] font-bold capitalize">{column.name}</p>
            <p>{column.phoneNumber}</p>
          </div>
        );

      case "status":
        return (
          <div className=" flex items-start gap-8">
            <p>{column.status}</p>
          </div>
        );

      case "default":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.default} />
          </div>
        );

      case "transaction":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.transaction} />
          </div>
        );
      case "merchant":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.paymentPoint} />
          </div>
        );
      case "permission":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.settlement} />
          </div>
        );
      case "settlement":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.settings} />
          </div>
        );

      default:
        return column[columnKey];
    }
  }, []);

  return (
    <div className="mt-2">
      <Table
        removeWrapper
        aria-label="Example table with dynamic content"
        className="overflow-x-auto pb-5 max-w-[20rem] min-w-full"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column?.key}
              style={{ overflowX: "auto" }}
              className="text-[#A0AEC0] text-[10px] sm:text-xs font-bold bg-transparent"
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody
          items={rows}
          emptyContent={"You haven't create any staff yet."}
        >
          {/* <TableBody emptyContent={"No rows to display."}>{[]}</TableBody> */}
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell
                  className="text-[#A0AEC0] text-xs sm:text-sm"
                  style={{ overflowX: "auto" }}
                >
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
