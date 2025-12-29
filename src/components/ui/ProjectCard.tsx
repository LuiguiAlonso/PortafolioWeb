import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-slate-700 flex flex-col h-full group">
      
      <div className="p-6 flex flex-col flex-grow">
        
        <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                {project.category}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-600 text-slate-400">
                {project.status}
            </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-slate-900/50 text-slate-300 text-xs px-2.5 py-1 rounded-lg border border-slate-700/50">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {project.link && (
        <div className="bg-slate-900/30 px-6 py-4 border-t border-slate-700/50">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
          >
            Ver Proyecto 
            <span>→</span>
          </a>
        </div>
      )}
    </div>
  );
};