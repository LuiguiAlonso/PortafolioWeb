import { technologies } from "../../data/about";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl tracking-tight">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mí</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed text-justify">
              <p>
                Desde niño vi el mundo digital como un <span className="text-slate-200 font-medium">universo paralelo</span>; un espacio infinito donde, con una computadora, podíamos crear cualquier cosa. Esa curiosidad me llevó a la <span className="text-slate-200 font-semibold">Ingeniería de Sistemas</span>, donde aprendí que la base de todo gran universo es una estructura invisible: <span className="text-cyan-400">robusta, segura y escalable</span>.
              </p>
              <p>
                A lo largo de mi trayectoria, tras explorar el desarrollo de software tradicional y sumergirme en el diseño interactivo, entendí que la lógica hace que el software funcione, pero la interacción y la estética hacen que el software <span className="text-slate-200 italic">viva</span>. Comprendí que de nada sirve una arquitectura técnica impecable si el usuario no conecta con la interfaz. Mi propósito es unir ambos mundos para que cada sistema sea, desde el primer contacto, una <span className="text-cyan-400 font-medium">experiencia fluida e intuitiva</span>.
              </p>
              <p>
                Mi filosofía de trabajo es meticulosa. No solo escribo código; diseño sistemas bajo los principios de <span className="text-slate-200 font-semibold">Arquitectura Limpia</span> y buenas prácticas de desarrollo. Creo en el <span className="text-slate-200">minimalismo funcional</span>: eliminar el ruido, agrupar lo complejo y resaltar el núcleo de cada solución para que el usuario nunca se sienta perdido entre opciones innecesarias.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2 inline-block">
                Tech Stack & Herramientas
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-800/40 px-4 py-1.5 text-sm text-slate-300 transition-all hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 relative flex justify-center items-center mt-12 lg:mt-0 lg:-translate-y-10 lg:translate-x-0">
             
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-6 scale-95 -z-10" />
             
             <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20 group">
                <img 
                  src="/Foto_Perfil.png" 
                  alt="LuiguiParedes" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

