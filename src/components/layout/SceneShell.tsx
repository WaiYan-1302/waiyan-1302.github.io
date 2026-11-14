import type { ReactNode } from 'react';

interface SceneShellProps {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  number: string;
  children: ReactNode;
  className?: string;
}

export function SceneShell({ id, eyebrow, title, intro, number, children, className = '' }: SceneShellProps) {
  return (
    <section id={id} className={`scene-section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="scene-section__marker" aria-hidden="true">
        <span>{number}</span><i />
      </div>
      <div className="scene-heading reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{intro}</p>
      </div>
      {children}
    </section>
  );
}
