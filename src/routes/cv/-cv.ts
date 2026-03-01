import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LINKEDIN_URL,
  SITE_URL,
} from '~/lib/links'

export const cvData = {
  name: 'Dimitar Dulev',
  title: 'Senior Full-Stack Engineer',
  contact: {
    email: CONTACT_EMAIL,
    phone: CONTACT_PHONE,
    linkedin: LINKEDIN_URL,
    website: SITE_URL,
  },
  summary:
    'Senior Full-Stack Engineer with 7+ years building products at scale. Led frontend development and made core contributions to backend systems for applications serving millions of users, including checkout flows, search systems, and admin platforms. Strong product sense with focus on UI/UX, workflow automation, and shipping features that matter. Core stack: React, TypeScript, Node.js, PostgreSQL.',
  experience: [
    {
      company: 'The NOLD',
      subtitle: null,
      role: 'Frontend Lead · Full-Stack Engineer',
      location: 'Sofia',
      period: 'Oct 2023 — Jun 2025',
      description:
        'Led frontend development for a second-hand fashion P2P marketplace, collaborating closely with product on UI/UX decisions while also contributing to the Node.js API and admin backoffice.',
      highlights: [
        'Implemented the majority of frontend flows in the app, owning core user-facing features end-to-end.',
        'Migrated the codebase from JavaScript to TypeScript with end-to-end Zod validation, dramatically reducing bug rates and improving developer confidence.',
        'Moved state management from Redux to React Query, enabling faster feature development across the team.',
        'Redesigned checkout into a streamlined single-page flow with Stripe integration and guest checkout, reducing drop-off points and improving conversion.',
        'Built the backoffice from scratch using Next.js and shadcn/ui, prioritizing great DX and team dev velocity.',
        'Took ownership of UI/UX design, delivering rapid clickable prototypes that replaced a costly external design contractor — cutting iteration cycles from weeks to days.',
      ],
      tech: ['React', 'TypeScript', 'Next.js', 'Node.js', 'shadcn/ui', 'tRPC', 'Prisma', 'PostgreSQL', 'AWS', 'Stripe'],
    },
    {
      company: 'WOOM Health',
      subtitle: 'acquired by Apricity',
      role: 'Senior Frontend Engineer · Full-Stack',
      location: 'Sofia · Madrid',
      period: 'Mar 2021 — Jul 2023',
      description:
        'Senior frontend engineer on a fertility tracking hybrid app with 2 million users and 200k+ community threads. Owned the dev-design collaboration. Worked closely with the designer to improve the design system and raise UX standards across the app. Worked across the Ionic/Capacitor frontend, Node.js community microservice, and internal backoffice.',
      highlights: [
        'Led redesign of major app sections (News feed, Community, Calendar, My Fertility), measurably increasing community engagement.',
        'Replaced Redux with React Query + Jotai, simplifying state management and improving team velocity.',
        'Developed community forum microservice from scratch (Node.js/Koa/MongoDB/InversifyJS) with thread subscriptions, voting, and nested replies.',
        'Architected CI/CD pipeline with GitHub Actions for automated testing and app store deployment.',
        'Created internal backoffice (React/Material-UI) for marketing team to manage in-app advertising campaigns.',
        'Established frontend guidelines, REST API design standards, Sentry integration, and E2E testing.',
      ],
      tech: ['React', 'TypeScript', 'Ionic', 'Capacitor', 'Node.js', 'MongoDB', 'Jest', 'Cypress', 'AWS'],
    },
    {
      company: 'Scalefocus',
      subtitle: null,
      role: 'Full-Stack Developer',
      location: 'Sofia',
      period: 'Jun 2019 — Sep 2020',
      description:
        'Developed a cloud-based consent management platform for a major US healthcare insurance provider.',
      highlights: [
        'Created React control panel and event-driven serverless backend.',
        'Managed AWS infrastructure; collaborated remotely with US-based team.',
      ],
      tech: ['React', 'AWS Lambda', 'Serverless'],
    },
    {
      company: 'Centroida Software',
      subtitle: 'acquired by ScaleFocus',
      role: 'Backend Developer',
      location: 'Sofia',
      period: 'Jun 2018 — Apr 2019',
      description:
        'Contributed to a peer-to-peer science discovery platform built on Hyperledger Fabric.',
      highlights: [
        'Designed and implemented smart contracts (Golang) and set up blockchain infrastructure with Docker.',
        'Developed the Express.js API layer.',
      ],
      tech: ['Hyperledger', 'Golang', 'Express.js', 'Docker'],
    },
  ],
  sideProjects: [
    {
      id: 'stringpal',
      name: 'StringPal',
      tagline: 'Music Practice Platform',
      period: 'Oct 2025 — Present',
      description:
        'Built a practice platform for guitarists. Features an A-B looper for YouTube videos with real-time pitch shifting and custom illustrations. Includes metronome exercises with community sharing, practice routines with timers, and a rich text editor with AlphaTab guitar notation. Chrome extension has 150 weekly active users.',
      tech: ['TanStack Start', 'React', 'PostgreSQL', 'Drizzle ORM', 'Chrome Extension'],
    },
    {
      id: 'clipsbee',
      name: 'Clipsbee',
      tagline: 'AI Video Creation Platform',
      period: 'Mar 2024 — Aug 2025',
      description:
        'Built a platform enabling users to generate animated videos from text prompts, with a custom text-based video editor. Architected the rendering pipeline: LLM-powered script generation, phonetic transcription, lip-sync animation, and a custom 2D SVG scene renderer. Deployed production rendering with Remotion on AWS Lambda and Trigger.dev for job orchestration.',
      tech: ['TypeScript', 'React', 'TanStack Router', 'TanStack Query', 'Remotion', 'AWS Lambda', 'Lemon Squeezy', 'OpenAI/Anthropic'],
    },
  ],
  education: [
    {
      title: 'SoftUni Software Academy',
      detail: null,
      period: '2014 — 2015',
    },
    {
      title: 'Computer Science',
      detail: 'Sofia University "St. Kliment Ohridski"',
      period: '2016 — 2020',
    },
    {
      title: 'Teaching Assistant, Functional Programming',
      detail: 'Sofia University "St. Kliment Ohridski"',
      period: null,
    },
  ],
  personal: [
    'Outdoor activities — running and hiking.',
    'Geeking out about the JavaScript ecosystem, DX, and automations.',
    'Love building delightful apps.',
  ],
} as const

export type CvData = typeof cvData
export type Experience = (typeof cvData.experience)[number]
export type SideProject = (typeof cvData.sideProjects)[number]
export type Education = (typeof cvData.education)[number]
