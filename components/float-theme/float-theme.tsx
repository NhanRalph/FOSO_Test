"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const FloatThemeComponent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all 
                 bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 
                 hover:scale-110 hover:shadow-xl"
    >
      {theme === "light" ? <Moon className="w-6 h-6 text-gray-700" /> : <Sun className="w-6 h-6 text-yellow-400" />}
    </button>
  );
};

export default FloatThemeComponent;
