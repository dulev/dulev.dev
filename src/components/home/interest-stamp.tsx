import { PixelReveal } from '~/components/pixel-reveal'
import type { Interest } from '~/data/content'

const interestIcons: Record<string, string> = {
  guitar: '\u266A',
  running: '\u2192',
  bike: '\u25CB',
  mountains: '\u25B2',
  terminal: '>_',
}

export function InterestStamp({
  interest,
  index,
  revealed,
  delay,
}: {
  interest: Interest
  index: number
  revealed: boolean
  delay: number
}) {
  const isOdd = index % 2 === 0 // 0-indexed, so even index = odd child (1st, 3rd, etc.)

  return (
    <PixelReveal revealed={revealed} delay={delay}>
      <div className="bg-card border-[3px] border-text shadow-brutal-sm p-4.5 px-5.5 pb-3.5 text-center relative transition-none flex flex-col items-center justify-center hover:shadow-[5px_5px_0_#111] hover:-translate-x-0.5 hover:-translate-y-0.5 max-sm:px-4 max-sm:py-4 max-sm:pb-3">
        {/* Accent bar */}
        <span
          className={`block w-full h-1 absolute top-0 left-0 right-0 ${isOdd ? 'bg-lime' : 'bg-orange'}`}
        />
        {/* Denomination */}
        <span
          className={`font-mono font-bold text-[0.58rem] absolute top-2 right-2.5 tracking-[0.5px] ${isOdd ? 'text-[#8AB300]' : 'text-orange'}`}
        >
          No.{String(index + 1).padStart(2, '0')}
        </span>
        {/* Icon */}
        <span className="text-[1.2rem] block mb-1.5 text-text">
          {interestIcons[interest.icon] || '?'}
        </span>
        {/* Label */}
        <span className="font-mono text-[0.78rem] font-medium text-text">
          {interest.label}
        </span>
      </div>
    </PixelReveal>
  )
}
