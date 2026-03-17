"use client";
import { useState } from "react";
import { useTheme } from "../Hooks/useTheme";
import data from "../../data/portfolio-data";

export default function EducationSection({ expanded }) {
  const { darkMode } = useTheme();
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <div className={`flex justify-between font-esenka text-lg md:text-3xl transition-all duration-500 ${darkMode ? "text-[#c0c2cc]" : "text-[#3c3c3c]"}`}>
      <div className="flex flex-col gap-4 md:gap-6 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
        {data.education.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full transform transition-all duration-300"
            style={{
              transitionDelay: `${index * 100}ms`,
              opacity: expanded ? 1 : 0,
              transform: expanded ? "translateY(0px)" : "translateY(20px)",
            }}
          >
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-0 md:gap-4 md:flex md:flex-row md:items-end">
                <div className="flex items-center group/item">
                  <a href={item.url} className="hover:text-[#B8C0DC] cursor-pointer transition mt-2 md:mt-0">
                    {item.name}
                  </a>
                  <button
                    onClick={(e) => { e.stopPropagation(); setExpandedItem(expandedItem === index ? null : index); }}
                    className="ml-2 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full hover:text-[#B8C0DC] transition-colors duration-300 group-hover/item:text-[#B8C0DC]"
                  >
                    <span className={`text-xl ${expandedItem === index ? "transform translate-y-[-2px]" : ""}`}>
                      {expandedItem === index ? "\u2212" : "+"}
                    </span>
                  </button>
                </div>
                <span className={`font-esenka font-light text-xs md:text-base ${darkMode ? "text-[#5a5c6a]" : "text-[#939393]"}`}>
                  {item.degree}, &nbsp; {item.year}
                </span>
              </div>
              <span className="font-esenka font-normal text-xs md:text-xl mt-3 md:mt-0 transition-all duration-300 hover:translate-x-1 hover:text-[#B8C0DC]"
                style={index === 0 ? { paddingRight: "3px" } : {}}>
                {item.number}
              </span>
            </div>
            {item.description && (
              <div className={`mt-2 pl-4 text-sm md:text-base font-normal border-l-2 transition-all duration-500 overflow-hidden max-w-[90%] md:max-w-[40%] ${
                expandedItem === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              } ${darkMode ? "border-[#1c1d24] text-[#8a8c98]" : "border-[#d2d2d2] text-[#646464]"}`}>
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
