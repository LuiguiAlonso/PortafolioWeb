import { ArrowRight } from "lucide-react";
import { socialLinks } from "../../data/socials"; 

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 text-center z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
          Disponible para trabajar
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Hola, soy <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Luigui Paredes
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Ingeniería de Sistemas <span className="text-cyan-500">|</span> Universidad de Lima
        </h2>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Creando experiencias digitales excepcionales en <span className="text-cyan-400">Web</span>, <span className="text-purple-400">Móvil</span> y <span className="text-green-400">Videojuegos</span>.
        </p>
        <div className="flex justify-center gap-8 mb-14 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {socialLinks.map((link, i) => {
             const Icon = link.icon;
             return (
               <a 
                 key={i} 
                 href={link.url}
                 target="_blank"        
                 rel="noopener noreferrer" 
                 aria-label={link.ariaLabel}
                 className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
               >
                 <Icon className="w-8 h-8" />
               </a>
             )
          })}
        </div>
      

        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}
          className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xl hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all animate-fade-in-up hover:-translate-y-1" 
          style={{ animationDelay: "0.5s" }}
        >
          Explorar Portafolio
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
}