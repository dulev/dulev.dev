import { Link, useRouterState } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'motion/react'
import { PiArrowLeftFill, PiPaperPlaneRightFill } from 'react-icons/pi'
import { ScanReveal } from '~/components/scan-reveal'
import { SoundToggle } from '~/components/sound-provider'
import { Button, buttonIconClass } from '~/components/ui/button'
import { CONTACT_EMAIL } from '~/lib/links'
import { useTextScramble } from '~/hooks/use-text-scramble'

export function Nav() {
  const { display, scramble, pause } = useTextScramble('dulev.dev')
  const isHome = useRouterState({ select: (s) => s.location.pathname === '/' })

  return (
    <nav className="flex items-center justify-between pt-9 pb-4.5 mb-4.5">
      <ScanReveal>
        <Button variant="lime" asChild className="text-[1.15rem] tracking-[1px] font-bold px-2.5">
          <Link to="/" onMouseEnter={scramble} onMouseLeave={pause}>
            <AnimatePresence>
              {!isHome && (
                <motion.span
                  key="back-arrow"
                  initial={{ opacity: 0, x: -8, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: 'auto' }}
                  exit={{ opacity: 0, x: -8, width: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="inline-flex overflow-hidden"
                >
                  <PiArrowLeftFill className="mr-1" />
                </motion.span>
              )}
            </AnimatePresence>
            {display}
          </Link>
        </Button>
      </ScanReveal>
      <ScanReveal>
        <div className="flex gap-3 max-sm:gap-2 items-stretch">
          <Button asChild>
            <Link to="/uses">/uses</Link>
          </Button>
          <Button asChild>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Contact Me">
              <PiPaperPlaneRightFill className={`${buttonIconClass} max-sm:mr-0`} />
              <span className="max-sm:hidden">Contact Me</span>
            </a>
          </Button>
          <SoundToggle />
        </div>
      </ScanReveal>
    </nav>
  )
}
