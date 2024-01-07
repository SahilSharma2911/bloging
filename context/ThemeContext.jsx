"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "white";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");

  useEffect(() => {
    // Set the initial theme based on localStorage only once when the component mounts
    setTheme(getFromLocalStorage());
  }, []);

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "white" ? "black" : "white"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
