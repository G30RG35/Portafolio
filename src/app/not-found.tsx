import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#09090B] text-[#F4F4F5] flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="max-w-md text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#18181B] border border-[#27272A] text-xs font-mono text-[#A1A1AA]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
          <span>404 &middot; Ruta no encontrada</span>
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl text-[#F4F4F5] tracking-tight">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="font-heading text-xl text-[#F4F4F5]">
            Página no disponible
          </h2>
          <p className="font-body text-[#A1A1AA] text-sm leading-relaxed">
            La dirección a la que intentas acceder no existe en este servidor o ha sido reestructurada.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto h-11 px-6 rounded-lg text-xs font-semibold text-[#F4F4F5] bg-[#DC2626] hover:bg-[#B91C1C] transition-colors flex items-center justify-center shadow-[0_1px_3px_rgba(220,38,38,0.4)]"
          >
            &larr; Volver al portafolio
          </Link>
          <a
            href="mailto:javyj2017@hotmail.com"
            className="w-full sm:w-auto h-11 px-5 rounded-lg text-xs font-semibold text-[#A1A1AA] hover:text-[#F4F4F5] bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] transition-colors flex items-center justify-center"
          >
            Reportar error
          </a>
        </div>
      </div>
    </main>
  );
}
