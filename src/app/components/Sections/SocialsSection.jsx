"use client";
import { useTheme } from "../Hooks/useTheme";
import data from "../../data/portfolio-data";

export default function SocialsSection({ expanded }) {
  const { darkMode } = useTheme();

  return (
    <div className={`flex justify-between font-esenka text-lg md:text-3xl transition-all duration-500 ${darkMode ? "text-[#c0c2cc]" : "text-[#3c3c3c]"}`}>
      <div className="flex flex-col gap-1 md:gap-4 font-black pl-4 md:pl-8 py-4 md:py-8 w-full">
        {data.socials.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between w-full transform transition-all duration-300"
            style={{
              transitionDelay: `${index * 50}ms`,
              opacity: expanded ? 1 : 0,
              transform: expanded ? "translateY(0px)" : "translateY(20px)",
            }}
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B8C0DC] hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
            >
              {item.name}
            </a>
            <span className="font-esenka font-normal text-xs md:text-xl" style={index === 0 ? { paddingRight: "3px" } : {}}>
              {item.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
