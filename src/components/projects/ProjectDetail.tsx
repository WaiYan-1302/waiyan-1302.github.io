import { Code2, ExternalLink, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../../data/projects';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;
    triggerRef.current = document.activeElement as HTMLElement;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => closeRef.current?.focus(), 30);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const panel = document.querySelector<HTMLElement>('.project-detail__panel');
        const items = panel?.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])');
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = priorOverflow;
      triggerRef.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div className="project-detail" role="dialog" aria-modal="true" aria-labelledby="project-detail-title" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <article className="project-detail__panel">
        <button ref={closeRef} className="icon-button project-detail__close" type="button" onClick={onClose} aria-label="Close project details"><X /></button>
        <div className="project-detail__art"><img src={project.thumbnail} alt="" /></div>
        <div className="project-detail__content">
          <p className="eyebrow">{project.category} · {project.status}</p>
          <h2 id="project-detail-title">{project.title}</h2>
          <p className="project-detail__lead">{project.fullDescription}</p>
          <div className="project-detail__meta">
            <section><h3>Tools & materials</h3><ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section><h3>Question</h3><p>{project.challenges}</p></section>
            <section><h3>Current note</h3><p>{project.outcomes}</p></section>
          </div>
          <div className="project-detail__actions">
            {project.githubUrl ? <a className="button button--small" href={project.githubUrl} target="_blank" rel="noreferrer"><Code2 />View source</a> : <span className="button button--small is-disabled" aria-disabled="true"><Code2 />Source coming soon</span>}
            {project.liveUrl ? <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live project<ExternalLink /></a> : null}
          </div>
        </div>
      </article>
    </div>,
    document.body,
  );
}
