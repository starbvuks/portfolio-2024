"use client";
import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";

const ThemeContext = createContext({ darkMode: true, toggleMode: () => {} });

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionRef = useRef(null);

  // Sync body/html classes and bg color
  useEffect(() => {
    document.documentElement.style.backgroundColor = darkMode ? "#101014" : "#dcdde2";
    document.body.style.backgroundColor = darkMode ? "#101014" : "#dcdde2";
    document.documentElement.classList.toggle("bg-theme-dark", darkMode);
    document.documentElement.classList.toggle("bg-theme-light", !darkMode);
  }, [darkMode]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (transitionRef.current) {
        document.body.removeChild(transitionRef.current);
        transitionRef.current = null;
      }
    };
  }, []);

  const toggleMode = useCallback((e) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:fixed;inset:0;z-index:9999;pointer-events:none;";
    document.body.appendChild(canvas);
    transitionRef.current = canvas;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let centerX = window.innerWidth - 80;
    let centerY = 50;
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
    } else if (e && e.clientX != null) {
      centerX = e.clientX;
      centerY = e.clientY;
    }

    const w = window.innerWidth;
    const h = window.innerHeight;
    const maxRadius = Math.max(
      Math.hypot(centerX, centerY),
      Math.hypot(w - centerX, centerY),
      Math.hypot(centerX, h - centerY),
      Math.hypot(w - centerX, h - centerY)
    );
    const prevColor = darkMode ? "#101014" : "#dcdde2";

    ctx.fillStyle = prevColor;
    ctx.fillRect(0, 0, w, h);
    setDarkMode((prev) => !prev);

    let start = null;
    const duration = 1300;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (ts) => {
      if (!transitionRef.current) return;
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const radius = maxRadius * easeInOutCubic(progress);

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = prevColor;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const fadeOut = (opacity) => {
          if (!transitionRef.current) return;
          transitionRef.current.style.opacity = String(opacity);
          if (opacity <= 0) {
            if (transitionRef.current) {
              document.body.removeChild(transitionRef.current);
              transitionRef.current = null;
            }
            setIsTransitioning(false);
          } else {
            setTimeout(() => fadeOut(opacity - 0.15), 16);
          }
        };
        fadeOut(1.0);
      }
    };
    requestAnimationFrame(animate);
  }, [darkMode, isTransitioning]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
