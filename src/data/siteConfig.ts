export const siteConfig = {
  name: 'Lin',
  title: 'The Living Sketchbook',
  subtitle: 'A Signal Garden',
  intro: 'Exploring the space between technology, imagination, and creativity.',
  email: 'your-email@example.com',
  social: {
    github: '',
    linkedin: '',
  },
  interests: [
    'Signal processing',
    'Brain–computer interfaces',
    'Creative coding',
    'Music & arrangement',
    'Visual storytelling',
  ],
} as const;

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Music', href: '#music' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;
