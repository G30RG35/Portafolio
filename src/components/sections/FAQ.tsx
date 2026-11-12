"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué valor aportas como Tech Lead además del desarrollo de código?",
    answer:
      "Combino desarrollo activo con visión arquitectónica y liderazgo de equipo: estructuro proyectos escalables, defino estándares de Clean Code, realizo revisiones rigurosas de Pull Requests (PRs), estimo entregables de forma realista y coordino desarrolladores junior y mid para cumplir plazos sin generar deuda técnica.",
  },
  {
    question: "¿Por qué combinar React.js con WordPress?",
    answer:
      "Permite lo mejor de dos mundos: la velocidad, dinamismo e interactividad de vanguardia de una aplicación moderna en React, con la autoadministración y facilidad editorial que ofrece WordPress para equipos de contenido o ventas, evitando dependencias innecesarias de soporte técnico diario.",
  },
  {
    question: "¿Cómo garantizas la velocidad de carga y WPO (Web Performance Optimization)?",
    answer:
      "Desarrollo con buenas prácticas estrictas: formatos modernos WebP/AVIF, lazy loading selectivo, CSS atómico optimizado con Tailwind, reducción al mínimo de plugins en WordPress mediante código a la medida (Custom Post Types, ACF) y optimización de métricas Core Web Vitals (LCP, FID/INP, CLS).",
  },
  {
    question: "¿Cuál es tu disponibilidad y modalidad de trabajo?",
    answer:
      "Trabajo de forma 100% remota para empresas y clientes en Latinoamérica, Norteamérica y Europa. Me adapto con fluidez a dinámicas ágiles (Scrum, Kanban, sprints bisemanales) y herramientas de colaboración modernas (Git/GitHub, Linear, Jira, Slack, Figma).",
  },
  {
    question: "¿Cómo cotizas un desarrollo y en cuánto tiempo se inicia?",
    answer:
      "Una vez recibidos los requerimientos en el formulario o en una sesión técnica, entrego una propuesta de arquitectura y estimación transparente en 24-48 horas. Con el alcance aprobado, la fase de arranque y sprints comienza dentro de la misma semana.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 border-t border-[#27272A] bg-[#09090B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="max-w-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#F4F4F5]">
            <span className="font-semibold text-[#DC2626]">04</span>
            <span className="text-[#3F3F46]">/</span>
            <span className="text-[#A1A1AA] uppercase tracking-wider text-[11px]">PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-[#F4F4F5] tracking-tight">
            Metodología, tiempos y <span className="text-[#DC2626]">arquitectura</span>
          </h2>
          <p className="font-body text-[#A1A1AA] text-sm leading-relaxed">
            Respuestas directas sobre dinámica de trabajo, entregables técnicos y soporte continuo.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] rounded-xl overflow-hidden transition-[border-color] duration-150"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-heading text-[#F4F4F5] text-sm sm:text-base focus:outline-none active:scale-[0.99] transition-transform duration-150"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#DC2626]">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span
                    className={`transform transition-transform duration-200 ease-out text-[#A1A1AA] shrink-0 ${
                      isOpen ? "rotate-180 text-[#DC2626]" : ""
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[#A1A1AA] text-xs sm:text-sm leading-relaxed border-t border-[#27272A] pt-3 font-body animate-craft-enter">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
