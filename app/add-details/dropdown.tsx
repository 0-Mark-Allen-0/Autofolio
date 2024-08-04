"use client";

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = () => {
  const [options, setOptions] = useState(["Item1", "Item2", "Item3", "Item4"]);
  return (
    <div>
      <div className=" relative max-w-[320px] w-full">
        <div className="w-full flex items-center justify-between py-3 px-2 border-2 border-gray-400 rounded-[10px] cursor-pointer">
          <p className="text-md text-gray-400">Select</p>
          <RiArrowDropDownLine className="text-base" size={20} />
        </div>

        <div className="absolute top-[110%] left-0 w-full max-h-[320px] p-3 rounded-[10px] border-2 border-gray-400 ">
          {options.map((option) => (
            <p className="text-sm text-black py-2">{option}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
