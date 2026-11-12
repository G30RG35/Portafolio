"use client";

import React from "react";
import { Icon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";
import { scrollToSection } from "@/utils/scroll";

export const Services = () => {
  const { theme } = useTheme();

  const servicesList = [
    {
      title: "Desarrollo de Aplicaciones Web",
      desc: "Interfaces limpias, adaptables y funcionales desarrolladas en React.js con TypeScript, preparadas para escalar.",
      tag: "React / TypeScript",
      icon: "react" as const,
    },
    {
      title: "E-Commerce Corporativo",
      desc: "Tiendas autoadministrables en WooCommerce o React con integración de pasarelas seguras (Stripe, PayPal) y facturación.",
      tag: "WooCommerce",
      icon: "wordpress" as const,
    },
    {
      title: "Plataformas Web y Startups",
      desc: "Estructuras ligeras preparadas para escala, carga ultrarrápida y SEO técnico sin deuda técnica inicial.",
      tag: "Next.js / WPO",
      icon: "code" as const,
    },
    {
      title: "Catálogos y Portales CPT",
      desc: "Modelos de datos avanzados con Advanced Custom Fields (ACF Pro) y Custom Post Types en WordPress.",
      tag: "WordPress / ACF",
      icon: "layers" as const,
    },
    {
      title: "Portales de Validación Segura",
      desc: "Sistemas de validación de credenciales en tiempo real, interfaces accesibles y almacenamiento seguro.",
      tag: "Security / A11y",
      icon: "check" as const,
    },
    {
      title: "Medios y Blogs de Alto Tráfico",
      desc: "Arquitecturas optimizadas para indexación orgánica, Core Web Vitals estrictos y tiempos de respuesta mínimos.",
      tag: "Technical SEO",
      icon: "sparkles" as const,
    },
  ];

  return (
    <section id="servicios" className="py-20 sm:py-24 border-t border-[#27272A] bg-[#18181B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Columna de presentación */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#09090B] border border-[#27272A] text-xs font-mono text-[#F4F4F5]">
              <span className="font-semibold text-[#DC2626]">01</span>
              <span className="text-[#3F3F46]">/</span>
              <span className="text-[#A1A1AA] uppercase tracking-wider text-[11px]">SERVICIOS</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl text-[#F4F4F5] tracking-tight leading-tight">
              Soluciones digitales para <span className="text-[#DC2626]">tu negocio</span>
            </h2>

            <p className="font-body text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              Diseño y desarrollo de experiencias digitales modernas. Interfaces limpias, adaptables y con alto estándar de ingeniería.
            </p>

            <p className="font-body text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              Mi rol como Tech Lead asegura que cada módulo cuente con pruebas de compatibilidad, arquitectura modular y cumplimiento de estándares internacionales de software.
            </p>

            <div className="pt-2">
              <button
                onClick={() => scrollToSection("contacto")}
                className={`h-11 px-5 rounded-lg text-xs sm:text-sm font-semibold text-[#F4F4F5] transition-[background-color,transform] duration-150 active:scale-[0.98] inline-flex items-center gap-2 ${theme.bg} ${theme.hoverBg} shadow-[0_1px_3px_rgba(220,38,38,0.4)]`}
              >
                <span>Hablemos de tu proyecto</span>
                <span className="text-[#F4F4F5]">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Grid de capacidades en fondo #09090B con bordes #27272A */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#09090B] border border-[#27272A] hover:border-[#3F3F46] hover:-translate-y-0.5 transition-[transform,border-color] duration-150 space-y-2.5 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-[#18181B] text-[#A1A1AA] group-hover:text-[#DC2626] transition-colors">
                      <Icon name={service.icon} className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-sm text-[#F4F4F5]">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="font-body text-xs text-[#A1A1AA] leading-relaxed">
                  {service.desc}
                </p>
                <div className="pt-1">
                  <span className="text-[10px] font-mono text-[#A1A1AA] bg-[#18181B] px-2 py-0.5 rounded border border-[#27272A]">
                    {service.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
