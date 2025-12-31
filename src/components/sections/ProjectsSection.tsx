import { useState } from "react";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data/projects"; 
import { categories } from "../../data/categories";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Proyectos</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explora una selección de mis trabajos más destacados, donde la ingeniería se encuentra con el diseño.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.label}
              </button>
            );
          })}
        </div>
        <div className="max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
            />
          ))}
        </div>
        {filteredProjects.length === 0 && (
            <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border border-slate-800 mb-4">
                    <span className="text-2xl">🚧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">En construcción</h3>
                <p className="text-slate-500">Pronto subiré proyectos increíbles en esta categoría.</p>
            </div>
        )}
      </div>
    </section>
  );
}