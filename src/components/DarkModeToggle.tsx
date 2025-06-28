import React from "react";
import { Moon, Sun } from "lucide-react";

interface DarkModeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  isDark,
  toggle,
}) => {
  return (
    <button
      onClick={toggle}
      className="relative inline-flex items-center justify-center w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label="Toggle dark mode"
    >
      <span
        className={`absolute left-1 inline-block w-4 h-4 rounded-full bg-white shadow-lg transform transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
      <Sun
        className={`absolute right-1.5 w-3 h-3 text-yellow-500 transition-opacity duration-300 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />
      <Moon
        className={`absolute left-1.5 w-3 h-3 text-gray-600 transition-opacity duration-300 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />
    </button>
  );
};
