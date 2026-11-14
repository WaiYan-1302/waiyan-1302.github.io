import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, Telescope } from 'lucide-react';
import { SceneShell } from '../../components/layout/SceneShell';
import { AmbientParticles } from '../../components/scenes/AmbientParticles';
import { IllustratedScene } from '../../components/scenes/IllustratedScene';
import { siteConfig } from '../../data/siteConfig';

export function Observatory() {
  return (
    <SceneShell
      id="about"
      number="05"
      eyebrow="The observatory"
      title="Looking outward. Learning inward."
      intro="I’m an interdisciplinary university student following the threads between engineering, creative technology, music, and visual storytelling."
      className="observatory-section"
    >
      <IllustratedScene scene="observatory">
        <AmbientParticles count={18} />
        <div className="constellation" aria-hidden="true"><i /><i /><i /><i /><i /><svg viewBox="0 0 300 180"><path d="M30 126 88 70l63 39 52-83 69 68" /></svg></div>
        <div className="about-card reveal">
          <p className="eyebrow"><Telescope /> Currently exploring</p>
          <ul>{siteConfig.interests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
          <p className="about-card__note">This portfolio is itself a sketchbook: provisional, curious, and designed to change as the work grows.</p>
        </div>
        <div id="contact" className="contact-card reveal">
          <p className="eyebrow">Leave a signal</p>
          <h3>Have a question, an idea, or a song to share?</h3>
          <p>Replace the sample email below in <code>src/data/siteConfig.ts</code> when you’re ready to receive messages.</p>
          <a className="button" href={`mailto:${siteConfig.email}`}><Mail /> {siteConfig.email}</a>
          <div className="social-links">
            {siteConfig.social.github ? <a href={siteConfig.social.github}><Code2 />GitHub<ArrowUpRight /></a> : <span aria-disabled="true"><Code2 />GitHub — add link</span>}
            {siteConfig.social.linkedin ? <a href={siteConfig.social.linkedin}><BriefcaseBusiness />LinkedIn<ArrowUpRight /></a> : <span aria-disabled="true"><BriefcaseBusiness />LinkedIn — add link</span>}
          </div>
        </div>
      </IllustratedScene>
      <footer>
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Drawn in code, grown with curiosity.</span>
        <a href="#home">Return to the entrance ↑</a>
      </footer>
    </SceneShell>
  );
}
