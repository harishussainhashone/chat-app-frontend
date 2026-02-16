"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

export default function ThemechangerButton() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div 
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`
        relative flex h-10 w-24 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 border
        ${theme === "light" ? "bg-surface-3 border-border" : "bg-gray-100 border-gray-200"}
      `}
    >
      {/* Sliding Background Highlight using Gray Scale */}
      <div
        className={`
          absolute h-8 w-11 rounded-full transition-all duration-300 ease-in-out shadow-sm
          ${theme === "light" 
            ? "translate-x-0 bg-gray-200" 
            : "translate-x-[44px] bg-gray-300"}
        `}
      />

      {/* Sun Icon */}
      <div className="relative z-10 flex flex-1 justify-center">
        <SunIcon active={theme === "light"} />
      </div>

      {/* Moon Icon */}
      <div className="relative z-10 flex flex-1 justify-center">
        <MoonIcon active={theme === "dark"} />
      </div>
    </div>
  );
}

function SunIcon({ active }: { active: boolean }) {
  return (
    <svg 
      className={`h-5 w-5 transition-colors duration-300 ${active ? "text-gray-900" : "text-gray-400"}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function MoonIcon({ active }: { active: boolean }) {
  return (
    <svg 
      className={`h-5 w-5 transition-colors duration-300 ${active ? "text-gray-900" : "text-gray-500"}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}
