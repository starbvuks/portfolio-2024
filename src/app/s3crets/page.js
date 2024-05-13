"use client";
import React, { useState } from "react";
import Link from "next/link";

const Secrets = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
    console.log(darkMode);
  };

  return (
    <div
      className={
        darkMode
          ? `text-[#DBDBDB] flex flex-col bg-[#131313] transition-all duration-500`
          : `text-[#131313] flex flex-col bg-[#DBDBDB] transition-all duration-500`
      }
    >
      <div
        className={
          darkMode
            ? `flex justify-between items-end p-4 md:p-8 border-b-2 border-[#242424] transition-all duration-500`
            : `flex justify-between items-end p-4 md:p-8 border-b-2 border-[#d2d2d2] transition-all duration-500`
        }
      >
        <div className="flex items-end">
          <span
            className={
              darkMode
                ? "font-gambarino text-4xl md:text-7xl text-[#DBDBDB] hover:text-[#8BCD00] cursor-none tracking-tight transition-all duration-500"
                : "font-gambarino text-4xl md:text-7xl text-[#323232] hover:text-[#8BCD00] cursor-none tracking-tight transition-all duration-500"
            }
          >
            You Weren&apos;t Supposed To See This 
          </span>
          <a
          href="/"
            className={
              darkMode
                ? "flex items-center font-gambarino font-light text-sm md:text-lg text-[#323232] hover:text-[#8BCD00] tracking-tight transition-all duration-500"
                : "flex items-center font-gambarino font-light text-sm md:text-lg text-[#aaaaaa] hover:text-[#8BCD00] tracking-tight transition-all duration-500"
            }
          >
            <span className="text-xl md:text-2xl tracking-tighter">
              &emsp; // &emsp;
            </span>
            BACK TO PORTFOLIO
          </a>
        </div>
        <div>
          <button
            onClick={toggleMode}
            className={
              darkMode
                ? `rounded-full w-16 text-xl h-16 flex items-center justify-center border-[2px] border-[#242424] hover:scale-105 transition-all delay-100`
                : `rounded-full w-16 text-xl h-16 flex items-center justify-center border-[2px] border-[#aaaaaa] hover:scale-105 transition-all delay-100`
            }
          >
            {darkMode ? "☀️" : "🌑"}
          </button>
        </div>
      </div>

      {/* SECTION */}
      <div
        className={
          darkMode
            ? "flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 border-[#242424] transition-all duration-500"
            : "flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 border-[#d2d2d2] transition-all duration-500"
        }
      >
        {/* Title */}
        <div
          className={
            darkMode
              ? "flex justify-between text-[#323232] text-2xl md:text-4xl transition-all duration-500"
              : "flex justify-between text-[#aaaaaa] text-2xl md:text-4xl transition-all duration-500"
          }
        >
          <span className="font-gambarino">Random</span>
          <span className="font-gambarino">Thoughts</span>
        </div>
        {/* Items */}
        <div
          className={
            darkMode
              ? "flex justify-between font-esenka text-sm md:text-3xl text-[#ECECEC] transition-all duration-500"
              : "flex justify-between font-esenka text-sm md:text-3xl text-[#3c3c3c] transition-all duration-500"
          }
        >
          <div className="flex flex-col gap-1 md:gap-4 font-black py-4 md:py-8 w-full">
            <div className="flex justify-between w-full">
              <a>DEXTER WAS GOOD UNTIL S3 & S4 = OVERRATED</a>
              <span className="font-esenka font-normal text-xs md:text-xl">
                1
              </span>
            </div>
            <div className="flex justify-between w-full">
              <a>ORANGE LAYS BEST LAYS</a>
              <span className="font-esenka font-normal text-xs md:text-xl">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secrets;
