"use client";
import { useState } from "react";
import { useTheme } from "../Hooks/useTheme";
import data from "../../data/portfolio-data";

export default function ExperienceSection({ expanded }) {
  const { darkMode } = useTheme();
  const [expandedItem, setExpandedItem] = useState(null);

  const toggle = (i) => setExpandedItem(expandedItem === i ? null : i);

  return (
    <div className={`flex justify-between font-esenka text-lg md:text-3xl transition-all duration-500 ${darkMode ? "text-[#c0c2cc]" : "text-[#3c3c3c]"}`}>
      <div className="flex flex-col gap-3 md:gap-6 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
        {data.experience.items.map((item, index) => (
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
              <div className="flex flex-col gap-2 md:gap-4 md:flex md:flex-row md:items-end">
                <div className="flex items-center group/item">
                  <a
                    href={item.url}
                    className={`border-b-[1px] border-dashed hover:border-solid hover:text-[#B8C0DC] cursor-pointer transition ${
                      darkMode ? "border-[#dcdde2] hover:border-[#B8C0DC]" : "border-[#3c3c3c] hover:border-[#B8C0DC]"
                    }`}
                  >
                    {item.name}
                  </a>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggle(index); }}
                    className="ml-2 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full hover:text-[#B8C0DC] transition-colors duration-300 group-hover/item:text-[#B8C0DC]"
                  >
                    <span className={`text-xl ${expandedItem === index ? "transform translate-y-[-2px]" : ""}`}>
                      {expandedItem === index ? "\u2212" : "+"}
                    </span>
                  </button>
                </div>
                {item.role && (
                  <span className={`font-esenka font-light text-xs md:text-base ${darkMode ? "text-[#5a5c6a]" : "text-[#939393]"}`}>
                    {item.role}, &nbsp; {item.year}
                  </span>
                )}
              </div>
              <span className="font-esenka font-normal text-xs md:text-xl mt-3 md:mt-0 transition-all duration-300 hover:translate-x-1 hover:text-[#B8C0DC]"
                style={index === 0 ? { paddingRight: "3px" } : {}}>
                {item.number}
              </span>
            </div>

            {/* Nested roles or single description */}
            {item.roles ? (
              <div className={`mt-2 pl-4 transition-all duration-500 overflow-hidden ${
                expandedItem === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="flex flex-col gap-4 md:gap-6 max-w-[90%] md:max-w-[60%]">
                  {item.roles.map((role, rIndex) => (
                    <div
                      key={rIndex}
                      className={`border-l-2 pl-4 md:pl-5 font-normal ${darkMode ? "border-[#1c1d24]" : "border-[#d2d2d2]"}`}
                      style={{
                        transitionDelay: `${rIndex * 80}ms`,
                        opacity: expandedItem === index ? 1 : 0,
                        transform: expandedItem === index ? "translateY(0px)" : "translateY(10px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="text-base md:text-2xl font-medium">{role.title}</span>
                        <span className={`font-esenka font-light text-[10px] md:text-sm ${darkMode ? "text-[#5a5c6a]" : "text-[#939393]"}`}>
                          {role.year}
                        </span>
                      </div>
                      <div className={`mt-2 text-xs md:text-base font-normal ${darkMode ? "text-[#8a8c98]" : "text-[#646464]"}`}>
                        <p className="mb-2">{role.description}</p>
                        {role.technologies && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {role.technologies.map((tech, i) => (
                              <span key={i} className={`text-[10px] md:text-xs px-2 py-1 rounded-sm ${
                                darkMode ? "bg-[#1c1d24] text-[#dcdde2]" : "bg-[#e9e9e9] text-[#5a5c6a]"
                              }`}>{tech}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={`mt-2 pl-4 text-sm md:text-base font-normal border-l-2 transition-all duration-500 overflow-hidden max-w-[90%] md:max-w-[40%] ${
                expandedItem === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              } ${darkMode ? "border-[#1c1d24] text-[#8a8c98]" : "border-[#d2d2d2] text-[#646464]"}`}>
                <p className="mb-2">{item.description}</p>
                {item.technologies && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded-sm ${
                        darkMode ? "bg-[#1c1d24] text-[#dcdde2]" : "bg-[#e9e9e9] text-[#5a5c6a]"
                      }`}
                        style={{
                          transitionDelay: `${i * 50}ms`,
                          opacity: expandedItem === index ? 1 : 0,
                          transform: expandedItem === index ? "translateY(0)" : "translateY(10px)",
                          transition: "opacity 0.3s ease, transform 0.3s ease",
                        }}
                      >{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
