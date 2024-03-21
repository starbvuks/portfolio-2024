/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

// import PhysicsSimulation from "./PhysicsSimulation";

const Landing = () => {
  const appRef = useRef(null);
  const siteRef = useRef(null);

  useGSAP(() => {
    let appSplit = new SplitType(appRef.current, { type: "chars" });
    let appChars = appSplit.chars;

    let siteSplit = new SplitType(siteRef.current, { type: "chars" });
    let siteChars = siteSplit.chars;

    gsap.from(appChars, {
      yPercent: 50,
      stagger: 0.1,
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        opacity: 1
      }
    });

    gsap.from(siteChars, {
      xPercent: 60,
      stagger: 0.1,
      duration: 0.6,
      opacity: 0,
      delay: 0.5,
      onComplete: () => {
        opacity: 1
      }
    });
  });

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="bg-cover h-screen relative">
        <div className="flex h-[83%] w-screen">
          <div className="w-[60%] h-[46%] flex flex-col bg-opacity-10 bg-teal-200 border-b-2 border-r-2 border-l-2 rounded-b-xl py-12 pl-12 ml-16 border-black">
            <div className="flex gap-7">
              <span className="text-8xl text-black font-bold font-Manrope">
                i make
              </span>
              
              <span
                className="text-[#98E41B] text-8xl font-bold font-Manrope"
                ref={appRef}
              >
                apps
              </span>
              <span className="text-8xl text-black font-bold font-Manrope">
              and
              </span>
            </div>
            <span className="text-[#98E41B] text-8xl font-bold font-Manrope mt-3" ref={siteRef}>websites</span>
          </div>
          <div
            className="h-full relative z-0 right-0 w-[30%] border-black border-l-2 border-b-2 rounded-bl-xl ml-[5rem]"
            // ref={matterContainerRef}
          >
            <div className="w-full z-0 whitespace-nowrap border-b-2 rounded-tl-xl border-black bg-[#E7FFC0] h-[12%] flex gap-4 items-center px-6 font-Manrope">
              <span className="text-xl font-bold text-black">my stack</span>
              <span className="text-xl font-bold text-black">my stack</span>
              <span className="text-xl font-bold text-black">my stack</span>
              <span className="text-xl font-bold text-black">my stack</span>
            </div>
            {/* <PhysicsSimulation
              className="border-black"
              matterContainerRef={matterContainerRef}
            /> */}
          </div>
        </div>
        <div className=" absolute font-apercu font-bold text-black border-2 border-black rounded-2xl top-1/3 mt-[6.3%] left-16 w-[60%] h-[39%] px-24">
          <span className="absolute py-12 text-2xl">what do i put here</span>
        </div>

        <div className="bg-[#E7FFC0] font-apercu font-bold text-black border-2 border-[#42C98E] rounded-2xl top-1/3 mt-[6.3%] left-16 w-[90%] h-[39%] px-24">
          <span className="absolute py-12 text-2xl">what do i put here</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
