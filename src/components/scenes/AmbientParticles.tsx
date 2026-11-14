import type { CSSProperties } from 'react';

export function AmbientParticles({ count = 12 }: { count?: number }) {
  return (
    <div className="ambient-particles" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <i
          key={index}
          style={{
            '--x': `${8 + ((index * 31) % 84)}%`,
            '--y': `${12 + ((index * 47) % 72)}%`,
            '--delay': `${(index % 7) * -0.8}s`,
            '--duration': `${5 + (index % 5)}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
