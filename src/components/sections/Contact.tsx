"use client";

import React, { useState } from "react";
import { Icon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";

export const Contact = () => {
  const { theme } = useTheme();
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mojgaoad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactData.name,
          email: contactData.email,
          subject: contactData.subject,
          message: contactData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setContactData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-24 border-t border-[#27272A] bg-[#18181B]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="space-y-3 text-left sm:text-center sm:max-w-xl sm:mx-auto">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#09090B] border border-[#27272A] text-xs font-mono text-[#F4F4F5]">
            <span className="font-semibold text-[#DC2626]">05</span>
            <span className="text-[#3F3F46]">/</span>
            <span className="text-[#A1A1AA] uppercase tracking-wider text-[11px]">CONTACTO</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-[#F4F4F5] tracking-tight">
            Hablemos de tu <span className="text-[#DC2626]">proyecto</span>
          </h2>
          <p className="font-body text-[#A1A1AA] text-sm leading-relaxed">
            Escríbeme con los detalles de tu proyecto, arquitectura deseada o perfil requerido. Respondo con una propuesta técnica inicial en menos de 24 horas hábiles.
          </p>
        </div>

        <div className="bg-[#09090B] border border-[#27272A] rounded-xl p-6 sm:p-8 shadow-xl">
          <form onSubmit={handleContactSubmit} className="space-y-5">
            
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider">
                Nombre o Empresa *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                value={contactData.name}
                onChange={(e) =>
                  setContactData({ ...contactData, name: e.target.value })
                }
                placeholder="Jorge Inostroza / Empresa"
                className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626]/20 transition-all duration-150 rounded-lg p-3.5 text-base sm:text-sm text-[#F4F4F5] placeholder-[#71717A] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  placeholder="contacto@empresa.com"
                  className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626]/20 transition-all duration-150 rounded-lg p-3.5 text-base sm:text-sm text-[#F4F4F5] placeholder-[#71717A] outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider">
                  Alcance o Rol
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  autoComplete="off"
                  value={contactData.subject}
                  onChange={(e) =>
                    setContactData({ ...contactData, subject: e.target.value })
                  }
                  placeholder="Tech Lead / Proyecto React / WordPress"
                  className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626]/20 transition-all duration-150 rounded-lg p-3.5 text-base sm:text-sm text-[#F4F4F5] placeholder-[#71717A] outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider">
                Descripción de requerimientos técnicos *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={contactData.message}
                onChange={(e) =>
                  setContactData({ ...contactData, message: e.target.value })
                }
                placeholder="Describe los objetivos del proyecto, stack tecnológico deseado y fechas estimadas."
                className="w-full bg-[#18181B] border border-[#27272A] focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626]/20 transition-all duration-150 rounded-lg p-3.5 text-base sm:text-sm text-[#F4F4F5] placeholder-[#71717A] outline-none resize-none font-body"
              ></textarea>
            </div>

            <div className="flex items-center justify-between text-xs text-[#A1A1AA] font-mono pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
                <span>SLA: respuesta en &lt; 24h</span>
              </span>
              <span>Datos cifrados y privados</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full h-12 rounded-lg font-semibold text-xs sm:text-sm text-[#F4F4F5] transition-[background-color,transform] duration-150 active:scale-[0.98] flex items-center justify-center gap-2 ${theme.bg} ${theme.hoverBg} shadow-[0_1px_3px_rgba(220,38,38,0.4)] disabled:opacity-50`}
            >
              {isSubmitting ? (
                <span>Enviando mensaje...</span>
              ) : (
                <>
                  <Icon name="mail" className="w-4 h-4" />
                  <span>Enviar requerimientos</span>
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-[#09090B] border border-[#DC2626] text-[#F4F4F5] text-xs flex items-center gap-2.5 animate-craft-enter">
                <Icon name="check" className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span>Mensaje recibido correctamente. Me pondré en contacto contigo a la brevedad.</span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-[#09090B] border border-red-800 text-red-300 text-xs flex items-center gap-2.5 animate-craft-enter">
                <span>Por favor verifica que todos los campos requeridos estén completos.</span>
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};
