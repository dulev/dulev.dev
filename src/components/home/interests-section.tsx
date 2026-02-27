import type { RefObject } from 'react'
import { ITEM_STAGGER } from '~/components/pixel-reveal'
import { siteContent } from '~/data/content'
import { SectionHeader } from './section-header'
import { InterestStamp } from './interest-stamp'

export function InterestsSection({
  sectionRef,
  revealed,
  activeSection,
}: {
  sectionRef: RefObject<HTMLElement | null>
  revealed: boolean
  activeSection: string
}) {
  const { personal } = siteContent

  return (
    <section ref={sectionRef}>
      <SectionHeader
        number="SEC.02"
        title="Interests"
        active={activeSection === 'interests'}
        revealed={revealed}
      />

      <div className="neo-interests-wrap">
        <div className="neo-interests-grid">
          {personal.interests.map((interest, idx) => (
            <InterestStamp
              key={interest.label}
              interest={interest}
              index={idx}
              revealed={revealed}
              delay={(idx + 1) * ITEM_STAGGER * 1000}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
