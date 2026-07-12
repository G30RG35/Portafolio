"use client";

import React, { createContext, useContext, useState } from 'react';

export const RED_THEMES = {
  crimson: {
    primary: 'text-red-500',
    bg: 'bg-red-600',
    hoverBg: 'hover:bg-red-700',
    border: 'border-red-500',
    glow: 'shadow-[0_0_20px_rgba(239,68,68,0.3)]',
    gradient: 'from-red-600 to-rose-800',
    lightGlow: 'rgba(239, 68, 68, 0.15)',
    name: 'Rojo Carmesí'
  },
  neon: {
    primary: 'text-rose-500',
    bg: 'bg-rose-500',
    hoverBg: 'hover:bg-rose-600',
    border: 'border-rose-500',
    glow: 'shadow-[0_0_25px_rgba(244,63,94,0.45)]',
    gradient: 'from-rose-500 to-red-500',
    lightGlow: 'rgba(244, 63, 94, 0.2)',
    name: 'Rojo Neón'
  },
  ruby: {
    primary: 'text-red-700',
    bg: 'bg-red-800',
    hoverBg: 'hover:bg-red-900',
    border: 'border-red-800',
    glow: 'shadow-[0_0_15px_rgba(153,27,27,0.4)]',
    gradient: 'from-red-800 to-red-950',
    lightGlow: 'rgba(153, 27, 27, 0.15)',
    name: 'Rojo Rubí'
  }
};

export type ThemeKey = keyof typeof RED_THEMES;

interface ThemeContextType {
  selectedTheme: ThemeKey;
  setSelectedTheme: (theme: ThemeKey) => void;
  theme: typeof RED_THEMES[ThemeKey];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>('crimson');
  
  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme, theme: RED_THEMES[selectedTheme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
