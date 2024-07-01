import React from "react";
import Image from "next/image";
import settingsIcon from "@/components/Settings/assets/Settings.svg";

type Props = {};

const Settings = (props: Props) => {
  return (
    <div className="flex gap-2">
      <Image src={settingsIcon} alt="Settings" className="w-5 cursor-pointer" />
    </div>
  );
};

export default Settings;
