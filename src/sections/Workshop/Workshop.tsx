import { Braces, PenTool, Wrench } from 'lucide-react';
import { SceneShell } from '../../components/layout/SceneShell';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { IllustratedScene } from '../../components/scenes/IllustratedScene';
import type { Project } from '../../data/projects';
import { projectsByCategory } from '../../data/projects';

export function Workshop({ onOpen }: { onOpen: (project: Project) => void }) {
  return (
    <SceneShell
      id="projects"
      number="03"
      eyebrow="The workshop"
      title="Ideas become tools, then become questions again."
      intro="A workbench for applications, generative sketches, and small mechanisms built to make an idea tangible."
      className="workshop-section"
    >
      <IllustratedScene scene="workshop">
        <div className="workshop__lamp-glow" aria-hidden="true" />
        <div className="workshop__notes" aria-hidden="true">
          <span><PenTool /> sketch</span><span><Braces /> build</span><span><Wrench /> tune</span>
        </div>
        <div className="workshop-projects">
          {projectsByCategory('code').map((project) => <ProjectCard key={project.id} project={project} onOpen={onOpen} variant="object" />)}
        </div>
      </IllustratedScene>
    </SceneShell>
  );
}
