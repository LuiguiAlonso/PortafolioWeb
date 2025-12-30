import { socialLinks } from "../../data/socials"; // <--- Importamos tus datos

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // SOLUCIÓN LÍNEA BLANCA: Cambiamos 'border-border' por 'border-white/10' (gris muy oscuro)
    // También aseguramos el fondo negro por si acaso.
    <footer className="relative border-t border-white/10 bg-[#0a0a0a] py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="group flex items-center justify-center md:justify-start gap-1 text-lg font-bold text-white tracking-tight">
              <span className="text-cyan-500">&lt;</span>
              <span>LuiguiParedes</span>
              <span className="text-cyan-500">/&gt;</span>
            </a>
            <p className="mt-2 text-sm text-slate-500">
              © {currentYear} Construido con React & Tailwind.
            </p>
          </div>

          {/* Redes Sociales (Dinámicas desde data/socials.ts) */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}