"use client"
import React from "react"
import Image from "next/image"
import Menu from "./assets/Menu.svg"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react"
import { NewUser, column, row } from "@/types/types"

type TableProps = {
  columns: NewUser[] | undefined
  rows: row[]
}

export function TableComponent({ rows, columns }: TableProps) {
  const renderCell = React.useCallback((column: column, columnKey: any) => {
    switch (columnKey) {
      case "name":
        return (
          <div>
            <p className="text-[#21272A] font-bold capitalize">{column.name}</p>
            <p>{column.phoneNumber}</p>
          </div>
        )

      case "default":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.default} />
          </div>
        )

      case "transaction":
        return (
          <div className="flex justify-center items-center">
            <input type="checkbox" checked={column.transaction} />
          </div>
        )
      case "status":
        return (
          <div className=" flex items-start text-[#48BB78]">
            <p>{column.status}</p>
          </div>
        )
      case "more":
        return (
          <div className="flex justify-center items-center ">
            <Image src={Menu} alt="menu" className="w-auto cursor-pointer" />
          </div>
        )
      case "time":
        return (
          <div className="flex items-start gap-3">
            <p>{column.date}</p>
            <p>{column.time}</p>
          </div>
        )
      case "settlement":
        return (
          <div className="flex items-start text-[#48BB78]">
            <p>{column.settlement}</p>
          </div>
        )

      default:
        return column[columnKey]
    }
  }, [])

  return (
    <div className="">
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
              className="text-[#A0AEC0] text-[10px] sm:text-xs font-bold py-[14px] bg-transparent border-b-[1.5px] border-[#E2E8F0]"
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody
          items={rows}
          emptyContent={"There are no deatails available "}
        >
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell
                  className="text-[#A0AEC0] text-xs sm:text-sm py-[14px] border-b-[1.5px] border-[#E2E8F0]"
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
  )
}
