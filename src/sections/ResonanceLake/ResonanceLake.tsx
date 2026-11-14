import { Guitar, Mic2, Waves } from 'lucide-react';
import { useRef, useState } from 'react';
import { SceneShell } from '../../components/layout/SceneShell';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { AmbientParticles } from '../../components/scenes/AmbientParticles';
import { IllustratedScene } from '../../components/scenes/IllustratedScene';
import type { Project } from '../../data/projects';
import { projectsByCategory } from '../../data/projects';

interface Ripple { id: number; x: number; y: number; }

export function ResonanceLake({ onOpen }: { onOpen: (project: Project) => void }) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const count = useRef(0);
  const addRipple = (event: React.PointerEvent<HTMLButtonElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    const ripple = { id: ++count.current, x: event.clientX - box.left, y: event.clientY - box.top };
    setRipples((current) => [...current.slice(-4), ripple]);
    window.setTimeout(() => setRipples((current) => current.filter((item) => item.id !== ripple.id)), 1800);
  };

  return (
    <SceneShell
      id="music"
      number="04"
      eyebrow="The resonance lake"
      title="Every sound leaves a shape behind."
      intro="Voice, strings, and experiments in listening — a place for expression that doesn’t need to become a product to matter."
      className="lake-section"
    >
      <IllustratedScene scene="resonance-lake">
        <AmbientParticles count={14} />
        <button className="lake-surface" type="button" onPointerDown={addRipple} aria-label="Create a ripple in the illustrated lake">
          {ripples.map((ripple) => <i key={ripple.id} style={{ left: ripple.x, top: ripple.y }} />)}
          <span><Waves /> touch the water</span>
        </button>
        <div className="soundwave" aria-hidden="true">
          {Array.from({ length: 34 }).map((_, index) => <i key={index} style={{ height: `${14 + ((index * 17) % 48)}px` }} />)}
        </div>
        <div className="lake__motifs" aria-hidden="true"><span><Mic2 />voice</span><span><Guitar />strings</span></div>
        <div className="lake-projects">
          {projectsByCategory('music').map((project) => <ProjectCard key={project.id} project={project} onOpen={onOpen} variant="note" />)}
        </div>
      </IllustratedScene>
    </SceneShell>
  );
}
