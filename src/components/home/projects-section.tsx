import type { RefObject } from 'react'
import { ITEM_STAGGER } from '~/components/pixel-reveal'
import { siteContent } from '~/data/content'
import { SectionHeader } from './section-header'
import { ProjectCard } from './project-card'

export function ProjectsSection({
  sectionRef,
  revealed,
  activeSection,
}: {
  sectionRef: RefObject<HTMLElement | null>
  revealed: boolean
  activeSection: string
}) {
  const { projects } = siteContent

  return (
    <section ref={sectionRef}>
      <SectionHeader
        number="SEC.01"
        title="Projects"
        active={activeSection === 'projects'}
        revealed={revealed}
      />

      {projects.map((project, idx) => (
        <ProjectCard
          key={project.name}
          project={project}
          index={idx}
          revealed={revealed}
          delay={(idx + 1) * ITEM_STAGGER * 1000}
        />
      ))}
    </section>
  )
}
