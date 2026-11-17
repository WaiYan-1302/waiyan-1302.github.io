export type SceneName = 'hero' | 'overview' | 'workshop' | 'resonance-lake' | 'observatory';

export interface SceneLayerAsset {
  src: string;
  depth: number;
  className?: string;
}

export const sceneAssets: Record<SceneName, SceneLayerAsset[]> = {
  hero: [
    { src: '/assets/hero/layers/mountain_range.png', depth: 0.03, className: 'hero-layer hero-layer--mountains' },
    { src: '/assets/hero/layers/back_scene.png', depth: 0.08, className: 'hero-layer hero-layer--back-scene' },
    { src: '/assets/hero/layers/foreground.png', depth: 0.14, className: 'hero-layer hero-layer--foreground' },
    { src: '/assets/hero/layers/me_avatar.png', depth: 0.18, className: 'hero-layer hero-layer--avatar' },
  ],
  overview: [
    { src: '/assets/signal-garden/background.svg', depth: 0.06 },
    { src: '/assets/signal-garden/midground.svg', depth: 0.16 },
    { src: '/assets/signal-garden/foreground.svg', depth: 0.3 },
  ],
  workshop: [
    { src: '/assets/workshop/background.svg', depth: 0.05 },
    { src: '/assets/workshop/midground.svg', depth: 0.14 },
    { src: '/assets/workshop/foreground.svg', depth: 0.24 },
  ],
  'resonance-lake': [
    { src: '/assets/resonance-lake/background.svg', depth: 0.06 },
    { src: '/assets/resonance-lake/midground.svg', depth: 0.13 },
    { src: '/assets/resonance-lake/foreground.svg', depth: 0.26 },
  ],
  observatory: [
    { src: '/assets/observatory/background.svg', depth: 0.04 },
    { src: '/assets/observatory/midground.svg', depth: 0.12 },
    { src: '/assets/observatory/foreground.svg', depth: 0.22 },
  ],
};
