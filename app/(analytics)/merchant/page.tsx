"use client"
import React, { useState } from "react"
import { AnalyticsCardProps } from "@/types/types"
import Cart from "@/components/Cards/assets/Cart.svg"
import AnalyticsCard from "@/components/Cards/AnalyticsCard/AnalyticsCard"
import All from "./_components/All/All"
import New from "./_components/New/New"
import Existing from "./_components/Existing/Existing"
import IncompleteOnboarding from "./_components/IncompleteOnboarding/IncompleteOnboarding"
import MerchantMenu from "./_components/MerchantMenu/MerchantMenu"

type Props = {}

const Merchant = (props: Props) => {
  const [selectedMerchant, setSelectedMerchant] = useState<string>("all")

  const handleCickMerchant = (item: string) => {
    setSelectedMerchant(item)
  }

  const stepToRender = (key: string) => {
    switch (key) {
      case "all":
        return <All />
      case "new":
        return <New />
      case "existing":
        return <Existing />
      case "incompleteOnboarding":
        return <IncompleteOnboarding />

      default:
        break
    }
  }
  const merchantAnalytics: AnalyticsCardProps[] = [
    {
      title: "No of Merchant",
      amount: "2",
      icon: Cart,
    },
  ]

  return (
    <div>
      <AnalyticsCard pageAnalytics={merchantAnalytics} />
      <section className="mt-6">
        <MerchantMenu
          selectedMerchant={selectedMerchant}
          setSelectedMerchant={setSelectedMerchant}
          handleClickMerchant={handleCickMerchant}
        />
        <div className="bg-white mt-4 min-h-[62vh] rounded-xl py-3 px-5">
          {stepToRender(selectedMerchant)}
        </div>
      </section>
    </div>
  )
}

export default Merchant
