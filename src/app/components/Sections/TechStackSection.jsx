"use client";
import { useTheme } from "../Hooks/useTheme";
import data from "../../data/portfolio-data";

export default function TechStackSection({ expanded }) {
  const { darkMode } = useTheme();

  return (
    <div className={`transition-all duration-500 ${darkMode ? "text-[#c2c1c1]" : "text-[#3c3c3c]"}`}>
      <div className="font-esenka text-sm md:text-xl py-3 md:py-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {data.techStack.groups.map((group, gi) => (
          <div key={gi} className="flex flex-col">
            <span className={`font-gambarino text-base md:text-2xl ${darkMode ? "text-[#9a9a9a]" : "text-[#7a7a7a]"}`}>
              {group.label}
            </span>
            <div className="mt-2 md:mt-3 flex flex-wrap gap-1.5 md:gap-2">
              {group.items.map((chip, ci) => (
                <span
                  key={ci}
                  className={`text-[11px] md:text-sm px-2 py-1 rounded-sm transition-all duration-300 ${
                    darkMode
                      ? "bg-[#242424] text-[#ECECEC] hover:shadow-[0_0_8px_rgba(139,205,0,0.15)]"
                      : "bg-[#e9e9e9] text-[#464545]"
                  }`}
                  style={{
                    transitionDelay: `${ci * 30}ms`,
                    opacity: expanded ? 1 : 0,
                    transform: expanded ? "translateY(0)" : "translateY(10px)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
