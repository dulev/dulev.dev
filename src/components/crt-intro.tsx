import { useEffect } from 'react'
import { atom, useAtom, useAtomValue } from 'jotai'
import { AnimatePresence, motion } from 'motion/react'
import useRawSound from 'use-sound'
import { soundEnabledAtom, SOUNDS } from '~/lib/sounds'
import '~/styles/crt-intro.css'

export const crtActiveAtom = atom(false)

const AUTO_DISMISS_MS = 6000
const FADE_DURATION_MS = 600

export function CrtIntro() {
  const [active, setActive] = useAtom(crtActiveAtom)
  const soundEnabled = useAtomValue(soundEnabledAtom)
  const [playCrtOff, { sound: crtOffSound }] = useRawSound(SOUNDS.crt, {
    soundEnabled,
    volume: 0.5,
    playbackRate: 0.5,
  })

  useEffect(() => {
    if (!active) return

    const timeout = setTimeout(() => {
      playCrtOff()
      if (crtOffSound) crtOffSound.fade(0.5, 0, FADE_DURATION_MS)
      setActive(false)
    }, AUTO_DISMISS_MS)

    return () => clearTimeout(timeout)
  }, [active, setActive, playCrtOff, crtOffSound])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="crt-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="crt-screen">
            <div className="crt-rolling-bar" />
          </div>
          <div className="crt-bezel" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
