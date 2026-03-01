import { PiPaperPlaneRightFill } from 'react-icons/pi'
import { ScanReveal } from '~/components/scan-reveal'
import { Button, buttonIconClass } from '~/components/ui/button'
import { CONTACT_EMAIL } from '~/lib/links'

export function Footer() {
  return (
    <ScanReveal>
      <footer className="bg-text py-9">
        <div className="max-w-[860px] mx-auto px-8 flex items-center justify-between gap-6 flex-wrap max-sm:flex-col">
          <div className="font-mono text-[0.82rem] text-lime font-medium">
            dulev.dev &middot; Sofia, Bulgaria
          </div>
          <Button variant="dark-lime" size="sm" asChild>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <PiPaperPlaneRightFill className={buttonIconClass} />Contact Me
            </a>
          </Button>
        </div>
      </footer>
    </ScanReveal>
  )
}
