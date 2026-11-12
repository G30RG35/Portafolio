"use client";

import React, { useState } from "react";
import { Icon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";

interface Project {
  id: number;
  title: string;
  category: "wordpress" | "react" | "wix";
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string | null;
  previewFeature: string;
  images?: string[];
  stats?: Record<string, string | undefined>;
  mockMockup?: Record<string, unknown>;
}

export const Projects = () => {
  const { theme } = useTheme();
  const [projectFilter, setProjectFilter] = useState<string>("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 9,
      title: "Evoluciona Consultores",
      category: "wordpress",
      shortDescription: "Sitio corporativo para consultoría empresarial de alto nivel.",
      longDescription:
        "Plataforma web desarrollada para Evoluciona Consultores Asociados SAPI de C.V. Diseñada con Elementor y código a la medida, enfocada en transmitir autoridad corporativa, tiempos de carga optimizados y canales de atención comercial integrados.",
      techStack: ["WordPress", "Elementor Pro", "CSS Custom", "WPO Optimization"],
      liveUrl: "https://evolucionamx.com.mx/",
      githubUrl: null,
      previewFeature: "evoluciona",
      images: [
        "evoluciona.webp",
        "evoluciona2.webp",
        "evoluciona3.webp",
        "evoluciona4.webp",
        "evoluciona5.webp",
        "evoluciona6.webp",
      ],
      stats: { UX: "Intuitiva", soporte: "24/7", loadSpeed: "Optimizado" },
    },
    {
      id: 7,
      title: "Nativa - Art, Beauty & Innovation",
      category: "wordpress",
      shortDescription: "Centro de Formación Profesional con sistema de verificación de credenciales.",
      longDescription:
        "Portal web corporativo y catálogo académico para un centro de formación especializado. Integra un sistema personalizado para validación de certificados de alumnos mediante número de folio y base de datos relacional.",
      techStack: ["WordPress", "PHP 8+", "MySQL", "CSS Custom", "REST API"],
      liveUrl: "https://nativa-abi.com/",
      githubUrl: null,
      previewFeature: "nativa",
      images: ["nativa.webp", "nativa2.webp"],
      stats: { loadSpeed: "Optimizado", UX: "Dinámica", integrations: "WhatsApp" },
    },
    {
      id: 10,
      title: "Validador de Credenciales Académicas",
      category: "wordpress",
      shortDescription: "Plugin a la medida para la verificación de certificados académicos.",
      longDescription:
        "Desarrollo de un plugin personalizado para el centro Nativa. Permite a graduados y empleadores certificar folios académicos en tiempo real contra la base de datos de egresados de forma segura y automatizada.",
      techStack: ["WordPress Plugin", "PHP", "AJAX", "MySQL", "Seguridad"],
      liveUrl: "https://nativa-abi.com/validar-certificado/",
      githubUrl: null,
      previewFeature: "validador1",
      images: [
        "validador1.webp",
        "validador2.webp",
        "validador3.webp",
        "validador4.webp",
        "validador5.webp",
      ],
      stats: { verification: "Tiempo Real", db: "Optimizada", security: "Alta" },
    },
    {
      id: 8,
      title: "Piedra Pinos Constructora",
      category: "wix",
      shortDescription: "Constructora de casas vacacionales con galería interactiva.",
      longDescription:
        "Plataforma comercial orientada a la captación de inversores y compradores de proyectos campestres. Cuenta con catálogo dinámico de proyectos arquitectónicos y canales de atención segmentados por país (Ecuador y USA).",
      techStack: ["Wix Velo", "JavaScript", "Responsive Design", "Galerías Dinámicas"],
      liveUrl: "https://www.piedrapinos.com/",
      githubUrl: null,
      previewFeature: "piedrapinos",
      stats: { conversions: "+20%", international: "EC & USA", layout: "Responsive" },
    },
  ];

  const filteredProjects =
    projectFilter === "todos"
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  return (
    <section id="proyectos" className="py-20 sm:py-24 border-t border-[#27272A] bg-[#18181B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Cabecera y Filtros */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#09090B] border border-[#27272A] text-xs font-mono text-[#F4F4F5]">
              <span className="font-semibold text-[#DC2626]">03</span>
              <span className="text-[#3F3F46]">/</span>
              <span className="text-[#A1A1AA] uppercase tracking-wider text-[11px]">CASOS DE ESTUDIO</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl text-[#F4F4F5] tracking-tight">
              Proyectos seleccionados en <span className="text-[#DC2626]">producción</span>
            </h2>
            <p className="font-body text-[#A1A1AA] text-sm leading-relaxed">
              Haz clic en cualquier proyecto para examinar la arquitectura técnica, métricas de entrega y la galería de capturas completa.
            </p>
          </div>

          {/* Filtros de Categoría */}
          <div className="flex flex-wrap gap-1 p-1 bg-[#09090B] border border-[#27272A] rounded-lg self-start md:self-end">
            {[
              { id: "todos", label: "Todos" },
              { id: "wordpress", label: "WordPress" },
              { id: "react", label: "React" },
              { id: "wix", label: "Otros CMS" },
            ].map((filter) => {
              const isSelected = projectFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setProjectFilter(filter.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-[background-color,color] duration-150 active:scale-[0.98] ${
                    isSelected
                      ? "bg-[#27272A] text-[#F4F4F5] font-semibold"
                      : "text-[#A1A1AA] hover:text-[#F4F4F5]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Proyectos en fondo #09090B con bordes #27272A */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
              className="cursor-pointer bg-[#09090B] rounded-xl border border-[#27272A] hover:border-[#3F3F46] hover:-translate-y-1 transition-[transform,border-color] duration-150 flex flex-col justify-between overflow-hidden group shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            >
              {/* Encabezado de tarjeta */}
              <div className="px-5 pt-5 pb-3 flex items-center justify-between border-b border-[#27272A]">
                <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wide bg-[#18181B] px-2 py-0.5 rounded border border-[#27272A]">
                  {project.category}
                </span>
                <span className="text-xs text-[#DC2626] font-mono flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Examinar &rarr;
                </span>
              </div>

              {/* Título y descripción */}
              <div className="p-5 space-y-2.5">
                <h3 className="font-heading text-base text-[#F4F4F5] group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-xs text-[#A1A1AA] leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>

              {/* Stack de tags al pie de la tarjeta */}
              <div className="px-5 pb-5 pt-2 flex flex-wrap gap-1.5 border-t border-[#27272A] mt-auto">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono bg-[#18181B] border border-[#27272A] px-2 py-0.5 rounded text-[#A1A1AA]"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[11px] font-mono text-[#71717A] self-center">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Detalle */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
            <div className="bg-[#18181B] border border-[#27272A] w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] animate-craft-modal">
              
              {/* Barra superior de modal */}
              <div className="px-6 py-4 bg-[#09090B] border-b border-[#27272A] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-[#A1A1AA] uppercase">
                    {selectedProject.category} &middot; Caso de estudio
                  </span>
                  <h3 className="font-heading text-lg text-[#F4F4F5]">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-md text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#27272A] border border-[#27272A] transition-colors active:scale-[0.96]"
                  aria-label="Cerrar modal"
                >
                  <Icon name="close" className="w-5 h-5" />
                </button>
              </div>

              {/* Contenido del modal */}
              <div className="overflow-y-auto p-6 space-y-6">
                <p className="font-body text-sm text-[#F4F4F5] leading-relaxed max-w-3xl">
                  {selectedProject.longDescription}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Lateral izquierdo: Stack y enlaces */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="bg-[#09090B] p-4 rounded-lg border border-[#27272A] space-y-2.5">
                      <span className="text-xs font-mono text-[#A1A1AA] block">
                        Tecnologías aplicadas:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono bg-[#18181B] border border-[#27272A] px-2.5 py-1 rounded text-[#F4F4F5]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full h-11 px-4 rounded-lg text-xs font-semibold text-[#F4F4F5] transition-[background-color,transform] duration-150 active:scale-[0.98] flex items-center justify-center gap-2 ${theme.bg} ${theme.hoverBg} shadow-[0_1px_3px_rgba(220,38,38,0.4)]`}
                    >
                      <span>Visitar sitio en producción</span>
                      <Icon name="external" className="w-3.5 h-3.5" />
                    </a>

                    {/* Miniaturas de galería */}
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-mono text-[#A1A1AA]">Vistas disponibles:</span>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-14 h-10 rounded border overflow-hidden transition-all duration-150 active:scale-[0.95] ${
                                currentImageIndex === idx
                                  ? "border-[#DC2626] opacity-100 ring-1 ring-[#DC2626]"
                                  : "border-[#27272A] opacity-60 hover:opacity-100"
                              }`}
                            >
                              <img
                                src={`/Portafolio/images/projects/${img}`}
                                alt={`Captura ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Previsualización visual de pantalla (Mockup Frame) */}
                  <div className="lg:col-span-7">
                    <div
                      className="bg-[#09090B] border border-[#27272A] rounded-lg overflow-hidden cursor-pointer relative group"
                      onClick={() => setIsLightboxOpen(true)}
                    >
                      <img
                        src={`/Portafolio/images/projects/${
                          selectedProject.images
                            ? selectedProject.images[currentImageIndex]
                            : `${selectedProject.previewFeature}.webp`
                        }`}
                        alt={`Vista de ${selectedProject.title}`}
                        className="w-full h-auto object-cover max-h-[380px] transition-transform duration-200 group-hover:scale-[1.01]"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/800x600/18181b/3f3f46?text=Captura+Pendiente";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                        <span className="text-xs font-mono text-[#F4F4F5] bg-[#18181B] border border-[#27272A] px-3 py-1.5 rounded-md shadow-lg">
                          Clic para expandir pantalla
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* Modal de Pantalla Completa (Lightbox) */}
        {isLightboxOpen && selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-[#18181B] text-[#F4F4F5] border border-[#27272A] hover:border-[#3F3F46] active:scale-[0.96] transition-transform"
              aria-label="Cerrar vista completa"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>

            {selectedProject.images && selectedProject.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#18181B] text-[#F4F4F5] border border-[#27272A] hover:bg-[#27272A] active:scale-[0.96] transition-transform"
                  onClick={(e) => {
                    e.stopPropagation();
                    const len = selectedProject.images?.length || 1;
                    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : len - 1));
                  }}
                  aria-label="Anterior captura"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#18181B] text-[#F4F4F5] border border-[#27272A] hover:bg-[#27272A] active:scale-[0.96] transition-transform"
                  onClick={(e) => {
                    e.stopPropagation();
                    const len = selectedProject.images?.length || 1;
                    setCurrentImageIndex((prev) => (prev < len - 1 ? prev + 1 : 0));
                  }}
                  aria-label="Siguiente captura"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <img
              src={`/Portafolio/images/projects/${
                selectedProject.images
                  ? selectedProject.images[currentImageIndex]
                  : `${selectedProject.previewFeature}.webp`
              }`}
              alt="Vista completa"
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl animate-craft-modal"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

      </div>
    </section>
  );
};
