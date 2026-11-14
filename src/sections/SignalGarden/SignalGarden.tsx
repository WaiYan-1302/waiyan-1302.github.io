import { Activity, Cpu, Sprout } from 'lucide-react';
import { SceneShell } from '../../components/layout/SceneShell';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { AmbientParticles } from '../../components/scenes/AmbientParticles';
import { IllustratedScene } from '../../components/scenes/IllustratedScene';
import type { Project } from '../../data/projects';
import { projectsByCategory } from '../../data/projects';

export function SignalGarden({ onOpen }: { onOpen: (project: Project) => void }) {
  const entries = projectsByCategory('research');
  return (
    <SceneShell
      id="research"
      number="02"
      eyebrow="The signal garden"
      title="Where quiet signals begin to bloom."
      intro="I’m drawn to the moment an invisible current becomes something we can perceive, question, and shape. This garden collects experiments at that threshold."
      className="signal-section"
    >
      <IllustratedScene scene="signal-garden">
        <AmbientParticles count={11} />
        <svg className="signal-vines" viewBox="0 0 1200 720" aria-hidden="true">
          <path d="M84 650C245 510 230 326 402 284S670 418 782 288s130-167 326-204" />
          <path d="M100 672C320 600 473 559 603 615s249 1 391-129" />
          <circle cx="403" cy="284" r="8" /><circle cx="782" cy="288" r="8" /><circle cx="994" cy="486" r="8" />
        </svg>
        <div className="garden-label garden-label--one"><Activity /> low-frequency drift</div>
        <div className="garden-label garden-label--two"><Cpu /> input → filter → form</div>
        <div className="garden-label garden-label--three"><Sprout /> sensing as attention</div>
        <div className="garden-projects">
          {entries.map((project) => <ProjectCard key={project.id} project={project} onOpen={onOpen} variant="flower" />)}
        </div>
      </IllustratedScene>
    </SceneShell>
  );
}
