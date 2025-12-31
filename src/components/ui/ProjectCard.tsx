import type { Project } from '../../types'; 
import { Github, ExternalLink, Download, Smartphone, Youtube } from 'lucide-react';
import { categoryColors } from '../../data/categoryStyles'; 

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {

  const getDemoIcon = () => {
     if (!project.demoLinkText) return <ExternalLink className="w-4 h-4" />;
     const text = project.demoLinkText.toLowerCase();
     if (text.includes('descargar')) return <Download className="w-4 h-4" />;
     if (text.includes('play store')) return <Smartphone className="w-4 h-4" />;
     return <ExternalLink className="w-4 h-4" />;
  }

  return (
    <article className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8 mb-20 lg:mb-32">
      <div className="w-full lg:w-[57%] group relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
            <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                <span className={`
                    px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg
                    ${categoryColors[project.category]} 
                `}>
                    {project.category}
                </span>
                <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-slate-300 shadow-lg border-l border-slate-700">
                    {project.status}
                </span>
            </div>

            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full aspect-video object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
          </div>
      </div>
      <div className="w-full lg:w-[43%] flex flex-col justify-center -mt-3">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          {project.title}
        </h3>
        <p className="
            text-slate-400 
            text-lg 
            leading-relaxed 
            mb-8 
            text-justify
            line-clamp-6
            h-[11rem] 
            overflow-hidden
        ">
          {project.description}
        </p>
        <div className="mb-8">
            <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span 
                        key={tech} 
                        className="rounded-full border border-slate-700 bg-slate-800/40 px-4 py-1.5 text-sm text-slate-300 transition-all hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 cursor-default select-none"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:-translate-y-1"
            >
              {project.demoLinkText || "Ver Proyecto"}
              {getDemoIcon()} 
            </a>
          )}
          {project.youtubeUrl && (
            <a 
              href={project.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800 text-white border border-slate-700 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 transition-all hover:-translate-y-1 group/yt"
            >
              Ver Video
              <Youtube className="w-5 h-5 text-red-500 group-hover/yt:text-red-400" />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all hover:-translate-y-1"
            >
              Código
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

