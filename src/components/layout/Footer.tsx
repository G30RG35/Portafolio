"use client";

import React from "react";
import { Icon } from "@/components/Icons";
import { scrollToSection } from "@/utils/scroll";

export const Footer = () => {
  return (
    <footer className="bg-[#09090B] border-t border-[#27272A] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Marca y copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#F4F4F5] font-mono text-xs font-semibold">
            JI
          </div>
          <div>
            <p className="font-heading text-xs text-[#F4F4F5]">
              Jorge Inostroza &middot; Frontend & Tech Lead
            </p>
            <p className="font-body text-[11px] text-[#A1A1AA]">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
        </div>

        {/* Enlaces de navegación */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#A1A1AA] font-body">
          <button onClick={() => scrollToSection("inicio")} className="hover:text-[#F4F4F5] transition-colors">
            Inicio
          </button>
          <button onClick={() => scrollToSection("servicios")} className="hover:text-[#F4F4F5] transition-colors">
            Servicios
          </button>
          <button onClick={() => scrollToSection("conocimientos")} className="hover:text-[#F4F4F5] transition-colors">
            Especialidades
          </button>
          <button onClick={() => scrollToSection("proyectos")} className="hover:text-[#F4F4F5] transition-colors">
            Portafolio
          </button>
          <button onClick={() => scrollToSection("faq")} className="hover:text-[#F4F4F5] transition-colors">
            Preguntas
          </button>
          <button onClick={() => scrollToSection("contacto")} className="hover:text-[#F4F4F5] transition-colors">
            Contacto
          </button>
        </div>

        {/* Redes */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/G30RG35"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5] hover:border-[#3F3F46] transition-[background-color,border-color,transform] duration-150 active:scale-[0.96]"
            aria-label="GitHub de Jorge Inostroza"
          >
            <Icon name="github" className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5] hover:border-[#3F3F46] transition-[background-color,border-color,transform] duration-150 active:scale-[0.96]"
            aria-label="LinkedIn de Jorge Inostroza"
          >
            <Icon name="linkedin" className="w-4 h-4" />
          </a>
          <a
            href="mailto:javyj2017@hotmail.com"
            className="p-2 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F5] hover:border-[#3F3F46] transition-[background-color,border-color,transform] duration-150 active:scale-[0.96]"
            aria-label="Email de Jorge Inostroza"
          >
            <Icon name="mail" className="w-4 h-4 text-[#DC2626]" />
          </a>
        </div>

      </div>
    </footer>
  );
};
