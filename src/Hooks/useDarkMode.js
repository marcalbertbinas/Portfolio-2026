import { useEffect, useState } from "react";

export default function useDarkMode() {
  // 1. Force 'light' as the absolute default if no localStorage exists
  const [theme, setTheme] = useState(localStorage.theme || "light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    
    // 2. This part manually controls the class
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}