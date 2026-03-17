"use client";
import { useTheme } from "../Hooks/useTheme";
import data from "../../data/portfolio-data";

export default function AboutSection({ expanded }) {
  const { darkMode } = useTheme();

  return (
    <div className={`font-esenka text-base md:text-xl transition-all duration-500 ${darkMode ? "text-[#dcdde2]" : "text-[#3c3c3c]"}`}>
      <div className="pl-4 md:pl-8 py-4 md:py-8 max-w-[90%] md:max-w-[60%] lg:max-w-[70%]">
        <p className={`${darkMode ? "text-[#8a8c98]" : "text-[#646464]"} mb-4 md:mb-6`}>
          {data.about.bio}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {data.about.highlights.map((group, gi) => (
            <div key={gi}>
              <p className={`font-gambarino text-lg md:text-2xl ${darkMode ? "text-[#6e7080]" : "text-[#7a7a7a]"}`}>
                {group.label}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((chip, ci) => (
                  <span
                    key={ci}
                    className={`text-xs md:text-sm px-2 py-1 rounded-sm transition-all duration-300 ${
                      darkMode
                        ? "bg-[#1c1d24] text-[#dcdde2] hover:shadow-[0_0_8px_rgba(184,192,220,0.15)]"
                        : "bg-[#e9e9e9] text-[#5a5c6a]"
                    }`}
                    style={{
                      transitionDelay: `${ci * 40}ms`,
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
    </div>
  );
}
