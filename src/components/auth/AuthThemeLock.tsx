"use client";

import { useEffect } from "react";

export default function AuthThemeLock() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute("data-theme");

    root.setAttribute("data-theme", "light");

    return () => {
      if (previous) {
        root.setAttribute("data-theme", previous);
      } else {
        root.removeAttribute("data-theme");
      }
    };
  }, []);

  return null;
}
