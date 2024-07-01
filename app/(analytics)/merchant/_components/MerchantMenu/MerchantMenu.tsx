import classNames from "classnames"
import React from "react"

type Props = {
  setSelectedMerchant: React.Dispatch<React.SetStateAction<string>>
  handleClickMerchant: (item: string) => void
  selectedMerchant: string
}

const MerchantMenu = ({
  setSelectedMerchant,
  handleClickMerchant,
  selectedMerchant,
}: Props) => {
  const handleChangeMerchantMenu = (key: string) => {
    setSelectedMerchant(key)
  }

  const merchantMenu = [
    {
      key: "all",
      text: "All",
    },
    {
      key: "new",
      text: "New",
    },
    {
      key: "existing",
      text: "Existing",
    },
    {
      key: "incompleteOnboarding",
      text: "Incomplete Onboarding",
    },
  ]

  return (
    <div>
      <div className=" w-full flex gap-5  ">
        {merchantMenu.map(({ key, text }) => {
          const isActive = selectedMerchant === key

          return (
            <span
              onClick={() => handleClickMerchant(key)}
              key={key}
              className={classNames(
                `hover:text-[#091F8E] cursor-pointer relative text-sm`,
                {
                  "text-[#091F8E] border-b-[1.5px] border-[#091F8E] font-bold active":
                    isActive,
                },
                { "text-[#A0AEC0]": !isActive }
              )}
            >
              {text}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default MerchantMenu
