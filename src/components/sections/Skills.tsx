"use client";

import React from "react";
import { Icon } from "@/components/Icons";

export const Skills = () => {
  return (
    <section id="conocimientos" className="py-20 sm:py-24 border-t border-[#27272A] bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Cabecera de Sección */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#F4F4F5]">
            <span className="font-semibold text-[#DC2626]">02</span>
            <span className="text-[#3F3F46]">/</span>
            <span className="text-[#A1A1AA] uppercase tracking-wider text-[11px]">ESPECIALIDADES</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-[#F4F4F5] tracking-tight">
            Especialización tecnológica demostrada en <span className="text-[#DC2626]">producción</span>
          </h2>
          <p className="font-body text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
            Metodología de software orientada a mantenibilidad, tipado estricto y rendimiento real en navegadores, sin métricas arbitrarias de porcentajes.
          </p>
        </div>

        {/* Grid de Stacks Principales en superficies #18181B con bordes #27272A */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Tarjeta Frontend (React) */}
          <div className="bg-[#18181B] rounded-xl border border-[#27272A] hover:border-[#3F3F46] hover:-translate-y-0.5 transition-[transform,border-color] duration-150 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-[#27272A] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#09090B] text-[#DC2626] border border-[#27272A]">
                  <Icon name="react" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base text-[#F4F4F5]">Stack React.js y TypeScript</h3>
                  <p className="font-body text-[#A1A1AA] text-xs">Interfaces complejas y Single Page Apps</p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#F4F4F5] bg-[#09090B] border border-[#27272A] px-2.5 py-1 rounded-md">
                Senior / Lead
              </span>
            </div>

            <div className="space-y-3">
              {[
                { title: "React Hooks y Estado Predecible", desc: "Gestión de estado fluida mediante Context API, Zustand y Redux Toolkit según la escala del proyecto." },
                { title: "Tipado Estricto con TypeScript", desc: "Contratos de datos sólidos para prevenir fallos en tiempo de ejecución y agilizar el onboarding de desarrolladores." },
                { title: "Frameworks Modernos (Next.js)", desc: "Desarrollo con Next.js (App Router, Turbopack, SSG/SSR) y Vite para arquitecturas modulares." },
                { title: "Sistemas de Diseño y Tailwind CSS", desc: "Maquetado mobile-first y componentes reutilizables con atención a jerarquía y accesibilidad (WAI-ARIA)." },
                { title: "Consumo de APIs y Microservicios", desc: "Integración segura con endpoints RESTful y GraphQL con manejo riguroso de errores y estados de carga." },
              ].map((skill, idx) => (
                <div key={idx} className="flex gap-3 items-start text-xs">
                  <div className="mt-0.5 text-[#DC2626] shrink-0">
                    <Icon name="check" className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-heading text-xs text-[#F4F4F5]">{skill.title}</h4>
                    <p className="font-body text-[#A1A1AA] leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta WordPress */}
          <div className="bg-[#18181B] rounded-xl border border-[#27272A] hover:border-[#3F3F46] hover:-translate-y-0.5 transition-[transform,border-color] duration-150 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-[#27272A] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#09090B] text-[#DC2626] border border-[#27272A]">
                  <Icon name="wordpress" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base text-[#F4F4F5]">Stack WordPress y PHP</h3>
                  <p className="font-body text-[#A1A1AA] text-xs">CMS corporativo autoadministrable</p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#F4F4F5] bg-[#09090B] border border-[#27272A] px-2.5 py-1 rounded-md">
                Especialista
              </span>
            </div>

            <div className="space-y-3">
              {[
                { title: "Campos Personalizados Estructurados (ACF)", desc: "Creación de modelos de datos avanzados con Custom Post Types para paneles intuitivos de cliente." },
                { title: "E-Commerce con WooCommerce", desc: "Despliegue y personalización de tiendas virtuales con integración de pasarelas de pago y facturación." },
                { title: "Desarrollo a la Medida y Child Themes", desc: "Programación en PHP de hooks, filtros y funciones personalizadas evitando plugins innecesarios." },
                { title: "Maquetación Visual de Alto Nivel", desc: "Dominio de Elementor Pro y Gutenberg con CSS personalizado para diseños precisos sin penalizar la carga." },
                { title: "Optimización de Velocidad (WPO)", desc: "Compresión WebP, reducción de scripts de terceros y caché para cumplir con Google Core Web Vitals." },
              ].map((skill, idx) => (
                <div key={idx} className="flex gap-3 items-start text-xs">
                  <div className="mt-0.5 text-[#DC2626] shrink-0">
                    <Icon name="check" className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-heading text-xs text-[#F4F4F5]">{skill.title}</h4>
                    <p className="font-body text-[#A1A1AA] leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Pilares de Tech Lead */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] rounded-xl p-5 space-y-2 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#09090B] border border-[#27272A] flex items-center justify-center text-[#DC2626]">
              <Icon name="briefcase" className="w-4 h-4" />
            </div>
            <h4 className="font-heading text-sm text-[#F4F4F5]">Liderazgo y Gestión Ágil</h4>
            <p className="font-body text-xs text-[#A1A1AA] leading-relaxed">
              2 años coordinando desarrolladores, estimando entregables, gestionando sprints en Jira/Linear y facilitando la comunicación entre diseño, negocio y desarrollo.
            </p>
          </div>

          <div className="bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] rounded-xl p-5 space-y-2 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#09090B] border border-[#27272A] flex items-center justify-center text-[#DC2626]">
              <Icon name="code" className="w-4 h-4" />
            </div>
            <h4 className="font-heading text-sm text-[#F4F4F5]">Code Reviews y Calidad</h4>
            <p className="font-body text-xs text-[#A1A1AA] leading-relaxed">
              Revisiones exhaustivas de Pull Requests, adopción de principios Clean Code, tipado riguroso y prevención sistemática de regresiones antes del despliegue.
            </p>
          </div>

          <div className="bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] rounded-xl p-5 space-y-2 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#09090B] border border-[#27272A] flex items-center justify-center text-[#DC2626]">
              <Icon name="layers" className="w-4 h-4" />
            </div>
            <h4 className="font-heading text-sm text-[#F4F4F5]">Diseño de Arquitectura</h4>
            <p className="font-body text-xs text-[#A1A1AA] leading-relaxed">
              Planificación estratégica de infraestructuras frontend desacopladas, estructuración de APIs y despliegues continuos mediante CI/CD sin fricción.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
