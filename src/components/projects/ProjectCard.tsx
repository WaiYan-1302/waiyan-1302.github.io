import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  variant?: 'flower' | 'object' | 'note';
}

export function ProjectCard({ project, onOpen, variant = 'note' }: ProjectCardProps) {
  return (
    <button className={`project-card project-card--${variant}`} type="button" onClick={() => onOpen(project)}>
      <span className="project-card__visual" aria-hidden="true">
        <img src={project.thumbnail} alt="" />
      </span>
      <span className="project-card__copy">
        <span className="project-card__status">{project.status}</span>
        <strong>{project.title}</strong>
        <span>{project.shortDescription}</span>
      </span>
      <ArrowUpRight className="project-card__arrow" aria-hidden="true" />
    </button>
  );
}
