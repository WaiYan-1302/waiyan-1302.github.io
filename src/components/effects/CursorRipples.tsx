import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const RIPPLE_LIFETIME = 1500;
const MIN_DISTANCE = 26;
const MIN_INTERVAL = 85;

export function CursorRipples() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || !window.matchMedia('(pointer: fine)').matches) return;

    let lastX = -100;
    let lastY = -100;
    let lastTime = 0;

    const createRipple = (event: PointerEvent) => {
      const now = performance.now();
      const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);
      if (now - lastTime < MIN_INTERVAL || distance < MIN_DISTANCE) return;

      const container = containerRef.current;
      if (!container) return;

      const ripple = document.createElement('span');
      ripple.className = 'cursor-ripple';
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      ripple.style.setProperty('--ripple-tilt', `${Math.max(-10, Math.min(10, event.movementX * 0.55))}deg`);
      container.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), RIPPLE_LIFETIME);

      lastX = event.clientX;
      lastY = event.clientY;
      lastTime = now;
    };

    window.addEventListener('pointermove', createRipple, { passive: true });
    return () => window.removeEventListener('pointermove', createRipple);
  }, [reducedMotion]);

  return <div ref={containerRef} className="cursor-ripples" aria-hidden="true" />;
}
