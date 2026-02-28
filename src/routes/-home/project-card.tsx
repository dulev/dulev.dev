import { Link } from '@tanstack/react-router'
import { ScanReveal } from '~/components/scan-reveal'
import { Button, ButtonExternalLinkIndicator } from '~/components/ui/button'
import type { Project } from '~/data/content'

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <ScanReveal>
      <div className="bg-card border-[3px] border-text shadow-brutal p-7 pb-6 mb-6 relative max-sm:px-4.5 max-sm:py-5.5 max-sm:pb-5">
        <span className="absolute top-3 right-4 font-mono font-bold text-[0.72rem] text-orange leading-none pointer-events-none tracking-[0.5px]">
          No.{String(index + 1).padStart(2, '0')}
        </span>

        <h3 className="font-mono font-bold text-[1.4rem] text-text uppercase m-0 mb-2">
          {project.name}
        </h3>
        <p className="font-sans text-[0.9rem] text-muted-light leading-[1.6] m-0 mb-4">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-1.5 m-0 mb-4.5 p-0 list-none">
          {project.tech.map((t) => (
            <li
              key={t}
              className="font-mono text-[0.7rem] font-medium tracking-[0.5px] py-0.5 px-2.5 border-2 border-text bg-lime text-text uppercase"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex gap-2.5 justify-end">
          <Button size="sm" asChild>
            <Link to="/cv" hash={project.cvAnchor}>CV Entry</Link>
          </Button>
          <Button variant="orange" size="sm" asChild className="relative font-bold">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <ButtonExternalLinkIndicator />
              Visit
            </a>
          </Button>
        </div>
      </div>
    </ScanReveal>
  )
}
