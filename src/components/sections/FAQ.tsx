"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Por qué trabajar conmigo en lugar de una agencia tradicional o un freelancer común?",
    answer:
      "Cuentas con un profesional con experiencia técnica y de liderazgo: me aseguro de que tu web se entregue en los plazos acordados, sin costes ocultos y con los más altos estándares de calidad. Tu web estará lista para vender y crecer, sin que tengas que rehacerla desde cero meses después.",
  },
  {
    question: "¿Podré editar y gestionar el contenido de mi web yo mismo sin saber programar?",
    answer:
      "Sí, 100%. Entrego tu sitio con un panel de administración visual e intuitivo (WordPress o panel personalizado). Podrás actualizar textos, subir fotos, cambiar precios o añadir nuevos productos fácilmente. Además, te brindo una sesión de inducción para que tengas total independencia.",
  },
  {
    question: "¿Mi web cargará rápido y se verá perfecta en teléfonos móviles?",
    answer:
      "Garantizado. Cada web que desarrollo está optimizada para cargar en menos de 2 segundos en conexiones móviles y cumplir con los estándares de Google (Core Web Vitals). Un sitio rápido retiene a más clientes y posiciona mucho mejor en los resultados de búsqueda.",
  },
  {
    question: "¿Cuánto tarda el desarrollo y qué necesito para comenzar?",
    answer:
      "Una landing page o web corporativa toma habitualmente entre 1 y 2 semanas; plataformas más complejas o tiendas online, entre 3 y 5 semanas. Para arrancar solo necesitamos una breve llamada para definir tus metas, tu logotipo y el contenido base que deseas mostrar.",
  },
  {
    question: "¿Qué garantía y soporte ofreces una vez entregada la web?",
    answer:
      "Todos los proyectos incluyen un periodo de garantía de 30 días tras el lanzamiento para resolver cualquier duda o ajuste sin coste adicional. También ofrezco planes opcionales de mantenimiento preventivo, copias de seguridad periódicas y soporte continuo.",
  },
  {
    question: "¿Cómo es el proceso de presupuesto y forma de pago?",
    answer:
      "Tras revisar lo que necesita tu negocio, te entrego una cotización cerrada y transparente en menos de 24 horas. Trabajamos habitualmente con un 50% de anticipo para iniciar el proyecto y el 50% restante al finalizar y recibir tu aprobación en el entorno de pruebas.",
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
            Claridad total en <span className="text-[#DC2626]">tiempos y entregas</span>
          </h2>
          <p className="font-body text-[#A1A1AA] text-sm leading-relaxed">
            Respuestas claras y directas a las dudas más comunes sobre el proceso de creación de tu web, soporte y garantías.
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
