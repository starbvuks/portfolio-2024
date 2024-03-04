/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import Navbar from "./Navbar";
import PhysicsSimulation from "./PhysicsSimulation";

const Landing = () => {
  const matterContainerRef = useRef(null);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="bg-grainy-bg h-screen relative">
        <div className="flex h-[83%] w-screen">
          <div className="w-[70%] h-[46%] bg-opacity-10 bg-green-200 border-b-2 border-r-1 py-12 pl-12 border-black">
            <span className="text-8xl text-black font-bold font-Manrope">
              i make <span className="text-[#98E41B]">apps</span> and{" "}
              <span className="text-[#98E41B]">websites</span>
            </span>
          </div>
          <div
            className="h-full relative z-10 w-[30%] border-black border-l-2 border-b-2 rounded-bl-xl "
            ref={matterContainerRef}
          >
            <div className="w-full absolute z-0 whitespace-nowrap border-b-2 border-black bg-[#E7FFC0] h-[12%] flex gap-4 items-center px-6 font-Manrope">
              <span className="text-xl font-bold text-black">my stack</span>
              <span className="text-xl font-bold text-black">my stack</span>
              <span className="text-xl font-bold text-black">my stack</span>
              <span className="text-xl font-bold text-black">my stack</span>
            </div>
            <PhysicsSimulation className="border-black" matterContainerRef={matterContainerRef} />
          </div>
        </div>
        <div className="bg-[#E7FFC0] absolute font-apercu font-bold text-black border-2 border-[#42C98E] rounded-3xl top-1/3 mt-[6.3%] left-16 w-[61%] h-[39%] px-24">
          <span className="absolute py-12 text-2xl">what do i put here</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
