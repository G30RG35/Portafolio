"use client";

import React from 'react';
import { Icon } from '@/components/Icons';
import { useTheme } from '@/context/ThemeContext';

export const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="conocimientos" className="py-20 border-t border-zinc-900/60 bg-gradient-to-b from-zinc-950 via-zinc-900/10 to-zinc-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Título de Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className={`text-xs uppercase tracking-widest font-extrabold ${theme.primary}`}>Especialidades Técnicas</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Mi Arsenal de Tecnologías</h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Mantengo un dominio consolidado en las herramientas líderes del mercado. Conoce mis enfoques de producción sin métricas arbitrarias de porcentajes.
          </p>
        </div>

        {/* Grid de Habilidades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Tarjeta Frontend (React) */}
          <div className="bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-950/50 text-sky-400 border border-sky-800/30">
                  <Icon name="react" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Stack React.js</h3>
                  <p className="text-zinc-500 text-xs font-semibold">Interfaces interactivas avanzadas</p>
                </div>
              </div>
              <span className="text-xs font-extrabold text-sky-400 bg-sky-950/60 px-3 py-1 rounded-full uppercase tracking-wider">Avanzado</span>
            </div>

            <div className="space-y-4">
              {[
                { title: 'React Hooks & State Management', desc: 'Control fluido de estados con Redux Toolkit, Context API, Zustand e inyección nativa.' },
                { title: 'Estilizado Moderno & Responsive', desc: 'Diseño mobile-first pixel-perfect utilizando Tailwind CSS, CSS Modules y Styled Components.' },
                { title: 'Frameworks e Integración', desc: 'Estructuración ágil mediante Next.js para optimización SEO, Vite para desarrollo rápido y CRA.' },
                { title: 'Consumo de APIs y Websockets', desc: 'Integración avanzada de microservicios usando RESTful, GraphQL, Apollo y comunicaciones en tiempo real.' },
                { title: 'Tipado Seguro y Estructura', desc: 'Uso nativo de TypeScript para prevenir errores en tiempo de ejecución y robustecer el código.' }
              ].map((skill, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="mt-1 bg-sky-950/40 text-sky-400 rounded-full p-1 border border-sky-900/30">
                    <Icon name="check" className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-sm text-zinc-200">{skill.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta CMS & PHP (WordPress) */}
          <div className="bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-950/50 text-blue-400 border border-blue-800/30">
                  <Icon name="wordpress" className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Stack WordPress</h3>
                  <p className="text-zinc-500 text-xs font-semibold">Administración y estructuración sólida</p>
                </div>
              </div>
              <span className="text-xs font-extrabold text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full uppercase tracking-wider">Experto</span>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Maquetadores Visuales y Editores', desc: 'Control profundo de Elementor Pro, Gutenberg Block Editor y maquetado con bloques ligeros.' },
                { title: 'Campos Personalizados Estructurados', desc: 'Uso de ACF Pro (Advanced Custom Fields) y Custom Post Types para crear bases de datos autoadministrables.' },
                { title: 'E-commerce & Pasarelas de Pago', desc: 'Despliegues masivos en WooCommerce con pasarelas Stripe, PayPal, control de inventario y APIs externas.' },
                { title: 'Código de PHP y Temas Personalizados', desc: 'Edición técnica a nivel de código de plantillas hijas (child themes), hooks y funciones nativas.' },
                { title: 'Optimización de Velocidad y WPO', desc: 'Optimización extrema de carga mediante compresión de archivos, Redis Cache, CDN y formatos WebP de última generación.' }
              ].map((skill, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="mt-1 bg-blue-950/40 text-blue-400 rounded-full p-1 border border-blue-900/30">
                    <Icon name="check" className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-sm text-zinc-200">{skill.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Tarjetas de Habilidades Soft & Liderazgo de Tech Lead */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className={`w-10 h-10 rounded-lg bg-red-950/50 border border-red-800/30 flex items-center justify-center ${theme.primary}`}>
              <Icon name="briefcase" className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-lg">Dirección de Equipos</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">2 años de experiencia como Tech Lead gestionando perfiles junior y mid, organizando sprints ágiles y definiendo metodologías de desarrollo frontend.</p>
          </div>
          
          <div className="space-y-2">
            <div className={`w-10 h-10 rounded-lg bg-red-950/50 border border-red-800/30 flex items-center justify-center ${theme.primary}`}>
              <Icon name="code" className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-lg">Revisión de Código & WPO</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">Definición de estándares de "Clean Code", revisiones exhaustivas de código (Pull Requests) y optimización de Web Performance Optimization (WPO).</p>
          </div>

          <div className="space-y-2">
            <div className={`w-10 h-10 rounded-lg bg-red-950/50 border border-red-800/30 flex items-center justify-center ${theme.primary}`}>
              <Icon name="layers" className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-lg">Diseño de Arquitectura</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">Planificación estratégica de la infraestructura tecnológica, conectando React con CMS sin comprometer la seguridad ni el SEO.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
