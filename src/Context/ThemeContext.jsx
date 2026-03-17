import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const storedTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState(storedTheme || "light");

  const toggleTheme = () => {

    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

  };

  useEffect(() => {

    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

  }, [theme]);

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>

  );

};