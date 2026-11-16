import { Code2, GraduationCap, Music2, Sparkles, UsersRound } from 'lucide-react';
import { SceneShell } from '../../components/layout/SceneShell';
import { AmbientParticles } from '../../components/scenes/AmbientParticles';
import { IllustratedScene } from '../../components/scenes/IllustratedScene';
import { siteConfig } from '../../data/siteConfig';

const overviewNotes = [
  {
    number: '01',
    icon: Sparkles,
    label: 'Curiosity',
    title: 'Ideas across disciplines',
    text: siteConfig.overview.introduction,
  },
  {
    number: '02',
    icon: GraduationCap,
    label: 'Education',
    title: 'Kyushu University',
    text: siteConfig.overview.education,
  },
  {
    number: '03',
    icon: UsersRound,
    label: 'Community',
    title: 'Connecting people',
    text: siteConfig.overview.community,
  },
] as const;

export function Overview() {
  return (
    <SceneShell
      id="overview"
      number="02"
      eyebrow="A field guide to Lin"
      title="Curious across disciplines. Energized by people."
      intro="My path is not a single straight line. It moves between code, creative making, community, and music — each one changing how I see the others."
      className="overview-section"
    >
      <IllustratedScene scene="overview" className="overview-scene">
        <AmbientParticles count={13} />
        <div className="overview-orbit" aria-hidden="true">
          <i /><i /><i />
          <span><Code2 /> computer science</span>
          <span><UsersRound /> social connection</span>
          <span><Music2 /> music</span>
        </div>
        <div className="overview-notes">
          {overviewNotes.map(({ number, icon: Icon, label, title, text }) => (
            <article className="overview-note reveal" key={number}>
              <span className="overview-note__number">{number}</span>
              <Icon aria-hidden="true" />
              <p className="eyebrow">{label}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="overview-caption" aria-hidden="true">four interests · one evolving practice</p>
      </IllustratedScene>
    </SceneShell>
  );
}
