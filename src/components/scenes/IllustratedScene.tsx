import type { CSSProperties, ReactNode } from 'react';
import type { SceneName } from '../../data/scenes';
import { sceneAssets } from '../../data/scenes';

interface IllustratedSceneProps {
  scene: SceneName;
  children?: ReactNode;
  className?: string;
}

export function IllustratedScene({ scene, children, className = '' }: IllustratedSceneProps) {
  return (
    <div className={`illustrated-scene illustrated-scene--${scene} ${className}`} data-scene={scene}>
      <div className="scene-art" aria-hidden="true">
        {sceneAssets[scene].map((layer, index) => (
          <img
            key={layer.src}
            className={`scene-layer scene-layer--${index} ${layer.className ?? ''}`}
            src={layer.src}
            alt=""
            draggable="false"
            style={{ '--depth': layer.depth } as CSSProperties}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
