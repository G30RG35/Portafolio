"use client";

import React, { useState } from "react";
import { Icon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";
import { scrollToSection } from "@/utils/scroll";

export const Hero = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<"arch" | "code" | "metrics">("arch");

  return (
    <section id="inicio" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 bg-[#09090B] overflow-hidden ambient-glow-top">
      {/* Textura sutil tecnológica geométrica */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none tech-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Columna Izquierda: Mensaje y Acciones */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Indicador / Badge con pulso de estado real */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#F4F4F5] shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold tracking-wider uppercase text-[11px] text-[#A1A1AA]">
              DISPONIBLE &middot; TECH LEAD &amp; FRONTEND ARCHITECT
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl text-[#F4F4F5] tracking-tight leading-[1.1]">
              Arquitectura frontend y liderazgo técnico en{" "}
              <span className="text-[#DC2626] drop-shadow-[0_2px_12px_rgba(220,38,38,0.25)]">React</span> y{" "}
              <span className="text-[#DC2626] drop-shadow-[0_2px_12px_rgba(220,38,38,0.25)]">WordPress</span>
            </h1>

            <p className="font-body text-[#A1A1AA] text-base sm:text-lg max-w-xl leading-relaxed">
              Soy <strong className="text-[#F4F4F5] font-semibold">Jorge Inostroza</strong>. Cuento con 4 años desarrollando aplicaciones escalables con TypeScript y 2 años liderando equipos técnicos. Construyo experiencias interactivas ágiles y plataformas autoadministrables sin sobrecarga de plugins.
            </p>
          </div>

          {/* Botones de acción principales */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection("contacto")}
              className={`h-12 px-6 rounded-lg text-xs sm:text-sm font-semibold text-[#F4F4F5] transition-[background-color,transform,box-shadow] duration-150 active:scale-[0.98] flex items-center justify-center gap-2 ${theme.bg} ${theme.hoverBg} shadow-[0_4px_14px_rgba(220,38,38,0.45)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)]`}
            >
              <Icon name="mail" className="w-4 h-4 text-white" />
              <span>Hablemos de tu proyecto</span>
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="h-12 px-6 rounded-lg text-xs sm:text-sm font-semibold text-[#F4F4F5] bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] hover:border-[#3F3F46] transition-[background-color,border-color,transform] duration-150 active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            >
              <Icon name="code" className="w-4 h-4 text-[#A1A1AA]" />
              <span>Conocer más</span>
            </button>
          </div>

          {/* Enlaces y canales directos con acentos */}
          <div className="flex items-center gap-6 pt-2 text-[#A1A1AA] text-xs">
            <span className="font-mono text-[#71717A] uppercase tracking-wider text-[11px]">Canales:</span>
            <a
              href="https://github.com/G30RG35"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F4F5] transition-colors duration-150 flex items-center gap-1.5"
            >
              <Icon name="github" className="w-4 h-4 text-zinc-300" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4F4F5] transition-colors duration-150 flex items-center gap-1.5"
            >
              <Icon name="linkedin" className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:javyj2017@hotmail.com"
              className="hover:text-[#F4F4F5] transition-colors duration-150 flex items-center gap-1.5"
            >
              <Icon name="mail" className="w-4 h-4 text-[#DC2626]" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Columna Derecha: The Engineering Console (Con color y atmósfera) */}
        <div className="lg:col-span-5">
          <div className="bg-[#18181B] border border-[#27272A] hover:border-[#DC2626]/40 transition-colors duration-300 rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_35px_rgba(220,38,38,0.08)]">
            
            {/* Cabecera de consola técnica */}
            <div className="px-4 py-3 bg-[#09090B] border-b border-[#27272A] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]"></span>
                <span className="font-mono text-xs text-[#F4F4F5] font-medium">engineering-workbench.ts</span>
              </div>
              <div className="flex gap-1 bg-[#18181B] p-0.5 rounded-md border border-[#27272A]">
                {(["arch", "code", "metrics"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-[background-color,color] duration-150 ${
                      activeTab === tab
                        ? "bg-[#27272A] text-[#F4F4F5] font-semibold border border-white/[0.08]"
                        : "text-[#A1A1AA] hover:text-[#F4F4F5]"
                    }`}
                  >
                    {tab === "arch" ? "Arquitectura" : tab === "code" ? "Contratos" : "Métricas"}
                  </button>
                ))}
              </div>
            </div>

            {/* Contenido interactivo con colores del stack */}
            <div className="p-5 font-mono text-xs">
              {activeTab === "arch" && (
                <div className="space-y-3 animate-craft-enter">
                  <div className="p-3.5 rounded-lg bg-[#09090B] border border-sky-500/25 space-y-1.5 hover:border-sky-500/50 transition-colors shadow-[0_0_15px_rgba(14,165,233,0.05)]">
                    <div className="flex items-center justify-between text-[#F4F4F5] font-semibold">
                      <span className="flex items-center gap-2 text-sky-400 font-medium">
                        <Icon name="react" className="w-4 h-4 text-sky-400" />
                        Frontend Layer (React 19 / TypeScript)
                      </span>
                      <span className="text-[10px] text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                        SPA / SSG
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A1A1AA] font-body leading-relaxed">
                      Estructura modular en componentes con Tailwind CSS, tipado estricto y cero layout shift.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[10px]">
                    <span className="h-px w-8 bg-[#27272A]"></span>
                    <span className="text-[#DC2626] font-mono flex items-center gap-1 bg-red-950/30 px-2 py-0.5 rounded border border-red-900/30">
                      <span className="w-1 h-1 rounded-full bg-[#DC2626]"></span>
                      REST API &amp; GraphQL Contracts
                    </span>
                    <span className="h-px w-8 bg-[#27272A]"></span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#09090B] border border-blue-500/25 space-y-1.5 hover:border-blue-500/50 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.05)]">
                    <div className="flex items-center justify-between text-[#F4F4F5] font-semibold">
                      <span className="flex items-center gap-2 text-blue-400 font-medium">
                        <Icon name="wordpress" className="w-4 h-4 text-blue-400" />
                        Motor CMS (WordPress Core / PHP 8)
                      </span>
                      <span className="text-[10px] text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                        ACF Pro
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A1A1AA] font-body leading-relaxed">
                      Custom Post Types, serialización optimizada y backend autoadministrable sin plugins innecesarios.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "code" && (
                <div className="space-y-1.5 animate-craft-enter font-mono text-[11px] leading-relaxed bg-[#09090B] p-4 rounded-lg border border-[#27272A]">
                  <div className="text-[#71717A]">{"// Contrato tipado de entrega"}</div>
                  <div>
                    <span className="text-purple-400 font-semibold">export interface</span>{" "}
                    <span className="text-amber-300 font-bold">ProjectPayload</span> {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">id:</span> <span className="text-emerald-300">&quot;uuid-v4&quot;</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">architecture:</span>{" "}
                    <span className="text-[#DC2626] font-semibold">&quot;React&quot;</span> |{" "}
                    <span className="text-blue-400 font-semibold">&quot;WordPress&quot;</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-300">metrics:</span> {"{"}
                  </div>
                  <div className="pl-8">
                    <span className="text-zinc-400">lcp:</span> <span className="text-emerald-400 font-bold">&quot;&lt; 1.2s&quot;</span>;
                  </div>
                  <div className="pl-8">
                    <span className="text-zinc-400">typeChecked:</span> <span className="text-sky-400">true</span>;
                  </div>
                  <div className="pl-4">{"}"};</div>
                  <div>{"}"}</div>
                </div>
              )}

              {activeTab === "metrics" && (
                <div className="grid grid-cols-2 gap-2.5 text-center animate-craft-enter">
                  <div className="p-3 rounded-lg bg-[#09090B] border border-[#27272A] hover:border-red-500/30 transition-colors">
                    <span className="block font-heading text-xl text-[#F4F4F5]">4+ Años</span>
                    <span className="text-[10px] text-[#A1A1AA]">Desarrollo Software</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#09090B] border border-[#27272A] hover:border-blue-500/30 transition-colors">
                    <span className="block font-heading text-xl text-blue-400">2 Años</span>
                    <span className="text-[10px] text-[#A1A1AA]">Liderazgo Tech Lead</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#09090B] border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.08)]">
                    <span className="block font-heading text-xl text-emerald-400">&lt; 1.5s</span>
                    <span className="text-[10px] text-emerald-300">WPO First Paint</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#09090B] border border-sky-500/30 shadow-[0_0_12px_rgba(14,165,233,0.08)]">
                    <span className="block font-heading text-xl text-sky-400">100%</span>
                    <span className="text-[10px] text-sky-300">Responsive &amp; A11y</span>
                  </div>
                </div>
              )}

              {/* Pie de tarjeta de consola */}
              <div className="pt-3.5 mt-3 border-t border-[#27272A] flex items-center justify-between text-[11px] text-[#A1A1AA]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Clean Architecture</span>
                </span>
                <span className="font-mono text-[#F4F4F5] bg-[#09090B] px-2 py-0.5 rounded border border-[#27272A]">
                  CI/CD Verificado
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
