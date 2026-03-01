import { useRef, useCallback } from 'react'
import { useSetAtom, useAtomValue } from 'jotai'
import useRawSound from 'use-sound'
import { crtActiveAtom } from '~/components/crt-intro'
import { soundEnabledAtom, SOUNDS } from '~/lib/sounds'

const CLICK_THRESHOLD = 10
const RESET_DELAY_MS = 2000

type CrtEasterEgg = {
  handleMouseDown: () => void
  handleClick: (e: React.MouseEvent) => void
}

/**
 * Escalating-click easter egg: rapidly clicking the home logo 10 times
 * triggers the CRT scanline overlay. Each click plays a tick sound at
 * increasing pitch. The counter resets after 2 seconds of inactivity.
 */
export function useCrtEasterEgg(isHome: boolean): CrtEasterEgg {
  const setCrtActive = useSetAtom(crtActiveAtom)
  const soundEnabled = useAtomValue(soundEnabledAtom)

  const clickCount = useRef(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  const [playTick] = useRawSound(SOUNDS.tick, { soundEnabled, volume: 0.6 })
  const [playCrt] = useRawSound(SOUNDS.crt, { soundEnabled, volume: 0.6 })

  const handleMouseDown = useCallback(() => {
    if (!isHome) return

    clickCount.current += 1
    const count = clickCount.current

    playTick({ playbackRate: 0.7 + (count / CLICK_THRESHOLD) * 1.3 })

    if (count >= CLICK_THRESHOLD) {
      playCrt()
      setCrtActive(true)
      clickCount.current = 0
      clearTimeout(timeoutRef.current)
      return
    }

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      clickCount.current = 0
    }, RESET_DELAY_MS)
  }, [isHome, playTick, playCrt, setCrtActive])

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (isHome) e.preventDefault()
    },
    [isHome],
  )

  return { handleMouseDown, handleClick }
}
