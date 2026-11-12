"use client";

import React, { createContext, useContext, useState } from "react";

export const RED_THEMES = {
  crimson: {
    primary: "text-[#DC2626]",
    bg: "bg-[#DC2626]",
    hoverBg: "hover:bg-[#B91C1C]",
    border: "border-[#27272A]",
    glow: "shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
    gradient: "from-[#DC2626] to-[#B91C1C]",
    lightGlow: "transparent",
    name: "Rojo Identidad (#DC2626)",
  },
  neon: {
    primary: "text-[#DC2626]",
    bg: "bg-[#DC2626]",
    hoverBg: "hover:bg-[#B91C1C]",
    border: "border-[#27272A]",
    glow: "shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
    gradient: "from-[#DC2626] to-[#B91C1C]",
    lightGlow: "transparent",
    name: "Rojo Identidad",
  },
  ruby: {
    primary: "text-[#DC2626]",
    bg: "bg-[#DC2626]",
    hoverBg: "hover:bg-[#B91C1C]",
    border: "border-[#27272A]",
    glow: "shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]",
    gradient: "from-[#DC2626] to-[#B91C1C]",
    lightGlow: "transparent",
    name: "Rojo Identidad",
  },
};

export type ThemeKey = keyof typeof RED_THEMES;

interface ThemeContextType {
  selectedTheme: ThemeKey;
  setSelectedTheme: (theme: ThemeKey) => void;
  theme: (typeof RED_THEMES)[ThemeKey];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>("crimson");

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
        theme: RED_THEMES[selectedTheme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
