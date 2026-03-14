"use client";
import { useTheme } from "../Hooks/useTheme";
import data from "../../data/portfolio-data";

export default function WhatIDoSection({ expanded }) {
  const { darkMode } = useTheme();

  return (
    <div className={`transition-all duration-500 ${darkMode ? "text-[#c2c1c1]" : "text-[#3c3c3c]"}`}>
      <div className="font-esenka text-lg md:text-3xl font-black py-4 md:py-8 w-full">
        <div className="flex justify-between w-full">
          {[...Array(2)].map((_, colIndex) => {
            const perCol = Math.ceil(data.whatIDo.items.length / 2);
            const start = colIndex * perCol;
            const items = data.whatIDo.items.slice(start, start + perCol);
            return (
              <div key={colIndex} className={`flex flex-col gap-2 md:gap-4 ${colIndex === 1 ? "text-right" : ""}`}>
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center transform transition-all duration-300 hover:translate-x-1 ${colIndex === 1 ? "flex-row-reverse" : ""}`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      opacity: expanded ? 1 : 0,
                      transform: expanded ? "translateY(0px)" : "translateY(20px)",
                    }}
                  >
                    <div className={`w-6 md:w-8 text-center font-esenka font-normal text-xs md:text-xl transition-all duration-300 ${
                      darkMode ? "text-[#464545]" : "text-[#aaaaaa]"
                    }`}>
                      {item.number}
                    </div>
                    <div className={`${colIndex === 0 ? "ml-3" : "mr-3"} hover:text-[#8BCD00] transition-colors duration-300`}>
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
