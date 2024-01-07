"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    
    const containerClasses = theme === "black" ? "bg-black text-white" : "bg-white text-black";

    return <div className={containerClasses}>{children}</div>;
  }
};

export default ThemeProvider;
