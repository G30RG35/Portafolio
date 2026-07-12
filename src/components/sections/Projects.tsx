"use client";

import React, { useState } from 'react';
import { Icon } from '@/components/Icons';
import { useTheme } from '@/context/ThemeContext';

export const Projects = () => {
  const { theme } = useTheme();
  const [projectFilter, setProjectFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 9,
      title: 'Evoluciona Consultores',
      category: 'wordpress',
      shortDescription: 'Sitio corporativo para consultoría empresarial de alto nivel.',
      longDescription: 'Plataforma web desarrollada para Evoluciona Consultores Asociados SAPI de C.V. Diseñada con Elementor y enfocada en transmitir una imagen profesional y de confianza. Cuenta con integración de botones flotantes de contacto (WhatsApp) y secciones detalladas de servicios y clientes.',
      techStack: ['WordPress', 'Elementor', 'CSS Custom', 'Responsive Design'],
      liveUrl: 'https://evolucionamx.com.mx/',
      githubUrl: null,
      previewFeature: 'evoluciona',
      images: ['evoluciona.webp', 'evoluciona2.webp', 'evoluciona3.webp', 'evoluciona4.webp', 'evoluciona5.webp', 'evoluciona6.webp'],
      stats: { UX: 'Intuitiva', soporte: '24/7', loadSpeed: 'Optimizado' }
    },
    {
      id: 7,
      title: 'Nativa - Art, Beauty & Innovation',
      category: 'wordpress',
      shortDescription: 'Centro de Formación Profesional con sistema de verificación de credenciales.',
      longDescription: 'Sitio web corporativo y catálogo académico para un centro especializado en la industria de la belleza y la salud. Cuenta con un sistema personalizado en línea para que los estudiantes validen sus certificados ingresando su número de folio. El diseño presenta un estilo profesional y dinámico.',
      techStack: ['WordPress', 'Elementor', 'PHP', 'CSS Custom', 'Validación de Credenciales'],
      liveUrl: 'https://nativa-abi.com/',
      githubUrl: null,
      previewFeature: 'nativa',
      images: ['nativa.webp', 'nativa2.webp'],
      stats: { loadSpeed: 'Optimizado', UX: 'Dinámica', integrations: 'WhatsApp' },
      mockMockup: {
        company: "Nativa ABI",
        courses: ["Cosmetología", "Enfermería", "Podología"],
        verification: "Sistema de Validación Activo"
      }
    },
    {
      id: 10,
      title: 'Validador de Credenciales (Nativa)',
      category: 'wordpress',
      shortDescription: 'Plugin personalizado para la verificación de certificados académicos.',
      longDescription: 'Desarrollo de un plugin a medida para el centro de formación Nativa. Permite a estudiantes y a empresas externas verificar la autenticidad de los certificados emitidos ingresando un número de folio o escaneando un código. El sistema interactúa directamente con la base de datos de graduados de forma segura.',
      techStack: ['WordPress Plugin', 'PHP', 'AJAX', 'MySQL', 'Seguridad'],
      liveUrl: 'https://nativa-abi.com/validar-certificado/',
      githubUrl: null,
      previewFeature: 'validador1',
      images: ['validador1.webp', 'validador2.webp', 'validador3.webp', 'validador4.webp', 'validador5.webp'],
      stats: { verification: 'Tiempo Real', db: 'Optimizada', security: 'Alta' }
    },
    {
      id: 8,
      title: 'Piedra Pinos Constructora',
      category: 'wix',
      shortDescription: 'Constructora de casas vacacionales personalizadas con galería dinámica.',
      longDescription: 'Sitio corporativo enfocado en la captación de clientes para diseño y construcción a medida. Muestra una galería interactiva con scroll horizontal de los proyectos desarrollados en entornos naturales. Ofrece canales de atención segmentados (Ecuador y USA) para una gestión internacional de ventas.',
      techStack: ['Wix', 'Velo', 'CSS Custom', 'Galerías Dinámicas'],
      liveUrl: 'https://www.piedrapinos.com/',
      githubUrl: null,
      previewFeature: 'piedrapinos',
      stats: { conversions: '+20%', international: 'EC & USA', layout: 'Responsive' },
      mockMockup: {
        title: "Casas Vacacionales",
        projects: ["Villa del Bosque", "Refugio de Montaña", "Casa del Lago"]
      }
    }
  ];

  const filteredProjects = projectFilter === 'todos' 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  return (
    <section id="proyectos" className="py-20 border-t border-zinc-900/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Cabecera del portafolio */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className={`text-xs uppercase tracking-widest font-extrabold ${theme.primary}`}>Mis Trabajos Recientes</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Galería de Páginas y Apps</h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              Haz clic en cualquier proyecto para ver detalles técnicos y explorar la galería visual completa del sitio web.
            </p>
          </div>

          {/* Filtros de Categoría */}
          <div className="flex flex-wrap gap-2 bg-zinc-900 border border-zinc-800 p-1.5 rounded-2xl self-start md:self-end">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'react', label: 'Proyectos React.js' },
              { id: 'wordpress', label: 'Páginas WordPress' },
              { id: 'wix', label: 'Wix / Otros' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setProjectFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  projectFilter === filter.id 
                    ? `${theme.bg} text-white ${theme.glow}` 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-850'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
              className="group cursor-pointer bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              
              <div className="bg-zinc-950 px-4 py-3 border-b border-zinc-850 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40"></span>
                </div>

              </div>

              <div className="h-auto bg-zinc-950 p-4 relative overflow-hidden flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full ${
                      project.category === 'react' ? 'bg-sky-950/50 text-sky-400 border border-sky-900/30' : 
                      project.category === 'wordpress' ? 'bg-blue-950/50 text-blue-400 border border-blue-900/30' : 
                      'bg-orange-950/50 text-orange-400 border border-orange-900/30'
                    }`}>
                      {project.category === 'react' ? 'React.js' : project.category === 'wordpress' ? 'WordPress' : 'Wix'}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-lg group-hover:text-rose-400 transition-colors pt-2">
                    {project.title}
                  </h3>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-lg flex flex-col gap-2 text-xs text-zinc-400 font-sans mt-2">
                  <span className="line-clamp-3 leading-relaxed w-full">{project.longDescription}</span>
                  <span className={`text-xs ${theme.primary} font-bold text-right w-full mt-1`}>Abrir galería &rarr;</span>
                </div>

                <div className={`absolute -right-10 -bottom-10 w-28 h-28 rounded-full blur-2xl opacity-10 transition-all group-hover:opacity-30 ${
                  project.category === 'react' ? 'bg-sky-500' : project.category === 'wordpress' ? 'bg-blue-500' : 'bg-orange-500'
                }`}></div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs bg-zinc-950 border border-zinc-850 px-2.5 py-1 rounded-md text-zinc-400 font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs text-zinc-500 font-bold self-center">+{project.techStack.length - 3}</span>
                  )}
                </div>


              </div>

            </div>
          ))}
        </div>

        {/* MODAL DETALLADO CON SIMULADOR DE PANTALLA */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 overflow-y-auto animate-fadeIn">
            <div className="bg-zinc-900 border border-zinc-800 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800 hover:scale-110 transition-all"
                aria-label="Cerrar modal"
              >
                <Icon name="close" className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs uppercase font-extrabold tracking-widest px-3 py-1 rounded-full ${
                      selectedProject.category === 'react' 
                        ? 'bg-sky-950/60 text-sky-400' 
                        : selectedProject.category === 'wordpress'
                        ? 'bg-blue-950/60 text-blue-400'
                        : 'bg-orange-950/60 text-orange-400'
                    }`}>
                      {selectedProject.category === 'react' ? 'Desarrollo React' : selectedProject.category === 'wordpress' ? 'WordPress Custom' : 'Wix Custom'}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white">{selectedProject.title}</h3>
                  <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-5 space-y-6">
                    <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-850 space-y-4">
                      <h4 className="font-bold text-white text-sm uppercase tracking-wider text-zinc-400">Stack Tecnológico utilizado:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech: string, i: number) => (
                          <span key={i} className="text-xs font-semibold bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>



                    {/* GALERÍA DE MINIATURAS */}
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-850 space-y-4">
                        <h4 className="font-bold text-white text-sm uppercase tracking-wider text-zinc-400">Galería del Proyecto:</h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.images.map((img: string, idx: number) => (
                            <div 
                              key={idx} 
                              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                              className={`w-16 h-12 shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${currentImageIndex === idx ? `border-rose-500 opacity-100 scale-110 shadow-lg shadow-rose-900/50` : 'border-zinc-800 opacity-60 hover:opacity-100 hover:scale-105'}`}
                            >
                              <img src={`/Portafolio_Personal/images/projects/${img}`} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider block">Vista Previa del Proyecto:</span>
                      <a 
                        href={selectedProject.liveUrl !== '#' ? selectedProject.liveUrl : '#'}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-xs font-bold ${theme.primary} flex items-center gap-1 hover:underline`}
                      >
                        Visitar Web Real <Icon name="external" className="w-3 h-3" />
                      </a>
                    </div>
                    
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col shadow-inner">
                      <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-850 flex items-center gap-2 justify-between relative z-10">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="w-2 h-2 rounded-full bg-red-500"></span>
                          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        </div>
                        <div className="bg-zinc-950 rounded px-4 py-0.5 text-[10px] font-mono text-zinc-500 truncate w-full max-w-[320px] text-center">
                          {selectedProject.liveUrl !== '#' ? selectedProject.liveUrl : `https://${selectedProject.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`}
                        </div>
                        <div className="w-8"></div>
                      </div>

                      <div 
                        className="relative bg-zinc-900 min-h-[350px] flex items-center justify-center overflow-hidden group/image cursor-pointer"
                        onClick={() => setIsLightboxOpen(true)}
                      >
                        <img 
                          src={`/Portafolio_Personal/images/projects/${selectedProject.images ? selectedProject.images[currentImageIndex] : `${selectedProject.previewFeature}.webp`}`}
                          alt={`Vista previa de ${selectedProject.title}`}
                          className="w-full h-full object-cover opacity-80 group-hover/image:opacity-100 group-hover/image:scale-105 transition-all duration-700 transform-gpu"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/18181b/3f3f46?text=Captura+Pendiente';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 flex items-center justify-center transition-opacity duration-300">
                          <span className="bg-zinc-900/90 text-white text-sm font-bold px-4 py-2 rounded-xl border border-zinc-700 flex items-center gap-2 shadow-2xl">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                            Ver en Pantalla Completa
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* LIGHTBOX PANTALLA COMPLETA */}
        {isLightboxOpen && selectedProject && (
          <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 p-3 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors border border-zinc-700 z-10"
              onClick={() => setIsLightboxOpen(false)}
            >
              <Icon name="close" className="w-6 h-6" />
            </button>

            {/* FLECHAS DE NAVEGACIÓN */}
            {selectedProject.images && selectedProject.images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 sm:left-10 p-4 bg-zinc-900/80 text-white rounded-full hover:bg-rose-600 transition-colors border border-zinc-700 z-10 backdrop-blur"
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : selectedProject.images.length - 1)); 
                  }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  className="absolute right-4 sm:right-10 p-4 bg-zinc-900/80 text-white rounded-full hover:bg-rose-600 transition-colors border border-zinc-700 z-10 backdrop-blur"
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    setCurrentImageIndex((prev) => (prev < selectedProject.images.length - 1 ? prev + 1 : 0)); 
                  }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </>
            )}

            <img 
              src={`/Portafolio_Personal/images/projects/${selectedProject.images ? selectedProject.images[currentImageIndex] : `${selectedProject.previewFeature}.webp`}`} 
              alt="Vista completa" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transform-gpu"
              loading="lazy"
              decoding="async"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1200x800/18181b/3f3f46?text=Captura+Pendiente';
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};
