"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("blogDarkMode");
    if (stored === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggle = () => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("blogDarkMode", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("blogDarkMode", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggle} className="mode-button">
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
