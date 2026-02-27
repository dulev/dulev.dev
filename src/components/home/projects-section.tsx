import type { RefObject } from 'react'
import { siteContent } from '~/data/content'
import { SectionHeader } from './section-header'
import { ProjectCard } from './project-card'

export function ProjectsSection({
  sectionRef,
  activeSection,
}: {
  sectionRef: RefObject<HTMLElement | null>
  activeSection: string
}) {
  const { projects } = siteContent

  return (
    <section ref={sectionRef}>
      <SectionHeader
        number="SEC.01"
        title="Projects"
        active={activeSection === 'projects'}
      />

      {projects.map((project, idx) => (
        <ProjectCard
          key={project.name}
          project={project}
          index={idx}
        />
      ))}
    </section>
  )
}
