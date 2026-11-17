export const siteConfig = {
  name: 'Lin',
  title: 'Welcome To My Sketch Book',
  subtitle: 'Ideas in Motion',
  intro: 'Exploring the space between technology, imagination, and creativity.',
  email: 'your-email@example.com',
  social: {
    github: '',
    linkedin: '',
  },
  interests: [
    'Computer science',
    'Creative projects',
    'Social networking',
    'Music & arrangement',
    'Interdisciplinary learning',
  ],
  overview: {
    introduction: 'An enthusiast in computer science, creative projects, social networking, and music.',
    education: 'Undergraduate student at Kyushu University, Faculty of Interdisciplinary Science and Innovation (共創学部).',
    community: 'Vice President of the Fukuoka International Students Association.',
  },
} as const;

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Overview', href: '#overview' },
  { label: 'Projects', href: '#projects' },
  { label: 'Music', href: '#music' },
  { label: 'About', href: '#about' },
] as const;
