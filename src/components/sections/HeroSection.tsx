import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    // Quitamos bg-slate-900 porque ya tenemos fondo negro global.
    // Mantenemos relative y overflow-hidden para los efectos de luz.
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* EFECTO DE LUZ DE FONDO (Glow) */}
      {/* En fondo negro, un glow azul/cyan se ve espectacular */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      {/* Segundo glow para profundidad (un toque de violeta muy sutil) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 text-center z-10">
        
        {/* Badge "Disponible" */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
          Disponible para trabajar
        </div>

        {/* TITULO PRINCIPAL (TU NOMBRE) */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Hola, soy <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Alonso
          </span>
        </h1>

        {/* SUBTÍTULO (TU CARRERA) */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Ingeniero de Sistemas <span className="text-cyan-500">&</span> Full Stack Dev
        </h2>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Creando experiencias digitales excepcionales en <span className="text-cyan-400">Web</span>, <span className="text-purple-400">Móvil</span> y <span className="text-green-400">Videojuegos</span>.
        </p>

        {/* Iconos Sociales */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all hover:scale-110">
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Botón CTA (Call to Action) */}
        {/* Mantenemos el CYAN porque es el color de mejor contraste y acción sobre negro */}
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all animate-fade-in-up hover:-translate-y-1" 
          style={{ animationDelay: "0.5s" }}
        >
          Explorar Portafolio
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}