import { skills, technologies } from "../../data/about";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl tracking-tight">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mí</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Soy un desarrollador apasionado con más de <span className="text-slate-200 font-semibold">5 años de experiencia</span> transformando ideas en código. 
                Mi enfoque no es solo escribir software, sino crear soluciones digitales que sean 
                <span className="text-cyan-400"> eficientes</span>, <span className="text-cyan-400">escalables</span> y <span className="text-cyan-400">atractivas</span>.
              </p>
              <p>
                Me muevo fluidamente entre el desarrollo de sistemas complejos (Backend/Web) 
                y la creatividad visual necesaria para Videojuegos y UI.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-500">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm text-slate-300 transition-all hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:-translate-y-1"
                >
                  <div className={`mb-4 inline-flex rounded-xl bg-slate-800 p-3 ring-1 ring-white/5 ${skill.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="mb-2 text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {skill.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}