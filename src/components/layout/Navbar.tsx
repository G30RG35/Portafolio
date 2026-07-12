"use client";

import React, { useState, useEffect } from 'react';
import { Icon } from '@/components/Icons';
import { useTheme } from '@/context/ThemeContext';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const sections = ['inicio', 'conocimientos', 'proyectos', 'contacto'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: 'sparkles' as const },
    { id: 'conocimientos', label: 'Especialidades', icon: 'layers' as const },
    { id: 'proyectos', label: 'Portafolio', icon: 'code' as const },
    { id: 'contacto', label: 'Contáctame', icon: 'mail' as const }
  ];

  return (
    <nav className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logotipo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${theme.gradient} flex items-center justify-center ${theme.glow}`}>
              <span className="font-extrabold text-white text-xl">R</span>
            </div>
            <div>
              <span className="font-extrabold text-white tracking-wide text-lg sm:text-xl">DEV<span className={theme.primary}>.LEAD</span></span>
              <p className="text-xs text-zinc-400 font-semibold uppercase tracking-widest leading-none">React & WP</p>
            </div>
          </div>

          {/* Navegación Desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  activeSection === tab.id 
                    ? `${theme.bg} text-white ${theme.glow}` 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <Icon name={tab.icon} className="w-4.5 h-4.5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menú Móvil Botones */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              aria-label="Abrir menú"
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-900 bg-zinc-950 px-4 py-4 space-y-2">
          {navItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium transition-all ${
                activeSection === tab.id 
                  ? `${theme.bg} text-white ${theme.glow}` 
                  : 'text-zinc-400 hover:text-white bg-zinc-900/50'
              }`}
            >
              <Icon name={tab.icon} className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
