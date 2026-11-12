"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const sections = ["inicio", "servicios", "conocimientos", "proyectos", "faq", "contacto"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "servicios", label: "Servicios" },
    { id: "conocimientos", label: "Especialidades" },
    { id: "proyectos", label: "Portafolio" },
    { id: "faq", label: "Preguntas" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#09090B]/90 backdrop-blur-md border-b border-[#27272A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logotipo / Firma de autor */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-3 text-left group active:scale-[0.98] transition-transform duration-150"
          >
            <div className="w-8 h-8 rounded-lg bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#F4F4F5] font-mono text-xs font-semibold group-hover:border-[#DC2626] transition-colors duration-150">
              JI
            </div>
            <div>
              <span className="block font-heading text-sm text-[#F4F4F5] tracking-tight">
                Jorge Inostroza
              </span>
              <span className="block text-[11px] font-sans font-medium text-[#A1A1AA] leading-none">
                Frontend & Tech Lead
              </span>
            </div>
          </button>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-[background-color,color] duration-150 active:scale-[0.98] ${
                    isActive
                      ? "text-[#F4F4F5] bg-[#18181B] border border-[#27272A] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                      : "text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#18181B]/60"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Acción rápida desktop */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#A1A1AA] border border-[#27272A] rounded-md px-2 py-1 bg-[#18181B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] inline-block mr-1.5 align-middle"></span>
              Disponible
            </span>
            <button
              onClick={() => scrollToSection("contacto")}
              className={`h-9 px-4 rounded-lg text-xs font-medium text-[#F4F4F5] transition-[background-color,transform] duration-150 active:scale-[0.98] ${theme.bg} ${theme.hoverBg}`}
            >
              Hablemos
            </button>
          </div>

          {/* Menú Móvil Botón */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#18181B] text-[#A1A1AA] hover:text-[#F4F4F5] border border-[#27272A] active:scale-[0.96] transition-transform duration-150"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-black/70 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-40 md:hidden border-t border-[#27272A] bg-[#09090B] px-4 py-4 space-y-1 animate-craft-enter">
            {navItems.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center justify-between w-full px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 active:scale-[0.98] ${
                    isActive
                      ? "text-[#F4F4F5] bg-[#18181B] border border-[#27272A]"
                      : "text-[#A1A1AA] hover:text-[#F4F4F5] bg-transparent"
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#27272A] flex items-center justify-between">
              <span className="text-xs font-mono text-[#A1A1AA]">Jorge Inostroza</span>
              <button
                onClick={() => scrollToSection("contacto")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium text-[#F4F4F5] active:scale-[0.96] transition-transform ${theme.bg}`}
              >
                Hablemos
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
