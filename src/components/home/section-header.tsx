import { PixelReveal } from '~/components/pixel-reveal'

export function SectionHeader({
  number,
  title,
  active,
}: {
  number: string
  title: string
  active: boolean
}) {
  return (
    <PixelReveal>
      <h2 className="font-mono font-bold text-[clamp(1.4rem,3.5vw,1.8rem)] text-text uppercase my-14 mb-7 flex items-center gap-3">
        <span className="font-mono font-bold text-[0.75rem] text-orange border-2 border-orange px-2 py-0.5 leading-none">
          {number}
        </span>
        {title}
        {active && <span className="neo-cursor" />}
      </h2>
    </PixelReveal>
  )
}
