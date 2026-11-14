import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import { SectionNavigation } from './components/navigation/SectionNavigation';
import { ProjectDetail } from './components/projects/ProjectDetail';
import type { Project } from './data/projects';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import { Hero } from './sections/Hero/Hero';
import { Observatory } from './sections/Observatory/Observatory';
import { ResonanceLake } from './sections/ResonanceLake/ResonanceLake';
import { SignalGarden } from './sections/SignalGarden/SignalGarden';
import { Workshop } from './sections/Workshop/Workshop';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const context = gsap.context(() => {
      gsap.from('.hero__copy > *', { y: 28, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.15 });
      gsap.utils.toArray<HTMLElement>('.scene-section').forEach((section) => {
        const layers = section.querySelectorAll<HTMLElement>('.scene-layer');
        layers.forEach((layer) => {
          const depth = Number(layer.style.getPropertyValue('--depth')) || 0.1;
          gsap.fromTo(layer, { yPercent: depth * -18, scale: 1.025 }, {
            yPercent: depth * 30,
            ease: 'none',
            scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 0.7 },
          });
        });
        gsap.utils.toArray<HTMLElement>('.reveal', section).forEach((item) => {
          gsap.from(item, { y: 42, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 88%', once: true } });
        });
      });
      gsap.to('.signal-vines path', { strokeDashoffset: 0, duration: 1.8, ease: 'none', scrollTrigger: { trigger: '.signal-vines', start: 'top 75%', end: 'bottom 55%', scrub: 0.8 } });
      gsap.to('.workshop__lamp-glow', { opacity: 0.82, scale: 1.08, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    });
    return () => context.revert();
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;
    const hero = document.querySelector<HTMLElement>('.hero .illustrated-scene');
    if (!hero) return;
    const move = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      hero.querySelectorAll<HTMLElement>('.scene-layer').forEach((layer, index) => {
        gsap.to(layer, { x: x * (index + 1) * -5, y: y * (index + 1) * -3, duration: 1.4, ease: 'power2.out', overwrite: 'auto' });
      });
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [reducedMotion]);

  return (
    <>
      <SectionNavigation />
      <main id="main">
        <Hero />
        <SignalGarden onOpen={setActiveProject} />
        <Workshop onOpen={setActiveProject} />
        <ResonanceLake onOpen={setActiveProject} />
        <Observatory />
      </main>
      <ProjectDetail project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
