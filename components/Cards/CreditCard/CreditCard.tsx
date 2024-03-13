import Image from "next/image";
import React from "react";
import MasterSign from "@/components/Cards/assets/MasterSign.svg";
import Curve1 from "@/components/Cards/assets/Curve1.svg";
import Curve2 from "@/components/Cards/assets/Curve2.svg";
import Curve3 from "@/components/Cards/assets/Curve3.svg";

type Props = {};

const CreditCard = (props: Props) => {
  return (
    <div className="relative bg-gradient-to-r from-[#091F8E] to-[#151928] rounded-xl px-5 py-3 w-[22rem] h-[11rem]">
      <div className="flex flex-col justify-between h-full text-white">
        <div className="flex justify-between">
          <div>
            <p className="font-bold">Paystride</p>
            <p className="capitalize text-sm">total amount processed</p>
          </div>
          <Image src={MasterSign} alt="Card Sign" className="w-auto" />
        </div>
        <div>
          <h2 className="text-[2.95rem] font-bold">$300,000,000</h2>
        </div>
      </div>
      <Image
        src={Curve1}
        alt="curve"
        className="absolute w-auto top-0 left-0"
      />
      <Image
        src={Curve2}
        alt="curve"
        className="absolute w-auto top-0 left-0"
      />
      <Image
        src={Curve3}
        alt="curve"
        className="absolute w-auto top-0 left-0"
      />
    </div>
  );
};

export default CreditCard;
