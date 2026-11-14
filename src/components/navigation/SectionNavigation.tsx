import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation } from '../../data/siteConfig';

export function SectionNavigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-25% 0px -55%', threshold: [0.1, 0.4, 0.75] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="The Living Sketchbook, home">
        <svg viewBox="0 0 42 42" aria-hidden="true"><path d="M21 36C12 30 7 22 9 11c9 1 16 7 18 16M20 35c-1-13 5-23 15-27 2 12-3 23-15 27Z" /></svg>
        <span><strong>Lin</strong><small>The Living Sketchbook</small></span>
      </a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
        <span>{open ? 'Close' : 'Menu'}</span>{open ? <X /> : <Menu />}
      </button>
      <nav id="site-nav" className={open ? 'nav-open' : ''} aria-label="Primary navigation">
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} className={active === item.href.slice(1) ? 'active' : ''} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
