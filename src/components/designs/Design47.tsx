import { useEffect, useState, useRef } from 'react'
import { useInView } from 'motion/react'
import { useRevealQueue } from '~/components/pixel-reveal'
import { siteContent } from '~/data/content'
import { Nav } from '~/components/home/nav'
import { Hero } from '~/components/home/hero'
import { ProjectsSection } from '~/components/home/projects-section'
import { InterestsSection } from '~/components/home/interests-section'
import { Footer } from '~/components/home/footer'

export function Design47() {
  const [activeSection, setActiveSection] = useState<string>('projects')
  const heroRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const interestsRef = useRef<HTMLElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

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

  const { projects, personal } = siteContent

  // Reveal queue: 0=nav, 1=hero, 2=projects, 3=interests
  const { slot, advance } = useRevealQueue()

  const projectsInView = useInView(projectsRef, { once: true, amount: 0.05 })
  const interestsInView = useInView(interestsRef, { once: true, amount: 0.05 })
  const footerInView = useInView(footerRef, { once: true, amount: 0.05 })

  const navReady = slot >= 0
  const heroReady = slot >= 1
  const projectsReady = projectsInView && slot >= 2
  const interestsReady = interestsInView && slot >= 3

  useEffect(() => {
    if (navReady) advance(0, 1)
  }, [navReady, advance])
  useEffect(() => {
    if (heroReady) advance(1, 1)
  }, [heroReady, advance])
  useEffect(() => {
    if (projectsReady) advance(2, projects.length + 1)
  }, [projectsReady, advance, projects.length])
  useEffect(() => {
    if (interestsReady) advance(3, personal.interests.length + 1)
  }, [interestsReady, advance, personal.interests.length])

  return (
    <div className="font-mono min-h-screen m-0 p-0 bg-bg neo-grid-bg text-text leading-[1.6]">
      <div className="max-w-[860px] mx-auto px-8 max-sm:px-4.5">
        <Nav revealed={navReady} />
        <Hero revealed={heroReady} heroRef={heroRef} />
        <ProjectsSection
          sectionRef={projectsRef}
          revealed={projectsReady}
          activeSection={activeSection}
        />
        <InterestsSection
          sectionRef={interestsRef}
          revealed={interestsReady}
          activeSection={activeSection}
        />
      </div>
      <Footer footerRef={footerRef} revealed={footerInView} />
    </div>
  )
}
