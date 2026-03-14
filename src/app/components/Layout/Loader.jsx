"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../Hooks/useTheme";

export default function Loader({ onDone }) {
  const { darkMode } = useTheme();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setProgress(100);
      setDone(true);
      const t = setTimeout(() => { setVisible(false); onDone(); }, 200);
      return () => clearTimeout(t);
    }

    const frames = ["|", "/", "-", "\\"];
    const interval = setInterval(() => {
      setSpinnerIndex((i) => (i + 1) % frames.length);
    }, 120);

    let raf;
    const duration = 1500;
    const minDisplay = 1400;

    const step = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(step);
      } else {
        setDone(true);
        const remaining = Math.max(0, minDisplay - elapsed);
        setTimeout(() => { setVisible(false); onDone(); }, 350 + remaining);
      }
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
    };
  }, [onDone]);

  if (!visible) return null;

  const frames = ["|", "/", "-", "\\"];

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        done ? "opacity-0" : "opacity-100"
      } ${darkMode ? "bg-[#131313] text-[#DBDBDB]" : "bg-[#DBDBDB] text-[#131313]"}`}
      aria-hidden={done}
    >
      <div className={`font-mono text-xs md:text-sm select-none ${darkMode ? "text-[#8BCD00]" : "text-[#3c3c3c]"}`}>
        <span className="tracking-widest">[ {frames[spinnerIndex]} ]</span>
        <span className="ml-2">Loading portfolio</span>
      </div>
      <div className="mt-4 w-[82%] md:w-[60%] max-w-md">
        <div className={`h-2 md:h-3 rounded-sm overflow-hidden ${darkMode ? "bg-[#1c1c1c]" : "bg-[#cfcfcf]"}`}
          style={{ transform: "perspective(600px) rotateX(8deg) rotateY(-8deg)" }}>
          <div
            className="h-full bg-[#8BCD00] transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className={`mt-2 text-center text-[10px] md:text-xs ${darkMode ? "text-[#6a6a6a]" : "text-[#7a7a7a]"}`}>
          {progress}%
        </div>
      </div>
    </div>
  );
}
