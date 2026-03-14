"use client";
import { useState, useEffect } from "react";

export function useMobile(breakpoint = 1008) {
  const [isMobile, setIsMobile] = useState(false);
  const [cmdKey, setCmdKey] = useState("\u2318");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    setCmdKey(isMac ? "\u2318" : "Ctrl");
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return { isMobile, cmdKey };
}
