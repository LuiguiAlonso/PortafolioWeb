import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Proyectos", href: "#projects" }, 
  { label: "Sobre mí", href: "#about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* LOGO REDISEÑADO: Estilo Código/Tech */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="group flex items-center gap-1 text-xl font-black text-white tracking-tighter"
        >
          <span className="text-cyan-500 transition-transform group-hover:-translate-x-1">&lt;</span>
          <span>LuiguiParedes</span>
          <span className="text-cyan-500 transition-transform group-hover:translate-x-1">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            if (link.label === "Proyectos") {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  // Botón Proyectos con más "glow" y mejor padding
                  className="px-6 py-2.5 rounded-full border border-cyan-500/30 text-cyan-400 font-bold text-xs uppercase tracking-widest transition-all hover:bg-cyan-500/10 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs font-bold uppercase tracking-widest text-slate-400 transition-all hover:text-white relative group"
              >
                {link.label}
                {/* Línea animada bajo el link */}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all group-hover:w-full"></span>
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu con mejor diseño */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-8 py-8 animate-fade-in">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-2xl font-black tracking-tight transition-colors ${
                  link.label === "Proyectos" 
                    ? "text-cyan-400" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}