import type { RefObject } from 'react'
import { siteContent } from '~/data/content'
import { SectionHeader } from './section-header'
import { InterestStamp } from './interest-stamp'

export function InterestsSection({
  sectionRef,
  activeSection,
}: {
  sectionRef: RefObject<HTMLElement | null>
  activeSection: string
}) {
  const { personal } = siteContent

  return (
    <section ref={sectionRef}>
      <SectionHeader
        number="SEC.02"
        title="Interests"
        active={activeSection === 'interests'}
      />

      <div className="neo-interests-wrap">
        <div className="neo-interests-grid">
          {personal.interests.map((interest, idx) => (
            <InterestStamp
              key={interest.label}
              interest={interest}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
