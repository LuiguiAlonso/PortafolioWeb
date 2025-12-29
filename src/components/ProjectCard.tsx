import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      {/* Encabezado: Título y Categoría */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3 style={{ margin: 0 }}>{project.title}</h3>
        <span className={`badge ${project.category}`}>
            {project.category}
        </span>
      </div>

      {/* Descripción */}
      <p>{project.description}</p>

      {/* Tecnologías (Tech Stack) */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Link (Solo si existe) */}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '15px' }}>
          View Project →
        </a>
      )}
    </div>
  );
};