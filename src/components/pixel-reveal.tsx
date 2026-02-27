import {
  useEffect,
  useState,
  useRef,
  useCallback,
  type ReactNode,
} from 'react'
import { Slot } from '@radix-ui/react-slot'

// Constants
export const PIXEL_COLS = 14
export const PIXEL_ROWS = 7
export const PIXEL_TOTAL = PIXEL_COLS * PIXEL_ROWS
export const PIXEL_MS = 4 // ms per pixel — 98 * 4 ≈ 400ms total
export const PIXEL_REVEAL_S = (PIXEL_TOTAL * PIXEL_MS) / 1000
export const ITEM_STAGGER = 0.05 // seconds between items in a section
export const SECTION_PAUSE = 0.15

// Hook
export function useRevealQueue() {
  const [slot, setSlot] = useState(0)
  const advancedRef = useRef(new Set<number>())

  const advance = useCallback(
    (fromSlot: number, itemCount: number, stagger: number = ITEM_STAGGER) => {
      if (advancedRef.current.has(fromSlot)) return
      advancedRef.current.add(fromSlot)
      const totalMs =
        ((itemCount - 1) * stagger + PIXEL_REVEAL_S + SECTION_PAUSE) * 1000
      setTimeout(() => {
        setSlot((prev) => Math.max(prev, fromSlot + 1))
      }, totalMs)
    },
    [],
  )

  return { slot, advance }
}

// Component
export function PixelReveal({
  revealed,
  delay = 0,
  children,
}: {
  revealed: boolean
  delay?: number
  children: ReactNode
}) {
  const [activeIdx, setActiveIdx] = useState(-1)

  useEffect(() => {
    if (!revealed) return

    let rafId: number
    let startTime: number | null = null

    const delayTimer = setTimeout(() => {
      const tick = (ts: number) => {
        if (startTime === null) startTime = ts
        const elapsed = ts - startTime
        const idx = Math.min(Math.floor(elapsed / PIXEL_MS), PIXEL_TOTAL)
        setActiveIdx(idx)
        if (idx < PIXEL_TOTAL) {
          rafId = requestAnimationFrame(tick)
        }
      }
      rafId = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(delayTimer)
      cancelAnimationFrame(rafId)
    }
  }, [revealed, delay])

  const done = activeIdx >= PIXEL_TOTAL

  // Clip-path polygon traces the L-shaped scan boundary
  let clipPath: string | undefined
  let edgeBandClipPath: string | undefined
  const BAND = 4 // percent — edge band width

  if (!revealed || activeIdx < 0) {
    clipPath = 'inset(0 100% 0 0)'
  } else if (done) {
    clipPath = undefined
  } else {
    const row = Math.floor(activeIdx / PIXEL_COLS)
    const col = activeIdx % PIXEL_COLS
    const rT = (row / PIXEL_ROWS) * 100
    const rB = ((row + 1) / PIXEL_ROWS) * 100
    const cR = ((col + 1) / PIXEL_COLS) * 100
    clipPath = `polygon(0% 0%,100% 0%,100% ${rT}%,${cR}% ${rT}%,${cR}% ${rB}%,0% ${rB}%)`

    // L-shaped band tracing the scan boundary edge
    const bT = Math.min(rT + BAND, 100)
    const bB = Math.min(rB + BAND, 100)
    const bR = Math.min(cR + BAND, 100)
    edgeBandClipPath = `polygon(100% ${rT}%,100% ${bT}%,${bR}% ${bT}%,${bR}% ${bB}%,0% ${bB}%,0% ${rB}%,${cR}% ${rB}%,${cR}% ${rT}%)`
  }

  const showEdge = !done && activeIdx >= 0 && revealed

  return (
    <div className="relative isolate">
      <Slot style={{ clipPath }}>
        {children}
      </Slot>
      {showEdge && (
        <div
          className="absolute inset-0 bg-orange pointer-events-none z-10"
          style={{ clipPath: edgeBandClipPath }}
        />
      )}
    </div>
  )
}
