"use client";

import React from 'react';
import { Icon } from '@/components/Icons';
import { useTheme } from '@/context/ThemeContext';
import { scrollToSection } from '@/utils/scroll';

export const Services = () => {
  const { theme } = useTheme();

  const servicesList = [
    {
      title: "SaaS & Dashboards",
      desc: "Sistemas analíticos corporativos y paneles de control robustos en React.js para visualización de big data en tiempo real.",
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-950/20 border-emerald-900/30"
    },
    {
      title: "E-Commerce Avanzado",
      desc: "Tiendas virtuales con WooCommerce o React, con pasarelas de pago optimizadas, facturación y control de envíos.",
      accent: "text-blue-400",
      bgAccent: "bg-blue-950/20 border-blue-900/30"
    },
    {
      title: "Startups & Fintech",
      desc: "Estructuras ágiles, seguras y de carga ultrarrápida preparadas para recibir miles de usuarios concurrentes.",
      accent: "text-purple-400",
      bgAccent: "bg-purple-950/20 border-purple-900/30"
    },
    {
      title: "Inmobiliarias & CPT",
      desc: "Estructuración dinámica con campos avanzados de búsqueda (ACF), listado de catálogo, y mapas interactivos.",
      accent: "text-amber-400",
      bgAccent: "bg-amber-950/20 border-amber-900/30"
    },
    {
      title: "Sector Salud y Educación",
      desc: "Agendamiento de citas, portales de alumnos, almacenamiento en la nube e interfaces accesibles y limpias.",
      accent: "text-rose-400",
      bgAccent: "bg-rose-950/20 border-rose-900/30"
    },
    {
      title: "Blogs y Portales de Noticias",
      desc: "Estructuras SEO con optimización móvil extrema y multilingüe para alto tráfico web con almacenamiento óptimo.",
      accent: "text-cyan-400",
      bgAccent: "bg-cyan-950/20 border-cyan-900/30"
    }
  ];

  return (
    <section className="py-20 border-t border-zinc-900/60 bg-zinc-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/40 text-rose-400 border border-rose-900/40 text-xs font-extrabold uppercase tracking-widest">
              <Icon name="cog" className="w-4 h-4" />
              Desarrollo 100% Personalizado
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Trabajos a Medida para <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>Cualquier Ámbito</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              No importa la complejidad de tu industria ni el tipo de negocio. Diseño y desarrollo código estructurado y limpio adaptándome estrictamente a tus necesidades técnicas, operativas y de marca.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Gracias a mi experiencia liderando equipos técnicos (Tech Lead), aseguro la viabilidad arquitectónica, la escalabilidad futura de la plataforma y el apego a las mejores prácticas de la industria de software internacional.
            </p>
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('contacto')}
                className={`px-6 py-3 rounded-xl font-bold text-white transition-all inline-flex items-center gap-2 ${theme.bg} ${theme.hoverBg} ${theme.glow}`}
              >
                <Icon name="sparkles" className="w-5 h-5" />
                Platicar de mis Requerimientos
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesList.map((sector, index) => (
              <div key={index} className={`p-5 rounded-2xl border ${sector.bgAccent} transition-all hover:scale-[1.02] duration-200`}>
                <h3 className={`font-bold text-sm sm:text-base ${sector.accent} pb-1`}>{sector.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
