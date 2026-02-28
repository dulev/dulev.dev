import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from '~/lib/links'

export const siteContent = {
  intro: {
    name: 'Dimitar Dulev',
    tagline: 'fullstack dev & tinkerer.',
    bio: "7+ years professional experience building software. I like shipping side projects, breaking things, and learning by doing.",
    links: {
      github: GITHUB_URL,
      linkedin: LINKEDIN_URL,
      uses: '/uses',
      email: CONTACT_EMAIL,
    },
  },
  projects: [
    {
      name: 'StringPal',
      description:
        'Guitar practice platform — YouTube looper with pitch shifting, metronome, tabs, routines.',
      tech: [
        'TanStack Start',
        'React',
        'PostgreSQL',
        'Web Audio API',
        'Chrome Extension',
      ],
      url: 'https://stringpal.com',
      cvAnchor: 'stringpal',
    },
    {
      name: 'Clipsbee',
      description:
        'AI video creation platform — text to animated video with lip-sync, custom characters.',
      tech: [
        'Next.js',
        'Remotion',
        'AWS Lambda',
        'Trigger.dev',
        'ElevenLabs',
      ],
      url: 'https://clipsbee.com',
      cvAnchor: 'clipsbee',
    },
  ],
  personal: {
    interests: [
      { label: 'Guitar', icon: 'guitar' },
      { label: 'Running', icon: 'running' },
      { label: 'MTB', icon: 'bike' },
      { label: 'Mountains', icon: 'mountains' },
      { label: 'Linux / Raspberry Pi', icon: 'terminal' },
    ],
  },
} as const

export type SiteContent = typeof siteContent
export type Project = (typeof siteContent.projects)[number]
export type Interest = (typeof siteContent.personal.interests)[number]
