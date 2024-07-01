import React from "react"
import Image from "next/image"
import { AnalyticsCardProps } from "@/types/types"

type Props = {
  pageAnalytics: AnalyticsCardProps[]
}

const AnalyticsCard = ({ pageAnalytics }: Props) => {
  return (
    <div className="flex flex-wrap gap-5">
      {pageAnalytics.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white flex justify-between p-3 rounded-xl w-60 shadow-sm"
          >
            <div>
              <p className="text-[#A0AEC0] text-xs font-bold">{item.title}</p>
              <div className="flex gap-3 font-bold items-center">
                <p className="text-[#2D3748] text-lg leading-6">
                  {item.amount}
                </p>
                {item.profit && (
                  <p className="text-[#48BB78] text-sm">{item.profit}</p>
                )}
              </div>
            </div>
            <div className="bg-[#091F8E] flex items-center justify-center rounded-lg p-2">
              <Image src={item.icon} alt={item.icon} width={23} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AnalyticsCard
