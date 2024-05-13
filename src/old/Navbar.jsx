"use client"
import React, { useState } from "react";

const Navbar = () => {
  const [toggleState, setToggleState] = useState("2d");

  const handleToggle = () => {
    const newToggleState = toggleState === "2d" ? "3d" : "2d";
    setToggleState(newToggleState);
  };

  return (
    <nav className="bg-white flex items-center font-apercu justify-between h-24 px-12 bg-gray-[#C9C9C9] text-black border-black border-b-2">
      <div className="ml-4 font-bold text-2xl">sarvag kalari</div>
      <div className="mr-4 text-lg flex gap-7 underline">
        <button className="mr-2 ">about</button>
        <button>contact</button>
      </div>
      <div className="mr-4">
        <button
          className={`w-8 h-8 rounded-full ${
            toggleState === "2d" ? "bg-green-500" : "bg-blue-500"
          }`}
          onClick={handleToggle}
        />
      </div>
    </nav>
  );
};

export default Navbar;
