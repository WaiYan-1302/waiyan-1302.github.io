import { ArrowLeft, ArrowRight, ArrowUpRight, Hand } from 'lucide-react';
import { useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import type { Project } from '../../data/projects';

interface ProjectCarouselProps {
  projects: Project[];
  onOpen: (project: Project) => void;
}

function circularOffset(index: number, active: number, length: number) {
  let offset = index - active;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

export function ProjectCarousel({ projects, onOpen }: ProjectCarouselProps) {
  const [active, setActive] = useState(0);
  const dragStart = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const suppressClick = useRef(false);

  const move = (direction: number) => {
    setActive((current) => (current + direction + projects.length) % projects.length);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
    dragDelta.current = 0;
    suppressClick.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    dragDelta.current = event.clientX - dragStart.current;
    if (Math.abs(dragDelta.current) > 8) suppressClick.current = true;
    event.currentTarget.style.setProperty('--drag', `${dragDelta.current * 0.18}px`);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    event.currentTarget.releasePointerCapture(event.pointerId);
    event.currentTarget.style.setProperty('--drag', '0px');
    if (Math.abs(dragDelta.current) > 45) move(dragDelta.current < 0 ? 1 : -1);
    dragStart.current = null;
    dragDelta.current = 0;
    window.setTimeout(() => { suppressClick.current = false; }, 80);
  };

  return (
    <div className="project-carousel">
      <div className="project-carousel__topline">
        <span><Hand /> Drag or use arrow keys</span>
        <span>{String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
      </div>
      <div
        className="project-carousel__viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label="Portfolio projects"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
          if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
          if (event.key === 'Enter') onOpen(projects[active]);
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {projects.map((project, index) => {
          const offset = circularOffset(index, active, projects.length);
          const distance = Math.abs(offset);
          const isActive = offset === 0;
          const style = {
            '--offset': offset,
            '--distance': distance,
            '--card-scale': isActive ? 1 : distance === 1 ? 0.72 : 0.56,
            '--card-opacity': distance > 2 ? 0 : distance === 2 ? 0.35 : isActive ? 1 : 0.68,
            '--card-z': projects.length - distance,
            pointerEvents: distance <= 1 ? 'auto' : 'none',
          } as CSSProperties;
          return (
            <article
              key={project.id}
              className={`horizon-card ${isActive ? 'is-active' : ''}`}
              style={style}
              aria-hidden={distance > 1}
            >
              <button
                type="button"
                tabIndex={distance > 1 ? -1 : 0}
                aria-label={isActive ? `Open ${project.title}` : `Bring ${project.title} into focus`}
                onClick={() => {
                  if (suppressClick.current) return;
                  isActive ? onOpen(project) : setActive(index);
                }}
              >
                <img src={project.thumbnail} alt="" draggable="false" />
                <span className="horizon-card__wash" aria-hidden="true" />
                <span className="horizon-card__content">
                  <span className="horizon-card__meta">{project.category} · {project.status}</span>
                  <strong>{project.title}</strong>
                  <span>{project.shortDescription}</span>
                  <span className="horizon-card__action">{isActive ? 'View project' : 'Bring forward'} <ArrowUpRight /></span>
                </span>
              </button>
            </article>
          );
        })}
      </div>
      <div className="project-carousel__controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous project"><ArrowLeft /></button>
        <div className="project-carousel__dots" role="tablist" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button key={project.id} type="button" role="tab" aria-selected={index === active} aria-label={`Show ${project.title}`} onClick={() => setActive(index)} />
          ))}
        </div>
        <button type="button" onClick={() => move(1)} aria-label="Next project"><ArrowRight /></button>
      </div>
    </div>
  );
}
