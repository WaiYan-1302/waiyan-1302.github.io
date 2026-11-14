import { ArrowDown, ArrowRight } from 'lucide-react';
import { AmbientParticles } from '../../components/scenes/AmbientParticles';
import { IllustratedScene } from '../../components/scenes/IllustratedScene';
import { siteConfig } from '../../data/siteConfig';

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <IllustratedScene scene="hero">
        <AmbientParticles count={16} />
        <div className="hero__copy">
          <p className="hero__kicker"><span /> The living sketchbook</p>
          <h1 id="hero-title">Hello, I’m <em>{siteConfig.name}.</em></h1>
          <p>{siteConfig.intro}</p>
          <div className="hero__actions">
            <a className="button" href="#research">Explore my work <ArrowRight /></a>
            <a className="text-link" href="#contact">Contact me</a>
          </div>
        </div>
        <div className="hero__field-note" aria-hidden="true">
          <span>Field note 01</span>
          <p>Follow the light through five connected landscapes.</p>
        </div>
        <a className="scroll-cue" href="#research"><span>Scroll to wander</span><ArrowDown /></a>
      </IllustratedScene>
    </section>
  );
}
