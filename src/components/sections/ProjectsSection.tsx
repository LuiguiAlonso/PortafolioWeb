import { useState } from "react";
import { Monitor, Smartphone, Gamepad2 } from "lucide-react";
import { ProjectCard } from "../ui/ProjectCard";
import { projects } from "../../data/projects"; 

const categories = [
  { id: "ALL", label: "Todos", icon: null },
  { id: "WEB", label: "Web", icon: Monitor },
  { id: "MOBILE", label: "Móvil", icon: Smartphone },
  { id: "GAME", label: "Juegos", icon: Gamepad2 },
] as const;

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mis <span className="text-cyan-400">Proyectos</span>
          </h2>
          <p className="text-slate-400">Una selección de mis trabajos más destacados en diferentes plataformas y tecnologías</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}