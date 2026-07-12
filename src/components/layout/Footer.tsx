"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { scrollToSection } from '@/utils/scroll';

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${theme.gradient} flex items-center justify-center ${theme.glow}`}>
            <span className="font-extrabold text-white text-base">R</span>
          </div>
          <div>
            <p className="font-bold text-white text-sm">Dev Portfolio</p>
            <p className="text-xs text-zinc-500">&copy; {new Date().getFullYear()} Todos los derechos reservados. Tech Lead & Ing. Frontend.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
          <button onClick={() => scrollToSection('inicio')} className="hover:text-white transition-colors">Inicio</button>
          <button onClick={() => scrollToSection('conocimientos')} className="hover:text-white transition-colors">Habilidades</button>
          <button onClick={() => scrollToSection('proyectos')} className="hover:text-white transition-colors">Proyectos</button>
          <button onClick={() => scrollToSection('contacto')} className="hover:text-white transition-colors">Contacto</button>
        </div>

        <div className="text-xs text-zinc-600 text-center md:text-right font-semibold">
          React, WordPress & Tailwind CSS • Desarrollado a la Medida
        </div>
      </div>
    </footer>
  );
};
