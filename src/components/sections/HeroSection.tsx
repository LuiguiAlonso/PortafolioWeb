import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible para proyectos
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Desarrollador <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Full Stack
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Creando experiencias digitales excepcionales en <span className="text-cyan-400">Web</span>, <span className="text-purple-400">Móvil</span> y <span className="text-green-400">Videojuegos</span>.
        </p>
        <div className="flex justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-white font-bold text-lg hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] animate-fade-in-up" 
          style={{ animationDelay: "0.4s" }}
        >
          Ver mis proyectos
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}