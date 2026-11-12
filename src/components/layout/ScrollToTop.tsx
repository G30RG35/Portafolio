"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/components/Icons";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="fixed bottom-6 right-6 z-40 p-2.5 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#27272A] border border-[#27272A] hover:border-[#3F3F46] backdrop-blur-sm transition-all duration-150 active:scale-[0.96] shadow-xl"
    >
      <Icon name="arrowUp" className="w-4 h-4" />
    </button>
  );
};
