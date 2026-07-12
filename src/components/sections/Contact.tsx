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
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Reemplaza 'TU_ID_AQUI' con el código de tu formulario en Formspree
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
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="py-20 border-t border-zinc-900/60 bg-gradient-to-t from-zinc-950 via-zinc-900/10 to-zinc-950 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold">
            <span className={`w-2 h-2 rounded-full ${theme.bg}`}></span>
            <span className="text-zinc-300">Contacto Directo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            ¿Tienes un Proyecto en Mente?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Si requieres una aplicación robusta en React, una tienda WooCommerce
            a la medida o necesitas un líder técnico que estructure, cotice y
            despliegue el software de tu negocio bajo estrictos estándares,
            cuéntame tus requerimientos.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-850 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div
            className={`absolute -right-20 -top-20 w-44 h-44 rounded-full blur-3xl opacity-10 ${theme.bg}`}
          ></div>

          <form
            onSubmit={handleContactSubmit}
            className="space-y-6 relative z-10"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-zinc-400"
              >
                Nombre Completo / Empresa *
              </label>
              <input
                type="text"
                id="name"
                required
                value={contactData.name}
                onChange={(e) =>
                  setContactData({ ...contactData, name: e.target.value })
                }
                placeholder="Tu nombre o empresa"
                className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all rounded-xl p-4 text-sm text-white placeholder-zinc-650 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-zinc-400"
                >
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all rounded-xl p-4 text-sm text-white placeholder-zinc-650 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold uppercase tracking-wider text-zinc-400"
                >
                  Asunto / Temática
                </label>
                <input
                  type="text"
                  id="subject"
                  value={contactData.subject}
                  onChange={(e) =>
                    setContactData({ ...contactData, subject: e.target.value })
                  }
                  placeholder="¿Qué necesitas?"
                  className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all rounded-xl p-4 text-sm text-white placeholder-zinc-650 outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider text-zinc-400"
              >
                Cuéntame sobre tu proyecto e industria *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={contactData.message}
                onChange={(e) =>
                  setContactData({ ...contactData, message: e.target.value })
                }
                placeholder="Describe a grandes rasgos qué necesitas desarrollar. Indícanos el ámbito (por ejemplo, Startup, Portal de Bienes Raíces, SaaS médico, etc.) y platiquemos del alcance."
                className="w-full bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all rounded-xl p-4 text-sm text-white placeholder-zinc-650 outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${theme.bg} ${theme.hoverBg} ${theme.glow} disabled:opacity-50`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Enviando Mensaje...
                </span>
              ) : (
                <>
                  <Icon name="mail" className="w-5 h-5" />
                  Enviar Requerimientos Técnicos
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="p-4 rounded-xl bg-green-950/85 border border-green-800 text-green-300 flex items-center gap-3 animate-fadeIn">
                <div className="p-1.5 rounded-full bg-green-500 text-white flex-shrink-0">
                  <Icon name="check" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-sm">
                    ¡Mensaje Enviado con Éxito!
                  </p>
                  <p className="text-xs">
                    Gracias por escribir. Analizaré la viabilidad técnica y me
                    pondré en contacto contigo para agendar una sesión de
                    arquitectura gratuita.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 rounded-xl bg-red-950/85 border border-red-900 text-red-300 flex items-center gap-3 animate-fadeIn">
                <div className="p-1.5 rounded-full bg-red-500 text-white flex-shrink-0 font-bold">
                  X
                </div>
                <div>
                  <p className="font-bold text-sm">
                    Error al enviar el mensaje
                  </p>
                  <p className="text-xs">
                    Por favor, asegúrate de llenar todos los campos obligatorios
                    (*) antes de enviar.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
