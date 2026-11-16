import { Braces, PenTool, Wrench } from 'lucide-react';
import { SceneShell } from '../../components/layout/SceneShell';
import { ProjectCarousel } from '../../components/projects/ProjectCarousel';
import { IllustratedScene } from '../../components/scenes/IllustratedScene';
import type { Project } from '../../data/projects';
import { projects } from '../../data/projects';

export function Workshop({ onOpen }: { onOpen: (project: Project) => void }) {
  return (
    <SceneShell
      id="projects"
      number="03"
      eyebrow="The project horizon"
      title="A moving window into what I make."
      intro="Browse experiments in code, electronics, signal processing, and music. Bring a project into the center, then open it to read the field notes."
      className="workshop-section project-horizon-section"
    >
      <IllustratedScene scene="workshop">
        <div className="workshop__lamp-glow" aria-hidden="true" />
        <div className="workshop__notes" aria-hidden="true">
          <span><PenTool /> sketch</span><span><Braces /> build</span><span><Wrench /> tune</span>
        </div>
        <ProjectCarousel projects={projects} onOpen={onOpen} />
      </IllustratedScene>
    </SceneShell>
  );
}
