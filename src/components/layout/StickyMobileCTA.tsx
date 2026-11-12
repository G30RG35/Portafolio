"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";
import { scrollToSection } from "@/utils/scroll";

export const StickyMobileCTA = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#09090B]/95 backdrop-blur-md border-t border-[#27272A] flex items-center justify-between gap-3 animate-craft-enter shadow-2xl">
      <div className="flex items-center gap-2 pl-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
        <span className="text-xs font-mono text-[#A1A1AA]">Disponible</span>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/G30RG35"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5] active:scale-[0.96] transition-transform"
          aria-label="GitHub de Jorge Inostroza"
        >
          <Icon name="github" className="w-4 h-4" />
        </a>
        <button
          onClick={() => scrollToSection("contacto")}
          className={`h-9 px-4 rounded-lg font-semibold text-xs text-[#F4F4F5] transition-[background-color,transform] duration-150 active:scale-[0.96] flex items-center gap-2 ${theme.bg} shadow-[0_1px_3px_rgba(220,38,38,0.4)]`}
        >
          <Icon name="mail" className="w-3.5 h-3.5" />
          <span>Hablemos</span>
        </button>
      </div>
    </div>
  );
};
