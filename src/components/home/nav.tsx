import { Link } from '@tanstack/react-router'
import { PixelReveal } from '~/components/pixel-reveal'
import { siteContent } from '~/data/content'

export function Nav() {
  const { intro } = siteContent

  return (
    <PixelReveal>
      <nav className="flex items-center justify-between pt-9 pb-4.5 mb-4.5 max-sm:flex-col max-sm:gap-3 max-sm:items-start">
        <Link
          to="/"
          className="font-mono font-bold text-[1.15rem] tracking-[1px] text-text no-underline px-2.5 border-[3px] border-text bg-lime shadow-brutal transition-none hover:bg-text hover:text-lime hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          dulev.dev
        </Link>
        <div className="flex gap-3 items-center">
          <a
            href={intro.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.8rem] font-medium text-text no-underline py-1 px-3.5 border-[3px] border-text bg-card shadow-brutal transition-none hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            GitHub
          </a>
          <a
            href={intro.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.8rem] font-medium text-text no-underline py-1 px-3.5 border-[3px] border-text bg-card shadow-brutal transition-none hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
          <a
            href="/uses"
            className="font-mono text-[0.8rem] font-medium text-text no-underline py-1 px-3.5 border-[3px] border-text bg-card shadow-brutal transition-none hover:shadow-brutal-hover hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            /uses
          </a>
        </div>
      </nav>
    </PixelReveal>
  )
}
