import type { RefObject } from 'react'
import { PixelReveal } from '~/components/pixel-reveal'

export function Footer({
  footerRef,
  revealed,
}: {
  footerRef: RefObject<HTMLDivElement | null>
  revealed: boolean
}) {
  return (
    <div ref={footerRef}>
      <PixelReveal revealed={revealed}>
        <footer className="mt-18 bg-text py-9">
          <div className="max-w-[860px] mx-auto px-8 flex items-center justify-between gap-6 flex-wrap max-sm:flex-col">
            <div className="font-mono text-[0.82rem] text-lime font-medium">
              dulev.dev &middot; Sofia, Bulgaria
            </div>
            <a
              href="mailto:dimitar@dulev.dev"
              className="font-mono text-[0.78rem] font-medium text-lime no-underline py-1.5 px-4 border-2 border-lime bg-transparent shadow-brutal-lime transition-none hover:shadow-[5px_5px_0_#C8FF00] hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>
        </footer>
      </PixelReveal>
    </div>
  )
}
