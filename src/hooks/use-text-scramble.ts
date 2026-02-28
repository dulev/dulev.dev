import { useState, useCallback, useEffect, useRef } from 'react'

const CHARS = '█▓▒░╔╗╚╝│─┌┐└┘ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

type TextScramble = {
  display: string
  scramble: () => void
  pause: () => void
}

export function useTextScramble(
  text: string,
  { interval = 40, settleDelay = 60 } = {},
): TextScramble {
  const [display, setDisplay] = useState(text)
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([])
  const pausedRef = useRef(false)
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout>>()

  function clearTimers(): void {
    timeoutsRef.current.forEach(clearTimeout)
    intervalsRef.current.forEach(clearInterval)
    timeoutsRef.current = []
    intervalsRef.current = []
  }

  const pause = useCallback(() => {
    pausedRef.current = true
    clearTimeout(pauseTimerRef.current)
    pauseTimerRef.current = setTimeout(() => {
      pausedRef.current = false
    }, 200)
  }, [])

  const scramble = useCallback(() => {
    if (pausedRef.current) return
    clearTimers()

    const letters = text.split('')

    letters.forEach((char, i) => {
      if (char === ' ') return

      const iv = setInterval(() => {
        setDisplay((prev) => {
          const next = prev.split('')
          next[i] = CHARS[Math.floor(Math.random() * CHARS.length)]
          return next.join('')
        })
      }, interval)
      intervalsRef.current.push(iv)

      const timer = setTimeout(() => {
        clearInterval(iv)
        setDisplay((prev) => {
          const next = prev.split('')
          next[i] = char
          return next.join('')
        })
      }, settleDelay * (i + 1))
      timeoutsRef.current.push(timer)
    })
  }, [text, interval, settleDelay])

  useEffect(() => clearTimers, [])

  return { display, scramble, pause }
}
