"use client";
import { useRef, useState } from "react";
import { useTheme } from "../Hooks/useTheme";

export default function Header() {
  const { darkMode, toggleMode, isTransitioning } = useTheme();
  const buttonRef = useRef(null);
  const [isRotating, setIsRotating] = useState(false);

  const handleToggle = (e) => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 2000);
    toggleMode(e);
  };

  return (
    <div
      className={`flex justify-between items-end p-4 md:p-8 border-b-2 transition-all duration-500
        ${darkMode ? "border-[#1c1d24]" : "border-[#d2d2d2]"}`}
    >
      <div className="flex items-end">
        <span
          className={`font-gambarino text-4xl md:text-7xl tracking-tight transition-all duration-500 header-name ${
            darkMode
              ? "hover:text-white text-[#dcdde2]"
              : "hover:text-[#131313] text-[#3c3c3c]"
          }`}
        >
          Sarvag Kalari
        </span>
        <span
          className={`flex items-center font-gambarino font-light text-xs md:text-lg tracking-tight transition-all duration-500 ${
            darkMode ? "text-[#5a5c6a]" : "text-[#aaaaaa]"
          }`}
        >
          <span className="text-base md:text-2xl tracking-tighter">
            &emsp; // &emsp;
          </span>
          PORTFOLIO 2026
        </span>
      </div>
      <div className="relative group">
        <button
          ref={buttonRef}
          onClick={handleToggle}
          disabled={isTransitioning}
          className={`relative rounded-full w-10 h-10 text-lg md:w-16 md:h-16 md:text-xl flex items-center justify-center border-[1px] md:border-[2px] hover:scale-110 transform transition-all duration-300 ${
            darkMode
              ? "border-[#1c1d24] hover:border-[#B8C0DC]"
              : "border-[#aaaaaa] hover:border-[#B8C0DC]"
          } ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div className="relative overflow-hidden h-full w-full flex items-center justify-center">
            <span className={`absolute transition-all duration-500 ${darkMode ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              {"\uD83C\uDF11"}
            </span>
            <span className={`absolute transition-all duration-500 ${darkMode ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}>
              {"\u2600\uFE0F"}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
