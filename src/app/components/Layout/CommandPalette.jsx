"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "../Hooks/useTheme";
import { useMobile } from "../Hooks/useMobile";

export default function CommandPalette({ sectionRefs, onToggleTheme }) {
  const { darkMode } = useTheme();
  const { cmdKey } = useMobile();
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);

  // Toggle on Cmd+K
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setShow((s) => !s);
        setQuery("");
        setIndex(0);
      }
      if (e.key === "Escape" && show) {
        setShow(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  // Keyboard nav
  useEffect(() => {
    if (!show) return;
    const onKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "Tab") {
        e.preventDefault();
        setIndex((i) => i + 1);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIndex((i) => Math.max(0, i - 1));
      }
      if (e.key === "Enter") {
        const buttons = document.querySelectorAll("[data-cmd-item]");
        const target = buttons[index % buttons.length];
        if (target) target.click();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show, index]);

  // Focus input when opened
  useEffect(() => {
    if (show && inputRef.current) inputRef.current.focus();
  }, [show]);

  const groups = [
    {
      label: "Navigate",
      items: [
        { name: "Go to About", ref: "about" },
        { name: "Go to What I Do", ref: "what" },
        { name: "Go to Tech Stack", ref: "tech" },
        { name: "Go to Experience", ref: "exp" },
        { name: "Go to Projects", ref: "proj" },
        { name: "Go to Education", ref: "edu" },
        { name: "Go to Socials", ref: "socials" },
        { name: "Go to Contact", ref: "contact" },
      ],
    },
    {
      label: "Theme",
      items: [
        { name: darkMode ? "Switch to Light Mode" : "Switch to Dark Mode", action: "toggleTheme" },
      ],
    },
  ];

  const handleClick = useCallback((item) => {
    if (item.action === "toggleTheme") {
      onToggleTheme();
      setShow(false);
      return;
    }
    const el = sectionRefs[item.ref]?.current;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setShow(false);
  }, [sectionRefs, onToggleTheme]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 md:pt-40" role="dialog" aria-modal="true">
      <div className={`absolute inset-0 ${darkMode ? "bg-black/60" : "bg-black/30"}`} onClick={() => setShow(false)} />
      <div className={`relative w-[92%] md:w-[680px] max-w-3xl rounded-xl border ${
        darkMode ? "border-[#22232c] bg-[#0c0c12]/90" : "border-[#d8d8d8] bg-[#ffffff]/92"
      } backdrop-blur-md shadow-2xl`}>
        <div className={`flex items-center gap-2 p-3 md:p-4 border-b ${darkMode ? "border-[#22232c]/40" : "border-[#d8d8d8]/40"}`}>
          <input
            ref={inputRef}
            autoFocus
            value={query}
            onChange={(e) => { setQuery(e.target.value); setIndex(0); }}
            placeholder={`Type a command\u2026 (${cmdKey}+K to close)`}
            className={`w-full bg-transparent outline-none ${
              darkMode ? "text-[#dcdde2] placeholder-[#52545e]" : "text-[#101014] placeholder-[#7a7a7a]"
            } text-sm md:text-base`}
          />
        </div>
        <div className="max-h-[50vh] overflow-auto p-2 md:p-3">
          {groups.map((group, gi) => {
            const filtered = group.items.filter((it) =>
              it.name.toLowerCase().includes(query.toLowerCase())
            );
            if (filtered.length === 0) return null;
            return (
              <div key={gi} className="mb-2">
                <div className={`px-2 py-1 text-[10px] md:text-xs uppercase tracking-wider ${
                  darkMode ? "text-[#52545e]" : "text-[#7a7a7a]"
                }`}>
                  {group.label}
                </div>
                {filtered.map((it, idx) => {
                  const active = idx === index;
                  return (
                    <button
                      data-cmd-item
                      key={idx}
                      onClick={() => handleClick(it)}
                      className={`w-full text-left px-3 py-2 rounded-md transition ${
                        active
                          ? darkMode ? "bg-[#1a1b22] text-[#dcdde2]" : "bg-[#efefef] text-[#101014]"
                          : darkMode ? "text-[#c0c2cc] hover:bg-[#16171e]" : "text-[#3c3c3c] hover:bg-[#f2f2f2]"
                      }`}
                    >
                      {it.name}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
