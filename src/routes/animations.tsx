import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef, type ReactNode } from 'react'

export const Route = createFileRoute('/animations')({
  component: AnimationsPage,
})

function AnimationsPage() {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap'
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.code === 'Space' &&
        !(
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement
        )
      ) {
        e.preventDefault()
        setAnimKey((k) => k + 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <style>{STYLES}</style>
      <div className="ap-root">
        <div className="ap-header">
          <h1 className="ap-title">Animation Lab</h1>
          <span className="ap-hint">
            Press <kbd>SPACE</kbd> to restart
          </span>
        </div>
        <div className="ap-grid" key={animKey}>
          <Box n={1} label="Wipe">
            <WipeAnim />
          </Box>
          <Box n={2} label="Glitch">
            <GlitchAnim />
          </Box>
          <Box n={3} label="Pixel Render">
            <PixelRenderAnim />
          </Box>
          <Box n={4} label="CRT Power-On">
            <CRTPowerOnAnim />
          </Box>
          <Box n={5} label="Scanline">
            <ScanlineAnim />
          </Box>
          <Box n={6} label="Teletext">
            <TeletextAnim />
          </Box>
          <Box n={7} label="Interlace">
            <InterlaceAnim />
          </Box>
          <Box n={8} label="Static">
            <StaticAnim />
          </Box>
          <Box n={9} label="Raster Bars">
            <RasterBarsAnim />
          </Box>
          <Box n={10} label="Stamp">
            <StampAnim />
          </Box>
          <Box n={11} label="Vertical Scan">
            <VerticalScanAnim />
          </Box>
          <Box n={12} label="Pixel Invert">
            <PixelInvertAnim />
          </Box>
          <Box n={13} label="Scan + Glitch">
            <ScanGlitchAnim />
          </Box>
          <Box n={14} label="Pixel + Glitch">
            <PixelGlitchAnim />
          </Box>
          <Box n={15} label="Wipe + Distort">
            <WipeDistortAnim />
          </Box>
        </div>
      </div>
    </>
  )
}

/* ── shared wrapper ── */

function Box({
  n,
  label,
  children,
}: {
  n: number
  label: string
  children: ReactNode
}) {
  return (
    <div className="ap-box">
      <span className="ap-box-num">No.{String(n).padStart(2, '0')}</span>
      {children}
      <div className="ap-box-label">{label}</div>
    </div>
  )
}

function Card({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: dark ? '#111' : '#C8FF00',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}
    >
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 700,
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          color: dark ? '#C8FF00' : '#111',
          textTransform: 'uppercase',
          letterSpacing: '3px',
        }}
      >
        {text}
      </div>
      <div style={{ display: 'flex', gap: 3 }}>
        {['#FF6B00', '#111', '#C8FF00', '#FF6B00', '#111'].map((c, i) => (
          <div
            key={i}
            style={{
              width: 14,
              height: 5,
              background: c,
              border:
                c === '#C8FF00' && !dark ? '1px solid #111' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  )
}

/* ── 1. WIPE ── */
function WipeAnim() {
  return (
    <div className="a-wipe" style={{ width: '100%', height: '100%' }}>
      <Card text="Wipe" />
    </div>
  )
}

/* ── 2. GLITCH ── */
function GlitchAnim() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: '#111',
        overflow: 'hidden',
      }}
    >
      <div className="a-glitch-1" style={{ position: 'absolute', inset: 0 }}>
        <Card text="Glitch" dark />
      </div>
      <div
        className="a-glitch-2"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <Card text="Glitch" dark />
      </div>
    </div>
  )
}

/* ── 3. PIXEL RENDER ── */
function PixelRenderAnim() {
  const cols = 14
  const rows = 7
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Card text="Pixels" />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: cols * rows }, (_, i) => {
          const row = Math.floor(i / cols)
          const col = i % cols
          const delay = 500 + (row * cols + col) * 16
          return (
            <div
              key={i}
              style={{
                background: '#FAFAF8',
                animation: `a-pixel-out 0.01s steps(1) ${delay}ms forwards`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

/* ── 4. CRT POWER-ON ── */
function CRTPowerOnAnim() {
  return (
    <div className="a-crt" style={{ width: '100%', height: '100%' }}>
      <Card text="CRT" dark />
    </div>
  )
}

/* ── 5. SCANLINE ── */
function ScanlineAnim() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: '#111',
      }}
    >
      <div className="a-scanline-content">
        <Card text="Scan" />
      </div>
      <div className="a-scanline-bar" />
    </div>
  )
}

/* ── 6. TELETEXT ── */
function TeletextAnim() {
  const text = 'TELETEXT'
  const chars = '█▓▒░╔╗╚╝│─┌┐└┘ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const [display, setDisplay] = useState<string[]>(() =>
    Array(text.length).fill('█'),
  )
  const [settled, setSettled] = useState<boolean[]>(() =>
    Array(text.length).fill(false),
  )

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    const intervals: ReturnType<typeof setInterval>[] = []

    text.split('').forEach((char, i) => {
      const settleTime = 500 + i * 180
      const interval = setInterval(() => {
        setDisplay((prev) => {
          const next = [...prev]
          next[i] = chars[Math.floor(Math.random() * chars.length)]
          return next
        })
      }, 60)
      intervals.push(interval)

      const timer = setTimeout(() => {
        clearInterval(interval)
        setDisplay((prev) => {
          const next = [...prev]
          next[i] = char
          return next
        })
        setSettled((prev) => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, settleTime)
      timers.push(timer)
    })

    return () => {
      timers.forEach(clearTimeout)
      intervals.forEach(clearInterval)
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 700,
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          letterSpacing: '3px',
          display: 'flex',
        }}
      >
        {display.map((char, i) => (
          <span
            key={i}
            style={{
              color: settled[i] ? '#C8FF00' : '#FF6B00',
              width: '1ch',
              textAlign: 'center',
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── 7. INTERLACE ── */
function InterlaceAnim() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: '#111',
      }}
    >
      <div
        className="a-interlace-even"
        style={{ position: 'absolute', inset: 0 }}
      >
        <Card text="Interlace" />
      </div>
      <div
        className="a-interlace-odd"
        style={{ position: 'absolute', inset: 0 }}
      >
        <Card text="Interlace" />
      </div>
    </div>
  )
}

/* ── 8. STATIC ── */
function StaticAnim() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const w = container.clientWidth
    const h = container.clientHeight
    canvas.width = w
    canvas.height = h

    let frame = 0
    const totalFrames = 40
    const interval = setInterval(() => {
      frame++
      if (frame >= totalFrames) {
        clearInterval(interval)
        canvas.style.opacity = '0'
        return
      }
      const imageData = ctx.createImageData(w, h)
      const d = imageData.data
      const progress = frame / totalFrames
      for (let i = 0; i < d.length; i += 4) {
        if (Math.random() < progress) {
          d[i + 3] = 0
        } else {
          const v = Math.random() > 0.5 ? 255 : 0
          d[i] = v
          d[i + 1] = v
          d[i + 2] = v
          d[i + 3] = 255
        }
      }
      ctx.putImageData(imageData, 0, 0)
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <Card text="Static" />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          transition: 'opacity 0.15s',
          imageRendering: 'pixelated',
        }}
      />
    </div>
  )
}

/* ── 9. RASTER BARS ── */
function RasterBarsAnim() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="a-raster-content">
        <Card text="Raster" />
      </div>
      <div className="a-raster-bars" />
    </div>
  )
}

/* ── 10. STAMP ── */
function StampAnim() {
  return (
    <div className="a-stamp" style={{ width: '100%', height: '100%' }}>
      <Card text="Stamp" />
    </div>
  )
}

/* ── 11. VERTICAL SCAN ── */
function VerticalScanAnim() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: '#111',
      }}
    >
      <div className="a-vscan-content">
        <Card text="V-Scan" />
      </div>
      <div className="a-vscan-bar" />
    </div>
  )
}

/* ── 12. PIXEL RENDER WITH INVERTED LEADING PIXEL ── */
function PixelInvertAnim() {
  const cols = 14
  const rows = 7
  const total = cols * rows
  const [activeIdx, setActiveIdx] = useState(-1)

  useEffect(() => {
    let idx = -1
    let intervalId: ReturnType<typeof setInterval> | null = null

    const timerId = setTimeout(() => {
      intervalId = setInterval(() => {
        idx++
        if (idx >= total) {
          if (intervalId) clearInterval(intervalId)
          setActiveIdx(total)
          return
        }
        setActiveIdx(idx)
      }, 18)
    }, 500)

    return () => {
      clearTimeout(timerId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Card text="Invert" />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: total }, (_, i) => {
          const isRevealed = i < activeIdx
          const isActive = i === activeIdx
          // Trail: the 2 pixels behind the active one glow orange
          const isTrail =
            !isActive && i >= activeIdx - 2 && i < activeIdx && activeIdx < total
          return (
            <div
              key={i}
              style={{
                background: isActive
                  ? '#111'
                  : isTrail
                    ? '#FF6B00'
                    : isRevealed
                      ? 'transparent'
                      : '#FAFAF8',
                boxShadow: isActive
                  ? 'inset 0 0 0 2px #FF6B00, 0 0 8px #FF6B00'
                  : 'none',
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

/* ── 13. SCAN + GLITCH COMBO ── */
function ScanGlitchAnim() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: '#111',
        overflow: 'hidden',
      }}
    >
      <div className="a-scanglitch-content">
        <Card text="Scn+Glt" />
      </div>
      <div className="a-scanglitch-bar" />
    </div>
  )
}

/* ── 14. PIXEL + GLITCH COMBO ── */
function PixelGlitchAnim() {
  const cols = 14
  const rows = 7
  return (
    <div
      className="a-pixglitch-wrap"
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <Card text="Pxl+Glt" />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: cols * rows }, (_, i) => {
          const row = Math.floor(i / cols)
          const col = i % cols
          const delay = 500 + (row * cols + col) * 16
          return (
            <div
              key={i}
              style={{
                background: '#FAFAF8',
                animation: `a-pixel-out 0.01s steps(1) ${delay}ms forwards`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

/* ── 15. WIPE + DISTORT (scan/glitch v2) ── */
function WipeDistortAnim() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: '#111',
        overflow: 'hidden',
      }}
    >
      <div className="a-wipedist-content">
        <Card text="Wipe+Dst" dark />
      </div>
    </div>
  )
}

/* ── STYLES ── */

const STYLES = `
  .ap-root {
    font-family: 'IBM Plex Mono', 'Courier New', monospace;
    min-height: 100vh;
    background-color: #FAFAF8;
    background-image:
      linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
    background-size: 16px 16px;
    padding: 28px 32px 32px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  .ap-header {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ap-title {
    font-weight: 700;
    font-size: 1.3rem;
    color: #111;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }

  .ap-hint {
    font-size: 0.72rem;
    color: #666;
  }

  .ap-hint kbd {
    background: #111;
    color: #C8FF00;
    padding: 2px 10px;
    font-weight: 700;
    font-family: 'IBM Plex Mono', monospace;
    border: 2px solid #111;
    box-shadow: 2px 2px 0 #111;
  }

  .ap-grid {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 14px;
    flex: 1;
    min-height: 0;
  }

  .ap-box {
    border: 3px solid #111;
    box-shadow: 4px 4px 0 #111;
    background: #fff;
    position: relative;
    overflow: hidden;
    min-height: 0;
  }

  .ap-box-num {
    position: absolute;
    top: 6px;
    right: 8px;
    font-weight: 700;
    font-size: 0.55rem;
    color: #FF6B00;
    letter-spacing: 0.5px;
    z-index: 20;
    pointer-events: none;
  }

  .ap-box-label {
    position: absolute;
    bottom: 6px;
    left: 8px;
    font-size: 0.55rem;
    font-weight: 700;
    color: #111;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: #C8FF00;
    padding: 1px 6px;
    border: 2px solid #111;
    z-index: 20;
    pointer-events: none;
  }

  /* ═══ 1. WIPE ═══ */
  .a-wipe {
    clip-path: inset(0 100% 0 0);
    animation: a-wipe 0.8s steps(8) 0.5s forwards;
  }
  @keyframes a-wipe {
    to { clip-path: inset(0 0 0 0); }
  }

  /* ═══ 2. GLITCH ═══ */
  .a-glitch-1 {
    opacity: 0;
    animation: a-glitch-1 1.5s steps(1) 0.3s forwards;
  }
  .a-glitch-2 {
    opacity: 0;
    animation: a-glitch-2 1.5s steps(1) 0.3s forwards;
  }
  @keyframes a-glitch-1 {
    0%  { opacity: 0; }
    5%  { opacity: 1; clip-path: inset(40% 0 20% 0); transform: translateX(-8px); }
    10% { clip-path: inset(10% 0 60% 0); transform: translateX(6px); }
    15% { clip-path: inset(70% 0 5% 0); transform: translateX(-4px); }
    20% { clip-path: inset(0); transform: translateX(0); }
    25% { clip-path: inset(80% 0 0 0); transform: translateX(10px); }
    30% { clip-path: inset(0 0 80% 0); transform: translateX(-6px); }
    35% { clip-path: inset(50% 0 30% 0); transform: translateX(4px); }
    40%, 100% { clip-path: inset(0); transform: translateX(0); opacity: 1; }
  }
  @keyframes a-glitch-2 {
    0%  { opacity: 0; }
    5%  { opacity: 0.6; clip-path: inset(20% 0 50% 0); transform: translateX(10px); }
    10% { clip-path: inset(50% 0 20% 0); transform: translateX(-8px); }
    15% { clip-path: inset(5% 0 70% 0); transform: translateX(6px); }
    20% { opacity: 0; clip-path: inset(0); transform: translateX(0); }
    25% { opacity: 0.6; clip-path: inset(0 0 60% 0); transform: translateX(-5px); }
    30% { clip-path: inset(60% 0 10% 0); transform: translateX(8px); }
    35% { clip-path: inset(30% 0 40% 0); transform: translateX(-3px); }
    40%, 100% { opacity: 0; clip-path: inset(0); transform: translateX(0); }
  }

  /* ═══ 3. PIXEL RENDER ═══ */
  @keyframes a-pixel-out {
    to { opacity: 0; }
  }

  /* ═══ 4. CRT POWER-ON ═══ */
  .a-crt {
    clip-path: inset(50% 10%);
    filter: brightness(3);
    animation: a-crt 1s steps(10) 0.5s forwards;
  }
  @keyframes a-crt {
    0%   { clip-path: inset(50% 10%); filter: brightness(3); }
    15%  { clip-path: inset(49% 5%); filter: brightness(5); }
    30%  { clip-path: inset(48% 0); filter: brightness(4); }
    45%  { clip-path: inset(30% 0); filter: brightness(2.5); }
    60%  { clip-path: inset(15% 0); filter: brightness(1.8); }
    80%  { clip-path: inset(5% 0); filter: brightness(1.3); }
    100% { clip-path: inset(0); filter: brightness(1); }
  }

  /* ═══ 5. SCANLINE ═══ */
  .a-scanline-content {
    width: 100%;
    height: 100%;
    clip-path: inset(0 0 100% 0);
    animation: a-scanline-reveal 1s steps(20) 0.5s forwards;
  }
  @keyframes a-scanline-reveal {
    to { clip-path: inset(0); }
  }
  .a-scanline-bar {
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    top: 0;
    background: #C8FF00;
    box-shadow: 0 0 8px #C8FF00, 0 0 20px rgba(200,255,0,0.5);
    opacity: 0;
    animation: a-scanline-bar 1s steps(20) 0.5s forwards;
    pointer-events: none;
  }
  @keyframes a-scanline-bar {
    0%  { top: 0%; opacity: 1; }
    95% { top: 100%; opacity: 1; }
    100%{ top: 100%; opacity: 0; }
  }

  /* ═══ 7. INTERLACE ═══ */
  .a-interlace-even {
    -webkit-mask-image: repeating-linear-gradient(
      0deg, black 0px, black 3px, transparent 3px, transparent 6px
    );
    mask-image: repeating-linear-gradient(
      0deg, black 0px, black 3px, transparent 3px, transparent 6px
    );
    opacity: 0;
    animation: a-fade-in 0.01s steps(1) 0.5s forwards;
  }
  .a-interlace-odd {
    -webkit-mask-image: repeating-linear-gradient(
      0deg, transparent 0px, transparent 3px, black 3px, black 6px
    );
    mask-image: repeating-linear-gradient(
      0deg, transparent 0px, transparent 3px, black 3px, black 6px
    );
    opacity: 0;
    animation: a-fade-in 0.01s steps(1) 0.9s forwards;
  }
  @keyframes a-fade-in {
    to { opacity: 1; }
  }

  /* ═══ 9. RASTER BARS ═══ */
  .a-raster-content {
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: a-fade-in 0.01s steps(1) 1s forwards;
  }
  .a-raster-bars {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    top: 0;
    background: repeating-linear-gradient(
      0deg,
      #FF6B00 0px, #FF6B00 8px,
      #C8FF00 8px, #C8FF00 16px,
      #111 16px, #111 24px,
      #FF6B00 24px, #FF6B00 32px,
      #C8FF00 32px, #C8FF00 40px
    );
    transform: translateY(-100%);
    animation: a-raster-sweep 1.2s steps(12) 0.5s forwards;
    pointer-events: none;
  }
  @keyframes a-raster-sweep {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }

  /* ═══ 10. STAMP ═══ */
  .a-stamp {
    opacity: 0;
    transform: scale(1.8) translateY(-60%);
    animation: a-stamp 0.5s steps(8) 0.5s forwards;
  }
  @keyframes a-stamp {
    0%   { opacity: 0; transform: scale(1.8) translateY(-60%); }
    25%  { opacity: 1; transform: scale(1.05) translateY(4%); }
    45%  { transform: scale(0.97) translateY(-2%); }
    65%  { transform: scale(1.02) translateY(1%); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }

  /* ═══ 11. VERTICAL SCAN ═══ */
  .a-vscan-content {
    width: 100%;
    height: 100%;
    clip-path: inset(0 100% 0 0);
    animation: a-vscan-reveal 1s steps(16) 0.5s forwards;
  }
  @keyframes a-vscan-reveal {
    to { clip-path: inset(0 0 0 0); }
  }
  .a-vscan-bar {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    left: 0;
    background: #FF6B00;
    box-shadow: 0 0 8px #FF6B00, 0 0 20px rgba(255,107,0,0.5);
    opacity: 0;
    animation: a-vscan-bar 1s steps(16) 0.5s forwards;
    pointer-events: none;
  }
  @keyframes a-vscan-bar {
    0%  { left: 0%; opacity: 1; }
    95% { left: 100%; opacity: 1; }
    100%{ left: 100%; opacity: 0; }
  }

  /* ═══ 13. SCAN + GLITCH ═══ */
  .a-scanglitch-content {
    width: 100%;
    height: 100%;
    clip-path: inset(0 0 100% 0);
    animation:
      a-scanline-reveal 1.2s steps(20) 0.5s forwards,
      a-scanglitch-jitter 1.2s steps(1) 0.5s forwards;
  }
  @keyframes a-scanglitch-jitter {
    0%, 14%   { transform: translateX(0); }
    15%       { transform: translateX(-8px); clip-path: inset(0 0 70% 0); }
    17%       { transform: translateX(10px); clip-path: inset(15% 0 55% 0); }
    19%, 34%  { transform: translateX(0); }
    35%       { transform: translateX(12px); clip-path: inset(20% 0 40% 0); }
    37%       { transform: translateX(-6px); clip-path: inset(30% 0 30% 0); }
    39%, 59%  { transform: translateX(0); }
    60%       { transform: translateX(-10px); clip-path: inset(40% 0 15% 0); }
    62%       { transform: translateX(7px); clip-path: inset(55% 0 5% 0); }
    64%, 79%  { transform: translateX(0); }
    80%       { transform: translateX(5px); clip-path: inset(60% 0 0 0); }
    82%, 100% { transform: translateX(0); clip-path: inset(0); }
  }
  .a-scanglitch-bar {
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    top: 0;
    background: #FF6B00;
    box-shadow: 0 0 8px #FF6B00, 0 0 20px rgba(255,107,0,0.5);
    opacity: 0;
    animation: a-scanline-bar 1.2s steps(20) 0.5s forwards;
    pointer-events: none;
  }

  /* ═══ 14. PIXEL + GLITCH ═══ */
  .a-pixglitch-wrap {
    animation: a-pixglitch-jitter 2.5s steps(1) forwards;
  }
  @keyframes a-pixglitch-jitter {
    0%, 19%   { transform: translateX(0); filter: none; }
    20%       { transform: translateX(-8px); filter: hue-rotate(90deg); }
    21%       { transform: translateX(12px); filter: hue-rotate(180deg); }
    22%       { transform: translateX(-5px); filter: saturate(3); }
    24%, 49%  { transform: translateX(0); filter: none; }
    50%       { transform: translateX(10px); filter: hue-rotate(270deg); }
    51%       { transform: translateX(-6px); filter: invert(1); }
    52%       { transform: translateX(8px); filter: hue-rotate(90deg); }
    54%, 74%  { transform: translateX(0); filter: none; }
    75%       { transform: translateX(-10px); filter: saturate(5); }
    76%       { transform: translateX(6px); filter: hue-rotate(180deg); }
    78%, 100% { transform: translateX(0); filter: none; }
  }

  /* ═══ 15. WIPE + DISTORT ═══ */
  .a-wipedist-content {
    width: 100%;
    height: 100%;
    clip-path: inset(0 100% 0 0);
    animation:
      a-wipedist-wipe 0.6s steps(8) 0.3s forwards,
      a-wipedist-glitch 0.9s steps(1) 1s forwards;
  }
  @keyframes a-wipedist-wipe {
    to { clip-path: inset(0); }
  }
  @keyframes a-wipedist-glitch {
    0%        { transform: translateX(0); filter: none; clip-path: inset(0); }
    8%        { transform: translateX(-14px); filter: hue-rotate(90deg); clip-path: inset(20% 0 40% 0); }
    16%       { transform: translateX(10px); filter: hue-rotate(200deg); clip-path: inset(60% 0 10% 0); }
    24%       { transform: translateX(-8px); filter: saturate(4) brightness(1.5); clip-path: inset(10% 0 60% 0); }
    32%       { transform: translateX(12px); filter: hue-rotate(300deg); clip-path: inset(45% 0 25% 0); }
    40%       { transform: translateX(-5px); filter: invert(1); clip-path: inset(70% 0 5% 0); }
    48%       { transform: translateX(6px); filter: saturate(3) hue-rotate(90deg); clip-path: inset(5% 0 70% 0); }
    56%       { transform: translateX(-3px); filter: brightness(2); clip-path: inset(30% 0 50% 0); }
    64%, 100% { transform: translateX(0); filter: none; clip-path: inset(0); }
  }

  @media (max-width: 900px) {
    .ap-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
    .ap-root {
      height: auto;
      overflow: auto;
    }
    .ap-box {
      height: 160px;
    }
  }

  @media (max-width: 550px) {
    .ap-root {
      padding: 16px;
    }
    .ap-grid {
      grid-template-columns: 1fr;
    }
    .ap-box {
      height: 180px;
    }
  }
`
