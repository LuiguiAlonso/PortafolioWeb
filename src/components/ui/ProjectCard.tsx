import type { Project } from '../../types'; 
import { Github, ExternalLink } from 'lucide-react';
import { categoryColors } from '../../data/categoryStyles';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col h-full">
      
      {/* 1. SECCION DE IMAGEN CON OVERLAY */}
      <div className="relative h-48 w-full overflow-hidden">
        
        {/* La Imagen de fondo */}
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge de Categoria */}
        <div className="absolute top-4 left-4 z-20">
             <span className={`
                px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm
                ${categoryColors[project.category]} 
             `}>
                {project.category}
            </span>
        </div>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
            
            {/* Boton LIVE (Verde/Cyan) */}
            {project.liveUrl && (
                <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-cyan-500 rounded-full text-white hover:bg-cyan-400 hover:scale-110 transition-all shadow-lg shadow-cyan-500/30"
                    title="Ver Demo en Vivo"
                >
                    <ExternalLink className="w-6 h-6" />
                </a>
            )}

            {/* Boton GITHUB */}
            {project.githubUrl && (
                <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-800 rounded-full text-white border border-slate-600 hover:bg-slate-700 hover:scale-110 transition-all shadow-lg"
                    title="Ver Código"
                >
                    <Github className="w-6 h-6" />
                </a>
            )}
        </div>
      </div>

      {/* 2. CONTENIDO DE LA TARJETA */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
            </h3>
            {/* Status pequeño a la derecha */}
            <span className="text-[10px] border border-slate-600 px-2 py-0.5 rounded text-slate-400">
                {project.status}
            </span>
        </div>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-slate-900 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-700">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};