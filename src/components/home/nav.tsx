import { Link } from '@tanstack/react-router'
import { PiPaperPlaneRightFill } from 'react-icons/pi'
import { ScanReveal } from '~/components/scan-reveal'
import { SoundToggle } from '~/components/sound-provider'
import { Button, buttonIconClass } from '~/components/ui/button'
import { CONTACT_EMAIL } from '~/lib/links'
import { useTextScramble } from '~/hooks/use-text-scramble'

export function Nav() {
  const { display, scramble } = useTextScramble('dulev.dev')

  return (
    <nav className="flex items-center justify-between pt-9 pb-4.5 mb-4.5 max-sm:flex-col max-sm:gap-3 max-sm:items-start">
      <ScanReveal>
        <Button variant="lime" asChild className="text-[1.15rem] tracking-[1px] font-bold px-2.5">
          <Link to="/" onMouseEnter={scramble}>
            {display}
          </Link>
        </Button>
      </ScanReveal>
      <ScanReveal>
        <div className="flex gap-3 items-stretch">
          <Button asChild>
            <Link to="/uses">/uses</Link>
          </Button>
          <Button asChild>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <PiPaperPlaneRightFill className={buttonIconClass} />Contact Me
            </a>
          </Button>
          <SoundToggle />
        </div>
      </ScanReveal>
    </nav>
  )
}
