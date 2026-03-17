"use client";
import { useState } from "react";
import { useTheme } from "../Hooks/useTheme";
import data from "../../data/portfolio-data";

export default function ProjectsSection({ expanded }) {
  const { darkMode } = useTheme();
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedCapstone, setExpandedCapstone] = useState(null);

  return (
    <div className={`flex justify-between font-esenka text-lg md:text-3xl transition-all duration-500 ${darkMode ? "text-[#c0c2cc]" : "text-[#3c3c3c]"}`}>
      <div className="flex flex-col gap-3 md:gap-6 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
        {data.projects.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full transform transition-all duration-300"
            style={{
              transitionDelay: `${index * 80}ms`,
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
                    onClick={(e) => { e.stopPropagation(); setExpandedProject(expandedProject === index ? null : index); }}
                    className="ml-2 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full hover:text-[#B8C0DC] transition-colors duration-300 group-hover/item:text-[#B8C0DC]"
                  >
                    <span className={`text-xl ${expandedProject === index ? "transform translate-y-[-2px]" : ""}`}>
                      {expandedProject === index ? "\u2212" : "+"}
                    </span>
                  </button>
                </div>
                <span className={`font-esenka font-light text-xs md:text-base ${darkMode ? "text-[#5a5c6a]" : "text-[#939393]"}`}>
                  {item.role}, &nbsp; {item.year}
                </span>
              </div>
              <span className="font-esenka font-normal text-xs md:text-xl mt-3 md:mt-0 transition-all duration-300 hover:translate-x-1 hover:text-[#B8C0DC]">
                {item.number}
              </span>
            </div>

            <div className={`mt-2 pl-4 text-sm md:text-base font-normal border-l-2 transition-all duration-500 overflow-hidden max-w-[90%] md:max-w-[50%] ${
              expandedProject === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
            } ${darkMode ? "border-[#1c1d24] text-[#8a8c98]" : "border-[#d2d2d2] text-[#646464]"}`}>
              <p className="mb-2">{item.description}</p>
              {item.technologies && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.technologies.map((tech, i) => (
                    <span key={i} className={`text-xs px-2 py-1 rounded-sm ${
                      darkMode ? "bg-[#1c1d24] text-[#dcdde2]" : "bg-[#e9e9e9] text-[#5a5c6a]"
                    }`}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Bootcamp Capstones */}
        <div className="mt-6 md:mt-10">
          <div className={`mb-3 flex items-center justify-between text-xl md:text-2xl font-gambarino font-semibold ${
            darkMode ? "text-[#5a5c6a]" : "text-[#939393]"
          }`}>
            <span>{data.projects.bootcampCapstones.title}</span>
          </div>
          <div className="mt-2 flex flex-col gap-3 md:gap-4">
            {data.projects.bootcampCapstones.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-full transform transition-all duration-300"
                style={{
                  transitionDelay: `${index * 60}ms`,
                  opacity: expanded ? 1 : 0,
                  transform: expanded ? "translateY(0px)" : "translateY(15px)",
                }}
              >
                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-1 md:gap-2 md:flex md:flex-row md:items-end">
                    <div className="flex items-center group/item">
                      <a
                        href={item.url}
                        className={`border-b-[1px] border-dashed hover:border-solid hover:text-[#B8C0DC] cursor-pointer transition ${
                          darkMode ? "border-[#585a66] hover:border-[#B8C0DC]" : "border-[#bdbdbd] hover:border-[#B8C0DC]"
                        }`}
                      >
                        {item.name}
                      </a>
                      <button
                        onClick={(e) => { e.stopPropagation(); setExpandedCapstone(expandedCapstone === index ? null : index); }}
                        className="ml-2 w-5 h-5 flex items-center justify-center rounded-full hover:text-[#B8C0DC] transition-colors duration-300 group-hover/item:text-[#B8C0DC]"
                      >
                        <span className={`text-lg ${expandedCapstone === index ? "transform translate-y-[-2px]" : ""}`}>
                          {expandedCapstone === index ? "\u2212" : "+"}
                        </span>
                      </button>
                    </div>
                    <span className={`font-esenka font-light text-[10px] md:text-sm ${darkMode ? "text-[#50525e]" : "text-[#9c9c9c]"}`}>
                      {item.role}, &nbsp; {item.year}
                    </span>
                  </div>
                  <span className={`font-esenka font-normal text-xs md:text-base ${darkMode ? "text-[#50525e]" : "text-[#9c9c9c]"}`}>
                    {item.number}
                  </span>
                </div>
                <div className={`mt-2 pl-4 text-xs md:text-sm font-normal border-l-2 transition-all duration-500 overflow-hidden max-w-[90%] md:max-w-[50%] ${
                  expandedCapstone === index ? "max-h-[250px] opacity-100" : "max-h-0 opacity-0"
                } ${darkMode ? "border-[#1c1d24] text-[#7a7a7a]" : "border-[#d2d2d2] text-[#7a7a7a]"}`}>
                  <p className="mb-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
