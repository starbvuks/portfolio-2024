"use client";
import { forwardRef } from "react";
import { useTheme } from "../Hooks/useTheme";
import { useMobile } from "../Hooks/useMobile";

const ContactSection = forwardRef(function ContactSection(props, ref) {
  const { darkMode } = useTheme();
  const { isMobile } = useMobile();

  return (
    <div
      ref={ref}
      className={`flex flex-col px-4 md:px-8 py-4 md:py-6 transition-all duration-300 ${!isMobile ? "pt-72" : ""}`}
    >
      <div className={`flex justify-between text-2xl md:text-4xl transition-all duration-500 ${darkMode ? "text-[#5a5c6a]" : "text-[#aaaaaa]"}`}>
        <span className="font-gambarino">Contact</span>
        <span className="font-gambarino">Me</span>
      </div>

      <div className="transition-all duration-500 ease-in-out">
        <div className={`flex flex-row justify-between mt-8 md:mt-20 font-gambarino text-sm md:text-xl tracking-normal ${darkMode ? "text-[#3e4050]" : "text-[#939393]"}`}>
          <div className="flex flex-col mb-4 md:mb-0">
            <a href="mailto:sarvagk@gmail.com" className="hover:text-[#B8C0DC] text-[#787a88] transition-colors duration-300">
              sarvagk@gmail.com
            </a>
            <a href="tel:+1 (214) 899-2025" className="hover:text-[#B8C0DC] text-[#787a88] transition-colors duration-300">
              +1 (214) 899-2025
            </a>
            <span className="text-[#3e4050]/75 transition-colors duration-300 mt-3">
              Green Card Holder / <span className="text-[#3e4050]/50">Indian Citizen</span>
            </span>
          </div>

          <div className="flex flex-col text-right md:text-left">
            <p className="font-medium">Mountain View, California, USA</p>
            <p className="mt-2 text-xs md:text-sm">Software Dev</p>
            {!isMobile && (
              <div className="flex justify-center mt-3 mb-2 opacity-80">
                <div className="flex items-center space-x-1 cursor-help" title="Try the Konami code!">
                  <img src="/assets/keys/up.svg" alt="Up" className="h-6 w-6" />
                  <img src="/assets/keys/up.svg" alt="Up" className="h-6 w-6" />
                  <img src="/assets/keys/down.svg" alt="Down" className="h-6 w-6" />
                  <img src="/assets/keys/down.svg" alt="Down" className="h-6 w-6" />
                  <img src="/assets/keys/left.svg" alt="Left" className="h-6 w-6" />
                  <img src="/assets/keys/right.svg" alt="Right" className="h-6 w-6" />
                  <img src="/assets/keys/left.svg" alt="Left" className="h-6 w-6" />
                  <img src="/assets/keys/right.svg" alt="Right" className="h-6 w-6" />
                  <img src="/assets/keys/b.svg" alt="B" className="h-6 w-6" />
                  <img src="/assets/keys/a.svg" alt="A" className="h-6 w-6" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactSection;
