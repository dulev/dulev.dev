import { useEffect, useState, useRef } from 'react'
import { siteContent } from '~/data/content'
import { Hero } from '~/components/home/hero'
import { ProjectsSection } from '~/components/home/projects-section'
import { InterestsSection } from '~/components/home/interests-section'
import { Footer } from '~/components/home/footer'

export function Design47() {
  const [activeSection, setActiveSection] = useState<string>('projects')
  const projectsRef = useRef<HTMLElement>(null)
  const interestsRef = useRef<HTMLElement>(null)

  // Mouse proximity tracking for active section cursor
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const refs = [
        { id: 'projects', ref: projectsRef },
        { id: 'interests', ref: interestsRef },
      ]
      let closest = 'projects'
      let minDist = Infinity
      for (const s of refs) {
        const el = s.ref.current
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const centerY = rect.top + rect.height / 2
        const dist = Math.abs(e.clientY - centerY)
        if (dist < minDist) {
          minDist = dist
          closest = s.id
        }
      }
      setActiveSection(closest)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="font-mono min-h-screen m-0 p-0 bg-bg neo-grid-bg text-text leading-[1.6]">
      <div className="max-w-[860px] mx-auto px-8 max-sm:px-4.5">
        <Hero />
        <ProjectsSection
          sectionRef={projectsRef}
          activeSection={activeSection}
        />
        <InterestsSection
          sectionRef={interestsRef}
          activeSection={activeSection}
        />
      </div>
      <Footer />
    </div>
  )
}
