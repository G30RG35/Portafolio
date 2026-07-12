"use client";

import React from 'react';
import { Icon } from '@/components/Icons';
import { useTheme } from '@/context/ThemeContext';
import { scrollToSection } from '@/utils/scroll';

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="inicio" className="relative overflow-hidden pt-12 pb-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs sm:text-sm font-medium">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-zinc-300">Disponible para nuevos proyectos corporativos</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            <span className="block text-2xl sm:text-3xl text-zinc-300 font-bold mb-2 sm:mb-4">
              Soy Jorge Inostroza,
            </span>
            Ingeniero en Desarrollo de Software & <br />
            <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
              Líder Técnico Web
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Ingeniero especializado con <strong className="text-zinc-200">más de 4 años de experiencia en el desarrollo de software</strong>, y <strong className="text-zinc-200">2 años de trayectoria como Tech Lead</strong>. Diseño arquitecturas escalables en <strong className="text-zinc-200">React.js</strong> y configuro ecosistemas empresariales autoadministrables en <strong className="text-zinc-200">WordPress</strong> sin sobrecargar de plugins.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={() => scrollToSection('proyectos')}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${theme.bg} ${theme.hoverBg} ${theme.glow}`}
            >
              <Icon name="code" className="w-5 h-5" />
              Ver Galería de Trabajos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="mail" className="w-5 h-5" />
              Cotizar mi Proyecto
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-zinc-400">
            <span className="text-xs uppercase tracking-widest font-semibold text-zinc-500">Enlaces rápidos:</span>
            <a href="#" onClick={(e) => e.preventDefault()} className={`hover:${theme.primary} transition-colors`} aria-label="GitHub">
              <Icon name="github" className="w-6 h-6" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className={`hover:${theme.primary} transition-colors`} aria-label="Email Directo">
              <Icon name="mail" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[400px]">
            <div className={`absolute -inset-1.5 rounded-3xl opacity-30 blur-lg transition-all duration-300 bg-gradient-to-tr ${theme.gradient}`}></div>
            
            <div className="relative bg-zinc-900 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${theme.gradient} flex items-center justify-center ${theme.glow} text-white font-extrabold text-2xl`}>
                  TL
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Ing. Frontend & Tech Lead</h3>
                  <p className={`text-xs font-semibold ${theme.primary}`}>React & WordPress Specialist</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-sky-400">
                      <Icon name="react" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-semibold">Tecnología SPA</p>
                      <p className="text-sm font-bold text-white">Aplicaciones Complejas</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-sky-400 bg-sky-950/40 px-2 py-1 rounded">React</span>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-blue-500">
                      <Icon name="wordpress" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-semibold">Arquitectura CMS</p>
                      <p className="text-sm font-bold text-white">Autoadministración Total</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-500 bg-blue-950/40 px-2 py-1 rounded">WordPress</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-900">
                  <p className={`text-2xl font-extrabold ${theme.primary}`}>4+ Años</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Experiencia Total</p>
                </div>
                <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-900">
                  <p className={`text-2xl font-extrabold ${theme.primary}`}>2 Años</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Como Tech Lead</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
