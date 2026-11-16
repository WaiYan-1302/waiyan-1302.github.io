export type ProjectStatus = 'Exploring' | 'In progress' | 'Concept' | 'Ongoing';

export interface Project {
  id: string;
  title: string;
  category: 'research' | 'code' | 'music';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  status: ProjectStatus;
  thumbnail: string;
  galleryImages: string[];
  githubUrl?: string;
  liveUrl?: string;
  challenges: string;
  outcomes: string;
}

export const projects: Project[] = [
  {
    id: 'signal-sensor-studies',
    title: 'Signal & Sensor Studies',
    category: 'research',
    shortDescription: 'A learning space for filtering, visualizing, and understanding signals from the physical world.',
    fullDescription: 'A work-in-progress collection of small experiments around sensors, noise, filtering, and visual interpretation. This entry is intentionally a placeholder for documented lab notes and future prototypes.',
    technologies: ['Python', 'Signal processing', 'Data visualization'],
    status: 'Exploring',
    thumbnail: '/assets/projects/signal-study.svg',
    galleryImages: ['/assets/projects/signal-study.svg'],
    challenges: 'Separating meaningful patterns from noise while keeping the process understandable.',
    outcomes: 'Placeholder — methods, findings, and source links will be added as experiments mature.',
  },
  {
    id: 'electronics-explorations',
    title: 'Electronics Explorations',
    category: 'research',
    shortDescription: 'Small sensor, circuit, and embedded-system studies documented as field notes.',
    fullDescription: 'An evolving set of hands-on electronics studies: reading sensors, shaping signals, and connecting physical input to expressive digital output.',
    technologies: ['Microcontrollers', 'Sensors', 'Circuit design'],
    status: 'Ongoing',
    thumbnail: '/assets/projects/circuit-bloom.svg',
    galleryImages: ['/assets/projects/circuit-bloom.svg'],
    challenges: 'Designing reliable prototypes while preserving room for playful discovery.',
    outcomes: 'Placeholder — future build logs will collect schematics, measurements, and reflections.',
  },
  {
    id: 'lingoloop',
    title: 'Lingoloop',
    category: 'code',
    shortDescription: 'A language-learning application shaped around practice loops and gentle momentum.',
    fullDescription: 'An editable showcase entry for Lingoloop. Add the real product story, features, architecture, screenshots, and development reflections here when ready.',
    technologies: ['React', 'TypeScript', 'Product design'],
    status: 'In progress',
    thumbnail: '/assets/projects/lingoloop.svg',
    galleryImages: ['/assets/projects/lingoloop.svg'],
    challenges: 'Turning repetition into a motivating and readable learning rhythm.',
    outcomes: 'Placeholder — replace with verified milestones and links when the project is public.',
  },
  {
    id: 'creative-code-studies',
    title: 'Creative Code Studies',
    category: 'code',
    shortDescription: 'Generative sketches where motion, systems, and illustration meet.',
    fullDescription: 'A shelf for browser experiments: procedural forms, interactive drawings, motion studies, and small tools for thinking visually.',
    technologies: ['JavaScript', 'SVG', 'Canvas'],
    status: 'Ongoing',
    thumbnail: '/assets/projects/code-sketch.svg',
    galleryImages: ['/assets/projects/code-sketch.svg'],
    challenges: 'Keeping experiments technically curious without losing visual clarity.',
    outcomes: 'A growing practice of building quickly, observing carefully, and refining what feels alive.',
  },
  {
    id: 'voice-and-harmony',
    title: 'Voice & Harmony',
    category: 'music',
    shortDescription: 'A space for singing, a cappella practice, and arrangement sketches.',
    fullDescription: 'A future archive for performance notes, vocal studies, and arrangements. No audio plays automatically; recordings can be linked here when ready.',
    technologies: ['Voice', 'Arrangement', 'A cappella'],
    status: 'Ongoing',
    thumbnail: '/assets/projects/harmony.svg',
    galleryImages: ['/assets/projects/harmony.svg'],
    challenges: 'Finding balance between individual expression and ensemble texture.',
    outcomes: 'Placeholder — add selected recordings and verified performance notes later.',
  },
  {
    id: 'guitar-audio-sketches',
    title: 'Guitar & Audio Sketches',
    category: 'music',
    shortDescription: 'Small arrangements and creative audio experiments in progress.',
    fullDescription: 'A quiet corner for guitar ideas, arrangement fragments, and experiments that connect sound with visual or interactive systems.',
    technologies: ['Guitar', 'Audio', 'Creative technology'],
    status: 'Exploring',
    thumbnail: '/assets/projects/audio-ripple.svg',
    galleryImages: ['/assets/projects/audio-ripple.svg'],
    challenges: 'Giving unfinished musical ideas a useful, welcoming place to grow.',
    outcomes: 'Placeholder — this entry is ready for clips, notation, and process notes.',
  },
];

export const projectsByCategory = (category: Project['category']) =>
  projects.filter((project) => project.category === category);
