import Image from "next/image";
import React, { useState } from "react";
import searchIcon from "@/components/Search/assets/Search.svg";

type Props = {};

const Search = (props: Props) => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={`bg-white flex items-center md:w-[25vw] border border-solid border-[#E2E8F0] px-1 sm:px-2 rounded-2xl
           ${expand ? "gap-1" : "gap-0"}
          `}
    >
      <Image
        onClick={() => setExpand(!expand)}
        src={searchIcon}
        alt="search"
        className="w-auto cursor-pointer"
      />
      <input
        type="text"
        className={`outline-none border-[none] py-2 md:w-full text-[#8A92A6] rounded-2xl text-sm sm:text-base duration-[1000ms] ${
          expand ? "w-[30vw]" : "w-0"
        }`}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
