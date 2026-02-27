import type { RefObject } from 'react'
import { PixelReveal } from '~/components/pixel-reveal'
import { siteContent } from '~/data/content'

export function Hero({
  revealed,
  heroRef,
}: {
  revealed: boolean
  heroRef: RefObject<HTMLElement | null>
}) {
  const { intro } = siteContent

  return (
    <PixelReveal revealed={revealed}>
      <header
        ref={heroRef}
        className="mb-14 relative bg-card border-[3px] border-text shadow-brutal p-9 pb-8 isolate max-sm:px-4.5 max-sm:py-7 max-sm:pb-6"
      >
        {/* Orange invert rectangle */}
        <div className="absolute top-7 right-7 w-[220px] h-[88px] bg-orange mix-blend-screen pointer-events-none z-[2]" />

        <h1 className="font-mono font-bold text-[clamp(2.8rem,7.5vw,4.5rem)] text-text leading-[1.05] m-0 mb-6 -tracking-[1px] relative z-[1] underline decoration-dashed decoration-lime underline-offset-[8px] decoration-[6px]">
          {intro.name}
        </h1>

        <span className="font-mono font-bold text-[1.15rem] uppercase tracking-[2px] text-orange leading-[1.4] block mt-5 mb-7">
          {intro.tagline}
        </span>

        <p className="font-sans text-base text-muted max-w-[520px] leading-[1.7] m-0 mb-7">
          {intro.bio}
        </p>

        <div className="flex flex-wrap gap-3 max-sm:gap-2">
          <a
            href={intro.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.82rem] font-medium text-text no-underline py-2 px-5 border-[3px] border-text bg-lime shadow-brutal transition-none hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            GitHub
          </a>
          <a
            href={intro.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.82rem] font-medium text-text no-underline py-2 px-5 border-[3px] border-text bg-orange shadow-brutal transition-none hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
          <a
            href="/uses"
            className="font-mono text-[0.82rem] font-medium text-text no-underline py-2 px-5 border-[3px] border-text bg-card shadow-brutal transition-none hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            /uses
          </a>
        </div>
      </header>
    </PixelReveal>
  )
}
