"use client";
import { useRef, useEffect, useState, forwardRef } from "react";
import { useTheme } from "../Hooks/useTheme";
import { useScrollReveal } from "../Hooks/useScrollReveal";

const SectionWrapper = forwardRef(function SectionWrapper(
  { title, sectionKey, expanded, onToggle, children, alwaysOpen = false },
  ref
) {
  const { darkMode } = useTheme();
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(alwaysOpen ? "none" : "0px");
  const revealRef = useScrollReveal();

  // Measure and animate height
  useEffect(() => {
    if (alwaysOpen) return;
    const el = contentRef.current;
    if (!el) return;

    if (expanded) {
      setMaxHeight(el.scrollHeight + "px");
      const onEnd = () => setMaxHeight("none");
      el.addEventListener("transitionend", onEnd, { once: true });
      return () => el.removeEventListener("transitionend", onEnd);
    } else {
      // Collapse: set explicit height first, then trigger transition to 0
      setMaxHeight(el.scrollHeight + "px");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMaxHeight("0px");
        });
      });
    }
  }, [expanded, alwaysOpen]);

  return (
    <div
      ref={ref}
      className={`flex flex-col px-4 md:px-8 py-4 md:py-6 border-b-2 transition-colors duration-500 ${
        darkMode ? "border-[#242424]" : "border-[#d2d2d2]"
      }`}
    >
      {/* Title */}
      <div
        ref={revealRef}
        data-reveal
        className={`parallax-title flex justify-between text-2xl md:text-4xl transition-all duration-500 ${
          alwaysOpen ? "" : "cursor-pointer group"
        } ${darkMode ? "text-[#464545] hover:text-[#8BCD00]" : "text-[#aaaaaa] hover:text-[#8BCD00]"}`}
        onClick={alwaysOpen ? undefined : onToggle}
      >
        {title.length === 1 ? (
          <>
            <span className="font-gambarino">{title[0]}</span>
            {!alwaysOpen && (
              <button
                className="ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:text-[#8BCD00]"
                onClick={(e) => { e.stopPropagation(); onToggle(); }}
              >
                <span className={`text-sm md:text-lg ${expanded ? "text-[#8BCD00] transform translate-y-[-2px]" : ""}`}>
                  {expanded ? "\u2212" : "+"}
                </span>
              </button>
            )}
          </>
        ) : title.length === 2 ? (
          <>
            <span className="font-gambarino">{title[0]}</span>
            <span className="font-gambarino flex items-center">
              {title[1]}
              {!alwaysOpen && (
                <button
                  className="ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:text-[#8BCD00]"
                  onClick={(e) => { e.stopPropagation(); onToggle(); }}
                >
                  <span className={`text-sm md:text-lg ${expanded ? "text-[#8BCD00] transform translate-y-[-2px]" : ""}`}>
                    {expanded ? "\u2212" : "+"}
                  </span>
                </button>
              )}
            </span>
          </>
        ) : (
          <>
            {title.slice(0, -1).map((w, i) => (
              <span key={i} className="font-gambarino">{w}</span>
            ))}
            <span className="font-gambarino flex items-center">
              {title[title.length - 1]}
              {!alwaysOpen && (
                <button
                  className="ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-colors duration-300 group-hover:text-[#8BCD00]"
                  onClick={(e) => { e.stopPropagation(); onToggle(); }}
                >
                  <span className={`text-xl md:text-2xl ${expanded ? "text-[#8BCD00] transform translate-y-[-2px]" : ""}`}>
                    {expanded ? "\u2212" : "+"}
                  </span>
                </button>
              )}
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div
        ref={alwaysOpen ? undefined : contentRef}
        className="overflow-hidden"
        style={{
          maxHeight: alwaysOpen ? "none" : maxHeight,
          opacity: alwaysOpen || expanded ? 1 : 0,
          transition: expanded
            ? "max-height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease"
            : "max-height 0.5s cubic-bezier(0.55, 0, 0.1, 1), opacity 0.3s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
});

export default SectionWrapper;
