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
          ? `text-[#DBDBDB] h-screen flex flex-col bg-[#131313] transition-all duration-[5000ms]`
          : `text-[#131313] h-screen flex flex-col bg-[#DBDBDB] transition-all duration-[5000ms]`
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
                ? "font-gambarino text-4xl md:text-7xl text-[#DBDBDB] hover:text-[#8BCD00] cursor-help tracking-tight transition-all duration-500"
                : "font-gambarino text-4xl md:text-7xl text-[#323232] hover:text-[#8BCD00] cursor-help tracking-tight transition-all duration-500"
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
            ? "flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 border-[#242424] transition-all duration-500 cursor-none"
            : "flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 border-[#d2d2d2] transition-all duration-500 cursor-none"
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
          <div
            className={
              darkMode
                ? "flex flex-col gap-1 md:gap-4 font-black border-l-[1.5px] border-[#3c3c3c] pl-4 py-4 md:my-4 w-full"
                : "flex flex-col gap-1 md:gap-4 font-black border-l-[1.5px] border-[#aaaaaa] pl-4 py-4 md:my-4 w-full"
            }
          >
            <div className="flex justify-between w-full hover:text-[#8BCD00] cursor-none">
              <span className="w-[90%]">
                IT&apos;S FUNNY CAUSE THE PORTFOLIO I SPENT YEARS TRYING TO DO
                RIGHT IS THE MOST SIMPLE SITE I&apos;VE EVER MADE. IF I HATE
                THIS IN A MONTH OR TWO ITS BACK TO SQUARE ONE, HOPEFULLY THIS
                LOOK DOESNT LOOSE IT&apos;S NOVELTY.
              </span>
              <span className="font-esenka font-normal text-xs md:text-2xl">
                1
              </span>
            </div>
            <div className="flex justify-between w-full hover:text-[#8BCD00] cursor-none">
              <a href="https://www.fontshare.com/fonts/gambarino" target="_blank" className="w-[90%] cursor-none">
                THIS FONT GO TOO HARD
              </a>
              <span className="font-esenka font-normal text-xs md:text-2xl">
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
