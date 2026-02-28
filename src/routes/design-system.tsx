import { createFileRoute, Link } from '@tanstack/react-router'
import {
  PiArrowLeftFill,
  PiSpeakerHighFill,
  PiGithubLogoFill,
  PiPaperPlaneRightFill,
  PiArrowUpRightFill,
} from 'react-icons/pi'
import { Button, buttonIconClass, ButtonExternalLinkIndicator } from '~/components/ui/button'

export const Route = createFileRoute('/design-system')({
  component: DesignSystemPage,
  head: () => ({
    meta: [{ title: 'Design System — dulev.dev' }],
  }),
})

const VARIANTS = ['default', 'lime', 'orange', 'dark', 'dark-lime', 'dark-orange'] as const
const SIZES = ['sm', 'default', 'lg', 'icon'] as const

function SectionTag({ label }: { label: string }) {
  return (
    <span className="font-mono font-bold text-xs text-orange border-2 border-orange px-2 py-0.5 leading-none uppercase tracking-[1px]">
      {label}
    </span>
  )
}

function SpecimenRow({
  label,
  dark,
  children,
}: {
  label: string
  dark?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={`p-6 border-b-2 border-dashed ${dark ? 'border-muted bg-text' : 'border-text/20 bg-bg'}`}
    >
      <div className="font-mono text-[0.7rem] font-bold uppercase tracking-[2px] mb-4 opacity-60"
        style={dark ? { color: '#C8FF00' } : undefined}
      >
        {label}
      </div>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </div>
  )
}

function DesignSystemPage() {
  return (
    <div className="neo-grid-bg bg-bg min-h-screen">
      <div className="max-w-[960px] mx-auto px-6 pt-8 pb-20 max-sm:px-4">
        {/* Nav */}
        <nav className="flex items-center justify-between mb-12">
          <Button variant="dark" size="sm" asChild>
            <Link to="/">
              <PiArrowLeftFill className={buttonIconClass} /> dulev.dev
            </Link>
          </Button>
          <span className="font-mono text-xs text-muted tracking-[2px] uppercase">
            Design System
          </span>
        </nav>

        {/* Header */}
        <header className="mb-14">
          <h1 className="font-mono font-bold text-[clamp(2rem,5vw,3.2rem)] text-text leading-[1.1] m-0 mb-4 uppercase">
            Component
            <br />
            <span className="underline decoration-lime decoration-[5px] underline-offset-[6px] decoration-dashed">
              Specimen
            </span>
          </h1>
          <p className="font-sans text-base text-muted max-w-[480px] leading-[1.7] m-0">
            Visual reference for the neo-brutalist button system. Every variant,
            size, and state.
          </p>
        </header>

        {/* Variants × Sizes Matrix */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <SectionTag label="01" />
            <h2 className="font-mono font-bold text-xl text-text uppercase m-0">
              Variants &times; Sizes
            </h2>
          </div>

          <div className="bg-card border-[3px] border-text shadow-brutal overflow-hidden">
            {VARIANTS.map((variant) => (
              <SpecimenRow
                key={variant}
                label={`variant="${variant}"`}
                dark={variant.startsWith('dark')}
              >
                {SIZES.map((size) => (
                  <Button key={size} variant={variant} size={size}>
                    {size === 'icon' ? (
                      <PiSpeakerHighFill size={18} />
                    ) : (
                      size
                    )}
                  </Button>
                ))}
              </SpecimenRow>
            ))}
          </div>
        </section>

        {/* Real-World Compositions */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <SectionTag label="02" />
            <h2 className="font-mono font-bold text-xl text-text uppercase m-0">
              Compositions
            </h2>
          </div>

          <div className="bg-card border-[3px] border-text shadow-brutal overflow-hidden">
            <SpecimenRow label="Hero CTA group">
              <Button variant="lime" size="lg" asChild>
                <a href="#">CV</a>
              </Button>
              <Button variant="orange" size="lg" className="relative">
                <ButtonExternalLinkIndicator />
                <PiGithubLogoFill className={buttonIconClass} />
                GitHub
              </Button>
              <Button size="lg" className="relative">
                <ButtonExternalLinkIndicator />
                <PiArrowUpRightFill className={buttonIconClass} />
                LinkedIn
              </Button>
            </SpecimenRow>

            <SpecimenRow label="Nav buttons">
              <Button asChild>
                <a href="#">/uses</a>
              </Button>
              <Button>
                <PiPaperPlaneRightFill className={buttonIconClass} />
                Contact Me
              </Button>
              <Button size="icon">
                <PiSpeakerHighFill size={18} />
              </Button>
            </SpecimenRow>

            <SpecimenRow label="Project card actions">
              <Button size="sm">CV Entry</Button>
              <Button variant="orange" size="sm" className="relative font-bold">
                <ButtonExternalLinkIndicator />
                Visit
              </Button>
            </SpecimenRow>

            <SpecimenRow label="Subpage back nav">
              <Button variant="dark" size="sm">
                <PiArrowLeftFill className={buttonIconClass} /> dulev.dev
              </Button>
              <Button variant="dark" size="sm">
                Save as PDF
              </Button>
            </SpecimenRow>

            <SpecimenRow label="Footer CTA" dark>
              <Button variant="dark-lime" size="sm">
                <PiPaperPlaneRightFill className={buttonIconClass} />
                Contact Me
              </Button>
            </SpecimenRow>
          </div>
        </section>

        {/* States */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <SectionTag label="03" />
            <h2 className="font-mono font-bold text-xl text-text uppercase m-0">
              States
            </h2>
          </div>

          <div className="bg-card border-[3px] border-text shadow-brutal overflow-hidden">
            <SpecimenRow label="Interactive states — hover & click to test">
              <Button variant="default">Hover me</Button>
              <Button variant="lime">Press me</Button>
              <Button variant="orange">Click me</Button>
            </SpecimenRow>

            <SpecimenRow label="Disabled">
              <Button variant="default" disabled>
                Default
              </Button>
              <Button variant="lime" disabled>
                Lime
              </Button>
              <Button variant="orange" disabled>
                Orange
              </Button>
              <Button variant="dark" disabled>
                Dark
              </Button>
            </SpecimenRow>
          </div>
        </section>

        {/* External Link Indicator */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <SectionTag label="04" />
            <h2 className="font-mono font-bold text-xl text-text uppercase m-0">
              External Link Indicator
            </h2>
          </div>

          <div className="bg-card border-[3px] border-text shadow-brutal overflow-hidden">
            <SpecimenRow label="ButtonExternalLinkIndicator — corner triangle for outgoing links">
              <Button size="lg" className="relative">
                <ButtonExternalLinkIndicator />
                With indicator
              </Button>
              <Button size="lg">Without indicator</Button>
            </SpecimenRow>
          </div>
        </section>

        {/* Token Reference */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <SectionTag label="05" />
            <h2 className="font-mono font-bold text-xl text-text uppercase m-0">
              Shadow Tokens
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs text-muted mb-3 uppercase tracking-wide">Sizes</p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  ['shadow-brutal-sm', 'shadow-brutal-sm'],
                  ['shadow-brutal', 'shadow-brutal'],
                  ['shadow-brutal-hover', 'shadow-brutal-hover'],
                ].map(([name, cls]) => (
                  <div key={name} className="flex flex-col items-center gap-3">
                    <div className={`w-20 h-20 bg-card border-3 border-text ${cls}`} />
                    <code className="font-mono text-[0.72rem] font-bold text-orange">{name}</code>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-muted mb-3 uppercase tracking-wide">Colors <span className="text-muted-light">(via --shadow-color)</span></p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  ['shadow-text', 'shadow-text'],
                  ['shadow-lime', 'shadow-lime'],
                  ['shadow-orange', 'shadow-orange'],
                ].map(([name, cls]) => (
                  <div key={name} className="flex flex-col items-center gap-3">
                    <div className={`w-20 h-20 bg-card border-3 border-text shadow-brutal ${cls}`} />
                    <code className="font-mono text-[0.72rem] font-bold text-orange">{name}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
