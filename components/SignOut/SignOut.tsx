import React from "react";
import Image from "next/image";
import signOutIcon from "@/components/SignOut/assets/SignOut.svg";

type Props = {};

const SignOut = (props: Props) => {
  return (
    <div className="cursor-pointer">
      <p className="text-[#718096] font-bold hidden lg:block">Sign Out</p>
      <Image
        src={signOutIcon}
        alt="Sign Out"
        className="w-auto block lg:hidden"
      />
    </div>
  );
};

export default SignOut;
